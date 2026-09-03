import re, glob

for f in glob.glob('public/country/spain/*.html'):
    if 'calculadora-de-calorias.html' in f:
        continue
        
    with open(f, 'r', encoding='utf8') as file:
        content = file.read()
        
    # Remove headers and footers
    content = re.sub(r'(?s)<header.*?</header>\s*', '', content)
    content = re.sub(r'(?s)<footer.*?</footer>\s*', '', content)
    
    # Replace broken links
    content = content.replace('href="/#calculator"', 'href="/country/spain/calculadora-de-calorias.html"')
    content = content.replace('href="/"', 'href="/country/spain/calculadora-de-calorias.html"')
    content = content.replace('href="/macro-calculator/"', 'href="/country/spain/calculadora-de-calorias.html"')
    content = content.replace('href="/tdee-calculator/"', 'href="/country/spain/calculadora-de-calorias.html"')
    
    with open(f, 'w', encoding='utf8') as file:
        file.write(content)
