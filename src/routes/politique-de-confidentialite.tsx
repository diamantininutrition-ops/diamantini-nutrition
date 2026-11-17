import { createFileRoute } from "@tanstack/react-router";
import { PolitiqueConfidentialite } from "@/components/site/legal-page";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | Valentin Diamantini" },
      { name: "description", content: "Politique de confidentialité du site diamantini-nutrition.fr." },
    ],
  }),
  component: PolitiqueConfidentialite,
});
