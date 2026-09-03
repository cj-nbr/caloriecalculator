import os
import re

filepath = r"d:\TOOLS WEB TOOLS\kiro calorie\src\pages\index.astro"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Add import if missing
if 'import Testimonials from "../components/ui/Testimonials.astro";' not in content:
    content = content.replace(
        'import FaqSection from "../components/FaqSection.astro";',
        'import FaqSection from "../components/FaqSection.astro";\nimport Testimonials from "../components/ui/Testimonials.astro";'
    )

# Inject <Testimonials /> before the FAQ section
if '<Testimonials />' not in content:
    content = content.replace(
        '<FaqSection items={HOME_FAQS} />',
        '<Testimonials />\n    <FaqSection items={HOME_FAQS} />'
    )

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
