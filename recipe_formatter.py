import os
import json
import re
from typing import Dict, List, Tuple

class RecipeParser:
    SPECIAL_FLUIDS = {
        'water': 'minecraft:water',
        'lava': 'minecraft:lava'
    }

    @staticmethod
    def clean_name(name: str) -> str:
        """Convert 'namespace:item_name' to 'Item Name'"""
        if ':' in name:
            name = name.split(':')[1]
        return ' '.join(word.capitalize() for word in name.replace('_', ' ').split())

    @staticmethod
    def parse_item(item_str: str) -> tuple:
        """Parse both Item.of() and direct string items"""
        item_of_pattern = r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)'
        direct_pattern = r'[\'"]([^\'"]+)[\'"]'
        
        if 'Item.of' in item_str:
            match = re.search(item_of_pattern, item_str)
            if match:
                return (RecipeParser.clean_name(match.group(1)), int(match.group(3) if match.group(3) else 1))
        else:
            match = re.search(direct_pattern, item_str)
            if match:
                return (RecipeParser.clean_name(match.group(1)), 1)
        return None

    @staticmethod
    def parse_fluid(fluid_str: str) -> tuple:
        """Parse both Fluid.of() and special fluid cases"""
        if 'Fluid.of' in fluid_str:
            match = re.search(r'Fluid\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', fluid_str)
            if match:
                return (RecipeParser.clean_name(match.group(1)), int(match.group(3) if match.group(3) else 1))
        else:
            for special_fluid in ['water', 'lava']:
                if f'Fluid.{special_fluid}' in fluid_str:
                    amount = re.search(r'Fluid\.' + special_fluid + r'\((\d+)\)', fluid_str)
                    return (RecipeParser.SPECIAL_FLUIDS[special_fluid], 
                        int(amount.group(1)) if amount else 1)
        return None

    @staticmethod
    def get_main_output(recipe_data: str) -> str:
        """Extract the main output item name without amounts or chances"""
        output_pattern = r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*\d+)?\)(\.withChance\([0-9.]+\))?'
        match = re.search(output_pattern, recipe_data)
        if match:
            return RecipeParser.clean_name(match.group(1))
        return "Unknown Product"

    @staticmethod
    def clean_amount(item_str: str) -> str:
        """Remove amounts from item/fluid strings"""
        return re.sub(r'^\d+x\s*|\d+mb\s*', '', item_str)

    @staticmethod
    def extract_recipe_details(content: str) -> Dict:
        recipes = []
        
        # Define regex patterns for different recipe types
        patterns = {
            'mixing': r'create\.mixing\((.*?)\)',
            'filling': r'createFilling\((.*?)\)',
            'pressing': r'createPressing\((.*?)\)',
            'crushing': r'create\.crushing\((.*?)\)',
            'sequence': r'sequenced_assembly\((.*?)\)',
            'pressurizing': r'pressurizing\((.*?)\)',
            'deploying': r'createDeploying\((.*?)\)',
            'compacting': r'create\.compacting\((.*?)\)',
            'distillation': r'tfmg\.distillation\((.*?)\)',
            'vacuumizing': r'vacuumizing\((.*?)\)'
        }
        
        for recipe_type, pattern in patterns.items():
            matches = re.finditer(pattern, content, re.DOTALL)
            for match in matches:
                recipe_data = match.group(1)
                recipe = {
                    'type': recipe_type,
                    'title': RecipeParser.get_main_output(recipe_data),
                    'inputs': [],
                    'outputs': [],
                    'fluids': [],
                    'conditions': []
                }
                
                # Parse inputs with clean names
                for item_match in re.finditer(r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', recipe_data):
                    if '.withChance' not in item_match.group(0):
                        name = RecipeParser.clean_name(item_match.group(1))
                        recipe['inputs'].append(name)
                
                # Parse direct string inputs
                for direct_match in re.finditer(r'[\'"]([^\'"]+)[\'"]', recipe_data):
                    if not any(x in direct_match.group(0) for x in ['Item.of', 'Fluid.of', 'Fluid.water', 'Fluid.lava']):
                        name = RecipeParser.clean_name(direct_match.group(1))
                        recipe['inputs'].append(name)
                
                # Parse fluids with clean names
                for fluid_match in re.finditer(r'Fluid\.(of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)|water\((\d+)\)|lava\((\d+)\))', recipe_data):
                    if fluid_match.group(2):  # Fluid.of case
                        name = RecipeParser.clean_name(fluid_match.group(2))
                    else:  # Special fluid case
                        name = 'Water' if 'water' in fluid_match.group(0) else 'Lava'
                    recipe['fluids'].append(name)
                
                # Parse outputs with clean names
                output_pattern = r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)\.withChance\(([0-9.]+)\)'
                outputs = re.finditer(output_pattern, content)
                for output in outputs:
                    name = RecipeParser.clean_name(output.group(1))
                    chance = float(output.group(4)) * 100
                    recipe['outputs'].append(f"{name} ({chance}%)")
                
                recipes.append(recipe)
        
        return recipes

    @staticmethod
    def parse_recipe(content: str) -> Dict:
        recipe = {
            'type': '',
            'inputs': set(),
            'fluids': [],
            'outputs': [],
            'sequence_steps': []
        }

        if 'sequenced_assembly' in content:
            recipe['type'] = 'Sequence'
            # Get base input
            base_input_match = re.search(r'assembly\([^,]+,\s*[\'"]([^\'"]+)[\'"]', content)
            if base_input_match:
                base_name = base_input_match.group(1).split(':')[-1].replace('_', ' ').title()
                recipe['inputs'].add(base_name)

            # Get final output
            output_match = re.search(r'assembly\(\s*[\'"]([^\'"]+)[\'"]', content)
            if (output_match):
                name = output_match.group(1).split(':')[-1].replace('_', ' ').title()
                recipe['outputs'].append({
                    'name': name,
                    'amount': 1,
                    'chance': 1.0
                })

            # Parse sequence steps
            steps_section = re.search(r'assembly\([^[]*\[(.*?)\]', content, re.DOTALL)
            if steps_section:
                steps = steps_section.group(1).split(',\n')
                for step in steps:
                    if 'createDeploying' in step:
                        # Parse deploy step inputs
                        deploy_match = re.search(r'createDeploying[^[]*\[([^\]]+)\]', step)
                        if deploy_match:
                            item = re.search(r'[\'"]([^\'"]+)[\'"]', deploy_match.group(1))
                            if item:
                                name = item.group(1).split(':')[-1].replace('_', ' ').title()
                                recipe['sequence_steps'].append(('Deploy', name))
                                recipe['inputs'].add(name)
                    elif 'createFilling' in step:
                        # Parse fill step fluids
                        fill_match = re.search(r'Fluid\.(?:of\([\'"]([^\'"]+)[\'"]\s*,\s*(\d+)\)|water\((\d+)\)|lava\((\d+)\))', step)
                        if fill_match:
                            if fill_match.group(1):  # Fluid.of case
                                name = fill_match.group(1).split(':')[-1].replace('_', ' ').title()
                                amount = fill_match.group(2)
                            else:  # water/lava case
                                name = 'Water' if 'water' in step else 'Lava'
                                amount = fill_match.group(3) or fill_match.group(4)
                            recipe['sequence_steps'].append(('Fill', f"{amount}mb {name}"))
                            recipe['fluids'].append(f"{amount}mb {name}")
                    elif 'createPressing' in step:
                        recipe['sequence_steps'].append(('Press', None))
                    elif 'createCutting' in step:
                        recipe['sequence_steps'].append(('Cut', None))

            recipe['inputs'] = sorted(list(recipe['inputs']))
            return recipe

        # Get recipe type first
        if 'createFilling' in content:
            recipe['type'] = 'Fill'
        elif 'pressurizing' in content:
            recipe['type'] = 'Pressurize'
        elif 'create.mixing' in content:
            recipe['type'] = 'Mix'
        elif 'create.crushing' in content:
            recipe['type'] = 'Crush'
        elif 'tfmg.distillation' in content:
            recipe['type'] = 'Distill'
        elif 'vacuumizing' in content:
            recipe['type'] = 'Vacuum'
        elif 'create.compacting' in content:
            recipe['type'] = 'Compact'

        # Handle crushing recipes specially
        if 'create.crushing' in content:
            recipe['type'] = 'Crush'
            # Look for the output array pattern
            output_match = re.search(r'crushing\(\s*\[(.*?)\]', content, re.DOTALL)
            if output_match:
                outputs_section = output_match.group(1)
                # Parse each output in the array
                for out_match in re.finditer(r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)(\.withChance\(([0-9.]+)\))?', outputs_section):
                    name = out_match.group(1).split(':')[-1].replace('_', ' ').title()
                    amount = out_match.group(3) or '1'
                    chance = float(out_match.group(5)) if out_match.group(5) else 1.0
                    # Prefix a "C" to the output name so that when the mermaid diagram is created,
                    # each output arrow will start from the process node letter ("C")
                    recipe['outputs'].append({
                    'name': f"{name}",
                    'amount': int(amount),
                    'chance': chance
                    })

            # Parse single input after the output array
            input_match = re.search(r'crushing\(\s*\[.*?\],\s*Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', content, re.DOTALL)
            if input_match:
                name = input_match.group(1)
                if not name.startswith('#'):
                    clean_name = name.split(':')[-1].replace('_', ' ').title()
                    amount = input_match.group(3) or '1'
                    if int(amount) > 1:
                        recipe['inputs'].add(f"{amount}x {clean_name}")
                    else:
                        recipe['inputs'].add(clean_name)

            # Set the process node label to "C" for use in the mermaid diagram
            recipe['process_node'] = recipe['type'][0]
            recipe['inputs'] = sorted(list(recipe['inputs']))
            return recipe

        # Handle distillation recipes specially
        if 'tfmg.distillation' in content:
            recipe['type'] = 'Distill'
            # Look for input fluid first
            input_match = re.search(r'distillation\(\s*Fluid\.of\([\'"]([^\'"]+)[\'"]\s*,\s*(\d+)\)', content)
            if input_match:
                name = input_match.group(1).split(':')[-1].replace('_', ' ').title()
                amount = input_match.group(2)
                recipe['inputs'].add(f"{amount}mb {name}")
            
            # Then parse output fluids array
            output_match = re.search(r'distillation\([^[]*\[(.*?)\]', content, re.DOTALL)
            if output_match:
                outputs_section = output_match.group(1)
                for fluid_match in re.finditer(r'Fluid\.(?:of\([\'"]([^\'"]+)[\'"]\s*,\s*(\d+)\)|water\((\d+)\))', outputs_section):
                    if fluid_match.group(1):  # Fluid.of case
                        name = fluid_match.group(1).split(':')[-1].replace('_', ' ').title()
                        amount = fluid_match.group(2)
                    else:  # water case
                        name = 'Water'
                        amount = fluid_match.group(3)
                    recipe['outputs'].append({
                        'name': f"{name}",
                        'amount': int(amount),
                        'chance': 1.0
                })

            recipe['inputs'] = sorted(list(recipe['inputs']))
            return recipe

        # Handle pressurizing recipes specially
        if 'pressurizing' in content:
            recipe['type'] = 'Pressurize'
            output_items = set()  # Initialize output tracking set
            
            # Look for output array or single output - expanded pattern to catch all variants
            output_match = re.search(r'pressurizing\(\s*(?:\[([^\]]+)\]|(?:Item\.of|Fluid\.of)\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)|[\'"]([^\'"]+)[\'"])', content)
            if output_match:
                if output_match.group(1):  # Array of outputs
                    outputs_section = output_match.group(1)
                    # Parse each output in array
                    for out_match in re.finditer(r'(?:Item\.of|Fluid\.of)\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', outputs_section):
                        name = out_match.group(1).split(':')[-1].replace('_', ' ').title()
                        amount = out_match.group(3) or '1'
                        recipe['outputs'].append({
                            'name': name,
                            'amount': int(amount),
                            'chance': 1.0
                        })
                        output_items.add(out_match.group(1))
                else:  # Single output
                    name = output_match.group(2) or output_match.group(5)
                    if name:
                        name = name.split(':')[-1].replace('_', ' ').title()
                        amount = output_match.group(4) or '1'
                        recipe['outputs'].append({
                            'name': name,
                            'amount': int(amount),
                            'chance': 1.0
                        })
                        output_items.add(output_match.group(2) or output_match.group(5))

                # Parse inputs after outputs
                input_section = content[output_match.end():]
            else:
                # If no output match found, try to parse just inputs
                input_section = content[content.find('(') + 1:]

            # Parse inputs normally
            for match in re.finditer(r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', input_section):
                name = match.group(1)
                if name not in output_items:
                    if name.startswith('#'):
                        recipe['inputs'].add(name)
                    else:
                        clean_name = name.split(':')[-1].replace('_', ' ').title()
                        amount = match.group(3) or '1'
                        if int(amount) > 1:
                            recipe['inputs'].add(f"{amount}x {clean_name}")
                        else:
                            recipe['inputs'].add(clean_name)

                # Parse fluid inputs
                for fluid_match in re.finditer(r'Fluid\.(?:of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)|water\((\d+)\)|lava\((\d+)\))', input_section):
                    if fluid_match.group(1):  # Fluid.of case
                        name = fluid_match.group(1).split(':')[-1].replace('_', ' ').title()
                        amount = fluid_match.group(3) or '1000'
                    else:  # water/lava case
                        name = 'Water' if 'water' in fluid_match.group(0) else 'Lava'
                        amount = fluid_match.group(4) or fluid_match.group(5) or '1000'
                    recipe['fluids'].append(f"{amount}mb {name}")

            recipe['inputs'] = sorted(list(recipe['inputs']))
            return recipe

        # Handle filling recipes specially
        if 'createFilling' in content:
            recipe['type'] = 'Fill'
            # Extract single output item or fluid
            match = re.search(r'createFilling\([\'"]([^\'"]+)[\'"]', content)
            if match:
                name = match.group(1).split(':')[-1].replace('_', ' ').title()
                recipe['outputs'].append({
                    'name': name,
                    'amount': 1,
                    'chance': 1.0
                })

        # Handle mixing recipes specially
        elif 'create.mixing' in content:
            recipe['type'] = 'Mix'
            # Look for either Item.of or Fluid.of output
            match = re.search(r'mixing\(\s*(?:Item\.of|Fluid\.of)\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', content)
            if match:
                name = match.group(1).split(':')[-1].replace('_', ' ').title()
                amount = match.group(3) or '1'
                # Add 'mb' suffix for fluid outputs
                if 'Fluid.of' in content[:match.start()]:
                    name = f"{amount}mb {name}"
                recipe['outputs'].append({
                    'name': name,
                    'amount': int(amount),
                    'chance': 1.0
                })

        # Handle vacuum recipes specially
        elif 'vacuumizing' in content:
            recipe['type'] = 'Vacuum'
            # Parse output array first
            output_array_match = re.search(r'vacuumizing\(\s*\[([^\]]+)\]', content)
            if output_array_match:
                outputs_section = output_array_match.group(1)
                # Parse each output
                for out_match in re.finditer(r'Fluid\.(?:of\([\'"]([^\'"]+)[\'"]\s*,\s*(\d+)\)|water\((\d+)\))', outputs_section):
                    if out_match.group(1):  # Fluid.of case
                        name = out_match.group(1).split(':')[-1].replace('_', ' ').title()
                        amount = out_match.group(2)
                    else:  # water case
                        name = 'Water'
                        amount = out_match.group(3)
                    recipe['outputs'].append({
                        'name': name,
                        'amount': int(amount),
                        'chance': 1.0
                    })
            
            # Parse input array
            input_array_match = re.search(r'vacuumizing\([^,]+,\s*\[([^\]]+)\]', content)
            if input_array_match:
                inputs_section = input_array_match.group(1)
                # Parse item inputs
                for item_match in re.finditer(r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', inputs_section):
                    name = item_match.group(1).split(':')[-1].replace('_', ' ').title()
                    amount = item_match.group(3) or '1'
                    if int(amount) > 1:
                        recipe['inputs'].add(f"{amount}x {name}")
                    else:
                        recipe['inputs'].add(name)
                # Parse fluid inputs
                for fluid_match in re.finditer(r'Fluid\.(?:of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)|water\((\d+)\)|lava\((\d+)\))', inputs_section):
                    if fluid_match.group(1):  # Fluid.of case
                        name = fluid_match.group(1).split(':')[-1].replace('_', ' ').title()
                        amount = fluid_match.group(2)
                    else:  # water/lava case
                        name = 'Water' if 'water' in fluid_match.group(0) else 'Lava'
                        amount = fluid_match.group(3) or fluid_match.group(4)
                    recipe['fluids'].append(f"{amount}mb {name}")

        # Handle compacting recipes specially
        elif 'create.compacting' in content:
            recipe['type'] = 'Compact'
            
            # Look for the full compacting pattern with outputs and inputs
            compact_match = re.search(r'compacting\((.*?)\)', content, re.DOTALL)
            if compact_match:
                full_recipe = compact_match.group(1)
                parts = full_recipe.split(',', 1)  # Split into output and inputs
                
                # Parse output part
                output_part = parts[0].strip()
                if output_part.startswith('['):
                    # Array output
                    for match in re.finditer(r'(?:Item|Fluid)\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', output_part):
                        name = match.group(1).split(':')[-1].replace('_', ' ').title()
                        amount = match.group(3) or '1'
                        recipe['outputs'].append({
                            'name': name,
                            'amount': int(amount),
                            'chance': 1.0
                        })
                else:
                    # Single output
                    match = re.search(r'[\'"]([^\'"]+)[\'"]', output_part)
                    if match:
                        name = match.group(1).split(':')[-1].replace('_', ' ').title()
                        recipe['outputs'].append({
                            'name': name,
                            'amount': 1,
                            'chance': 1.0
                        })
                
                # Parse inputs if they exist
                if len(parts) > 1:
                    input_part = parts[1].strip()
                    if input_part.startswith('['):
                        # Parse array inputs
                        for match in re.finditer(r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', input_part):
                            name = match.group(1)
                            if not name.startswith('#'):
                                clean_name = name.split(':')[-1].replace('_', ' ').title()
                                amount = match.group(3) or '1'
                                if int(amount) > 1:
                                    recipe['inputs'].add(f"{amount}x {clean_name}")
                                else:
                                    recipe['inputs'].add(clean_name)
                            else:
                                recipe['inputs'].add(name)
                                
                        # Parse fluid inputs
                        for fluid_match in re.finditer(r'Fluid\.(?:of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)|water\((\d+)\)|lava\((\d+)\))', input_part):
                            if fluid_match.group(1):  # Fluid.of case
                                name = fluid_match.group(1).split(':')[-1].replace('_', ' ').title()
                                amount = fluid_match.group(3) or '1000'
                            else:  # water/lava case
                                name = 'Water' if 'water' in fluid_match.group(0) else 'Lava'
                                amount = fluid_match.group(4) or fluid_match.group(5) or '1000'
                            recipe['fluids'].append(f"{amount}mb {name}")
            
            recipe['inputs'] = sorted(list(recipe['inputs']))
            return recipe

        # Parse outputs first - they're always the first argument
        output_start = content.find('(', content.find(recipe['type'].lower())) + 1
        output_end = content.find(',', output_start)
        if output_end == -1:  # No comma found, single output
            output_end = content.find(')', output_start)
        
        output_section = content[output_start:output_end]
        output_items = set()  # Keep track of output items to exclude from inputs
        
        # Parse array of outputs if present
        if output_section.strip().startswith('['):
            for match in re.finditer(r'(?:Item|Fluid)\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)(\.withChance\(([0-9.]+)\))?', output_section):
                name = match.group(1)
                clean_name = name.split(':')[-1].replace('_', ' ').title()
                amount = match.group(3) or '1'
                chance = float(match.group(5)) if match.group(5) else 1.0
                
                # Handle fluid amounts differently (add 'mb' suffix)
                if 'Fluid.of' in match.group(0):
                    out_str = f"{amount}mb {clean_name}"
                else:
                    out_str = clean_name
                
                recipe['outputs'].append({
                    'name': out_str,
                    'amount': int(amount),
                    'chance': chance
                })
                output_items.add(name)

        # Single output handling
        else:
            match = re.search(r'(?:Item|Fluid)\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', output_section)
            if match:
                name = match.group(1)
                clean_name = name.split(':')[-1].replace('_', ' ').title()
                amount = match.group(3) or '1'
                
                # Handle fluid amounts differently
                if 'Fluid.of' in match.group(0):
                    out_str = f"{amount}mb {clean_name}"
                else:
                    out_str = clean_name
                
                recipe['outputs'].append({
                    'name': out_str,
                    'amount': int(amount),
                    'chance': 1.0
                })
                output_items.add(name)

        # Parse inputs (everything after the first argument)
        input_section = content[output_end:]
        
        # Parse item inputs
        for match in re.finditer(r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)', input_section):
            name = match.group(1)
            if name not in output_items:  # Don't include output items as inputs
                if name.startswith('#'):
                    recipe['inputs'].add(name)
                else:
                    clean_name = name.split(':')[-1].replace('_', ' ').title()
                    amount = match.group(3) or '1'
                    if int(amount) > 1:
                        recipe['inputs'].add(f"{amount}x {clean_name}")
                    else:
                        recipe['inputs'].add(clean_name)

        # Parse fluid inputs
        for fluid_match in re.finditer(r'Fluid\.(?:of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)|water\((\d+)\)|lava\((\d+)\))', input_section):
            if fluid_match.group(1):  # Fluid.of case
                name = fluid_match.group(1).split(':')[-1].replace('_', ' ').title()
                amount = fluid_match.group(3) or '1000'
            else:  # water/lava case
                name = 'Water' if 'water' in fluid_match.group(0) else 'Lava'
                amount = fluid_match.group(4) or fluid_match.group(5) or '1000'
            recipe['fluids'].append(f"{amount}mb {name}")

        # Parse tag inputs
        for match in re.finditer(r'[\'"]#([^\'"]+)[\'"]', input_section):
            name = f"#{match.group(1)}"
            recipe['inputs'].add(name)

        recipe['inputs'] = sorted(list(recipe['inputs']))
        return recipe

def generate_mermaid_diagram(recipe: Dict) -> str:
    title = recipe['outputs'][0]['name'] if recipe['outputs'] else 'Unknown'
    process_letter = recipe["type"][0]
    
    diagram = f"""### {title}
```mermaid
graph LR
"""
    
    # Add inputs
    for i, input_item in enumerate(recipe['inputs']):
        diagram += f'    in{i}["{input_item}"] --> {recipe["type"][0]}\n'
    
    # Add fluids
    for i, fluid in enumerate(recipe['fluids']):
        diagram += f'    f{i}["{fluid}"] --> {recipe["type"][0]}\n'
    
    # Add process node
    diagram += f'    {recipe["type"][0]}[{recipe["type"]}]\n'
    
    # Add outputs with proper amount formatting
    if recipe['outputs']:
        for i, output in enumerate(recipe['outputs']):
            # Use "mb" instead of "x" if the amount is more than 10
            amount_prefix = f"{output['amount']}mb" if output['amount'] > 10 else f"{output['amount']}x"
            if output['chance'] < 1.0:
                diagram += f'    {process_letter} -.-> out{i}["{amount_prefix} {output["name"]} ({int(output["chance"] * 100)}%)"]\n'
            else:
                # Don't show amount for 1x items, but always show fluid amounts
                if output['amount'] > 1 or 'mb' in output['name']:
                    diagram += f'    {process_letter} --> out{i}["{amount_prefix} {output["name"]}"]\n'
                else:
                    diagram += f'    {process_letter} --> out{i}["{output["name"]}"]\n'
    diagram += "```\n\n"
    return diagram

def generate_sequence_diagram(recipe: Dict) -> str:
    """Generate a specialized mermaid diagram for sequence recipes"""
    title = recipe['outputs'][0]['name'] if recipe['outputs'] else 'Unknown'
    
    diagram = f"""### {title}
```mermaid
graph LR
"""
    
    # Add base input
    base_input = next(iter(recipe['inputs']), 'Unknown')
    diagram += f'    base["{base_input}"] --> S\n'
    
    # Add sequence steps
    for i, (step_type, step_item) in enumerate(recipe['sequence_steps']):
        if step_item:
            diagram += f'    S --> step{i}["{step_type}: {step_item}"]\n'
        else:
            diagram += f'    S --> step{i}["{step_type}"]\n'
    
    # Add final output
    final_output = recipe['outputs'][0]['name'] if recipe['outputs'] else 'Unknown'
    diagram += f'    step{i} --> out["{final_output}"]\n'
    
    diagram += "```\n\n"
    return diagram

def generate_custom_sequence_diagram(raw_content: str) -> str:
    """
    Parse full sequence recipe content including metadata like withChance
    """
    # Extract the sequence assembly block
    start_idx = raw_content.find("sequenced_assembly(")
    if (start_idx < 0):
        return "```mermaid\ngraph LR\n    No sequence found\n```\n"

    # Find the closing parenthesis, handling nested brackets
    bracket_level = 0
    end_idx = -1
    for i, ch in enumerate(raw_content[start_idx:], start_idx):
        if ch == '(':
            bracket_level += 1
        elif ch == ')':
            bracket_level -= 1
            if bracket_level == 0:
                end_idx = i
                break

    if end_idx < 0:
        return "```mermaid\ngraph LR\n    Malformed sequence\n```\n"

    # Extract the full sequence block
    seq_block = raw_content[start_idx+len("sequenced_assembly("):end_idx]

    # Split into main arguments
    args = []
    current = []
    depth = 0
    for ch in seq_block:
        if ch in '[(':
            depth += 1
        elif ch in '])':
            depth -= 1
        elif ch == ',' and depth == 0:
            args.append(''.join(current).strip())
            current = []
            continue
        current.append(ch)
    args.append(''.join(current).strip())

    if len(args) < 3:
        return "```mermaid\ngraph LR\n    Invalid sequence recipe\n```\n"

    # Parse outputs (first arg) - can have withChance
    outputs = []
    if args[0].startswith('['):
        for match in re.finditer(r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)(\.withChance\(([0-9.]+)\))?', args[0]):
            name = match.group(1).split(':')[-1].replace('_', ' ').title()
            amount = match.group(3) or '1'
            chance = float(match.group(5)) if match.group(5) else 1.0
            outputs.append((name, int(amount), chance))
    else:
        match = re.search(r'[\'"]([^\'"]+)[\'"]', args[0])
        if match:
            name = match.group(1).split(':')[-1].replace('_', ' ').title()
            outputs.append((name, 1, 1.0))

    # Parse input (second arg)
    input_match = re.search(r'[\'"]([^\'"]+)[\'"]', args[1])
    base_input = input_match.group(1).split(':')[-1].replace('_', ' ').title() if input_match else "Unknown Input"

    # Get metadata before generating diagram
    loops_match = re.search(r'\.loops\((\d+)\)', raw_content)
    loops = loops_match.group(1) if loops_match else "1"
    
    processing_match = re.search(r'\.processingTime\((\d+)\)', raw_content)
    processing_time = f"{int(processing_match.group(1))/10}s" if processing_match else None
    
    heat_level = None
    if '.heated()' in raw_content:
        heat_level = "Heated"
    elif '.heatLevel(\'SUPERHEATED\')' in raw_content:
        heat_level = "Superheated"

    # Generate diagram with metadata
    diagram = f"### {outputs[0][0] if outputs else 'Unknown'}\n```mermaid\ngraph LR\n"
    
    # Add metadata subgraph if any exists
    if loops != "1" or processing_time or heat_level:
        diagram += "    subgraph Metadata\n"
        if loops != "1":
            diagram += f'        loops["{loops} Loops"]\n'
        if processing_time:
            diagram += f'        time["{processing_time}"]\n'
        if heat_level:
            diagram += f'        heat["{heat_level}"]\n'
        diagram += "    end\n"

    # Generate diagram
    diagram += f'    start["{base_input}"]\n'
    last_node = 'start'

    # Parse steps array (third arg)
    steps = []
    for step in re.finditer(r'create(\w+)\([^)]+\)', args[2]):
        step_type = step.group(1)
        node_id = f"{step_type[0]}{len(steps)}"
        
        # Add step node
        diagram += f'    {node_id}["{step_type}"]\n'
        diagram += f'    {last_node} --> {node_id}\n'
        
        # Parse extra inputs in step if present
        if 'Deploying' in step_type:
            # Look for second item in deploy array
            deploy_match = re.search(r'\[\s*[^,]+,\s*(?:Item\.of\([\'"]([^\'"]+)[\'"](?:,\s*(\d+))?\)|[\'"]([^\'"]+)[\'"])', step.group(0))
            if deploy_match:
                item_name = deploy_match.group(1) or deploy_match.group(3)
                if item_name:
                    cleaned = item_name.split(':')[-1].replace('_', ' ').title()
                    amount = deploy_match.group(2) or '1'
                    input_text = f"{amount}x {cleaned}" if amount != '1' else cleaned
                    diagram += f'    in{len(steps)}["{input_text}"] --> {node_id}\n'

        elif 'Filling' in step_type:
            # Look for fluid in fill array
            fluid_match = re.search(r'Fluid\.(?:of\([\'"]([^\'"]+)[\'"]\s*,\s*(\d+)\)|water\((\d+)\)|lava\((\d+)\))', step.group(0))
            if fluid_match:
                if fluid_match.group(1):  # Fluid.of case
                    name = fluid_match.group(1).split(':')[-1].replace('_', ' ').title()
                    amount = fluid_match.group(2)
                else:  # water/lava case
                    name = 'Water' if 'water' in step.group(0) else 'Lava'
                    amount = fluid_match.group(3) or fluid_match.group(4)
                diagram += f'    in{len(steps)}["{amount}mb {name}"] --> {node_id}\n'
        
        last_node = node_id
        steps.append(node_id)

    # Add outputs with chances
    for i, (name, amount, chance) in enumerate(outputs):
        output_text = name if amount == 1 else f"{amount}x {name}"
        if chance < 1.0:
            diagram += f'    {last_node} -.-> out{i}["{output_text} ({int(chance*100)}%)"]\n'
        else:
            diagram += f'    {last_node} --> out{i}["{output_text}"]\n'

    diagram += "```\n\n"
    return diagram

def generate_markdown(recipes: List[Dict]) -> str:
    categories = {
        "Basic Processing": ["mixing", "filling", "pressing"],
        "Advanced Processing": ["sequence", "pressurizing", "deploying"],
        "Fluid Processing": ["distillation", "vacuumizing"],
        "Material Processing": ["crushing", "compacting"],
        "Chemical Processing": ["mixing"]
    }
    
    md_content = """# Production Lines

## Recipe Categories
"""
    

    return md_content