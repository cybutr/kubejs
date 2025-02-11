import os
import json
import re
from pathlib import Path
from recipe_formatter import RecipeParser, generate_mermaid_diagram, generate_custom_sequence_diagram, generate_sequence_diagram

def scan_recipe_files(base_path: str) -> dict:
    """Scan for all recipe files and combine them into a dictionary"""
    recipes_dict = {}
    
    # Define paths to scan
    script_paths = [
        Path(base_path) / 'server_scripts' / 'recipes',
        Path(base_path) / 'server_scripts' / 'recipes' / 'main'
    ]
    
    # Scan each path for .js files
    for path in script_paths:
        if path.exists():
            for file in path.glob('**/*.js'):
                try:
                    with open(file, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if 'recipe' in content.lower():
                            relative_path = str(file.relative_to(Path(base_path)))
                            
                            # Handle combined script files in the "main" directory
                            if 'server_scripts/recipes/main' in relative_path.replace("\\", "/"):
                                # Split the content whenever an "event." starts a new recipe
                                # Recipe always starts with "event.", so we only filter out empty strings
                                recipe_parts = [part.strip() for part in re.split(r'(?=event\.)', content) if part.strip()]
                                for i, part in enumerate(recipe_parts, 1):
                                    key = f"{relative_path}#recipe{i}"
                                    recipes_dict[key] = part
                            else:
                                # For non-"main" scripts, separate alternate recipes using '//alt'
                                recipe_parts = content.split('//alt')
                                
                                # Add the main recipe
                                recipes_dict[relative_path] = recipe_parts[0].strip()
                                
                                # Add alternate recipes with unique keys
                                for i, alt_recipe in enumerate(recipe_parts[1:], 1):
                                    alt_path = f"{relative_path}#alt{i}"
                                    recipes_dict[alt_path] = alt_recipe.strip()
                                
                except Exception as e:
                    print(f"Error reading {file}: {e}")
    
    return recipes_dict

def process_recipes(recipes_dict: dict) -> list:
    """Process all recipes and return a list of formatted recipes"""
    formatted_recipes = []
    
    for filename, content in recipes_dict.items():
        if not content or content.isspace():
            continue
        
        recipe = RecipeParser.parse_recipe(content)
        if recipe['type']:
            formatted_recipes.append(recipe)
    
    return formatted_recipes

def generate_full_markdown(recipes_dict: dict) -> str:
    """Generate complete markdown with all recipes organized by type"""
    md = "# Create Mod Production Lines\n\n"
    
    # Group recipes by type
    recipe_types = {}
    
    # Handle raw recipes for sequences and processed recipes for others
    for filename, content in recipes_dict.items():
        if 'sequenced_assembly' in content:
            # Direct sequence handling
            if 'Sequence' not in recipe_types:
                recipe_types['Sequence'] = []
            recipe_types['Sequence'].append(content)
        else:
            # Process non-sequence recipes
            recipe = RecipeParser.parse_recipe(content)
            if recipe['type']:
                rtype = recipe['type']
                if rtype not in recipe_types:
                    recipe_types[rtype] = []
                recipe_types[rtype].append(recipe)
    
    # Generate sections for each recipe type
    for rtype, items in sorted(recipe_types.items()):
        md += f"## {rtype} Recipes\n\n"
        for item in items:
            if rtype == 'Sequence':
                # Pass the full content for sequence recipes
                md += generate_custom_sequence_diagram(item)
            else:
                # Use normal diagram generator for other recipes
                md += generate_mermaid_diagram(item)
    
    return md

def main():
    base_path = os.path.dirname(__file__)
    
    # Scan and update recipes
    recipes_dict = scan_recipe_files(base_path)
    
    # Save updated recipes
    recipes_file = os.path.join(base_path, 'all_recipes.json')
    with open(recipes_file, 'w', encoding='utf-8') as f:
        json.dump(recipes_dict, f, indent=2)
    
    # Generate markdown directly from recipes_dict
    output_file = os.path.join(base_path, 'recipes.md')
    markdown_content = generate_full_markdown(recipes_dict)  # Pass recipes_dict instead of processed_recipes
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    
    print(f"Successfully processed recipes from {len(recipes_dict)} files")

if __name__ == "__main__":
    main()