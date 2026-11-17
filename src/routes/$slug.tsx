import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage, getServicePage } from "@/components/site/service-page";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = getServicePage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => {
    const url = `https://diamantini-nutrition.fr/${loaderData?.slug}/`;
    return {
      meta: [
        { title: loaderData?.title },
        { name: "description", content: loaderData?.description },
        { property: "og:title", content: loaderData?.title },
        { property: "og:description", content: loaderData?.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: "https://diamantini-nutrition.fr/og.jpg" },
        { property: "og:locale", content: "fr_FR" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://diamantini-nutrition.fr/" },
                  { "@type": "ListItem", position: 2, name: loaderData.crumb, item: url },
                ],
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                about: loaderData.crumb,
                publisher: { "@id": "https://diamantini-nutrition.fr/#cabinet" },
              }),
            },
          ]
        : [],
    };
  },
  component: function ServiceRoute() {
    const page = Route.useLoaderData();
    return <ServicePage page={page} />;
  },
});
