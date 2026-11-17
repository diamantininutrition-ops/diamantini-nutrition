import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";

const TITLE = "Valentin Diamantini — Diététicien Nutritionniste à Metz";
const DESCRIPTION =
  "Cabinet de diététique de Valentin Diamantini à Metz. Diététique comportementale, perte de poids, nutrition du sport, troubles digestifs. Consultation 60€, au cabinet ou en téléconsultation.";
const URL = "https://diamantini-nutrition.fr/";

const cabinet = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://diamantini-nutrition.fr/#cabinet",
  name: "Diamantini Nutrition",
  alternateName: "Valentin Diamantini, diététicien nutritionniste à Metz",
  url: URL,
  image: "https://diamantini-nutrition.fr/og.jpg",
  logo: "https://diamantini-nutrition.fr/media/logo-full.png",
  telephone: "+33782593110",
  email: "diamantini.nutrition@gmail.com",
  priceRange: "60 €",
  medicalSpecialty: "https://schema.org/DietNutrition",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 rue Xavier Roussel",
    postalCode: "57050",
    addressLocality: "Metz",
    addressCountry: "FR",
  },
  areaServed: "Metz",
  sameAs: [
    "https://www.doctolib.fr/dieteticien/metz/valentin-diamantini",
    "https://www.strongdiet-nutrition.com/",
  ],
  founder: { "@type": "Person", name: "Valentin Diamantini", jobTitle: "Diététicien-nutritionniste" },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Diamantini Nutrition",
  url: URL,
  publisher: { "@id": "https://diamantini-nutrition.fr/#cabinet" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: URL }],
    meta: [
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://diamantini-nutrition.fr/og.jpg" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(cabinet) },
      { type: "application/ld+json", children: JSON.stringify(website) },
    ],
  }),
  component: HomePage,
});
