import { createFileRoute } from "@tanstack/react-router";
import { PolitiqueConfidentialite } from "@/components/site/legal-page";

const TITLE = "Politique de confidentialité | Valentin Diamantini";
const DESCRIPTION = "Politique de confidentialité du site diamantini-nutrition.fr.";
const URL = "https://diamantini-nutrition.fr/politique-de-confidentialite/";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    links: [{ rel: "canonical", href: URL }],
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://diamantini-nutrition.fr/og.jpg" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PolitiqueConfidentialite,
});
