import { ContactForm } from "@/components/site/contact-form";
import { nav, PHONE_DISPLAY, PHONE_TEL, specialties } from "@/data/site";

const FOOTER_RDV = "https://www.doctolib.fr/dieteticien/metz/valentin-diamantini";

const siteLinks = [
  { href: "/", label: "Accueil" },
  ...nav.filter((item) => item.href !== "/#contact"),
  { href: "/#avis", label: "Avis" },
  { href: "/#contact", label: "Contact" },
  ...specialties.map((item) => ({ href: `/${item.page}`, label: item.title })),
];

const linkClass = "focus-ring text-paper/80 hover:text-lime";

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-night text-paper">
      <div className="border-b border-paper/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-serif text-2xl">Formulaire de contact</h2>
          <p className="mt-2 max-w-xl text-paper/75">
            Une question avant de prendre rendez-vous ? Écrivez-moi, je vous réponds par mail.
          </p>
          <ContactForm />
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="font-serif text-xl">Contact</h2>
          <p className="mt-4 text-paper/85">Valentin Diamantini – Diététicien-nutritionniste</p>
          <p className="mt-2 text-paper/85">5 Rue Xavier Roussel, 57050 Metz</p>
          <p className="mt-2">
            Téléphone :{" "}
            <a href={`tel:${PHONE_TEL}`} className={linkClass}>
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2">
            E-mail :{" "}
            <a href="mailto:diamantini.nutrition@gmail.com" className={linkClass}>
              diamantini.nutrition@gmail.com
            </a>
          </p>
          <a
            href={FOOTER_RDV}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-5 inline-flex rounded-full bg-lime px-5 py-3 text-sm font-semibold text-night"
          >
            Prendre rendez-vous
          </a>
        </div>
        <div>
          <h2 className="font-serif text-xl">Le site</h2>
          <ul className="mt-4 space-y-2">
            {siteLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-xl">Informations légales</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/mentions-legales" className={linkClass}>
                Mentions légales
              </a>
            </li>
            <li>
              <a href="/politique-de-confidentialite" className={linkClass}>
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="/cookies" className={linkClass}>
                Gestion des cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-6 py-5 text-sm text-paper/60">
          © 2026 Valentin Diamantini, entrepreneur individuel (EI) – Diamantini Nutrition – Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
