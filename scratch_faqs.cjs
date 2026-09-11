const fs = require('fs');
let faqs = fs.readFileSync('src/data/faqs.ts', 'utf8');

// Just remove those spammy questions entirely.
faqs = faqs.replace(/\{\s*q:\s*\"What is a maintenance calorie calculator\?\"[\s\S]*?\},/g, '');
faqs = faqs.replace(/\{\s*q:\s*\"What is an online calorie calculator\?\"[\s\S]*?\},/g, '');
faqs = faqs.replace(/\{\s*q:\s*\"What is a calorie deficit calculator\?\"[\s\S]*?\},/g, '');
faqs = faqs.replace(/\{\s*q:\s*\"Which calorie calculators are considered reliable\?\"[\s\S]*?\},/g, '');
faqs = faqs.replace(/\{\s*q:\s*\"How can I set a calorie deficit for free\?\"[\s\S]*?\},/g, '');
faqs = faqs.replace(/\{\s*q:\s*\"What is the best calorie deficit calculator\?\"[\s\S]*?\},/g, '');

fs.writeFileSync('src/data/faqs.ts', faqs);
