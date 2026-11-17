import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="contenu" className="bg-paper px-5 py-12 sm:px-6 lg:py-16">
        <article className="mx-auto max-w-3xl text-ink">
          <h1 className="font-serif text-4xl text-balance text-olive sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted">Dernière mise à jour : 17 novembre 2026</p>
          <div className="mt-8 space-y-4 text-base leading-7 [&_a]:text-link [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-olive [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:ms-5 [&_li]:list-disc [&_ul]:mt-2 [&_ul]:space-y-1">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="focus-ring">
      {children}
    </a>
  );
}

export function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>Le site diamantini-nutrition.fr est édité par :</p>
      <p>
        Valentin DIAMANTINI, entrepreneur individuel (EI)
        <br />
        Diététicien-nutritionniste
        <br />
        5 Rue Xavier Roussel
        <br />
        57050 Metz
        <br />
        France
      </p>
      <p>
        Téléphone : <a href="tel:+33782593110" className="focus-ring">07 82 59 31 10</a>
        <br />
        E-mail : <a href="mailto:diamantini.nutrition@gmail.com" className="focus-ring">diamantini.nutrition@gmail.com</a>
      </p>
      <p>
        Immatriculation au Registre national des entreprises (RNE) : 894 443 696
        <br />
        Numéro SIREN : 894 443 696
        <br />
        Numéro SIRET (siège) : 894 443 696 00022
        <br />
        Code APE / NAF : 86.90F (Activités de santé humaine non classées ailleurs)
      </p>
      <p>
        L’activité de diététicien est une profession libérale. Elle n’est pas immatriculée au Registre du
        commerce et des sociétés (RCS) ni au Répertoire des métiers (RM).
      </p>

      <h2>Profession réglementée</h2>
      <p>
        Valentin DIAMANTINI exerce la profession de diététicien, profession de santé réglementée par les
        articles L. 4371-1 et suivants du Code de la santé publique.
      </p>
      <p>
        Le titre professionnel de diététicien est un titre protégé : seules peuvent l’exercer et le porter les
        personnes titulaires des diplômes, certificats ou titres prévus par la loi, ou d’une autorisation
        d’exercice (articles L. 4371-2 et L. 4372-2 du Code de la santé publique). Il n’existe pas d’ordre
        professionnel des diététiciens.
      </p>
      <ul>
        <li>Numéro RPPS : 10007715815</li>
        <li>Diplôme permettant l’exercice : DUT Génie biologique option diététique, obtenu à l’IUT Nancy-Brabois</li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>Le directeur de la publication est Valentin DIAMANTINI.</p>

      <h2>Hébergeur</h2>
      <p>Le site est hébergé par :</p>
      <p>
        GitHub, Inc.
        <br />
        88 Colin P. Kelly Jr. Street
        <br />
        San Francisco, CA 94107
        <br />
        États-Unis
        <br />
        Téléphone : <a href="tel:+18774484820" className="focus-ring">+1 877 448 4820</a>
        <br />
        Site : <Out href="https://github.com">https://github.com</Out>
      </p>
      <p>Le site est servi via GitHub Pages.</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus du site (textes, photographies, logo, identité visuelle, éléments graphiques,
        structure) est protégé par le droit de la propriété intellectuelle et appartient à Valentin DIAMANTINI,
        sauf mention contraire.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie de ces
        éléments, sur quelque support que ce soit, est interdite sans l’autorisation écrite préalable de
        Valentin DIAMANTINI, excepté pour un usage strictement privé et non commercial (consultation et
        impression pour usage personnel).
      </p>

      <h2>Avertissement santé</h2>
      <p>
        Les contenus publiés sur ce site ont un caractère uniquement informatif. Ils ne constituent pas un avis
        médical ou diététique personnalisé et ne remplacent pas une consultation avec un professionnel de
        santé. Pour un accompagnement adapté, prenez rendez-vous.
      </p>

      <h2>Avis Google</h2>
      <p>
        Les avis affichés sur ce site sont reproduits à partir de la fiche Google publique de Valentin
        Diamantini. Ils peuvent être consultés sur Google. Le lien « Voir tous les avis sur Google » ouvre
        cette fiche dans un nouvel onglet.
      </p>

      <h2>Règlement des litiges</h2>
      <p>
        Pour toute question ou réclamation relative au site ou à l’activité, vous pouvez écrire à{" "}
        <a href="mailto:diamantini.nutrition@gmail.com" className="focus-ring">diamantini.nutrition@gmail.com</a>{" "}
        ou appeler le <a href="tel:+33782593110" className="focus-ring">07 82 59 31 10</a>.
      </p>
      <p>
        Les services de santé fournis par un professionnel de santé à ses patients pour évaluer, maintenir ou
        rétablir leur état de santé ne sont pas des litiges de consommation au sens de l’article L. 611-4 du
        Code de la consommation. Ils ne relèvent donc pas de la médiation de la consommation. À défaut d’accord
        amiable, le litige peut être porté devant les juridictions compétentes.
      </p>

      <h2>Données personnelles et cookies</h2>
      <p>
        Le traitement des données personnelles et l’usage des cookies sont décrits dans la{" "}
        <a href="/politique-de-confidentialite" className="focus-ring">politique de confidentialité</a> et la
        page <a href="/cookies" className="focus-ring">Gestion des cookies</a>.
      </p>
    </LegalPage>
  );
}

export function PolitiqueConfidentialite() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        La présente politique décrit la manière dont Valentin DIAMANTINI traite les données personnelles
        collectées via le site diamantini-nutrition.fr, conformément au Règlement (UE) 2016/679 (RGPD) et à la
        loi n° 78-17 du 6 janvier 1978 dite Informatique et Libertés.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Valentin DIAMANTINI, entrepreneur individuel (EI)
        <br />
        5 Rue Xavier Roussel, 57050 Metz
        <br />
        Téléphone : <a href="tel:+33782593110" className="focus-ring">07 82 59 31 10</a>
        <br />
        E-mail : <a href="mailto:diamantini.nutrition@gmail.com" className="focus-ring">diamantini.nutrition@gmail.com</a>
      </p>
      <p>
        Aucun délégué à la protection des données (DPO) n’a été désigné, cette désignation n’étant pas
        obligatoire pour cette activité.
      </p>

      <h2>2. Données collectées, finalités et bases légales</h2>
      <h3>Formulaire de contact</h3>
      <p>
        Lorsque vous utilisez le formulaire de contact du site, les données suivantes sont collectées : nom,
        prénom, adresse e-mail, objet et message.
      </p>
      <ul>
        <li>Finalité : lire votre message et vous répondre, notamment pour une demande d’information ou de rendez-vous.</li>
        <li>Base légale : l’exécution de mesures précontractuelles prises à votre demande (article 6, paragraphe 1, point b, du RGPD).</li>
        <li>Caractère obligatoire : tous les champs du formulaire sont nécessaires pour traiter votre demande. Sans ces informations, le message ne peut pas être envoyé.</li>
      </ul>
      <h3>Données de navigation liées à l’hébergement</h3>
      <p>
        Lors de la consultation du site, l’hébergeur peut enregistrer des données techniques de connexion
        (notamment l’adresse IP, le type de navigateur et la date de la requête), dans le cadre de
        l’exploitation et de la sécurité du site.
      </p>
      <ul>
        <li>Finalité : assurer le fonctionnement, la sécurité et la disponibilité du site.</li>
        <li>Base légale : l’intérêt légitime de l’éditeur à proposer un site sûr et fonctionnel (article 6, paragraphe 1, point f, du RGPD).</li>
      </ul>
      <p>
        Le site ne dépose pas de cookies publicitaires ni de cookies de mesure d’audience. Pour plus de
        détails, voir la page <a href="/cookies" className="focus-ring">Gestion des cookies</a>.
      </p>
      <h3>Ce que ce formulaire ne collecte pas</h3>
      <p>
        Le formulaire de contact n’est pas un dossier patient. Il n’est pas destiné à recevoir des données de
        santé (antécédents médicaux, diagnostics, résultats d’examens, traitements, pathologies, etc.).
      </p>
      <p>
        <strong>Merci de ne pas inscrire de données de santé dans le formulaire.</strong> Ces informations
        relèvent d’une consultation, que vous pouvez prendre via Doctolib ou en contactant le cabinet. Si un
        message contenant des données de santé est malgré tout reçu, il sera utilisé uniquement pour vous
        répondre, puis traité avec une vigilance particulière.
      </p>
      <p>
        Les prises de rendez-vous en ligne s’effectuent sur Doctolib, service indépendant, selon la politique
        de confidentialité de Doctolib.
      </p>

      <h2>3. Destinataires et sous-traitants</h2>
      <p>Vos données ne sont ni vendues ni louées.</p>
      <p>Elles sont destinées à Valentin DIAMANTINI. Pour faire fonctionner le site et le formulaire, les prestataires suivants interviennent :</p>
      <ul>
        <li>
          <strong>Web3Creative</strong>, qui opère le service <strong>Web3Forms</strong> (formulaire de
          contact) : l’entreprise est enregistrée au Kerala (Inde), immatriculation Udyam UDYAM-KL-10-0039115.
          Elle agit en qualité de sous-traitant. Le message est transmis par e-mail. Selon la documentation de
          Web3Forms, les serveurs utilisés se situent aux États-Unis (région US-East). Web3Forms indique
          recourir notamment à Amazon Web Services, Cloudflare et Hetzner, et pouvoir transmettre l’adresse IP
          et l’adresse e-mail de l’expéditeur à des services antispam (CleanTalk, Akismet). Contact :{" "}
          <a href="mailto:support@web3forms.com" className="focus-ring">support@web3forms.com</a>. Politique de
          confidentialité : <Out href="https://web3forms.com/privacy">https://web3forms.com/privacy</Out>
        </li>
        <li>
          <strong>Google LLC</strong> (Gmail) : la boîte de réception utilisée pour recevoir et traiter les
          messages est <a href="mailto:diamantini.nutrition@gmail.com" className="focus-ring">diamantini.nutrition@gmail.com</a>.
        </li>
        <li>
          <strong>GitHub, Inc.</strong> : hébergement du site via GitHub Pages.
        </li>
      </ul>
      <p>Les autorités compétentes peuvent également recevoir des données si la loi l’exige.</p>

      <h2>4. Transferts hors de l’Union européenne</h2>
      <p>
        L’hébergement du site et le traitement du formulaire impliquent des transferts de données vers des
        pays situés hors de l’Union européenne, notamment les États-Unis (et, pour l’opérateur de Web3Forms,
        l’Inde).
      </p>
      <ul>
        <li>
          <strong>GitHub, Inc.</strong> est certifiée au titre du cadre de protection des données UE-États-Unis
          (EU-U.S. Data Privacy Framework). Fiche publique :{" "}
          <Out href="https://www.dataprivacyframework.gov/participant/6174">https://www.dataprivacyframework.gov/participant/6174</Out>
        </li>
        <li>
          <strong>Google LLC</strong> (Gmail) est certifiée au titre du même cadre UE-États-Unis. Fiche
          publique : <Out href="https://www.dataprivacyframework.gov/participant/5780">https://www.dataprivacyframework.gov/participant/5780</Out>
        </li>
        <li>
          <strong>Web3Creative / Web3Forms</strong> n’est pas certifiée au Data Privacy Framework. L’entreprise
          indique encadrer les transferts depuis l’Espace économique européen par des clauses contractuelles
          types, décrites dans son accord de traitement des données (
          <Out href="https://web3forms.com/dpa">https://web3forms.com/dpa</Out>).
        </li>
      </ul>

      <h2>5. Durées de conservation</h2>
      <ul>
        <li>Messages reçus via le formulaire de contact : conservés pendant 3 ans à compter du dernier contact, puis supprimés ou archivés sous une forme ne permettant plus de vous identifier, sauf obligation légale contraire ou nécessité de conserver un élément dans le cadre d’un litige.</li>
        <li>Selon sa politique, Web3Forms peut conserver des données de formulaire au plus pendant 3 ans, et indique supprimer périodiquement les journaux serveur.</li>
        <li>Données de journalisation de l’hébergeur : selon la politique de GitHub et les durées nécessaires à la sécurité du service.</li>
      </ul>
      <p>
        Cette durée de 3 ans concerne le formulaire de contact du site. Elle ne s’applique pas à un dossier
        patient constitué dans le cadre d’une prise en charge, qui obéit à des règles de conservation
        distinctes.
      </p>

      <h2>6. Vos droits</h2>
      <p>Vous disposez des droits suivants, dans les conditions prévues par le RGPD :</p>
      <ul>
        <li>droit d’accès ;</li>
        <li>droit de rectification ;</li>
        <li>droit à l’effacement ;</li>
        <li>droit à la limitation du traitement ;</li>
        <li>droit d’opposition ;</li>
        <li>droit à la portabilité des données, lorsque cela s’applique.</li>
      </ul>
      <p>
        Pour exercer ces droits, écrivez à{" "}
        <a href="mailto:diamantini.nutrition@gmail.com" className="focus-ring">diamantini.nutrition@gmail.com</a>{" "}
        ou à l’adresse postale indiquée ci-dessus, en précisant votre demande. Une preuve d’identité pourra
        être demandée en cas de doute raisonnable sur votre identité.
      </p>
      <p>
        Vous avez également le droit d’introduire une réclamation auprès de la Commission nationale de
        l’informatique et des libertés (CNIL) : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 –{" "}
        <Out href="https://www.cnil.fr">www.cnil.fr</Out>.
      </p>

      <h2>7. Sécurité</h2>
      <p>
        Des mesures raisonnables sont mises en œuvre pour protéger vos données (formulaire transmis en HTTPS,
        accès restreint à la boîte mail professionnelle). Aucun système n’étant totalement à l’abri d’un
        risque, ces mesures visent à réduire les risques d’accès non autorisé, de perte ou d’altération.
      </p>

      <h2>8. Modification de la présente politique</h2>
      <p>
        Cette politique peut être mise à jour pour tenir compte d’une évolution du site, des prestataires ou
        de la réglementation. La date de dernière mise à jour figure en haut de cette page.
      </p>
    </LegalPage>
  );
}

export function GestionCookies() {
  return (
    <LegalPage title="Gestion des cookies">
      <h2>Que sont les cookies et les traceurs ?</h2>
      <p>
        Un cookie ou un traceur est un fichier ou un identifiant déposé ou lu sur votre appareil (ordinateur,
        téléphone, tablette) lors de la consultation d’un site. Le cadre applicable est notamment l’article 82
        de la loi Informatique et Libertés et les recommandations de la CNIL.
      </p>
      <p>
        Certains traceurs sont strictement nécessaires au fonctionnement du site et peuvent être utilisés sans
        consentement préalable. Les autres (publicité, réseaux sociaux, mesure d’audience non exemptée, etc.)
        nécessitent votre consentement avant tout dépôt ou lecture.
      </p>

      <h2>Ce que fait ce site</h2>
      <p>
        Le site diamantini-nutrition.fr n’utilise aucun cookie publicitaire, aucun cookie de réseau social et
        aucun outil de mesure d’audience.
      </p>
      <p>
        Les polices du site sont auto-hébergées : elles ne sont pas chargées depuis les serveurs de Google
        Fonts. Aucune carte Google Maps n’est intégrée dans les pages.
      </p>
      <p>
        En cliquant sur un lien vers un service tiers (Doctolib, fiche Google, par exemple), vous quittez ce
        site et êtes soumis à la politique de confidentialité de ce service.
      </p>
      <p>
        L’hébergeur (GitHub Pages) peut enregistrer des journaux techniques de connexion (notamment l’adresse
        IP) pour le fonctionnement et la sécurité du service. Ces journaux ne sont pas des cookies déposés par
        l’éditeur du site à des fins publicitaires ou statistiques.
      </p>

      <h2>Pas de bandeau de consentement</h2>
      <p>
        En l’état actuel du site, aucun traceur soumis au consentement n’est déposé. Aucun bandeau de
        consentement n’est donc affiché.
      </p>
      <p>
        Si un outil nécessitant un consentement devait être ajouté plus tard (mesure d’audience non exemptée,
        carte Google Maps intégrée, police chargée depuis Google, publicité, reCAPTCHA, etc.), un bandeau
        permettant d’accepter ou de refuser ces traceurs serait mis en place avant leur dépôt, conformément
        aux recommandations de la CNIL.
      </p>

      <h2>Vos paramètres de navigation</h2>
      <p>
        Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Les modalités figurent
        dans l’aide de votre navigateur. Pour en savoir plus :{" "}
        <Out href="https://www.cnil.fr/fr/cookies-et-autres-traceurs">https://www.cnil.fr/fr/cookies-et-autres-traceurs</Out>
      </p>
      <p>
        Pour les données personnelles collectées par ailleurs (formulaire de contact), voir la{" "}
        <a href="/politique-de-confidentialite" className="focus-ring">politique de confidentialité</a>.
      </p>
    </LegalPage>
  );
}
