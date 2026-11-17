import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { RDV, STRONGDIET } from "@/data/site";
import pages from "@/data/service-pages.json";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

type LinkPair = [string, string];
type Block = { type: "h1" | "h2" | "h3" | "p" | "cta"; text?: string; id?: string; kind?: "intro" | "mid" | "end" };
export type ServicePageData = {
  slug: string;
  moduleId: string;
  crumb: string;
  title: string;
  description: string;
  ctaAfter: string;
  links: LinkPair[];
  h1: string;
  blocks: Block[];
};

export const servicePages = pages as ServicePageData[];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

const emphasis: Record<string, string[]> = {
  "perte-de-poids": [
    "habitudes alimentaires compatibles avec votre vie",
    "La balance ne résume pas votre santé.",
    "Le travail ne repose pas sur une liste universelle d’aliments autorisés et interdits.",
    "Il n’est pas nécessaire d’avoir déjà modifié votre alimentation",
    "des actions concrètes à essayer entre deux séances",
    "elle ne signifie pas que vous manquez de volonté",
    "Cette autonomie se construit progressivement",
    "Votre expérience est une partie importante du bilan.",
  ],
  "troubles-digestifs": [
    "construire une alimentation adaptée à votre situation",
    "Mon parcours en gastro-entérologie et en chirurgie digestive",
    "Un aliment présent avant un symptôme n’en est pas forcément la cause.",
    "rendre un repas plus confortable",
    "des possibilités de diversification et des alternatives adaptées",
    "La réponse dépend du diagnostic et de votre tolérance.",
    "la réintroduction fait partie du travail dès le départ",
    "Vous n’avez pas besoin d’identifier vous-même l’aliment responsable avant de consulter.",
  ],
  "equilibre-alimentaire": [
    "des repères adaptés à vos besoins",
    "sans avoir nécessairement un objectif de perte de poids",
    "suffisamment régulière et suffisamment souple",
    "vous rendre plus autonome",
    "des restes faciles à réutiliser ou à une préparation rapide",
    "Les changements retenus doivent répondre à votre priorité",
    "sans dépendre d’un menu unique",
    "progressif, compréhensible et ajustable à votre vie",
  ],
  "nutrition-du-sport": [
    "relier votre alimentation aux exigences de votre discipline",
    "aux pratiquants amateurs comme aux compétiteurs",
    "Les stratégies envisagées sont testées à l’entraînement lorsque cela est pertinent",
    "l’ensemble de votre alimentation et de votre préparation",
    "votre discipline, vos objectifs, votre calendrier et vos habitudes alimentaires",
    "Une stratégie doit rester réalisable dans les conditions où vous pratiquez.",
    "Une préparation sportive évolue ; les conseils peuvent évoluer avec elle.",
    "Préparation Nutritionnelle A2P",
  ],
  "maladies-chroniques-et-aigues": [
    "en tenant compte des consignes médicales",
    "Votre confort, vos besoins et votre qualité de vie",
    "maintenir des apports suffisants",
    "La consultation diététique complète les soins médicaux.",
    "une organisation différente ou un enrichissement adapté",
    "des objectifs concrets, adaptés à la période que vous traversez",
    "des solutions pour les jours où l’énergie manque",
    "conseils compréhensibles, ajustables et cohérents avec votre parcours de soins",
  ],
  "approche-dietetique-et-tca": [
    "Votre souffrance mérite d’être entendue",
    "Il n’est pas nécessaire d’attendre une aggravation visible.",
    "une alimentation plus régulière et suffisante",
    "Les étapes sont préparées et discutées ensemble.",
    "Vous n’avez pas à préparer un récit parfaitement organisé pour être accueilli.",
    "Les échanges utiles au soin sont organisés avec vous",
    "Vous pouvez demander de l’aide pour une souffrance alimentaire sans disposer d’un diagnostic.",
    "Demander de l’aide ne vous oblige pas à avoir déjà toutes les réponses.",
  ],
};

function richText(text: string, links: LinkPair[], phrases: string[]) {
  const marks: { start: number; end: number; href?: string; strong?: boolean }[] = [];
  for (const [phrase, href] of links) {
    const start = text.indexOf(phrase);
    if (start >= 0) marks.push({ start, end: start + phrase.length, href });
  }
  for (const phrase of phrases) {
    let from = 0;
    while (from < text.length) {
      const start = text.indexOf(phrase, from);
      if (start < 0) break;
      marks.push({ start, end: start + phrase.length, strong: true });
      from = start + phrase.length;
    }
  }
  const points = new Set([0, text.length]);
  for (const mark of marks) {
    points.add(mark.start);
    points.add(mark.end);
  }
  const cuts = [...points].sort((a, b) => a - b);
  const slices = cuts.slice(0, -1).map((start, index) => {
    const end = cuts[index + 1];
    const href = marks.find((mark) => mark.href && mark.start <= start && mark.end >= end)?.href;
    const strong = marks.some((mark) => mark.strong && mark.start <= start && mark.end >= end);
    return { text: text.slice(start, end), href, strong };
  });

  const nodes = [];
  for (let index = 0; index < slices.length; ) {
    const slice = slices[index];
    if (!slice.href) {
      nodes.push(
        slice.strong ? (
          <strong key={index} className="font-bold">
            {slice.text}
          </strong>
        ) : (
          <span key={index}>{slice.text}</span>
        ),
      );
      index += 1;
      continue;
    }
    const run = [slice];
    let next = index + 1;
    while (next < slices.length && slices[next].href === slice.href) {
      run.push(slices[next]);
      next += 1;
    }
    const external = slice.href.startsWith("http");
    nodes.push(
      <a
        key={index}
        href={slice.href}
        className="text-ink underline decoration-[#2b78d6] decoration-2 underline-offset-2"
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {run.map((part, partIndex) =>
          part.strong ? (
            <strong key={partIndex} className="font-bold">
              {part.text}
            </strong>
          ) : (
            <span key={partIndex}>{part.text}</span>
          ),
        )}
      </a>,
    );
    index = next;
  }
  return nodes;
}

function PrimaryButton({ href, children, onDark = false }: { href: string; children: string; onDark?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`focus-ring inline-flex min-h-12 items-center rounded-full px-7 text-xl font-bold text-paper ${onDark ? "bg-olive-deep hover:bg-ink" : "bg-olive hover:bg-olive-deep"}`}
    >
      {children}
    </a>
  );
}

function TextLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="focus-ring inline-flex min-h-12 items-center text-xl font-bold text-link">
      {children}
    </a>
  );
}

function Cta({ kind, sommaire, calm }: { kind: "intro" | "mid" | "end"; sommaire?: string; calm?: boolean }) {
  if (kind === "end") {
    return (
      <div className="relative -mx-5 mt-14 bg-olive-lift text-paper sm:-mx-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-serif text-2xl text-balance text-paper sm:text-3xl">
            Besoin d’un <span className="text-lime">suivi</span> diététique ?
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href={RDV} onDark>
              Prendre rendez-vous
            </PrimaryButton>
            {calm ? null : <TextLink href="/#contact">Poser une question</TextLink>}
            {calm ? (
              <a href="/#contact" className="focus-ring text-lg font-semibold text-paper underline decoration-paper/70 underline-offset-4">
                Poser une question
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-7 flex flex-wrap items-center gap-4">
      <PrimaryButton href={RDV}>Prendre rendez-vous</PrimaryButton>
      {kind === "intro" ? <TextLink href={sommaire ?? "#consultations"}>Comprendre le suivi</TextLink> : null}
    </div>
  );
}

function Portrait({ soft, src, alt, shift = "" }: { soft: string; src?: string; alt?: string; shift?: string }) {
  return (
    <div className={`relative mx-auto w-[17.5rem] max-w-full sm:w-[20rem] lg:ml-auto lg:mr-0 lg:w-[22rem] ${shift}`}>
      <img
        src={src ?? "/media/portrait.webp"}
        alt={src ? (alt ?? "Illustration") : "Valentin Diamantini, diététicien-nutritionniste"}
        width={911}
        height={1400}
        className={`relative z-0 w-full ${src ? "aspect-[911/1400] object-contain" : ""}`}
      />
      <svg viewBox="0 0 390 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-[-12%] bottom-0 z-10 h-[30%] w-[124%] lg:hidden" aria-hidden>
        <path fill={soft} d="M0 96C70 78 130 110 200 64C270 18 330 36 390 58V180H0Z" />
      </svg>
    </div>
  );
}

const headerTones: Record<string, { strong: string; soft: string }> = {
  "approche-dietetique-et-tca": { strong: "#d584f8", soft: "#f3ddfd" },
  "perte-de-poids": { strong: "#719a54", soft: "#e8f6ca" },
  "troubles-digestifs": { strong: "#5d8444", soft: "#e8f6ca" },
  "equilibre-alimentaire": { strong: "#8fb56f", soft: "#e8f6ca" },
  "nutrition-du-sport": { strong: "#7fa465", soft: "#e8f6ca" },
  "maladies-chroniques-et-aigues": { strong: "#719a54", soft: "#e8f6ca" },
};

function HeroDecor({ strong, soft }: { strong: string; soft: string }) {
  return (
    <>
      <svg viewBox="0 0 120 860" preserveAspectRatio="none" className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden h-full w-[6.25rem] lg:block" aria-hidden>
        <path fill={strong} d="M0 20C48 48 108 110 108 210C108 318 18 372 14 468C10 548 72 608 86 700C98 786 20 828 0 860Z" />
      </svg>
      <svg viewBox="0 0 390 90" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-0 z-0 h-16 w-full lg:hidden" aria-hidden>
        <path fill={strong} d="M0 0H390V36C320 78 240 28 150 52C80 70 30 48 0 36Z" />
      </svg>
      <svg viewBox="0 0 320 460" preserveAspectRatio="none" className="pointer-events-none absolute top-0 right-0 z-0 hidden h-[24rem] w-[18rem] lg:block" aria-hidden>
        <path fill={strong} d="M320 0H190C120 36 48 120 36 210C20 320 90 420 190 460H320Z" />
      </svg>
      <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-[34%] w-full lg:block" aria-hidden>
        <path fill={soft} d="M640 400C820 400 940 300 1080 180C1200 80 1320 70 1440 130V400Z" />
      </svg>
    </>
  );
}

const heroes: Record<string, { h2: string; lead: string; emphasis?: boolean }> = {
  "perte-de-poids": {
    h2: "Perte de poids à Metz",
    lead: "Un accompagnement diététique adapté à votre vie",
  },
  "troubles-digestifs": {
    h2: "Troubles digestifs & Nutrition à Metz",
    lead: "Adaptez votre alimentation avec un diététicien",
  },
  "equilibre-alimentaire": {
    h2: "Équilibre alimentaire à METZ",
    lead: "Des repères simples pour votre quotidien",
  },
  "maladies-chroniques-et-aigues": {
    h2: "Maladies chroniques et nutrition à METZ",
    lead: "Adaptez votre alimentation à vos soins",
    emphasis: true,
  },
  "approche-dietetique-et-tca": {
    h2: "Trouble du comportement alimentaire à METZ",
    lead: "Un accompagnement diététique sans jugement",
    emphasis: true,
  },
};

function textWidth(slug: string, id: string) {
  if (slug === "perte-de-poids" && id !== "consultations") return "max-w-6xl";
  if (slug === "troubles-digestifs" && id !== "adaptations") return "max-w-4xl";
  if (slug === "equilibre-alimentaire" && id === "definition") return "max-w-5xl";
  return "max-w-3xl";
}

export function ServicePage({ page }: { page: ServicePageData }) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const intro: Block[] = [];
  const sections: { id: string; title: string; blocks: Block[] }[] = [];
  for (const block of page.blocks) {
    if (block.type === "h2") {
      sections.push({ id: block.id ?? "", title: block.text ?? "", blocks: [] });
    } else if (sections.length === 0) {
      intro.push(block);
    } else {
      sections[sections.length - 1].blocks.push(block);
    }
  }
  const firstSection = sections[0]?.id ? `#${sections[0].id}` : "#contenu";
  const calm = page.slug === "approche-dietetique-et-tca";
  const hero = heroes[page.slug];
  const tone = headerTones[page.slug] ?? headerTones["perte-de-poids"];
  const airy = page.slug === "troubles-digestifs" || calm;
  const titleClass = "font-calibri text-3xl leading-[1.05] font-bold text-balance text-ink sm:text-4xl lg:text-[3.15rem] lg:leading-[1.02]";
  const leadClass = "mt-4 max-w-[34rem] text-xl leading-snug text-ink sm:text-2xl";

  return (
    <>
      <SiteHeader />
      <main id="contenu" className="bg-paper text-ink">
        <section className="relative isolate overflow-hidden bg-paper">
          <HeroDecor strong={tone.strong} soft={tone.soft} />
          <div className={`relative z-10 mx-auto grid w-full max-w-[90rem] items-start gap-8 px-5 pt-16 pb-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16 lg:px-0 lg:py-12 lg:pr-16 lg:pl-40 ${airy ? "lg:pt-14" : ""}`}>
            <div className="relative z-30 order-1">
              <nav aria-label="Fil d’Ariane" className="text-sm text-muted">
                <a href="/" className="text-ink underline decoration-[#2b78d6] underline-offset-2">
                  Accueil
                </a>
                <span aria-hidden> › </span>
                <span>{page.crumb}</span>
              </nav>
              <h1 className="mt-5 text-sm font-semibold text-olive lg:text-base">{page.crumb}</h1>
              {hero ? (
                <>
                  <h2 className={`mt-2 ${titleClass}`}>{hero.h2}</h2>
                  <p className={`${leadClass} ${hero.emphasis ? "font-bold italic" : ""}`}>{hero.lead}</p>
                </>
              ) : (
                <h1 className={`mt-2 ${titleClass}`}>{page.h1}</h1>
              )}
              <div className="service-copy mt-5 max-w-[68ch] space-y-4 text-base leading-7 text-muted lg:text-[17px]">
                {intro.map((block, index) =>
                  block.type === "p" ? <p key={index}>{richText(block.text ?? "", page.links, emphasis[page.slug] ?? [])}</p> : null,
                )}
              </div>
              {intro.map((block, index) =>
                block.type === "cta" ? <Cta key={index} kind="intro" sommaire={firstSection} calm={calm} /> : null,
              )}
            </div>
            <div className="relative z-10 order-2 lg:mt-4">
              <Portrait
              soft={tone.soft}
              src={
                page.slug === "perte-de-poids"
                  ? "/media/perte-silhouette.webp"
                  : page.slug === "troubles-digestifs"
                    ? "/media/digestifs-intestin-2.webp"
                    : page.slug === "maladies-chroniques-et-aigues"
                      ? "/media/maladies-coeur.webp"
                      : undefined
              }
              alt={
                page.slug === "troubles-digestifs"
                  ? "Illustration d’un intestin pour les troubles digestifs"
                  : page.slug === "maladies-chroniques-et-aigues"
                    ? "Illustration d’un cœur tenu dans une main pour les maladies chroniques"
                    : "Illustration d’une silhouette pour la perte de poids"
              }
              shift={
                page.slug === "perte-de-poids"
                  ? "lg:-translate-x-36"
                  : page.slug === "troubles-digestifs" || page.slug === "maladies-chroniques-et-aigues"
                    ? "lg:-translate-x-10"
                    : ""
              }
            />
            </div>
          </div>
        </section>

        <nav aria-label="Sur cette page" className="bg-paper px-5 py-6 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold text-olive">Sur cette page</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="focus-ring inline-flex rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {page.slug === "equilibre-alimentaire" ? (
          <figure className="bg-mint px-5 py-12 sm:px-6">
            <img
              src="/media/plate.webp"
              alt="Assiette de légumes, fruits et céréales"
              width={720}
              height={530}
              className="mx-auto w-full max-w-lg rounded-[2.5rem]"
            />
          </figure>
        ) : null}

        {sections.map((section, index) => {
          const faq = section.id === "faq";
          const dark = section.id === "strongdiet";
          const mint = !dark && !faq && index % 2 === 1;
          let step = 0;
          const framed =
            (page.slug === "perte-de-poids" && section.id === "situations") ||
            (page.slug === "troubles-digestifs" && section.id === "medical");
          return (
            <section
              key={section.id}
              id={section.id}
              className={`relative scroll-mt-24 overflow-hidden px-5 sm:px-6 ${dark ? "bg-night text-paper" : mint ? "bg-mint" : "bg-paper"} ${airy ? "py-16 lg:py-24" : "py-14 lg:py-16"}`}
            >
              <div className={`relative mx-auto ${textWidth(page.slug, section.id)} ${framed ? "rounded-[2rem] border-2 border-olive bg-paper px-6 py-8 shadow-card md:px-10 md:py-10" : ""}`}>
                <h2 className={`text-center font-serif text-2xl text-balance sm:text-3xl lg:text-4xl ${dark ? "text-paper" : mint ? "text-ink" : "text-olive"}`}>
                  {section.title}
                </h2>
                <div className={`mx-auto mt-5 h-px max-w-xl ${dark ? "bg-paper/25" : "bg-line"}`} />
                <div className={`service-copy mt-8 space-y-5 text-left text-base leading-7 lg:text-[17px] ${dark ? "text-paper/90" : "text-muted"}`}>
                  {section.blocks.map((block, blockIndex) => {
                    if (block.type === "h3") {
                      step += 1;
                      if (faq) {
                        const answer = section.blocks[blockIndex + 1];
                        const q = block.text ?? "";
                        const open = openFaq === q;
                        return (
                          <div key={blockIndex} className="rounded-2xl border border-[#e6e6e6] bg-[#f3f3f3] text-ink">
                            <button
                              type="button"
                              className="focus-ring flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-[15px] sm:px-5 sm:text-base"
                              aria-expanded={open}
                              onClick={() => setOpenFaq(open ? null : q)}
                            >
                              <span>{q}</span>
                              <span className="grid size-7 shrink-0 place-items-center rounded-full border border-ink/15 text-muted">
                                {open ? <Minus className="size-4" aria-hidden /> : <Plus className="size-4" aria-hidden />}
                              </span>
                            </button>
                            <div className="acc-panel" data-open={open}>
                              <div>
                                {answer?.type === "p" ? (
                                  <p className="px-5 pb-5 leading-relaxed text-muted">{richText(answer.text ?? "", page.links, emphasis[page.slug] ?? [])}</p>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        );
                      }
                      const numbered = section.id === page.ctaAfter;
                      const card = numbered && page.slug === "maladies-chroniques-et-aigues";
                      return (
                        <h3
                          key={blockIndex}
                          className={`pt-2 text-left text-xl leading-snug font-normal text-ink sm:text-2xl ${card ? "rounded-3xl bg-mint px-5 py-4" : ""} ${dark ? "text-paper" : ""}`}
                        >
                          {numbered ? (
                            <span className="mr-3 font-bold text-olive">{String(step).padStart(2, "0")}</span>
                          ) : null}
                          {block.text}
                        </h3>
                      );
                    }
                    if (block.type === "p") {
                      if (faq) return null;
                      return <p key={blockIndex}>{richText(block.text ?? "", page.links, emphasis[page.slug] ?? [])}</p>;
                    }
                    if (block.type === "cta" && block.kind !== "end") return <Cta key={blockIndex} kind="mid" />;
                    return null;
                  })}
                  {section.id === "strongdiet" ? (
                    <a
                      href={STRONGDIET}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex min-h-12 items-center rounded-full bg-lime px-7 text-xl font-bold text-ink"
                    >
                      Découvrir StrongDiet
                    </a>
                  ) : null}
                </div>
              </div>
              {section.blocks.some((block) => block.type === "cta" && block.kind === "end") ? <Cta kind="end" calm={calm} /> : null}
            </section>
          );
        })}

        <p className="bg-paper px-5 py-10 text-center text-sm text-muted sm:px-6">
          <a href="/#parcours" className="font-semibold text-ink underline decoration-[#2b78d6] underline-offset-2">
            Valentin Diamantini, diététicien-nutritionniste
          </a>
          <span> · Mis à jour le 10 novembre 2026</span>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
