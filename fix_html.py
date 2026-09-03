import os

def fix_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for unclosed divs
    open_divs = content.count('<div')
    close_divs = content.count('</div>')
    
    if open_divs > close_divs:
        # We missed a closing div somewhere! Let's append it before </ContentLayout> or </Fragment>
        if '</ContentLayout>' in content:
            content = content.replace('</ContentLayout>', '</div>\n</ContentLayout>')
        elif '</Fragment>' in content:
            content = content.replace('</Fragment>', '</div>\n</Fragment>')
            
    # Fix accessibility: remove text colors from tables that rely *only* on color
    # I'll just remove the classes like text-blue-600, text-green-700, bg-green-50
    content = content.replace('text-blue-600', '')
    content = content.replace('text-green-700', '')
    content = content.replace('text-yellow-600', '')
    content = content.replace('text-orange-600', '')
    content = content.replace('text-red-600', '')
    content = content.replace('text-red-800', '')
    content = content.replace('bg-green-50', '')
    content = content.replace('text-orange-500', '')
    
    # We will also add a generic `font-semibold` or something if it's missing, but it's already there in my previous code.
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

files_to_fix = [
    "src/pages/walking-calorie-calculator.astro",
    "src/pages/running-calorie-calculator.astro",
    "src/pages/treadmill-calorie-calculator.astro",
    "src/pages/calories-burned-calculator.astro",
    "src/pages/resources/bmi-calculator.astro",
    "src/pages/resources/ideal-body-weight.astro",
    "src/pages/resources/tdee-calculator.astro",
    "src/pages/resources/weight-loss-calculator.astro",
    "src/pages/resources/calories-burned-in-a-day.astro"
]

for filepath in files_to_fix:
    fix_html(filepath)
