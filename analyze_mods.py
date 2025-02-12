import json
import re

def extract_mod_ids(content: str) -> set:
    """Extract all mod IDs from a recipe content string"""
    # Match anything that looks like 'modid:something' or "modid:something"
    mod_pattern = r'[\'"]([a-z0-9_]+):[a-z0-9_/]+[\'"]'
    matches = re.findall(mod_pattern, content)
    return set(matches)

def main():
    # Read the recipes file
    with open('all_recipes.json', 'r', encoding='utf-8') as f:
        recipes = json.load(f)

    # Collect all mod IDs
    all_mods = set()
    for recipe_content in recipes.values():
        mods = extract_mod_ids(recipe_content)
        all_mods.update(mods)

    # Print results
    print("\nFound Mod IDs:")
    print("-------------")
    for mod in sorted(all_mods):
        print(f"- {mod}")
    print(f"\nTotal unique mods: {len(all_mods)}")

if __name__ == "__main__":
    main()
