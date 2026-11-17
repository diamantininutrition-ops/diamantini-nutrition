import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/politiquedeconfidentialite")({
  beforeLoad: () => {
    throw redirect({ to: "/politique-de-confidentialite" });
  },
});
