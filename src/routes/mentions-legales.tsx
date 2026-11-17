import { createFileRoute } from "@tanstack/react-router";
import { MentionsLegales } from "@/components/site/legal-page";

const TITLE = "Mentions légales | Valentin Diamantini";
const DESCRIPTION = "Mentions légales du site diamantini-nutrition.fr.";
const URL = "https://diamantini-nutrition.fr/mentions-legales/";

export const Route = createFileRoute("/mentions-legales")({
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
  component: MentionsLegales,
});
