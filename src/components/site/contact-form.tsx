import { useState, type FormEvent } from "react";

const fieldClass =
  "focus-ring mt-2 w-full rounded-xl border border-paper/20 bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const objet = String(data.get("objet") ?? "").trim();
    const prenom = String(data.get("prenom") ?? "").trim();
    const nom = String(data.get("nom") ?? "").trim();
    const payload = Object.fromEntries(data.entries());
    payload.subject = `DIAMANTINI NUTRITION - ${objet}`;
    payload.name = `${prenom} ${nom}`.trim();
    if (!data.has("botcheck")) payload.botcheck = "";

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("web3forms");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="access_key" value="f0f5c263-ea3a-4aa0-85d6-d7f9e90a4967" />
      <input type="hidden" name="from_name" value="DIAMANTINI NUTRITION" />
      <input type="hidden" name="subject" value="DIAMANTINI NUTRITION - Nouveau message du site" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} aria-hidden />

      <label className="block text-sm font-semibold">
        Nom
        <input name="nom" required autoComplete="family-name" maxLength={80} className={fieldClass} />
      </label>
      <label className="block text-sm font-semibold">
        Prénom
        <input name="prenom" required autoComplete="given-name" maxLength={80} className={fieldClass} />
      </label>
      <label className="block text-sm font-semibold sm:col-span-2">
        Adresse mail
        <input name="email" type="email" required autoComplete="email" maxLength={160} className={fieldClass} />
      </label>
      <label className="block text-sm font-semibold sm:col-span-2">
        Objet
        <input name="objet" required maxLength={140} className={fieldClass} />
      </label>
      <label className="block text-sm font-semibold sm:col-span-2">
        Message
        <textarea name="message" required rows={5} maxLength={4000} className={fieldClass} />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="focus-ring inline-flex rounded-full bg-lime px-6 py-3 font-semibold text-night disabled:opacity-60"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer"}
        </button>
        {status === "sent" ? (
          <p className="mt-3 text-sm text-[#8ee59a]" role="status">
            Merci, votre message a bien été envoyé. Je vous réponds rapidement.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-sm text-apple" role="alert">
            Une erreur est survenue, merci de réessayer ou d’écrire à diamantini.nutrition@gmail.com
          </p>
        ) : null}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/75">
          Vos nom, prénom, adresse e-mail, objet et message sont utilisés uniquement pour répondre à votre
          demande. Merci de ne pas y inscrire de données de santé (antécédents, diagnostics, traitements, etc.).
          Pour en savoir plus et exercer vos droits :{" "}
          <a href="/politique-de-confidentialite" className="focus-ring font-semibold text-lime underline underline-offset-2">
            politique de confidentialité
          </a>
          .
        </p>
      </div>
    </form>
  );
}
