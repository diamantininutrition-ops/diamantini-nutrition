import { createFileRoute } from "@tanstack/react-router";
import { GestionCookies } from "@/components/site/legal-page";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Gestion des cookies | Valentin Diamantini" },
      { name: "description", content: "Gestion des cookies du site diamantini-nutrition.fr." },
    ],
  }),
  component: GestionCookies,
});
