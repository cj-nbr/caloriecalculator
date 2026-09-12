const fs = require('fs');

// Copy Header.astro to HeaderEs.astro
let headerEs = fs.readFileSync('src/components/Header.astro', 'utf8');

// Replace Trust Bar text
headerEs = headerEs.replace(/Science Based/g, 'Basado en ciencia');
headerEs = headerEs.replace(/100% Free Forever/g, '100% Gratis Siempre');
headerEs = headerEs.replace(/Evidence Based/g, 'Basado en evidencia');

// Define Spanish NAV
const NAV_ES = `
const NAV_ES = [
  { label: "Calculadoras", href: "/resources/" },
  { label: "Guías", href: "/guides/" },
];
`;
headerEs = headerEs.replace(/import \{ NAV \} from "\.\.\/data\/site";/g, NAV_ES);
headerEs = headerEs.replace(/NAV\.map/g, 'NAV_ES.map');

fs.writeFileSync('src/components/HeaderEs.astro', headerEs, 'utf8');

// Update Layout.astro to use HeaderEs
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
layout = layout.replace(/import Header from "\.\.\/components\/Header\.astro";/g, 'import Header from "../components/Header.astro";\nimport HeaderEs from "../components/HeaderEs.astro";');
layout = layout.replace(/<Header \/>/g, '{lang === "es" ? <HeaderEs /> : <Header />}');
fs.writeFileSync('src/layouts/Layout.astro', layout, 'utf8');
