import glob

for f in glob.glob('src/pages/resources/*.astro'):
    with open(f, 'r', encoding='utf8') as file:
        content = file.read()
    
    # Fix broken characters
    content = content.replace('Height (m)A', 'Height (m)²')
    content = content.replace('A- ', 'x ')
    content = content.replace(' ?" ', ' - ')
    
    with open(f, 'w', encoding='utf8') as file:
        file.write(content)
