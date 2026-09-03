import os

files_to_fix = [
    "src/pages/walking-calorie-calculator.astro",
    "src/pages/running-calorie-calculator.astro",
    "src/pages/treadmill-calorie-calculator.astro",
    "src/pages/calories-burned-calculator.astro"
]

for filepath in files_to_fix:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "import Sources" not in content:
        # Find where ArticleImage is imported and add Sources right after
        target_str = 'import ArticleImage from "../components/ui/ArticleImage.astro";'
        replacement = target_str + '\nimport Sources from "../components/ui/Sources.astro";'
        
        content = content.replace(target_str, replacement)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
