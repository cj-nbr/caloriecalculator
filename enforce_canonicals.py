import os
import re

primary_domain = "caloriecalculatorfree.com"

# 1. Update astro.config.mjs
astro_config_path = r"d:\TOOLS WEB TOOLS\kiro calorie\astro.config.mjs"
with open(astro_config_path, "r", encoding="utf-8") as f:
    config_content = f.read()

# Append trailing slash to customPages
config_content = re.sub(r'(https://caloriecalculatorfree\.com/country/[^/\']+)\'', r'\1/\'', config_content)

# Add trailingSlash: 'always'
if "trailingSlash" not in config_content:
    config_content = config_content.replace("site: 'https://caloriecalculatorfree.com',", "site: 'https://caloriecalculatorfree.com',\n  trailingSlash: 'always',")

with open(astro_config_path, "w", encoding="utf-8") as f:
    f.write(config_content)
print("Updated astro.config.mjs")

# 2. Enforce trailing slashes in src/data/site.ts
site_ts_path = r"d:\TOOLS WEB TOOLS\kiro calorie\src\data\site.ts"
with open(site_ts_path, "r", encoding="utf-8") as f:
    site_content = f.read()

# Fix non-trailing slash hrefs
site_content = re.sub(r'href:\s*"/([^"]+)(?<!/)"', r'href: "/\1/"', site_content)

with open(site_ts_path, "w", encoding="utf-8") as f:
    f.write(site_content)
print("Updated site.ts")

# 3. Canonical Tag Helper in Layout.astro
layout_path = r"d:\TOOLS WEB TOOLS\kiro calorie\src\layouts\Layout.astro"
with open(layout_path, "r", encoding="utf-8") as f:
    layout = f.read()

# Ensure canonical generation enforces a trailing slash and strips queries
canonical_logic_old = """const canonicalPath = canonical ?? Astro.url.pathname;
const canonicalUrl = new URL(canonicalPath, SITE.url);"""

canonical_logic_new = """const rawPath = canonical ?? Astro.url.pathname;
// Enforce trailing slash on canonicals (unless it's the root itself)
const canonicalPath = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;
// Build clean URL without search params
const canonicalUrl = new URL(canonicalPath, SITE.url);
canonicalUrl.search = '';
canonicalUrl.hash = '';"""

if canonical_logic_old in layout:
    layout = layout.replace(canonical_logic_old, canonical_logic_new)
else:
    print("WARNING: Could not find canonical logic in Layout.astro")

with open(layout_path, "w", encoding="utf-8") as f:
    f.write(layout)
print("Updated Layout.astro")

# 4. Update trailing slashes for internal links inside the international pages
def enforce_trailing_slash_in_html(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Add trailing slash to any href="/country/..." that doesn't have it
                    content = re.sub(r'(href="https?://caloriecalculatorfree\.com/country/[^"]+?)(?<!/)"', r'\1/"', content)
                    content = re.sub(r'(href="/country/[^"]+?)(?<!/)"', r'\1/"', content)
                    content = re.sub(r'(hreflang="[^"]+"\s+href="https?://caloriecalculatorfree\.com/country/[^"]+?)(?<!/)"', r'\1/"', content)
                    content = re.sub(r'(rel="canonical"\s+href="https?://caloriecalculatorfree\.com/country/[^"]+?)(?<!/)"', r'\1/"', content)
                    
                    if content != original_content:
                        with open(path, "w", encoding="utf-8") as f:
                            f.write(content)
                        print(f"Updated internal links in {path}")
                except Exception as e:
                    print(f"Error processing {path}: {e}")

enforce_trailing_slash_in_html(r"d:\TOOLS WEB TOOLS\kiro calorie\public\country")
