import { createFileRoute } from "@tanstack/react-router";
import { SanteAuTravailPage } from "@/components/site/sante-au-travail";

const TITLE = "Santé au travail à Metz | Diamantini Nutrition";
const DESCRIPTION =
  "Ateliers, formations et programme santé au travail pour les entreprises de Metz et du Grand Est, par Valentin Diamantini, diététicien nutritionniste.";
const OG_TITLE = "Santé au travail et nutrition en entreprise à Metz";
const OG_DESCRIPTION =
  "Ateliers, formations et programme nutrition sur mesure pour la santé de vos équipes, à Metz et dans tout le Grand Est.";
const URL = "https://diamantini-nutrition.fr/sante-au-travail/";

export const Route = createFileRoute("/sante-au-travail")({
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
  }),
  component: SanteAuTravailPage,
});
