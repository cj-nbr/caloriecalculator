const fs = require('fs');

const replacements = [
  {
    file: 'src/pages/cycling-calories-calculator.astro',
    target: 'Use our <a href="/target-heart-rate-calculator/">target heart rate calculator</a> to find your specific zones.',
    replace: 'Keep your effort at a conversational pace.'
  },
  {
    file: 'src/pages/editorial-policy.astro',
    target: '<li>The Epley formula for <a href="/one-rep-max-calculator/">one-rep max estimation</a></li>\n    <li>The Karvonen method for <a href="/target-heart-rate-calculator/">target heart rate zones</a></li>\n',
    replace: ''
  },
  {
    file: 'src/pages/intermittent-fasting-calculator.astro',
    target: 'Use the <a href=\'/target-heart-rate-calculator/\'>target heart rate calculator</a> to keep effort in a safe zone.',
    replace: 'Keep your effort in a comfortable zone.'
  },
  {
    file: 'src/pages/intermittent-fasting-calculator.astro',
    target: 'Use the <a href="/target-heart-rate-calculator/">target heart rate calculator</a> to ensure your fasted cardio is kept in the optimal fat-burning zone (Zone 2). ',
    replace: 'Ensure your fasted cardio is kept in a conversational pace for optimal endurance. '
  },
  {
    file: 'src/pages/running-calorie-calculator.astro',
    target: 'Use our <a href="/target-heart-rate-calculator/">target heart rate calculator</a> to find your Zone 2.',
    replace: 'Keep your pace conversational to stay in Zone 2.'
  },
  {
    file: 'src/pages/treadmill-calorie-calculator.astro',
    target: '        <h3 class="text-lg font-semibold text-ink"><a href="/target-heart-rate-calculator/">Target Heart Rate Calculator</a></h3>\n        <p class="text-body mt-2">Find your optimal training zones for fat loss.</p>\n      </div>\n',
    replace: '' // NOTE: the surrounding divs might need to be cleaned up carefully, let's just do a regex replace
  },
  {
    file: 'src/pages/weight-gain-calculator.astro',
    target: 'Combine this plan with the <a href="/one-rep-max-calculator/">one rep max calculator</a> to program progressive overload, and the <a href="/protein-calculator/">protein calculator</a> to hit daily protein targets. For full workout plans, explore the <a href="/workouts/">workouts section</a>.',
    replace: 'Combine this plan with a structured training program and the <a href="/protein-calculator/">protein calculator</a> to hit daily protein targets.'
  },
  {
    file: 'src/pages/guides/body-recomposition-guide.astro',
    target: ' You can use tools like our <a href="/one-rep-max-calculator/">One Rep Max Calculator</a> to track your strength gains.',
    replace: ''
  },
  {
    file: 'src/pages/guides/how-to-gain-weight.astro',
    target: 'Use the <a href="/one-rep-max-calculator/">one rep max calculator</a> to set working weights, and keep sets in the 6-12 rep range for hypertrophy. ',
    replace: 'Keep sets in the 6-12 rep range for hypertrophy. '
  },
  {
    file: 'src/pages/guides/index.astro',
    target: '{ label: "Epley Formula", href: "/guides/epley-formula/" },\n',
    replace: ''
  },
  {
    file: 'src/pages/guides/intermittent-fasting-for-beginners.astro',
    target: 'Use the <a href=\'/target-heart-rate-calculator/\'>target heart rate calculator</a> to keep effort manageable if you train fasted.',
    replace: 'Keep your effort manageable if you train fasted.'
  }
];

replacements.forEach(({ file, target, replace }) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(target, replace);
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
});
