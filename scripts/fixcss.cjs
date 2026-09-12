const fs = require('fs');
let css = fs.readFileSync('src/styles/global.css', 'utf-8');

css = css.replace(/@layer base \{\s*html \{\s*scroll-behavior: smooth;\s*-webkit-text-size-adjust: 100%;\s*color-scheme: dark;\s*\}\s*html\.dark \{\s*color-scheme: dark;\s*\}/, 
`@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    color-scheme: light;
  }

  html.dark {
    color-scheme: dark;
  }`);

fs.writeFileSync('src/styles/global.css', css);
