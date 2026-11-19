import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { RDV, STRONGDIET, faqs, reviews, specialties } from "@/data/site";

const offers = [
  "Au cabinet ou en téléconsultation",
  "Dossier diététique sur mesure",
  "Compte rendu à chaque séance",
  "Assistance par mail avec votre diététicien",
];

const sportOffers = [
  "Au cabinet ou en téléconsultation",
  "Optimisation des performances",
  "Récupération & Réathlétisation",
  "Préparation nutritionnelle",
];

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <Specialties />
        <Story />
        <Method />
        <Consultations />
        <Pricing />
        <Faq open={openFaq} setOpen={setOpenFaq} />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-6xl items-end gap-4 px-5 pt-6 pb-44 sm:px-6 md:pb-52 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-2 lg:pt-4 lg:pb-64">
        <div>
          <p className="text-sm font-semibold text-olive lg:text-base">Valentin DIAMANTINI</p>
          <h1 className="mt-2 font-calibri text-[2.6rem] leading-[0.95] font-bold text-ink sm:text-5xl lg:mt-3 lg:text-[4.5rem] lg:leading-[0.9]">
            <span className="block">Diététicien</span> Nutritionniste
            <span className="sr-only"> à Metz</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted lg:mt-7 lg:max-w-none">
            Fort d’une expérience professionnelle hospitalière basée sur la science et sur le comportement
            alimentaire, je vous propose mes compétences pour atteindre vos objectifs.
          </p>
          <a
            href={RDV}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex rounded-full bg-olive px-5 py-2 text-sm font-semibold text-paper hover:bg-olive-deep lg:mt-8 lg:px-8 lg:py-3.5 lg:text-lg"
          >
            Prendre rendez-vous
          </a>
        </div>
        <Portrait />
      </div>
      <Waves />
    </section>
  );
}

function Portrait() {
  return (
    <img
      src="/media/valentin-diamantini-dieteticien-metz.webp"
      srcSet="/media/valentin-diamantini-dieteticien-metz-480.webp 480w, /media/valentin-diamantini-dieteticien-metz-800.webp 800w, /media/valentin-diamantini-dieteticien-metz.webp 1126w"
      sizes="(min-width: 1024px) 32rem, 24rem"
      alt="Valentin Diamantini, diététicien nutritionniste à Metz"
      width={1126}
      height={1122}
      fetchPriority="high"
      decoding="async"
      className="relative z-10 mx-auto w-full max-w-sm lg:max-w-lg"
    />
  );
}

function Waves() {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[20vw] max-h-56 min-h-28 w-full md:h-[15vw]"
      aria-hidden
    >
      <path
        fill="#719a54"
        d="M0 0C240 28 480 52 720 57C960 50 1200 26 1440 0L1440 84C1260 98 1080 100 900 96C680 88 480 72 300 68C160 66 60 74 0 84Z"
      />
    </svg>
  );
}

function Specialties() {
  return (
    <section id="specialites" className="scroll-mt-24 bg-paper px-5 py-14 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold text-balance text-olive sm:text-3xl lg:text-[2rem]">
          Osez une alimentation qui vous ressemble
        </h2>
        <div className="mx-auto mt-5 h-px max-w-5xl bg-olive" />
        <ul className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {specialties.map((item) => (
            <li key={item.id}>
              <article className="flex h-full flex-col items-center rounded-3xl bg-paper px-6 py-8 text-center shadow-card lg:px-8 lg:py-10">
                <h3 className="text-xl font-bold text-balance text-ink lg:text-[1.35rem]">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted lg:mt-5">{item.lead}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted italic lg:mt-5">{item.detail}</p>
                <a
                  href={`/${item.page}`}
                  className="focus-ring mt-auto inline-flex min-h-11 items-center justify-center rounded-full border-0 bg-[#8ecfff] px-5 py-2.5 text-sm font-semibold text-[#102a3a] no-underline"
                >
                  En savoir plus
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="parcours" className="scroll-mt-24 bg-olive text-paper">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 pt-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:gap-12 lg:pt-16">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl lg:mx-0 lg:max-w-none">
          <img
            src="/media/valentin-diamantini-portrait.webp"
            alt="Portrait de Valentin Diamantini, diététicien nutritionniste"
            width={836}
            height={874}
            loading="lazy"
            decoding="async"
            className="h-56 w-full object-cover object-top sm:h-64 lg:h-60"
          />
        </div>
        <div className="text-left">
          <h2 className="font-serif text-3xl leading-tight text-balance lg:text-[2.65rem]">
            Mon histoire, ma passion pour la nutrition.
          </h2>
          <p className="mt-5 text-base leading-7">
            Je m’appelle Valentin Diamantini, je suis <strong>diététicien-nutritionniste</strong>. Cela fait
            plusieurs années que je consulte en <strong>cabinet diététique à Metz</strong>, bienveillance, sens
            de l’écoute et professionnalisme sont des qualités que me donnent mes patients.
          </p>
          <p className="mt-5 text-lg font-bold lg:text-xl">Laissez-moi vous raconter mon histoire...</p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl space-y-5 px-5 pb-12 text-left text-base leading-7 sm:px-6 lg:mt-10 lg:pb-16 lg:text-[17px] lg:leading-8">
        <p>
          Mon parcours a débuté sur les bancs de l’université de Nancy-Brabois, où j’ai obtenu mon{" "}
          <strong>diplôme reconnu de diététicien-nutritionniste</strong>. C’était le premier pas vers ma
          vocation. <strong>La nutrition</strong> n’était pas seulement une discipline à étudier, c’était un
          appel, une passion qui m’a guidé tout au long de ma formation. J’ai continué à me perfectionner,
          enrichissant mes connaissances par des formations, notamment un DIU européen de{" "}
          <strong>nutrition clinique et métabolisme</strong> à Paris. Pour autant, ce n’est qu’en débutant mes
          années d’hôpital que ma formation a pris vie. Chaque patient était une fenêtre ouverte sur le réel
          impact de la diététique sur la santé. L’exigence et la complexité professionnelle de ces années
          d’hôpital ont façonné le soin diététique que je propose aujourd’hui.
        </p>
        <p>
          Imaginez une scène où la précision scientifique rencontre la compréhension et la bienveillance
          humaine : c’est là l’essence de mon approche. À chaque rencontre, une nouvelle histoire où je mets
          en scène une diététique personnalisée, adaptée à la toile de fond unique de la vie de chaque
          patient. En intégrant la dimension non-restrictive, j’œuvre à créer un récit nutritionnel qui
          respecte et valorise les individualités de chacun.
        </p>
      </div>
      <Reviews />
      <div className="relative mt-8 bg-olive-lift">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 pt-8 pb-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:pb-14">
          <p className="font-serif text-2xl text-balance sm:text-3xl lg:text-4xl">
            Besoin d’un <span className="text-lime">suivi</span> diététique ?
          </p>
          <a
            href={RDV}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex rounded-full bg-paper px-7 py-3 text-lg font-semibold text-ink"
          >
            Prendre rendez-vous
          </a>
        </div>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-12 w-full text-paper md:h-16" aria-hidden>
          <path d="M0 18L1440 70V80H0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="methode" className="scroll-mt-24 relative overflow-hidden bg-paper">
      <img
        src="/media/veg-left.webp"
        alt=""
        width={720}
        height={832}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute top-28 left-0 hidden w-44 lg:block xl:left-4 xl:w-56"
      />
      <img
        src="/media/veg-right.webp"
        alt=""
        width={700}
        height={1000}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute top-20 right-0 hidden w-48 lg:block xl:right-2 xl:w-60"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
        <h2 className="text-center text-2xl font-semibold text-balance text-olive sm:text-3xl">
          Une méthode personnalisée sans frustration
        </h2>
        <div className="mx-auto mt-5 h-px max-w-2xl bg-olive/70" />
        <h3 className="mt-10 text-center text-3xl font-medium text-balance text-ink lg:mt-14 lg:text-5xl">
          La Diététique comportementale
        </h3>
      </div>
      <div className="relative mx-auto mt-8 max-w-3xl space-y-6 px-5 text-left text-base leading-7 text-muted sm:px-6 lg:text-[17px] xl:max-w-[min(72rem,max(48rem,calc(100%-34rem)))]">
          <p>
            <strong className="text-ink">Le saviez-vous ? 95% des régimes échouent au bout de 5 ans</strong>,
            c’est ce que rapporte la fameuse étude publiée dans le journal international de l’obésité, soutenue
            par un rapport de l’ANSES (Agence nationale de sécurité sanitaire de l’alimentation). Les{" "}
            <strong className="text-ink">régimes restrictifs</strong>, souvent perçus comme la solution
            miracle, peuvent en réalité devenir un fardeau, entraînant frustration et épuisement. Vous
            êtes-vous déjà senti épuisé par ces promesses non tenues de perte de poids rapide et facile ? Si
            c’est le cas, il est temps de découvrir une approche différente :{" "}
            <strong className="text-ink">la diététique comportementale</strong>, respectueuse de votre corps et
            de vos besoins.
          </p>
          <p>
            La diététique comportementale est une nouvelle approche, en opposition avec l’idée traditionnelle
            des régimes. Oubliez les notions de restriction et de comptage de calories. Cette approche met
            l’accent sur l’écoute et la compréhension du fonctionnement de votre corps.{" "}
            <strong className="text-ink">Manger intuitivement</strong>, reconnaître les signaux de faim et de
            satiété, et <strong className="text-ink">trouver un équilibre</strong> qui respecte votre style de
            vie sont les maîtres mots d’une approche comportementale.
          </p>
          <h3 className="pt-2 text-left text-xl leading-snug font-normal text-ink sm:text-2xl lg:text-[1.65rem]">
            Et si vous pouviez manger ce qui vous fait plaisir, sans les restrictions d’un régime ?
          </h3>
          <p>
            C’est ça la diététique comportementale et le fond de ma pratique ! Une relation avec l’alimentation
            où la culpabilité et les restrictions ne sont plus au centre de vos préoccupations. Un{" "}
            <strong className="text-ink">bien-être durable</strong> où vos repas deviennent source de plaisir
            et non de stress. Je vous accompagne pour redécouvrir le plaisir de manger sainement, sans les
            contraintes des régimes classiques.
          </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-4xl px-5 pb-4 sm:px-6 lg:mt-16">
        <blockquote className="bg-olive px-5 py-8 text-center font-serif text-xl leading-snug text-paper italic sm:px-10 sm:text-2xl lg:px-14 lg:py-10 lg:text-[1.7rem]">
          « La Diététique est l’art de concilier les impératifs de l’Équilibre Alimentaire, du Mode de Vie et
          de la Gastronomie. »
        </blockquote>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:py-16">
        <h2 className="text-center font-serif text-2xl text-olive sm:text-3xl lg:text-4xl">
          Ici, nous ouvrons le chapitre de votre santé.
        </h2>
        <div className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="space-y-5 text-left text-base leading-7 text-muted lg:text-[17px]">
            <p>Grâce à Doctolib, vous pouvez planifier votre visite en quelques clics, à un moment qui vous convient.</p>
            <p>
              Lorsque vous franchissez la porte de mon cabinet, vous êtes accueilli dans un environnement
              chaleureux et rassurant dans lequel vous pourrez parler librement de votre parcours et de vos
              objectifs en nutrition et diététique. Je vous accompagnerai tout au long de votre parcours aussi
              bien pendant les séances qu’entre deux, où je me tiendrai à votre disposition si besoin.
            </p>
          </div>
          <img
            src="/media/assiette-equilibree.webp"
            alt="Assiette équilibrée de légumes, fruits et céréales"
            width={720}
            height={530}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-[16rem] lg:max-w-[18rem]"
          />
        </div>
      </div>

      <p className="mx-auto px-5 text-center text-base leading-7 text-ink sm:px-6 lg:whitespace-nowrap lg:text-2xl lg:leading-snug">
        <strong>Imaginez un moment</strong> : quel pourrait être le paradoxe ultime pour un
        diététicien-nutritionniste ?
      </p>
      <div className="mx-auto mt-4 max-w-4xl px-5 pb-14 text-left text-base leading-7 text-muted sm:px-6 lg:mt-14 lg:max-w-6xl lg:pb-16 lg:text-[17px]">
        <p>
          <strong className="text-ink">Ne pas utiliser de balance !</strong> Dans mon cabinet, oubliez
          l’anxiété liée aux chiffres et au contrôle constant du poids. Qu’est-ce qui compte le plus pour vous
          ? Le confort de vos vêtements, votre bien-être corporel, votre reflet dans le miroir ? Notre objectif
          est de travailler sur vos besoins spécifiques et les sources du problème, pas seulement sur les
          résultats mesurés par une balance. La consultation se concentre sur tous les aspects qui font de vous
          une personne à part entière.
        </p>
      </div>
    </section>
  );
}

function Consultations() {
  return (
    <section id="consultations" className="scroll-mt-24 bg-paper">
      <div className="bg-mint">
        <div className="mx-auto max-w-3xl px-5 pt-12 pb-4 text-center sm:px-6 lg:pt-16">
          <h2 className="text-3xl font-medium sm:text-4xl lg:text-5xl">Les Consultations</h2>
          <p className="mt-5 text-base leading-7 text-muted lg:text-[17px]">
            Chaque <strong className="text-ink">consultation</strong> est un moment précieux consacré à votre
            santé et à votre bien-être. Nous prenons le temps nécessaire, jusqu’à une heure, pour une
            consultation initiale approfondie et des suivis personnalisés.
          </p>
        </div>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-12 w-full text-paper md:h-16" aria-hidden>
          <path d="M0 40C360 90 900 0 1440 48V80H0Z" fill="currentColor" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-8 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-12">
        <article className="text-left">
          <h3 className="text-center text-2xl font-medium">La Consultation initiale</h3>
          <p className="mt-5 text-base leading-7 text-muted">
            La première rencontre est cruciale : c’est l’occasion pour moi d’apprendre à vous connaître. En
            discutant de votre mode de vie, de vos antécédents médicaux, et de vos objectifs, nous posons les
            fondations de votre parcours ainsi que les premiers{" "}
            <strong className="text-ink">conseils nutritionnels</strong>.
          </p>
        </article>
        <article className="text-left">
          <h3 className="text-center text-2xl font-medium">Les Consultations de suivi</h3>
          <p className="mt-5 text-base leading-7 text-muted">
            Les consultations de suivi sont des jalons essentiels et nécessaires dans la prise en charge. Elles
            servent à{" "}
            <strong className="text-ink">ajuster les recommandations et les stratégies diététiques</strong> en
            fonction de votre évolution et de vos retours, assurant ainsi une approche véritablement
            personnalisée et adaptée à vos besoins.
          </p>
        </article>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="tarifs" className="scroll-mt-24 bg-olive px-5 py-14 text-paper sm:px-6 lg:py-20">
      <h2 className="text-center text-3xl font-medium sm:text-4xl lg:text-5xl">Tarif des consultations</h2>
      <div className="mx-auto mt-10 grid max-w-sm gap-6 lg:max-w-3xl lg:grid-cols-2">
        <article className="flex flex-col rounded-3xl bg-paper px-8 py-10 text-center text-ink shadow-card">
          <h3 className="text-lg font-bold">Consultation diététique</h3>
          <p className="mt-2 text-6xl leading-none font-medium tracking-tight md:text-7xl">60€</p>
          <p className="mt-3 italic text-apple">Durée 45 minutes à 1 heure</p>
          <ul className="mt-6 space-y-3 text-sm md:text-base">
            {offers.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <a
            href={RDV}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-auto inline-flex w-full items-center justify-center rounded-md bg-lime px-4 py-3 pt-3 text-sm font-bold text-night md:text-base"
          >
            Prenez rendez-vous dès maintenant
          </a>
        </article>
        <article className="flex flex-col rounded-3xl bg-night px-8 py-10 text-center text-paper shadow-card">
          <p className="text-xl font-black tracking-wide text-[#e0c15a] md:text-2xl">
            <span className="text-paper">STRONG</span>DIET
          </p>
          <h3 className="mt-1 text-lg font-bold">Nutrition du sportif</h3>
          <img
            src="/media/strongdiet-logo.webp"
            alt="StrongDiet, nutrition du sport"
            width={640}
            height={482}
            loading="lazy"
            decoding="async"
            className="mx-auto mt-2 h-16 w-auto md:h-[4.5rem]"
          />
          <p className="mt-3 text-base font-bold italic text-[#e0c15a] md:text-lg">
            Accompagnement nutritionnel
            <br />
            issu du haut niveau
          </p>
          <ul className="mt-6 mb-8 space-y-3 text-sm md:text-base">
            {sportOffers.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <a
            href={STRONGDIET}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-auto inline-flex w-full items-center justify-center rounded-md bg-[#e0c15a] px-4 py-3 pt-3 text-sm font-bold text-night md:text-base"
          >
            En savoir plus
          </a>
        </article>
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-paper/95">
        Certaines complémentaires santé prennent en charge une ou plusieurs consultations.
        <br />
        Renseignez-vous auprès de votre complémentaire ou mutuelle pour plus d’informations !
      </p>
    </section>
  );
}

function GoogleMark({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size} aria-hidden className="block shrink-0">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

const GOOGLE_AVIS = "https://www.google.com/maps/search/?api=1&query=Diamantini+Nutrition+Metz";

function Reviews() {
  const scroller = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [pages, setPages] = useState(reviews.length);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const sync = () => {
      const wide = window.matchMedia("(min-width: 1024px)").matches;
      const step = wide ? 3 : 1;
      const count = Math.ceil(reviews.length / step);
      setPages(count);
      const children = [...el.children] as HTMLElement[];
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      for (let page = 0; page < count; page += 1) {
        const child = children[page * step];
        if (!child) continue;
        const dist = Math.abs(child.offsetLeft - el.offsetLeft - el.scrollLeft);
        if (dist < bestDist) {
          best = page;
          bestDist = dist;
        }
      }
      setIndex(best);
    };

    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  function go(next: number) {
    const el = scroller.current;
    if (!el) return;
    const step = window.matchMedia("(min-width: 1024px)").matches ? 3 : 1;
    const child = el.children[next * step] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }

  return (
    <section id="avis" className="bg-mint px-5 py-14 sm:px-6 lg:py-16" aria-label="Ils m’ont fait confiance">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl text-olive sm:text-4xl">Ils m’ont fait confiance</h2>
        <a
          href={GOOGLE_AVIS}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mx-auto mt-5 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full bg-paper px-4 py-2 text-ink shadow-sm"
        >
          <span className="p-1">
            <GoogleMark size={28} />
          </span>
          <span className="text-sm font-semibold">Avis Google</span>
          <span className="tracking-wide text-[#FBBC05]" aria-hidden>
            ★★★★★
          </span>
          <span className="text-sm text-muted">4,9/5 · 63 avis</span>
        </a>
        <div className="mt-10 flex items-center gap-3 lg:mt-12 lg:gap-4">
          <button
            type="button"
            className="focus-ring hidden size-11 shrink-0 place-items-center rounded-full bg-olive text-paper disabled:opacity-40 lg:grid"
            aria-label="Avis précédent"
            disabled={index === 0}
            onClick={() => go(index - 1)}
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <ul
            ref={scroller}
            className="flex w-full snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] lg:snap-none lg:gap-6 lg:overflow-x-hidden [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => (
              <li key={review.name} className="w-[86%] shrink-0 snap-start lg:w-[calc((100%-3rem)/3)]">
                <article className="relative flex h-full flex-col rounded-3xl bg-paper px-6 py-7 text-left shadow-card">
                  <span className="absolute top-5 right-5 p-1">
                    <GoogleMark size={18} />
                  </span>
                  <p className="text-lg tracking-wide text-olive" aria-label="5 étoiles">
                    ★★★★★
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{review.text}</p>
                  <p className="mt-5 text-sm font-semibold text-ink">
                    {review.name}
                    <span className="mt-1 block tracking-wide text-[#FBBC05]" aria-hidden>
                      ★★★★★
                    </span>
                    <span className="mt-1 block text-xs font-normal text-muted">{review.reason}</span>
                  </p>
                </article>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="focus-ring hidden size-11 shrink-0 place-items-center rounded-full bg-olive text-paper disabled:opacity-40 lg:grid"
            aria-label="Avis suivant"
            disabled={index >= pages - 1}
            onClick={() => go(index + 1)}
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Avis affichés">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Avis ${i + 1}`}
              className="focus-ring flex h-6 w-6 items-center justify-center"
              onClick={() => go(i)}
            >
              <span className={`size-2.5 rounded-full ${i === index ? "bg-olive" : "bg-olive/35"}`} />
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={GOOGLE_AVIS}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-olive px-6 py-3 text-center text-sm font-semibold text-paper sm:text-base"
          >
            <span className="rounded-full bg-paper p-1">
              <GoogleMark size={18} />
            </span>
            Voir tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}

function Faq({ open, setOpen }: { open: number | null; setOpen: (n: number | null) => void }) {
  const columns = [faqs.slice(0, 4), faqs.slice(4)];
  return (
    <section id="faq" className="scroll-mt-24 bg-paper px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <img
          src="/media/diamantini-nutrition-symbole.webp"
          alt=""
          width={635}
          height={800}
          loading="lazy"
          decoding="async"
          className="mx-auto h-28 w-auto sm:h-36 lg:h-44"
        />
        <h2 className="mt-4 text-center text-3xl font-medium sm:text-4xl lg:text-5xl">Les Questions Fréquentes</h2>
        <div className="mt-8 grid items-start gap-3 lg:mt-12 lg:grid-cols-2 lg:gap-5">
          {columns.map((col, colIndex) => (
            <ul key={colIndex} className="flex flex-col gap-4">
              {col.map((item) => {
                const index = faqs.indexOf(item);
                const isOpen = open === index;
                return (
                  <li key={item.q} className="rounded-sm border border-[#e6e6e6] bg-[#f3f3f3]">
                    <button
                      type="button"
                      className="focus-ring flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-[15px] font-normal sm:px-5 sm:text-base"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : index)}
                    >
                      <span>{item.q}</span>
                      <span className="grid size-7 shrink-0 place-items-center rounded-full border border-ink/20 text-muted">
                        {isOpen ? <Minus className="size-4" aria-hidden /> : <Plus className="size-4" aria-hidden />}
                      </span>
                    </button>
                    <div className="acc-panel" data-open={isOpen}>
                      <div>
                        <p className="px-5 pb-5 leading-relaxed text-muted">{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
