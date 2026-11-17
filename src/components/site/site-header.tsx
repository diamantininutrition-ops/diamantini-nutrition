import { useState } from "react";
import { Menu, X } from "lucide-react";
import { RDV, nav } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="/" className="focus-ring shrink-0 rounded-md" onClick={() => setOpen(false)}>
          <img
            src="/media/logo-full.png"
            alt="DIAMANTINI Nutrition"
            width={1270}
            height={700}
            className="h-12 w-auto md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-semibold text-ink/80 hover:text-olive"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={RDV}
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden rounded-full bg-[#3a92d8] px-4 py-2 text-sm font-bold text-white hover:bg-[#2f82c6] sm:inline-flex"
          >
            Prendre rendez-vous
          </a>
          <button
            type="button"
            className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-mobile" className="border-t border-line bg-paper px-4 py-4 xl:hidden" aria-label="Sections">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="focus-ring block rounded-lg px-2 py-3 text-base font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={RDV}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-2 inline-flex w-full items-center justify-center rounded-full bg-olive px-4 py-3 font-semibold text-paper"
            onClick={() => setOpen(false)}
          >
            Prendre rendez-vous
          </a>
        </nav>
      ) : null}
    </header>
  );
}
