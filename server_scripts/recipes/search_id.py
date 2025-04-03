import os
import re
from pathlib import Path
import datetime

def search_id_in_file(file_path, search_id):
    """
    Search for an ID within a file and return all line numbers where it appears
    Case-insensitive and matches partial IDs
    """
    results = []
    search_id_lower = search_id.lower()
    
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
            for line_num, line in enumerate(file, 1):
                if search_id_lower in line.lower():
                    # Store line number and the line content (trimmed if very long)
                    line_preview = line.strip()
                    if len(line_preview) > 100:
                        line_preview = line_preview[:97] + "..."
                    
                    # Highlight the matched part for better visibility
                    try:
                        match_index = line_preview.lower().index(search_id_lower)
                        match_end = match_index + len(search_id_lower)
                        highlighted = (
                            line_preview[:match_index] + 
                            "[" + line_preview[match_index:match_end] + "]" + 
                            line_preview[match_end:]
                        )
                        results.append((line_num, highlighted))
                    except:
                        # Fallback if highlighting fails
                        results.append((line_num, line_preview))
        return results
    except Exception as e:
        return [(-1, f"Error reading file: {str(e)}")]

def recursive_search(base_dir, search_id, exclude_dirs=None):
    """
    Recursively search for an ID in all files within a directory
    """
    if exclude_dirs is None:
        exclude_dirs = ['.git', 'node_modules', '__pycache__', 'backup']
    
    results = {}
    total_files = 0
    matched_files = 0
    
    print(f"Searching for ID: '{search_id}'")
    print("Please wait, searching through all files...")
    
    for root, dirs, files in os.walk(base_dir):
        # Skip excluded directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for file in files:
            total_files += 1
            file_path = Path(root) / file
            
            # We'll skip binary files and very large files for efficiency
            try:
                if file_path.stat().st_size > 10_000_000:  # Skip files larger than 10MB
                    continue
                    
                file_matches = search_id_in_file(file_path, search_id)
                if file_matches:
                    if any(match[0] > 0 for match in file_matches):  # Skip files with only error entries
                        results[str(file_path)] = file_matches
                        matched_files += 1
            except Exception as e:
                # Skip files that can't be processed
                continue
    
    return results, total_files, matched_files

def format_results(results, start_time, total_files, matched_files, search_id):
    """
    Format and display search results
    """
    search_time = datetime.datetime.now() - start_time
    
    print("\n" + "="*80)
    print(f"Search completed in {search_time.total_seconds():.2f} seconds")
    print(f"Search term: '{search_id}' (case-insensitive, partial matches included)")
    print(f"Files examined: {total_files}")
    print(f"Files with matches: {matched_files}")
    print("="*80 + "\n")
    
    if not results:
        print("No matches found.")
        return
    
    for file_path, matches in results.items():
        relative_path = Path(file_path).relative_to(base_dir)
        print(f"\n📄 {relative_path}")
        
        for line_num, line_content in matches:
            if line_num > 0:
                print(f"  Line {line_num}: {line_content}")
            else:
                print(f"  {line_content}")
        
        print("-"*50)

def main():
    global base_dir
    base_dir = Path(os.path.dirname(os.path.abspath(__file__)))
    
    print("ID Search Tool")
    print(f"Current directory: {base_dir}")
    print("-"*50)
    print("This tool performs case-insensitive searches and supports partial ID matching")
    print("Example: searching for 'iron' will find 'minecraft:iron_ingot', 'IRON_BLOCK', etc.")
    print("-"*50)
    
    search_id = input("Enter the ID or part of ID to search for: ")
    if not search_id.strip():
        print("Search cancelled - empty ID provided.")
        return
    
    start_time = datetime.datetime.now()
    results, total_files, matched_files = recursive_search(base_dir, search_id)
    
    format_results(results, start_time, total_files, matched_files, search_id)
    
    if results:
        save_option = input("\nDo you want to save these results to a file? (y/n): ").lower()
        if save_option == 'y':
            timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
            output_file = base_dir / f"search_results_{timestamp}.txt"
            
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(f"Search Results for ID: '{search_id}' (case-insensitive, partial matches)\n")
                f.write(f"Date: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
                f.write(f"Files examined: {total_files}\n")
                f.write(f"Files with matches: {matched_files}\n")
                f.write("="*80 + "\n\n")
                
                for file_path, matches in results.items():
                    relative_path = Path(file_path).relative_to(base_dir)
                    f.write(f"FILE: {relative_path}\n")
                    
                    for line_num, line_content in matches:
                        if line_num > 0:
                            f.write(f"  Line {line_num}: {line_content}\n")
                        else:
                            f.write(f"  {line_content}\n")
                    
                    f.write("-"*50 + "\n")
            
            print(f"Results saved to: {output_file}")

if __name__ == "__main__":
    main()
