export const RDV =
  "https://www.doctolib.fr/dieteticien/metz/valentin-diamantini/booking/specialities";

export const STRONGDIET = "https://www.strongdiet-nutrition.com/";

export const PHONE_DISPLAY = "07 82 59 31 10";
export const PHONE_TEL = "+33782593110";

export const nav = [
  { href: "/#specialites", label: "Spécialités" },
  { href: "/sante-au-travail", label: "Santé au travail" },
  { href: "/#parcours", label: "Parcours" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#consultations", label: "Consultations" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export type Specialty = {
  id: string;
  title: string;
  lead: string;
  detail: string;
  page: string;
};

export const specialties: Specialty[] = [
  {
    id: "perte-de-poids",
    page: "perte-de-poids",
    title: "Perte de poids",
    lead: "Tout commence par une alimentation équilibrée. Oubliez les régimes restrictifs : ici, juste de la patience et de l’écoute.",
    detail: "Surpoids, obésité ou toute perte de poids chez l’adulte, l’enfant ou l’adolescent.",
  },
  {
    id: "troubles-digestifs",
    page: "troubles-digestifs",
    title: "Troubles digestifs",
    lead: "La clé pour soulager les troubles digestifs réside dans la compréhension de votre corps et de votre alimentation.",
    detail: "Syndrome de l’intestin irritable, colopathie fonctionnelle, reflux gastro-œsophagiens.",
  },
  {
    id: "equilibre",
    page: "equilibre-alimentaire",
    title: "Équilibre alimentaire",
    lead: "Éducation et prévention en nutrition santé pour celles et ceux qui souhaitent comprendre ce que l’on mange.",
    detail: "Santé, bien-être, micronutrition, gastronomie et techniques culinaires.",
  },
  {
    id: "nutrition-sport",
    page: "nutrition-du-sport",
    title: "Nutrition du sport",
    lead: "Cibler les objectifs, connaître les impératifs nutritionnels pour une performance physique durable chez le sportif ou chez l’athlète de haut niveau.",
    detail: "Athlétisation, réathlétisation et optimisation nutritionnelle chez le sportif et athlète de haut niveau.",
  },
  {
    id: "maladies",
    page: "maladies-chroniques-et-aigues",
    title: "Maladies aigues et chroniques",
    lead: "Un accompagnement et un suivi nutritionnel individualisé reposant sur la science, la diététique thérapeutique et le métabolisme.",
    detail: "Cancer, maladies inflammatoires, diabète, allergies et intolérances.",
  },
  {
    id: "tca",
    page: "approche-dietetique-et-tca",
    title: "Troubles du comportement alimentaire (TCA)",
    lead: "Valoriser la bienveillance et retrouver un plaisir par une approche sans jugement, proche de vos besoins.",
    detail: "Boulimie, anorexie, hyperphagie, orthorexie nerveuse et tout autre trouble alimentaire associé.",
  },
];

export const faqs = [
  {
    q: "Quel est le rôle d'une diététicienne-nutritionniste ?",
    a: "Une diététicienne-nutritionniste, ou un diététicien-nutritionniste, est un professionnel de santé diplômé qui accompagne des patients dans la réalisation de leurs objectifs. Son travail se fait par des recommandations ou des conseils diététiques qui ont pour but d’apporter du confort en respectant la santé du patient. Il est un spécialiste de la nutrition du sport, de l’obésité et du surpoids, de la perte de poids, des troubles du comportement alimentaire, de la nutrition chez l’enfant et également de certaines maladies (cancer, diabète…).",
  },
  {
    q: "Quelle est la différence entre un nutritionniste et un diététicien ?",
    a: "La mention de nutritionniste est destinée aux médecins qui ont suivi un cursus universitaire de médecine et qui se sont spécialisés en nutrition grâce à un diplôme supplémentaire. Le diététicien, ou la diététicienne, possède un diplôme d’État obtenu après des années de formation lui permettant d’exercer en profession libérale et en milieu hospitalier. Nutritionniste est un adjectif ne pouvant être utilisé que par ces deux professionnels.",
  },
  {
    q: "Quel professionnel pour perdre du poids ?",
    a: "Pour toute perte de poids, un rééquilibrage alimentaire ou une rééducation alimentaire peuvent être suffisants pour entamer une diminution pondérale durable. Cette demande se fait par une prise de rendez-vous auprès d’un diététicien diplômé d’État. Dans certains cas, un médecin nutritionniste peut accompagner le patient lorsqu’une pathologie complémentaire s’associe à une demande de perte de poids. Le travail du diététicien est plus concret et ciblé sur les besoins du patient, ce qui fait que la collaboration avec le médecin nutritionniste augmente les chances de réussites nutritionnelles.",
  },
  {
    q: "Qui est remboursé entre le nutritionniste ou le diététicien ?",
    a: "Le remboursement des consultations effectuées par le diététicien n’est pas pris en charge par la Sécurité sociale, mais certaines mutuelles ou complémentaires santé peuvent rembourser les consultations diététiques. En revanche, les soins proposés par le médecin nutritionniste sont pris en charge par la Sécurité sociale.",
  },
  {
    q: "Comment choisir un bon nutritionniste ?",
    a: "Un diététicien-nutritionniste, ou une diététicienne-nutritionniste, répond à une déontologie professionnelle. Il s’engage à avoir une pratique objective, doit justifier ses conseils par des recommandations et des études scientifiques rigoureuses, appuyées par un processus de formation continue. En consultation, il se doit d’écouter, de conseiller, d’éduquer ou de soigner, et de dispenser les prestations les plus adaptées par rapport au besoin du patient. Le praticien ne doit pas dispenser de conseils affectant négativement la santé du patient à court ou à long terme. Il doit faire preuve d’une transparence sur tout conflit d’intérêts (Charte AFDN).",
  },
  {
    q: "Comment se passe un rdv chez une diététicienne ?",
    a: "La diététicienne, ou le diététicien, établit un bilan complet en relevant les antécédents médicaux, l’histoire de vie du patient et son état de santé. Ce bilan permet de cibler le comportement alimentaire et les problématiques nutritionnelles. Chaque consultation ou rendez-vous permet de fixer des objectifs atteignables pour des résultats durables.",
  },
  {
    q: "Combien de temps dure une consultation ?",
    a: "Une consultation diététique avec un diététicien-nutritionniste dure en moyenne 1 heure pour la consultation initiale et entre 45 minutes et 1 heure pour les consultations de suivi. Les séances doivent être suffisamment longues pour pouvoir aborder d’une manière optimale la problématique initiale et fixer des objectifs adaptés.",
  },
];

export const GOOGLE_REVIEWS =
  "https://www.google.com/maps/search/?api=1&query=Diamantini+Valentin+diététicien+nutritionniste+5+Rue+Xavier+Roussel+57050+Metz";

export const reviews = [
  {
    text: "Sur les conseils de mon médecin traitant, je suis suivi depuis 8 mois par Valentin. Il m’a accompagné dans ma démarche de perte de poids par une approche personnalisée, non frustrante et surtout pédagogique. Résultat : j’ai perdu durablement 25 kilos. Nous ne parlons jamais de régime mais d’aliments, de petits plats équilibrés. Valentin est non seulement professionnel mais sa démarche est empathique. C’est une belle rencontre.",
    name: "Gilles P.",
    reason: "perte de poids",
  },
  {
    text: "Un suivi personnalisé et adapté sans pression même si parfois on échoue. De nombreux conseils et une approche différente de l’équilibre alimentaire et des régimes. Très patient, à l’écoute et disponible, je le recommande sincèrement. Le petit plus : les fiches résumé de chaque rendez-vous. Grâce à lui, j’ai pu stabiliser mon poids depuis plusieurs mois. Un énorme merci !",
    name: "Anne-Laure W.",
    reason: "stabilisation du poids",
  },
  {
    text: "Valentin Diamantini est un excellent diététicien. Pour avoir suivi ses conseils, j’ai obtenu de très bons résultats, sans aucune frustration. J’avais un gros a priori de départ et pensais devoir subir les aléas des régimes traditionnels. Mais bien au contraire, j’ai rencontré quelqu’un qui transmet le goût, quelqu’un qui donne envie de bien manger. Merci Valentin !",
    name: "Marc D.",
    reason: "rééquilibrage alimentaire",
  },
  {
    text: "Après plusieurs régimes qui n’ont jamais porté leurs fruits, j’ai rencontré Valentin dans l’espoir de perdre mes kilos en trop sur le long terme, en évitant l’effet yo-yo. Il a complètement changé ma relation avec l’alimentation en m’aidant à prendre conscience de mes comportements alimentaires. Je ne culpabilise plus du tout à me faire plaisir. Vous pouvez prendre rendez-vous les yeux fermés !",
    name: "Vincent L.",
    reason: "perte de poids durable",
  },
  {
    text: "Valentin ne vous vendra pas de recettes miracles pour perdre 10 kg en une semaine et en reprendre 20 le mois suivant. Il vous mettra face à vos habitudes alimentaires pour vous faire prendre conscience de ce qu’il y a à modifier. Vous pouvez y aller les yeux fermés ! Cerise sur le gâteau, il est sympa, que demander de plus !",
    name: "Virginie M.",
    reason: "habitudes alimentaires",
  },
  {
    text: "10 kg perdus, un changement de rapport à l’alimentation, beaucoup moins de culpabilité et un mieux-être indéniable. Valentin est bienveillant, à l’écoute, rassurant, et la relation de confiance s’installe au fil des séances. Après plusieurs expériences ratées chez d’autres diététiciens, son approche n’a rien à voir et je la recommande.",
    name: "Christel P.",
    reason: "perte de poids",
  },
  {
    text: "Très heureuse des conseils reçus de Valentin pour m’aider à gérer une maladie du côlon ! 2 séances et déjà je n’ai plus les douleurs que je pouvais avoir au quotidien. Maintenant je mange en pleine conscience, je mastique et j’écoute mon estomac ! Merci Valentin pour votre écoute et votre gentillesse.",
    name: "Sandrine D.",
    reason: "troubles digestifs",
  },
  {
    text: "Je l’ai consulté dans le cadre d’un traitement médicamenteux lourd qui pourrait entraîner une prise de poids. Il a été extrêmement pédagogue, m’expliquant précisément les effets de ce traitement et la manière dont j’allais pouvoir les contrer grâce à un bon équilibre nutritionnel. Des professionnels à l’écoute et capables de bien expliquer, j’ai trouvé tout cela chez Monsieur Diamantini.",
    name: "Aure L.",
    reason: "accompagnement pendant un traitement",
  },
  {
    text: "Un professionnel bienveillant, à l’écoute et très pédagogue. Contrairement à d’autres approches restrictives, il prend le temps de comprendre nos habitudes, nos émotions et notre mode de vie. Son approche progressive permet d’adopter de nouvelles habitudes sans frustration. J’ai retrouvé du plaisir dans mon alimentation.",
    name: "Adriano",
    reason: "nouvelles habitudes",
  },
] as const;

export const addresses = [
  {
    city: "Metz",
    lines: ["5 rue Xavier Roussel", "57050 Metz"],
    maps: "https://maps.google.com/?q=5+Rue+Xavier+Roussel+57050+Metz",
  },
];

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Dieteticien.nutritionniste.metz",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/diamantini_nutrition/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/valentin-diamantini-605b25155/",
  },
];
