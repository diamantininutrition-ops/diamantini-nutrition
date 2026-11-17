import { createFileRoute } from "@tanstack/react-router";
import { SanteAuTravailPage } from "@/components/site/sante-au-travail";

const TITLE = "Santé au travail à Metz | Valentin Diamantini";
const DESCRIPTION =
  "Interventions nutritionnelles en entreprise à Metz. Ateliers et accompagnement en santé au travail avec Valentin Diamantini, diététicien-nutritionniste.";
const URL = "https://diamantini-nutrition.fr/sante-au-travail/";

export const Route = createFileRoute("/sante-au-travail")({
  head: () => ({
    links: [{ rel: "canonical", href: URL }],
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://diamantini-nutrition.fr/og.jpg" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SanteAuTravailPage,
});
