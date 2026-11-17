import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage, getServicePage } from "@/components/site/service-page";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = getServicePage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.title },
      { name: "description", content: loaderData?.description },
      { property: "og:title", content: loaderData?.title },
      { property: "og:description", content: loaderData?.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://diamantini-nutrition.fr/${loaderData?.slug}/` },
    ],
    links: [{ rel: "canonical", href: `https://diamantini-nutrition.fr/${loaderData?.slug}/` }],
  }),
  component: function ServiceRoute() {
    const page = Route.useLoaderData();
    return <ServicePage page={page} />;
  },
});
