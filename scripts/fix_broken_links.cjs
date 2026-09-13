const fs = require('fs');

function replaceFileContent(file, searchRegex, replacement) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(searchRegex, replacement);
    fs.writeFileSync(file, content);
}

// 1. calorie-deficit-calculator.astro
replaceFileContent(
    'src/pages/calorie-deficit-calculator.astro',
    /<a href="\/workouts\/home-workouts\/">Home Workouts<\/a>/g,
    'Home Workouts'
);

// 2. food-calories-search.astro
replaceFileContent(
    'src/pages/food-calories-search.astro',
    /\{ label: "Macro Calculator", href: "\/macro-calculator\/", desc: "Protein, carbs & fat" \},/g,
    ''
);

// 3. bmr-tdee-formulas-mifflin-harris-benedict.astro
replaceFileContent(
    'src/pages/guides/bmr-tdee-formulas-mifflin-harris-benedict.astro',
    /href="\/guides\/how-many-calories-to-lose-weight-calculator"/g,
    'href="/guides/how-many-calories-should-i-eat/"'
);
replaceFileContent(
    'src/pages/guides/bmr-tdee-formulas-mifflin-harris-benedict.astro',
    /href="\/country\/\/"/g,
    'href="/"'
);

// 4. how-many-calories-in-a-gram-guide.astro
replaceFileContent(
    'src/pages/guides/how-many-calories-in-a-gram-guide.astro',
    /href="\/country\/\/"/g,
    'href="/"'
);
replaceFileContent(
    'src/pages/guides/how-many-calories-in-a-gram-guide.astro',
    /href="\/guides\/como-calcular-deficit-calorico"/g,
    'href="/guides/calorie-deficit-guide/"'
);
replaceFileContent(
    'src/pages/guides/how-many-calories-in-a-gram-guide.astro',
    /href="\/guides\/mejores-fuentes-de-proteina"/g,
    'href="/guides/protein-guide/"'
);

// 5. whats-my-tdee.astro
replaceFileContent(
    'src/pages/guides/whats-my-tdee.astro',
    /href="\/calorie-calculator\/"/g,
    'href="/"'
);

// 6. calorie-calculator-accuracy.astro
replaceFileContent(
    'src/pages/guides/calorie-calculator-accuracy.astro',
    /href="\/maintenance-calorie-calculator\/"/g,
    'href="/tdee-calculator/"'
);
