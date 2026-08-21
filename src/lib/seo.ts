/** seo.ts - JSON-LD structured-data builders. */
import { SITE } from "../data/site";
import type { Expert } from "../data/authors";

export interface FaqItem {
  q: string;
  a: string;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    description: SITE.description,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: new URL(c.path, SITE.url).href,
    })),
  };
}

function getPersonSchema(expert: Expert) {
  const schema: any = {
    "@type": "Person",
    name: expert.name,
    jobTitle: expert.role,
    image: expert.image,
  };
  if (expert.url) schema.url = expert.url;
  return schema;
}

/** WebApplication schema for a calculator tool page. */
export function calculatorSchema(name: string, description: string, path: string, reviewer?: Expert) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: new URL(path, SITE.url).href,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  if (reviewer) schema.reviewedBy = getPersonSchema(reviewer);
  return schema;
}

/** SoftwareApplication schema for tool pages. */
export function softwareApplicationSchema(name: string, description: string, path: string, reviewer?: Expert) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: new URL(path, SITE.url).href,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  if (reviewer) schema.reviewedBy = getPersonSchema(reviewer);
  return schema;
}

/** Article schema for long-form guide / resource pages. */
export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  dateModified?: string;
  author?: Expert;
  reviewer?: Expert;
}) {
  const data: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": new URL(opts.path, SITE.url).href },
    author: opts.author ? getPersonSchema(opts.author) : { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/favicon.svg` },
    },
  };
  if (opts.dateModified) data.dateModified = opts.dateModified;
  if (opts.reviewer) data.reviewedBy = getPersonSchema(opts.reviewer);
  return data;
}
