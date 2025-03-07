import os
import json
import re
from typing import Dict, List, Tuple

class RecipeParser:
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
                    'inputs': [],
                    'outputs': [],
                    'fluids': [],
                    'conditions': []
                }
                
                # Extract items and fluids
                item_pattern = r'Item\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)'
                fluid_pattern = r'Fluid\.of\([\'"]([^\'"]+)[\'"](,\s*(\d+))?\)'
                
                items = re.finditer(item_pattern, recipe_data)
                fluids = re.finditer(fluid_pattern, recipe_data)
                
                for item in items:
                    recipe['inputs'].append(f"{item.group(3) or 1}x {item.group(1)}")
                
                for fluid in fluids:
                    recipe['fluids'].append(f"{fluid.group(3) or 1}mb {fluid.group(1)}")
                
                # Check for conditions
                if 'heated()' in content:
                    recipe['conditions'].append('heated')
                if 'cooled()' in content:
                    recipe['conditions'].append('cooled')
                
                recipes.append(recipe)
        
        return recipes

def generate_mermaid_diagram(recipe: Dict) -> str:
    diagram = f"""### {recipe['type'].title()} Recipe
```mermaid
graph LR
"""
    
    # Add inputs
    for i, input_item in enumerate(recipe['inputs']):
        diagram += f"    in{i}[\"{input_item}\"] --> P[{recipe['type']}]\n"
    
    # Add fluids
    for i, fluid in enumerate(recipe['fluids']):
        diagram += f"    f{i}[\"{fluid}\"] --> P\n"
    
    # Add conditions
    for condition in recipe['conditions']:
        diagram += f"    c[\"{condition}\"] --> P\n"
    
    # Add outputs
    if recipe['outputs']:
        for i, output in enumerate(recipe['outputs']):
            diagram += f"    P --> out{i}[\"{output}\"]\n"
    
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
    
    md_content = """# Create Mod Production Lines

## Recipe Categories
"""
    
    for category, types in categories.items():
        md_content += f"\n## {category}\n\n"
        category_recipes = [r for r in recipes if r['type'] in types]
        for recipe in category_recipes:
            md_content += generate_mermaid_diagram(recipe)
    
    return md_content
