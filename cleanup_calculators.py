import os
import re

files_to_delete = [
    r"d:\TOOLS WEB TOOLS\kiro calorie\src\pages\mortgage-calculator.astro",
    r"d:\TOOLS WEB TOOLS\kiro calorie\src\pages\age-calculator.astro",
    r"d:\TOOLS WEB TOOLS\kiro calorie\src\pages\due-date-calculator.astro",
    r"d:\TOOLS WEB TOOLS\kiro calorie\src\pages\pregnancy-calculator.astro",
    r"d:\TOOLS WEB TOOLS\kiro calorie\src\pages\pregnancy-conception-calculator.astro"
]

for f in files_to_delete:
    if os.path.exists(f):
        os.remove(f)
        print(f"Deleted {f}")

# Update site.ts
site_ts = r"d:\TOOLS WEB TOOLS\kiro calorie\src\data\site.ts"
with open(site_ts, "r", encoding="utf-8") as f:
    content = f.read()

# Lines to remove from site.ts
lines_to_remove = [
    r'.*href: "/pregnancy-calculator/".*\n?',
    r'.*href: "/due-date-calculator/".*\n?',
    r'.*href: "/pregnancy-conception-calculator/".*\n?',
    r'.*href: "/guides/estimate-delivery-date/".*\n?',
    r'.*href: "/age-calculator/".*\n?',
    r'.*href: "/mortgage-calculator/".*\n?'
]

for line in lines_to_remove:
    content = re.sub(line, '', content)

with open(site_ts, "w", encoding="utf-8") as f:
    f.write(content)
print("Cleaned up site.ts")

# Add _redirects
redirects_path = r"d:\TOOLS WEB TOOLS\kiro calorie\public\_redirects"
redirects_content = """
/mortgage-calculator/ / 301
/age-calculator/ / 301
/due-date-calculator/ / 301
/pregnancy-calculator/ / 301
/pregnancy-conception-calculator/ / 301
/guides/estimate-delivery-date/ / 301
"""
with open(redirects_path, "a", encoding="utf-8") as f:
    f.write(redirects_content)
print("Updated _redirects")
