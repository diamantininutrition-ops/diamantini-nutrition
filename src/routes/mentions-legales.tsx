import { createFileRoute } from "@tanstack/react-router";
import { MentionsLegales } from "@/components/site/legal-page";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Valentin Diamantini" },
      { name: "description", content: "Mentions légales du site diamantini-nutrition.fr." },
    ],
  }),
  component: MentionsLegales,
});
