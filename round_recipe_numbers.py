import os
import re
import shutil
import datetime
from pathlib import Path

def create_backup(base_path):
    """Create a backup of the recipes folder with timestamp"""
    recipes_dir = Path(base_path) / "server_scripts" / "recipes"
    backup_dir = Path(base_path) / "server_scripts" / "backup" / f"recipes_backup_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}"
    
    # Create backup directory if it doesn't exist
    backup_dir.parent.mkdir(exist_ok=True)
    
    # Copy all files and folders from recipes to backup
    print(f"Creating backup at: {backup_dir}")
    shutil.copytree(recipes_dir, backup_dir)
    print(f"Backup completed successfully")
    
    return recipes_dir

def round_number(number):
    """Round numbers according to the specified rules"""
    num = float(number)
    
    # Skip numbers below or equal to 32
    if num <= 32:
        return number
        
    # For numbers between 32 and 200, round to closest multiple of 45
    if num < 200:
        rounded = round(num / 45) * 45
        return str(int(rounded) if rounded.is_integer() else rounded)
    
    # For numbers above 200, round to closest multiple of 90
    rounded = round(num / 90) * 90
    return str(int(rounded) if rounded.is_integer() else rounded)

def process_js_file(file_path):
    """Process a single JavaScript file and round numbers"""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Find all numbers in the file using regex
        # This pattern looks for numbers that aren't part of variable names/identifiers
        # It captures whole numbers and decimals
        pattern = r'(?<![a-zA-Z0-9_])((?:\d+\.?\d*|\.\d+))'
        
        changes_made = False
        
        def replace_number(match):
            nonlocal changes_made
            original = match.group(1)
            rounded = round_number(original)
            
            if original != rounded:
                changes_made = True
                print(f"In {file_path.name}: Changed {original} to {rounded}")
                
            return match.group(0).replace(original, rounded)
        
        # Replace numbers according to the rounding rules
        new_content = re.sub(pattern, replace_number, content)
        
        # Only write to file if changes were made
        if changes_made:
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            return True
        
        return False
    
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")
        return False

def process_recipe_files(recipes_dir):
    """Process all JavaScript files in the recipes directory"""
    modified_files = 0
    total_files = 0
    
    # Recursively find all .js files
    for js_file in recipes_dir.glob('**/*.js'):
        total_files += 1
        if process_js_file(js_file):
            modified_files += 1
    
    print(f"Processed {total_files} files, modified {modified_files} files")

def main():
    base_path = os.path.dirname(__file__)
    
    # Step 1: Create a backup
    recipes_dir = create_backup(base_path)
    
    # Step 2: Process all recipe files
    process_recipe_files(recipes_dir)
    
    print("Rounding process completed successfully!")

if __name__ == "__main__":
    main()
