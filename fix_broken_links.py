import os
import re

replacements = {
    # NHS
    "https://www.nhs.uk/live-well/eat-well/calories/": "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/understanding-calories/",
    
    # CDC
    "https://www.cdc.gov/healthyweight/losing_weight/index.html": "https://www.cdc.gov/healthy-weight-growth/losing-weight/index.html",
    "https://www.cdc.gov/healthyweight/assessing/bmi/index.html": "https://www.cdc.gov/bmi/index.html",
    "https://www.cdc.gov/healthyweight/index.html": "https://www.cdc.gov/healthy-weight-growth/index.html",
    "https://www.cdc.gov/healthyweight/physical_activity/index.html": "https://www.cdc.gov/healthy-weight-growth/physical-activity/index.html",
    
    # Eatright / Academy of Nutrition and Dietetics
    "https://www.eatright.org/health/essential-nutrients/carbohydrates/protein-and-carbohydrates": "https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/protein/",
    "https://www.eatright.org/health/wellness/healthy-aging/intermittent-fasting-what-you-need-to-know": "https://www.hsph.harvard.edu/nutritionsource/healthy-weight/diet-reviews/intermittent-fasting/",
    "https://www.eatright.org/health/weight-management": "https://www.niddk.nih.gov/health-information/weight-management",
    "https://www.eatright.org/health/wellness/healthy-aging/how-to-count-calories": "https://www.niddk.nih.gov/health-information/weight-management/myplate-mywins",

    # EliteFTS
    "https://www.elitefts.com/education/poundage-percentage-tables/": "https://en.wikipedia.org/wiki/One-repetition_maximum",
    "https://elitefts.com/education/poundage-percentage-tables": "https://en.wikipedia.org/wiki/One-repetition_maximum",
}

label_replacements = {
    "Academy of Nutrition and Dietetics - Protein and Amino Acids (position paper)": "Harvard T.H. Chan School of Public Health - Protein",
    "Academy of Nutrition and Dietetics - Macronutrients (position paper)": "Harvard T.H. Chan School of Public Health - Macronutrients",
    "Academy of Nutrition and Dietetics - What is Intermittent Fasting?": "Harvard T.H. Chan School of Public Health - Intermittent Fasting",
    "Academy of Nutrition and Dietetics - Healthy Weight Gain": "NIDDK - Weight Management",
    "Academy of Nutrition and Dietetics - How to Count Calories": "NIDDK - Weight Management Tools",
    "Epley B. Poundage percentage tables. Elite Performance Systems. 1985.": "Epley Formula - One Repetition Maximum",
}


def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".astro") or file.endswith(".md") or file.endswith(".html"):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    new_content = content
                    for old_url, new_url in replacements.items():
                        new_content = new_content.replace(old_url, new_url)
                        
                    for old_label, new_label in label_replacements.items():
                        new_content = new_content.replace(old_label, new_label)
                        
                    if new_content != content:
                        with open(path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        print(f"Updated: {path}")
                except Exception as e:
                    print(f"Error reading {path}: {e}")

process_directory(r"d:\TOOLS WEB TOOLS\kiro calorie\src")
process_directory(r"d:\TOOLS WEB TOOLS\kiro calorie\public")
