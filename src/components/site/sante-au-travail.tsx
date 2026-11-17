import { useState } from "react";
import { Cog, Heart, Minus, Plus, Star } from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

function NutriCorp({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-[#2f9e44]">Nutri</span>
      <span className="text-ink">’</span>
      <span className="text-[#e23d32]">Corp</span>
    </span>
  );
}

const results = [
  {
    icon: Cog,
    title: "Amélioration de la productivité",
    text: "Une équipe en bonne santé est plus concentrée, plus performante, et plus engagée dans ses missions quotidiennes.",
  },
  {
    icon: Star,
    title: "Réduction du désengagement",
    text: "Des employés soutenus par des programmes bien-être sont plus motivés et investis, réduisant ainsi le turnover et les pertes de productivité.",
  },
  {
    icon: Heart,
    title: "Diminution des arrêts maladies",
    text: "Une approche préventive du bien-être réduit significativement les congés maladie liés à des problèmes de santé évitables.",
  },
];

const steps = [
  {
    title: "Diagnostic & accompagnement personnalisé",
    text: "Nous démarrons par un entretien approfondi pour comprendre vos attentes, vos objectifs et les spécificités de votre entreprise. Cette phase de diagnostic nous permet d’identifier précisément vos besoins en santé au travail et de poser les bases d’une intervention réussie.",
  },
  {
    title: "Élaboration de la stratégie",
    text: "À partir des informations recueillies lors du diagnostic, nous définissons une stratégie adaptée. Cette étape consiste à planifier les actions, déterminer les ressources nécessaires et fixer un calendrier pour aligner nos interventions avec vos objectifs spécifiques.",
  },
  {
    title: "Interventions intégrées et personnalisées",
    text: "Nous mettons en œuvre une variété d’interventions adaptées à vos besoins : des présentations percutantes, des ateliers pratiques interactifs, des webinaires en ligne, des conférences inspirantes et même des ateliers cuisine pour dynamiser la cohésion d’équipe. Chaque intervention est conçue pour maximiser l’impact, stimuler l’engagement et répondre efficacement à vos enjeux de santé au travail.",
  },
];

const partners = ["Mercedes-Benz", "cora", "malakoff humanis", "Sage", "URSA"];

const workFaqs = [
  [
    {
      q: "Comment définir la santé au travail ?",
      a: "La santé au travail englobe l’ensemble des mesures visant à préserver le bien-être physique, mental et social des salariés dans leur environnement professionnel. Elle repose sur la prévention des risques professionnels (accidents, troubles musculosquelettiques, stress, etc.), l’application de bonnes pratiques d’ergonomie, ainsi que la promotion d’une culture d’entreprise axée sur la qualité de vie au travail. Un environnement de travail sain favorise non seulement la productivité et la motivation des collaborateurs, mais contribue également à réduire l’absentéisme et le turnover. Pour garantir une bonne santé au travail, il est essentiel de mettre en place des actions de sensibilisation, de formation et de suivi régulier. Cela inclut notamment l’aménagement des postes de travail, le soutien psychologique, la gestion efficace de la charge de travail et le respect de la réglementation en vigueur. En définitive, la santé au travail se définit comme un ensemble de démarches coordonnées qui visent à assurer la prévention, la sécurité et le bien-être de chaque salarié, tout en renforçant la performance globale de l’entreprise.",
    },
    {
      q: "Quelles sont les obligations de l'employeur en matière de santé au travail ?",
      a: "En matière de santé au travail, l’employeur a l’obligation légale de préserver la sécurité et le bien-être de ses salariés. Cela passe avant tout par l’évaluation des risques professionnels et l’élaboration d’un document unique, qui recense l’ensemble des dangers potentiels. L’employeur doit ensuite mettre en place des mesures de prévention adaptées (aménagement des postes, formation, procédures spécifiques) et informer régulièrement son personnel sur les bonnes pratiques à adopter. Par ailleurs, il est tenu d’organiser des visites médicales périodiques et de veiller au respect des normes en vigueur en matière de sécurité. En cas de changement dans l’organisation du travail ou d’apparition de nouveaux risques, l’employeur doit procéder à une mise à jour du document unique et revoir les actions de prévention en conséquence. Enfin, il a la responsabilité de former et d’accompagner ses collaborateurs afin de garantir un environnement de travail sain et sécurisé. Respecter ces obligations légales contribue non seulement à la protection des salariés, mais aussi à la performance globale de l’entreprise.",
    },
    {
      q: "Quelles sont les 3 types de prévention ?",
      a: "Il existe trois types de prévention en matière de santé au travail et de santé publique : la prévention primaire, la prévention secondaire et la prévention tertiaire. La prévention primaire consiste à éviter l’apparition de risques ou de maladies en agissant en amont, par exemple grâce à la sensibilisation, à la formation ou à l’aménagement des postes de travail. La prévention secondaire vise à détecter précocement les signes de pathologies ou de dysfonctionnements, afin de mettre en place des actions correctives rapidement (examens médicaux réguliers, dépistages, audits internes). Enfin, la prévention tertiaire se concentre sur la réduction des conséquences d’un problème de santé déjà déclaré, avec pour objectif de favoriser la réadaptation, de limiter les séquelles et d’éviter la rechute. Chacun de ces trois types de prévention joue un rôle essentiel pour assurer la sécurité et le bien-être au travail.",
    },
  ],
  [
    {
      q: "Comment définir la QVT ?",
      a: "La Qualité de Vie au Travail (QVT) désigne l’ensemble des actions et des pratiques visant à améliorer le bien-être des salariés dans leur environnement professionnel. Elle englobe plusieurs dimensions, comme l’ergonomie, la prévention des risques psychosociaux, le climat social, la communication au sein des équipes ou encore les possibilités de développement professionnel. Une bonne QVT favorise la motivation, la performance et l’engagement des collaborateurs, tout en renforçant l’attractivité de l’entreprise. En somme, la Qualité de Vie au Travail vise à instaurer un équilibre entre les exigences de l’organisation et les besoins des salariés, afin de créer un milieu de travail épanouissant et productif pour tous.",
    },
    {
      q: "Quelle est la différence entre QVT et QVCT ?",
      a: "La Qualité de Vie au Travail (QVT) et la Qualité de Vie et des Conditions de Travail (QVCT) désignent deux approches complémentaires centrées sur le bien-être et la santé des salariés dans leur environnement professionnel. Tandis que la QVT se concentre essentiellement sur la prévention des risques psychosociaux, l’amélioration des relations interpersonnelles et la reconnaissance au travail, la QVCT élargit le champ en incluant spécifiquement les conditions de travail (organisation, équipements, ergonomie, etc.). En d’autres termes, la QVCT va plus loin en prenant en compte l’ensemble des aspects matériels et organisationnels qui influent sur la qualité de vie au sein d’une entreprise. Ainsi, l’objectif de la QVCT est de garantir un environnement de travail sain et sécurisant, tout en favorisant l’engagement et la performance des équipes. En définitive, ces deux notions se rejoignent pour instaurer une démarche globale d’amélioration continue, dans le but de promouvoir le bien-être et la productivité au sein des organisations.",
    },
    {
      q: "Quels sont les trois piliers de la qualité de vie ?",
      a: "Les trois piliers de la qualité de vie sont généralement le bien-être physique, le bien-être mental et le bien-être social. Le bien-être physique englobe la santé, l’alimentation équilibrée, l’activité sportive et la prévention des risques liés à notre mode de vie. Le bien-être mental se concentre sur la gestion du stress, le développement personnel et la santé émotionnelle, indispensables pour maintenir une stabilité psychologique au quotidien. Enfin, le bien-être social repose sur la qualité des relations interpersonnelles, l’intégration dans la société et le sentiment d’appartenance à un groupe. Lorsque ces trois piliers sont pris en compte et équilibrés, ils contribuent à une qualité de vie optimale, tant sur le plan personnel que professionnel.",
    },
  ],
];

export function SanteAuTravailPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <>
      <SiteHeader />
      <main id="contenu" className="bg-paper text-ink">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-16 pb-28 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:pt-20 lg:pb-36">
            <div>
              <p className="font-serif text-2xl italic">Santé au travail</p>
              <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] font-medium text-balance sm:text-5xl">
                Améliorez la productivité et la santé au travail avec <NutriCorp />
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                La solution bien-être sur mesure pour améliorer la santé de vos employés et booster la
                performance de votre entreprise.
              </p>
              <a
                href="/#contact"
                className="focus-ring mt-8 inline-flex rounded-lg bg-[#c4922a] px-6 py-3 font-semibold text-ink"
              >
                Prendre contact
              </a>
            </div>
            <img
              src="/media/logo-mark.webp"
              alt="DIAMANTINI Nutrition"
              width={635}
              height={800}
              decoding="async"
              className="mx-auto w-52 sm:w-64 lg:w-full"
            />
          </div>
          <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-28 w-full text-[#f3e34b] sm:h-36" aria-hidden>
            <path fill="#fff3a3" d="M0 90L1440 20V180H0Z" />
            <path fill="currentColor" d="M0 120L1440 50V180H0Z" />
          </svg>
        </section>

        <section className="px-5 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-medium sm:text-4xl">Des résultats concrets pour votre entreprise</h2>
            <ul className="mt-12 grid gap-10 lg:grid-cols-3">
              {results.map((item) => (
                <li key={item.title} className="text-center">
                  <item.icon className="mx-auto size-16 text-[#4aa3e8]" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-5 text-2xl leading-tight font-medium">{item.title}</h3>
                  <p className="mt-3 text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#c9a24a] px-5 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-4xl rounded-3xl bg-paper px-6 py-10 text-center sm:px-12">
            <h2 className="text-2xl font-medium text-balance sm:text-3xl">
              <NutriCorp />
              <span>: votre partenaire bien-être en entreprise !</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted">
              Depuis plusieurs années, Nutricorp accompagne des entreprises comme la vôtre dans l’amélioration
              de la santé au travail et du bien-être de leurs employés. Avec une approche sur mesure, nous avons
              déjà transformé le bien-être de nombreuses entreprises.
            </p>
            <p className="mt-8 text-2xl font-medium">Ils nous font confiance !</p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-lg font-semibold">
              {partners.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden bg-olive px-5 py-16 text-paper sm:px-6 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-medium sm:text-3xl">
              Des interventions bien-être au travail sur-mesures !
            </h2>
            <div className="mt-8 bg-paper px-6 py-10 text-center text-ink sm:px-10">
              <p className="text-xl font-medium">Le Programme de santé au travail</p>
              <p className="mt-2 text-5xl font-medium sm:text-6xl">
                <NutriCorp />
              </p>
              <p className="mt-4 text-lg italic">
                <span className="text-[#e23d32]">Offert</span>
                <span className="text-[#d0891e]"> : Documentations + Signalétiques*</span>
              </p>
              <ul className="mt-6 space-y-3 text-lg text-muted">
                <li>Interventions en entreprise à la carte</li>
                <li>Formations professionnelles</li>
                <li>Un accompagnement 100% personnalisé</li>
                <li>Un programme de santé au travail clé en main</li>
              </ul>
              <a
                href="/#contact"
                className="focus-ring mt-8 inline-flex bg-[#5eb3ea] px-6 py-3 text-sm font-semibold tracking-wide text-paper"
              >
                OBTENEZ UN DEVIS DÈS MAINTENANT !
              </a>
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center leading-7 text-paper">
              * Maximisez l’engagement et l’impact de nos interventions grâce à nos supports de communication
              offerts (signalétiques, newsletters, etc.). Sur simple demande, recevez un livret personnalisé pour
              prolonger l’engagement de vos équipes et ancrer durablement votre programme de santé au travail.
            </p>
          </div>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-10 w-full text-paper" aria-hidden>
            <path fill="currentColor" d="M0 80L1440 10V80Z" />
          </svg>
        </section>

        <section className="px-5 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-medium text-muted sm:text-4xl">
              Ce que la santé au travail vous coûte réellement.
            </h2>
            <div className="mt-10 overflow-hidden rounded-[2rem]">
              <article className="grid items-center gap-6 bg-[#fbf6c4] px-6 py-8 lg:grid-cols-[16rem_1fr] lg:px-10">
                <h3 className="text-3xl font-medium sm:text-4xl">L’Absentéisme</h3>
                <p className="leading-7 text-muted">
                  Les absences répétées dues à des problèmes de santé au travail représentent en moyenne 7 à 10
                  jours perdus par employé chaque année. Ces absences, liées au stress, au manque d’activité
                  physique, ou à une mauvaise alimentation, coûtent aux entreprises des milliers d’euros en perte
                  de productivité, <strong className="text-ink">4 059€ par an et par salarié</strong> selon
                  l’Institut Sapiens.
                </p>
              </article>
              <article className="grid items-center gap-6 bg-[#f6ea4a] px-6 py-8 lg:grid-cols-[1fr_18rem] lg:px-10">
                <p className="leading-7 text-muted lg:order-1">
                  Un employé désengagé coûte jusqu’à 34% de son salaire annuel en baisse de productivité soit{" "}
                  <strong className="text-ink">un coût de 13 340€ en moyenne (IBET)</strong>. Le désengagement,
                  souvent causé par des conditions de travail inadéquates et un manque de soutien pour le
                  bien-être, conduit à un turnover plus élevé et à des équipes moins performantes.
                </p>
                <h3 className="text-3xl font-medium sm:text-4xl lg:order-2 lg:text-right">Le Désengagement</h3>
              </article>
              <article className="grid items-center gap-6 bg-[#fbf6c4] px-6 py-8 lg:grid-cols-[16rem_1fr] lg:px-10">
                <h3 className="text-3xl font-medium sm:text-4xl">Le Bien-Être</h3>
                <p className="leading-7 text-muted">
                  Investir dans le bien-être améliore non seulement la productivité, mais aussi la rétention des
                  talents. Les entreprises qui négligent le bien-être voient leur turnover augmenter de 50%, ce
                  qui accroît les coûts de recrutement et de formation.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="overflow-hidden">
          <div className="bg-[#c9a24a] px-5 pt-16 pb-10 text-center">
            <p className="mx-auto inline-flex rounded-full bg-paper px-8 py-3 text-4xl font-medium sm:text-5xl">
              <NutriCorp />
            </p>
          </div>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="block h-12 w-full bg-paper text-[#e7d7a2]" aria-hidden>
            <path fill="#c9a24a" d="M0 0H1440V20L0 55Z" />
          </svg>
          <div className="px-5 pt-8 pb-4 text-center">
            <p className="text-xl sm:text-2xl">La solution bien-être et santé au travail pour votre entreprise</p>
            <div className="mx-auto mt-8 h-px max-w-5xl bg-olive/50" />
          </div>
        </section>

        <section className="px-5 py-12 sm:px-6 lg:py-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-16">
            <article className="grid items-center gap-8 lg:grid-cols-[14rem_1fr]">
              <div className="text-center">
                <p className="mx-auto grid size-40 place-items-center rounded-full border-2 border-[#5aa4e0] text-4xl text-muted">
                  100%
                </p>
                <p className="mt-4 text-3xl">Personnalisé</p>
              </div>
              <p className="leading-8 text-muted">
                <NutriCorp /> est un programme engagé qui se distingue des autres méthodes grâce à son{" "}
                <strong className="text-ink">accompagnement personnalisé</strong> sur-mesure. Il s’intègre à la
                culture de votre entreprise et propose ce qu’il y a de mieux et de plus adapté en matière de
                santé au travail.
              </p>
            </article>
            <article className="grid items-center gap-8 lg:grid-cols-[1fr_14rem]">
              <p className="order-2 leading-8 text-muted lg:order-1">
                <NutriCorp /> est fondé sur une <strong className="text-ink">approche scientifique solide et validée</strong>,
                assurant la fiabilité et l’efficacité de chaque intervention. Nos solutions reposent sur les
                dernières avancées en nutrition et santé, garanties par une expertise éprouvée. Ainsi, nous
                proposons des actions rigoureuses et de haute qualité, adaptées aux besoins réels de votre
                entreprise pour une véritable amélioration du bien-être au travail.
              </p>
              <div className="order-1 text-center lg:order-2">
                <p className="mx-auto grid size-40 place-items-center rounded-full border-2 border-[#5aa4e0] text-4xl text-muted">
                  100%
                </p>
                <p className="mt-4 text-3xl">Scientifique</p>
              </div>
            </article>
            <article className="grid items-center gap-8 lg:grid-cols-[14rem_1fr]">
              <div className="text-center">
                <p className="mx-auto grid size-40 place-items-center rounded-full border-2 border-[#5aa4e0] text-4xl text-muted">
                  100%
                </p>
                <p className="mt-4 text-3xl">Engagé</p>
              </div>
              <p className="leading-8 text-muted">
                Faites l’expérience d’un programme qui se mobilise entièrement pour la santé et le bien-être de
                vos équipes. Chaque action, de la conception à la mise en œuvre, est portée par la{" "}
                <strong className="text-ink">volonté d’agir</strong> concrètement et de{" "}
                <strong className="text-ink">répondre aux besoins réels de vos équipes</strong>. Un suivi continu
                et une approche tournée vers l’humain assurent ainsi un impact positif, tangible et profondément
                ancré dans la culture de votre organisation.
              </p>
            </article>
          </div>
          <div className="mx-auto mt-14 h-px max-w-5xl bg-olive/40" />
          <p className="mx-auto mt-12 max-w-3xl text-center text-2xl leading-snug sm:text-3xl">
            Faites l’expérience d’un programme qui se mobilise entièrement pour la santé et le bien-être de vos
            équipes.
          </p>
        </section>

        <section className="relative overflow-hidden bg-[#f3e34b]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-6 lg:flex-row lg:items-center">
            <p className="text-lg font-medium sm:text-xl">
              Vous souhaitez en savoir plus sur le programme Nutri’Corp ?
              <br />
              Vous pouvez nous contacter dès maintenant !
            </p>
            <a
              href="/#contact"
              className="focus-ring inline-flex bg-[#5eb3ea] px-6 py-3 text-sm font-semibold tracking-wide text-paper"
            >
              PRENDRE CONTACT
            </a>
          </div>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-16 w-full text-paper" aria-hidden>
            <path fill="#fff6b0" d="M0 40L1440 0V70L0 110Z" />
            <path fill="currentColor" d="M0 70L1440 30V120H0Z" />
          </svg>
          <div className="bg-paper px-5 pt-6 pb-16 text-center">
            <h2 className="text-4xl font-medium sm:text-6xl">
              Découvrez <NutriCorp />
            </h2>
            <p className="mt-3 text-xl text-muted sm:text-2xl">Une perspective nouvelle pour la santé au travail</p>
          </div>
        </section>

        <section className="bg-olive px-5 py-16 text-paper sm:px-6 lg:py-20">
          <ol className="mx-auto flex max-w-5xl flex-col gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="grid items-center gap-4 lg:grid-cols-[5rem_1fr]">
                <span className="text-6xl leading-none font-medium">{index + 1}</span>
                <div className="bg-paper px-6 py-6 text-ink">
                  <h2 className="text-2xl font-medium">{step.title}</h2>
                  <p className="mt-2 leading-7 text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact-entreprise" className="scroll-mt-24">
          <p className="bg-[#f3e34b] px-5 py-5 text-center text-xl font-semibold text-[#d32f2f] sm:text-2xl">
            Prêt à placer la santé et le bien-être de vos équipes au cœur de votre entreprise ?
          </p>
        </section>

        <section className="bg-paper px-5 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <img src="/media/logo-mark.webp" alt="" width={635} height={800} loading="lazy" decoding="async" className="mx-auto h-28 w-auto sm:h-36 lg:h-44" />
            <h2 className="mt-4 text-center text-3xl font-medium sm:text-4xl lg:text-5xl">Les Questions Fréquentes</h2>
            <div className="mt-10 grid items-start gap-4 lg:grid-cols-2 lg:gap-5">
              {workFaqs.map((column) => (
                <ul key={column[0].q} className="flex flex-col gap-4">
                  {column.map((item) => {
                    const isOpen = openFaq === item.q;
                    return (
                      <li key={item.q} className="rounded-sm border border-[#e6e6e6] bg-[#f3f3f3]">
                        <button
                          type="button"
                          className="focus-ring flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-[15px] sm:px-5 sm:text-base"
                          aria-expanded={isOpen}
                          onClick={() => setOpenFaq(isOpen ? null : item.q)}
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
      </main>
      <SiteFooter />
    </>
  );
}
