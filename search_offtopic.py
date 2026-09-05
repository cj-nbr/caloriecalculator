import os
import re

search_dirs = [r"d:\TOOLS WEB TOOLS\kiro calorie\src", r"d:\TOOLS WEB TOOLS\kiro calorie\public"]
patterns = [r'\bmortgage\b', r'\bpregnancy\b', r'\bconception\b', r'\bdelivery date\b', r'\bdue date\b']

regexes = [re.compile(p, re.IGNORECASE) for p in patterns]

found = False
for d in search_dirs:
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith((".astro", ".md", ".html", ".ts", ".js", ".json")):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        lines = f.readlines()
                    for i, line in enumerate(lines):
                        for r in regexes:
                            if r.search(line):
                                print(f"{path}:{i+1}: {line.strip()}")
                                found = True
                except:
                    pass

if not found:
    print("No off-topic terms found in text files.")
