import os
import re

# 1. Update astro.config.mjs
astro_config_path = r"d:\TOOLS WEB TOOLS\kiro calorie\astro.config.mjs"
with open(astro_config_path, "r", encoding="utf-8") as f:
    config_content = f.read()

config_content = config_content.replace(".html'", "'")
with open(astro_config_path, "w", encoding="utf-8") as f:
    f.write(config_content)
print("Updated astro.config.mjs")

# 2. Update src/data/site.ts
site_ts_path = r"d:\TOOLS WEB TOOLS\kiro calorie\src\data\site.ts"
with open(site_ts_path, "r", encoding="utf-8") as f:
    site_content = f.read()

site_content = site_content.replace(".html\"", "\"")
with open(site_ts_path, "w", encoding="utf-8") as f:
    f.write(site_content)
print("Updated site.ts")

# 3. Update the 8 HTML files in public/country/ and public/country/spain/
def strip_html_from_links(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Remove .html from href="..." that contain /country/
                    content = re.sub(r'href="([^"]+?/country/[^"]+?)\.html"', r'href="\1"', content)
                    
                    # Also replace in the canonical URL and hreflang URLs
                    # The above regex catches them because they are href=".../country/..."
                    # But let's be explicitly sure by replacing any .html in the https://caloriecalculatorfree.com/country/ domain
                    content = content.replace(".html", "") # Wait, replacing ALL .html might break things like text.
                    # Revert to safe regex
                    content = original_content
                    content = re.sub(r'(href="[^"]*?/country/[^"]*?)\.html"', r'\1"', content)
                    
                    # Let's also check JSON-LD
                    content = re.sub(r'("url":\s*"[^"]*?/country/[^"]*?)\.html"', r'\1"', content)
                    content = re.sub(r'("@id":\s*"[^"]*?/country/[^"]*?)\.html"', r'\1"', content)

                    if content != original_content:
                        with open(path, "w", encoding="utf-8") as f:
                            f.write(content)
                        print(f"Updated {path}")
                except Exception as e:
                    print(f"Error processing {path}: {e}")

strip_html_from_links(r"d:\TOOLS WEB TOOLS\kiro calorie\public\country")
