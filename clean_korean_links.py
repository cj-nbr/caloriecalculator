import os
import glob

# Find all korean pages in public/country/ (excluding spain dir)
pages = [
    "public/country/diet-recommended-calorie-guide.html",
    "public/country/food-exercise-calorie-app.html",
    "public/country/korean-community-calorie-calculator.html",
    "public/country/다이어트를 위한 칼로리 계산기.html"
]

for filepath in pages:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        import re
        # Remove any <a> tag that contains "/country/spain/calculadora-de-calorias.html"
        # We can just remove the whole <a>...</a> tag if it matches
        new_content = re.sub(r'<a href="/country/spain/calculadora-de-calorias\.html".*?</a>', '', content, flags=re.DOTALL)
        
        # Also let's ensure we are not leaving a stray <div> wrapper for it if it was alone. But it's fine to just strip the <a>.
        
        if content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
