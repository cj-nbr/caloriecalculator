import os
import re

old_slug_encoded = "%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8%EB%A5%BC%20%EC%9C%84%ED%95%9C%20%EC%B9%BC%EB%A1%9C%EB%A6%AC%20%EA%B3%84%EC%82%B0%EA%B8%B0"
old_slug_korean = "다이어트를 위한 칼로리 계산기"
new_slug = "korean-weight-loss-calorie-calculator"

def replace_in_file(path):
    if not os.path.exists(path):
        return
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    orig_content = content
    content = content.replace(old_slug_encoded, new_slug)
    content = content.replace(old_slug_korean, new_slug)

    if content != orig_content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {path}")

# 1. Config and Site data
replace_in_file(r"d:\TOOLS WEB TOOLS\kiro calorie\astro.config.mjs")
replace_in_file(r"d:\TOOLS WEB TOOLS\kiro calorie\src\data\site.ts")

# 2. Korean pages (to fix internal links and the canonical tag in the new file)
country_dir = r"d:\TOOLS WEB TOOLS\kiro calorie\public\country"
for root, dirs, files in os.walk(country_dir):
    for file in files:
        if file.endswith(".html"):
            replace_in_file(os.path.join(root, file))

# 3. Add 301 Redirect
redirects_path = r"d:\TOOLS WEB TOOLS\kiro calorie\public\_redirects"
redirect_line = f"\n/country/{old_slug_encoded} /country/{new_slug} 301\n"
with open(redirects_path, "a", encoding="utf-8") as f:
    f.write(redirect_line)
print("Added 301 redirect.")
