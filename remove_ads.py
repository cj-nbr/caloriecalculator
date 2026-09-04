import os
import re

def remove_adsterra_from_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".astro"):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Remove the import statement
                    content = re.sub(r'import\s+AdsterraAd\s+from\s+["\'][^"\']*AdsterraAd\.astro["\'];?\s*', '', content)
                    
                    # Remove the component tag (self-closing or with children, usually self-closing)
                    content = re.sub(r'<AdsterraAd\s*/>\s*', '', content)
                    content = re.sub(r'<AdsterraAd[^>]*>.*?</AdsterraAd>\s*', '', content, flags=re.DOTALL)
                    
                    if content != original_content:
                        with open(path, "w", encoding="utf-8") as f:
                            f.write(content)
                        print(f"Removed Adsterra from {path}")
                except Exception as e:
                    print(f"Error processing {path}: {e}")

remove_adsterra_from_files(r"d:\TOOLS WEB TOOLS\kiro calorie\src")

# After removing references, delete the component file safely
adsterra_path = r"d:\TOOLS WEB TOOLS\kiro calorie\src\components\AdsterraAd.astro"
if os.path.exists(adsterra_path):
    os.remove(adsterra_path)
    print("Deleted AdsterraAd.astro")
