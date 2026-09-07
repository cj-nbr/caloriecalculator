import re

with open('src/data/site.ts', 'r', encoding='utf-8') as f:
    c = f.read()

c = re.sub(r'\s*\{\s*label:\s*"Protein to (kcal|Calories)",\s*href:\s*"/.*?/"\s*\},', '', c)

with open('src/data/site.ts', 'w', encoding='utf-8') as f:
    f.write(c)
