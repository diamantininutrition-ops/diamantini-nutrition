import { createFileRoute } from "@tanstack/react-router";
import { GestionCookies } from "@/components/site/legal-page";

const TITLE = "Gestion des cookies | Valentin Diamantini";
const DESCRIPTION = "Gestion des cookies du site diamantini-nutrition.fr.";
const URL = "https://diamantini-nutrition.fr/cookies/";

export const Route = createFileRoute("/cookies")({
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
  component: GestionCookies,
});
