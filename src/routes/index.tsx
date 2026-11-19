import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";

const TITLE = "Diététicien nutritionniste à Metz | Diamantini Nutrition";
const DESCRIPTION =
  "Valentin Diamantini, diététicien nutritionniste à Metz : perte de poids, troubles digestifs, TCA. Consultation 60 €, au cabinet ou en téléconsultation.";
const OG_TITLE = "Diamantini Nutrition, diététicien nutritionniste à Metz";
const OG_DESCRIPTION =
  "Suivi diététique personnalisé à Metz, au cabinet ou en téléconsultation. Rendez-vous en ligne sur Doctolib.";
const URL = "https://diamantini-nutrition.fr/";

const cabinet = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://diamantini-nutrition.fr/#cabinet",
  name: "Diamantini Nutrition",
  alternateName: "Valentin Diamantini, diététicien nutritionniste à Metz",
  url: URL,
  image: "https://diamantini-nutrition.fr/og.jpg",
  logo: "https://diamantini-nutrition.fr/media/diamantini-nutrition-logo.png",
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
  areaServed: [
    { "@type": "City", name: "Metz" },
    { "@type": "AdministrativeArea", name: "Moselle" },
    { "@type": "AdministrativeArea", name: "Grand Est" },
  ],
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
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://diamantini-nutrition.fr/og.jpg" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESCRIPTION },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(cabinet) },
      { type: "application/ld+json", children: JSON.stringify(website) },
    ],
  }),
  component: HomePage,
});
