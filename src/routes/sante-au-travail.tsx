import { createFileRoute } from "@tanstack/react-router";
import { SanteAuTravailPage } from "@/components/site/sante-au-travail";

export const Route = createFileRoute("/sante-au-travail")({
  head: () => ({
    meta: [
      { title: "Santé au travail à Metz | Valentin Diamantini" },
      {
        name: "description",
        content:
          "Interventions nutritionnelles en entreprise à Metz. Ateliers et accompagnement en santé au travail avec Valentin Diamantini, diététicien-nutritionniste.",
      },
    ],
  }),
  component: SanteAuTravailPage,
});
