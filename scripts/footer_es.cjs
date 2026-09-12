const fs = require('fs');

// Create a static localized footer array for Spanish in FooterEs.astro
let footerEs = fs.readFileSync('src/components/FooterEs.astro', 'utf8');

const FOOTER_ES = `
const FOOTER_ES = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "/about/" },
      { label: "Contacto", href: "/contact/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso legal", href: "/disclaimer/" },
      { label: "Política de privacidad", href: "/privacy-policy/" },
      { label: "Términos y condiciones", href: "/terms/" },
      { label: "Política editorial", href: "/editorial-policy/" },
    ],
  },
];
`;

footerEs = footerEs.replace(/import \{ SITE, FOOTER \} from "\.\.\/data\/site";/g, 'import { SITE } from "../data/site";' + FOOTER_ES);
footerEs = footerEs.replace(/FOOTER\.map/g, 'FOOTER_ES.map');
footerEs = footerEs.replace(/Your ultimate toolkit for nutrition and fitness\. Free, science-based calculators to help you reach your weight goals with clear estimates\./g, 
  'Tu conjunto de herramientas definitivo para nutrición y fitness. Calculadoras gratuitas basadas en ciencia para ayudarte a alcanzar tus objetivos de peso con estimaciones claras.');
footerEs = footerEs.replace(/All rights reserved\./g, 'Todos los derechos reservados.');
footerEs = footerEs.replace(/For educational purposes only\. Not medical advice \— consult a healthcare\s+professional before making health decisions\./g, 
  'Solo para fines educativos. No es asesoramiento médico — consulta a un profesional de la salud antes de tomar decisiones sobre tu salud.');

fs.writeFileSync('src/components/FooterEs.astro', footerEs, 'utf8');

// Update Layout.astro to use FooterEs
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
layout = layout.replace(/import Footer from "\.\.\/components\/Footer\.astro";/g, 'import Footer from "../components/Footer.astro";\nimport FooterEs from "../components/FooterEs.astro";');
layout = layout.replace(/<Footer \/>/g, '{lang === "es" ? <FooterEs /> : <Footer />}');

fs.writeFileSync('src/layouts/Layout.astro', layout, 'utf8');

// Check header as well (just in case)
let header = fs.readFileSync('src/components/Header.astro', 'utf8');
fs.writeFileSync('src/components/Header.astro', header, 'utf8');
