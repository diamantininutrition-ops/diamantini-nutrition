import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/mentionslegales")({
  beforeLoad: () => {
    throw redirect({ to: "/mentions-legales" });
  },
});
