import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage, getServicePage } from "@/components/site/service-page";

const social: Record<string, { title: string; description: string }> = {
  "perte-de-poids": {
    title: "Perte de poids à Metz : un suivi diététique sans jugement",
    description:
      "Un accompagnement personnalisé à Metz pour travailler votre poids, vos habitudes et votre relation à l'alimentation.",
  },
  "troubles-digestifs": {
    title: "Troubles digestifs, SII et FODMAP : diététicien à Metz",
    description:
      "Ballonnements, transit, SII : un suivi diététique à Metz pour comprendre vos tolérances et adapter vos repas.",
  },
  "equilibre-alimentaire": {
    title: "Équilibre alimentaire à Metz : mieux manger simplement",
    description:
      "Des repères simples, adaptés à vos goûts, votre budget et vos horaires, avec un diététicien nutritionniste à Metz.",
  },
  "nutrition-du-sport": {
    title: "Nutrition et sport à Metz | Diamantini Nutrition",
    description:
      "Premiers conseils pour manger mieux quand on fait du sport, et suivi spécialisé en nutrition du sport avec StrongDiet.",
  },
  "maladies-chroniques-et-aigues": {
    title: "Nutrition et maladies chroniques : diététicien à Metz",
    description:
      "Diabète, cancer, dénutrition : un accompagnement nutritionnel personnalisé à Metz, adapté à vos traitements.",
  },
  "approche-dietetique-et-tca": {
    title: "Troubles du comportement alimentaire : diététicien à Metz",
    description:
      "Un accompagnement diététique des TCA à Metz, sans jugement, en coordination avec vos autres soignants.",
  },
};

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = getServicePage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => {
    const url = `https://diamantini-nutrition.fr/${loaderData?.slug}/`;
    const share = loaderData ? social[loaderData.slug] : undefined;
    const ogTitle = share?.title ?? loaderData?.title;
    const ogDescription = share?.description ?? loaderData?.description;
    return {
      meta: [
        { title: loaderData?.title },
        { name: "description", content: loaderData?.description },
        { property: "og:title", content: ogTitle },
        { property: "og:description", content: ogDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: "https://diamantini-nutrition.fr/og.jpg" },
        { property: "og:locale", content: "fr_FR" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: ogTitle },
        { name: "twitter:description", content: ogDescription },
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
