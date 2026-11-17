import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, K as notFound, U as redirect, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, q as require_jsx_runtime, v as createRootRoute, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Minus, i as Plus, n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, n as STRONGDIET, r as SiteFooter, t as RDV } from "./site-header-OyiDNyP4.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C0bSuOb5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-E93NfQt6.css";
var TITLE$5 = "Valentin Diamantini — Diététicien Nutritionniste à Metz";
var DESCRIPTION$5 = "Cabinet de diététique de Valentin Diamantini à Metz. Diététique comportementale, perte de poids, nutrition du sport, troubles digestifs. Consultation 60€, au cabinet ou en téléconsultation.";
var Route$8 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: TITLE$5 },
			{
				name: "description",
				content: DESCRIPTION$5
			},
			{
				name: "theme-color",
				content: "#719a54"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preload",
				href: "/fonts/nunito-sans-latin-400-normal.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				href: "/fonts/nunito-sans-latin-600-normal.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				href: "/fonts/carlito-latin-700-normal.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$5 = () => import("./routes-J5JLA7WE.mjs");
var TITLE$4 = "Valentin Diamantini — Diététicien Nutritionniste à Metz";
var DESCRIPTION$4 = "Cabinet de diététique de Valentin Diamantini à Metz. Diététique comportementale, perte de poids, nutrition du sport, troubles digestifs. Consultation 60€, au cabinet ou en téléconsultation.";
var URL$5 = "https://diamantini-nutrition.fr/";
var cabinet = {
	"@context": "https://schema.org",
	"@type": "MedicalBusiness",
	"@id": "https://diamantini-nutrition.fr/#cabinet",
	name: "Diamantini Nutrition",
	alternateName: "Valentin Diamantini, diététicien nutritionniste à Metz",
	url: URL$5,
	image: "https://diamantini-nutrition.fr/og.jpg",
	logo: "https://diamantini-nutrition.fr/media/logo-full.png",
	telephone: "+33782593110",
	email: "diamantini.nutrition@gmail.com",
	priceRange: "60 €",
	medicalSpecialty: "https://schema.org/DietNutrition",
	address: {
		"@type": "PostalAddress",
		streetAddress: "5 rue Xavier Roussel",
		postalCode: "57050",
		addressLocality: "Metz",
		addressCountry: "FR"
	},
	areaServed: "Metz",
	sameAs: ["https://www.doctolib.fr/dieteticien/metz/valentin-diamantini", "https://www.strongdiet-nutrition.com/"],
	founder: {
		"@type": "Person",
		name: "Valentin Diamantini",
		jobTitle: "Diététicien-nutritionniste"
	}
};
var website = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Diamantini Nutrition",
	url: URL$5,
	publisher: { "@id": "https://diamantini-nutrition.fr/#cabinet" }
};
var Route$7 = createFileRoute("/")({
	head: () => ({
		links: [{
			rel: "canonical",
			href: URL$5
		}],
		meta: [
			{
				property: "og:title",
				content: TITLE$4
			},
			{
				property: "og:description",
				content: DESCRIPTION$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: URL$5
			},
			{
				property: "og:image",
				content: "https://diamantini-nutrition.fr/og.jpg"
			},
			{
				property: "og:locale",
				content: "fr_FR"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(cabinet)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(website)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var servicePages = /* @__PURE__ */ JSON.parse("[{\"slug\":\"perte-de-poids\",\"moduleId\":\"perte-de-poids\",\"crumb\":\"Perte de poids\",\"title\":\"Perte de poids à Metz | Diététicien Valentin Diamantini\",\"description\":\"Un accompagnement diététique à Metz pour travailler votre poids, vos habitudes et votre relation à l’alimentation. Une démarche personnalisée, sans jugement.\",\"ctaAfter\":\"consultations\",\"links\":[[\"équilibre alimentaire au quotidien\",\"/equilibre-alimentaire\"],[\"Haute Autorité de santé décrit un parcours de soins individualisé\",\"https://www.has-sante.fr/jcms/p_3408871/fr/guide-du-parcours-de-soins-surpoids-et-obesite-de-l-adulte\"],[\"troubles du comportement alimentaire\",\"/approche-dietetique-et-tca\"],[\"informations de contact du cabinet\",\"/#contact\"]],\"h1\":\"Perte de poids à Metz : un accompagnement diététique adapté à votre vie\",\"blocks\":[{\"type\":\"p\",\"text\":\"Vous souhaitez perdre du poids, mais vous ne voulez plus organiser votre quotidien autour d’un régime. Les consignes se multiplient, les résultats varient et chaque difficulté finit parfois par ressembler à un échec personnel. Une consultation permet de reprendre les choses dans leur ensemble : votre santé, votre histoire alimentaire, vos contraintes et ce que vous attendez réellement de cet accompagnement.\"},{\"type\":\"p\",\"text\":\"Je suis Valentin Diamantini, diététicien-nutritionniste. À Metz, je vous accompagne pour construire des habitudes alimentaires compatibles avec votre vie. L’objectif est de travailler votre demande de poids avec des repères compréhensibles, une progression réaliste et une attention particulière à votre relation avec l’alimentation.\"},{\"type\":\"cta\",\"kind\":\"intro\"},{\"type\":\"h2\",\"id\":\"comprendre\",\"text\":\"Comprendre votre situation avant de chercher à changer votre poids\"},{\"type\":\"p\",\"text\":\"Un objectif de perte de poids peut venir d’un inconfort physique, d’une recommandation médicale, d’une évolution récente ou d’une lassitude après plusieurs tentatives. Ces situations ne conduisent pas toutes au même accompagnement. Avant de proposer des changements, nous prenons le temps de comprendre ce qui vous amène et ce qui a déjà été essayé.\"},{\"type\":\"p\",\"text\":\"Votre organisation professionnelle, votre sommeil, vos possibilités de cuisiner, vos traitements et votre environnement familial font partie de cet échange. Une alimentation adaptée doit pouvoir exister dans une semaine habituelle, y compris lorsque vous êtes fatigué, pressé ou invité à l’extérieur. Ces informations servent à choisir les priorités du suivi.\"},{\"type\":\"p\",\"text\":\"La balance ne résume pas votre santé. Selon votre situation, les premiers objectifs peuvent aussi être de stabiliser le poids, d’améliorer la régularité des repas ou de réduire la place des préoccupations alimentaires. Le projet est discuté avec vous et, lorsque cela est nécessaire, avec votre médecin.\"},{\"type\":\"h2\",\"id\":\"approche\",\"text\":\"Une approche du poids qui tient compte de votre comportement alimentaire\"},{\"type\":\"h3\",\"text\":\"Retrouver des repères sur la faim et le rassasiement\"},{\"type\":\"p\",\"text\":\"Vous avez peut-être du mal à reconnaître la faim, à vous arrêter confortablement ou à savoir si un repas vous convient. Nous pouvons explorer ces sensations sans en faire une nouvelle règle à réussir. Certaines périodes nécessitent aussi des repères alimentaires plus structurés : écouter son corps et organiser ses repas peuvent se compléter.\"},{\"type\":\"h3\",\"text\":\"Comprendre les prises alimentaires liées aux émotions\"},{\"type\":\"p\",\"text\":\"Manger peut apporter du réconfort. Ce comportement n’est pas, à lui seul, un trouble du comportement alimentaire. Nous cherchons à comprendre dans quelles circonstances il apparaît, ce qu’il vous apporte et s’il devient une source de souffrance. Lorsque les difficultés dépassent le champ diététique, un accompagnement psychologique peut compléter le suivi.\"},{\"type\":\"h3\",\"text\":\"Construire une alimentation suffisamment souple\"},{\"type\":\"p\",\"text\":\"Le travail ne repose pas sur une liste universelle d’aliments autorisés et interdits. Nous examinons les quantités, la composition des repas, leur rythme et leur place dans votre quotidien. Les adaptations nécessaires à une maladie ou à une allergie restent prises en compte. Vous pouvez approfondir cette démarche sur la page consacrée à l’équilibre alimentaire au quotidien.\"},{\"type\":\"h2\",\"id\":\"consultations\",\"text\":\"Comment se déroule le suivi pour une perte de poids ?\"},{\"type\":\"h3\",\"text\":\"Un premier rendez-vous pour faire le point\"},{\"type\":\"p\",\"text\":\"La première consultation permet de retracer votre parcours, de préciser vos attentes et de repérer ce qui vous pose le plus de difficultés. Vous pouvez apporter les comptes rendus ou examens dont vous disposez lorsqu’ils concernent votre demande. Il n’est pas nécessaire d’avoir déjà modifié votre alimentation ni de préparer une semaine de repas exemplaires.\"},{\"type\":\"h3\",\"text\":\"Des changements choisis ensemble\"},{\"type\":\"p\",\"text\":\"Nous définissons des actions concrètes à essayer entre deux séances. Il peut s’agir de rendre le déjeuner plus accessible, d’anticiper une longue journée ou de revoir un dîner qui ne vous satisfait pas. Le nombre de changements dépend de vos possibilités. Vous devez comprendre leur intérêt et pouvoir expliquer ce qui facilite ou empêche leur mise en place.\"},{\"type\":\"h3\",\"text\":\"Des ajustements à partir de votre expérience\"},{\"type\":\"p\",\"text\":\"Les rendez-vous suivants servent à reprendre ce qui s’est réellement passé. Une consigne difficile à appliquer apporte une information utile ; elle ne signifie pas que vous manquez de volonté. Nous révisons les repères, les objectifs et le rythme du suivi. La progression recherchée concerne votre alimentation, votre confort et votre santé, avec une évolution pondérale qui reste individuelle.\"},{\"type\":\"cta\",\"kind\":\"mid\"},{\"type\":\"h2\",\"id\":\"quotidien\",\"text\":\"Des solutions qui doivent fonctionner dans une vraie semaine\"},{\"type\":\"p\",\"text\":\"Vous déjeunez rapidement au travail et arrivez très affamé le soir ? Nous pouvons commencer par examiner la pause de midi, les aliments disponibles et la possibilité d’une collation. Cet exemple illustre une piste de travail, pas une explication automatique de votre poids. La réponse dépend de ce que nous observons ensemble.\"},{\"type\":\"p\",\"text\":\"Vous mangez souvent au restaurant, travaillez en horaires décalés ou cuisinez pour toute la famille ? Nous cherchons des repères utilisables dans ces conditions. Prévoir quelques solutions simples peut être plus pertinent qu’un menu détaillé impossible à suivre. Les plaisirs alimentaires, les repas partagés et vos préférences ont leur place dans la réflexion.\"},{\"type\":\"p\",\"text\":\"Le suivi prépare également les périodes moins régulières. Vacances, surcharge professionnelle ou changements familiaux peuvent demander d’autres ajustements. L’objectif est de savoir comment reprendre des repères utiles, sans transformer un repas différent en abandon de toute la démarche. Cette autonomie se construit progressivement, avec des essais et des révisions.\"},{\"type\":\"h2\",\"id\":\"situations\",\"text\":\"Surpoids, obésité et situations qui demandent une attention particulière\"},{\"type\":\"p\",\"text\":\"En cas de surpoids ou d’obésité, les objectifs sont personnalisés selon les besoins de santé, les attentes et les difficultés rencontrées. La Haute Autorité de santé décrit un parcours de soins individualisé, qui associe les professionnels utiles à chaque situation. Le suivi diététique peut s’inscrire dans ce parcours et accompagner des soins déjà engagés.\"},{\"type\":\"p\",\"text\":\"Une chirurgie bariatrique, un traitement influençant l’appétit ou une maladie chronique nécessitent de tenir compte des consignes médicales. Nous ne modifions pas un traitement en consultation diététique. Chez l’enfant ou l’adolescent, la croissance et le contexte familial imposent une démarche spécifique : un objectif de perte de poids d’adulte ne se transpose pas automatiquement.\"},{\"type\":\"p\",\"text\":\"Si vous vivez des crises alimentaires, des compensations ou une restriction importante, la priorité est d’évaluer ces difficultés et de proposer les soins adaptés. La page sur les troubles du comportement alimentaire explique cet accompagnement. La demande de poids est entendue, mais elle ne doit pas conduire à aggraver une souffrance alimentaire.\"},{\"type\":\"h2\",\"id\":\"faq\",\"text\":\"Vos questions sur l’accompagnement du poids\"},{\"type\":\"h3\",\"text\":\"Combien de kilos vais-je perdre ?\"},{\"type\":\"p\",\"text\":\"Aucun nombre de kilos ne peut être garanti avant ou pendant un suivi. L’évolution dépend de nombreux facteurs et l’objectif doit être compatible avec votre santé. Nous définissons ensemble les critères utiles pour évaluer le travail, puis nous les réexaminons au fil des consultations.\"},{\"type\":\"h3\",\"text\":\"Dois-je compter les calories ou peser tous mes aliments ?\"},{\"type\":\"p\",\"text\":\"Ce n’est pas le point de départ systématique de l’accompagnement. Les outils utilisés dépendent de votre besoin et de leur effet sur votre relation à l’alimentation. Des repères de repas, de portions ou de rythme peuvent être plus adaptés. Tout outil doit avoir une utilité compréhensible pour vous.\"},{\"type\":\"h3\",\"text\":\"Puis-je consulter après plusieurs régimes ?\"},{\"type\":\"p\",\"text\":\"Oui. Votre expérience est une partie importante du bilan. Nous abordons ce qui vous a aidé, ce qui vous a fatigué et les règles qui restent présentes aujourd’hui. Vous n’avez pas à réussir une nouvelle tentative seul avant de demander de l’aide.\"},{\"type\":\"h3\",\"text\":\"Combien de consultations faut-il prévoir ?\"},{\"type\":\"p\",\"text\":\"Il n’existe pas de nombre valable pour tout le monde. Le rythme dépend des difficultés, des objectifs, de votre disponibilité et de l’évolution. Il est discuté ensemble et peut être réajusté. Le premier rendez-vous sert aussi à comprendre quel accompagnement correspond à votre situation.\"},{\"type\":\"h2\",\"id\":\"commencer\",\"text\":\"Commencer avec un objectif clair et réaliste\"},{\"type\":\"p\",\"text\":\"Vous pouvez prendre rendez-vous même si votre demande est encore difficile à formuler. Nous commencerons par ce qui vous préoccupe aujourd’hui et par les changements que vous vous sentez prêt à explorer. Pour une question sur l’organisation des consultations, retrouvez les informations de contact du cabinet.\"},{\"type\":\"p\",\"text\":\"Une première consultation permet de poser un cadre, de clarifier vos priorités et de choisir une première étape. Vous n’avez pas besoin d’attendre le moment idéal pour parler de votre alimentation.\"},{\"type\":\"cta\",\"kind\":\"end\"}]},{\"slug\":\"troubles-digestifs\",\"moduleId\":\"troubles-digestifs\",\"crumb\":\"Troubles digestifs\",\"title\":\"Troubles digestifs à Metz | Diététicien V. Diamantini\",\"description\":\"Ballonnements, intestin irritable, transit perturbé : un suivi diététique à Metz pour adapter vos repas, comprendre vos tolérances et préserver votre alimentation.\",\"ctaAfter\":\"adaptations\",\"links\":[[\"informations de l’Assurance Maladie sur l’intestin irritable\",\"https://www.ameli.fr/assure/sante/themes/syndrome-intestin-irritable/que-faire-quand-consulter\"],[\"nutrition et les maladies chroniques\",\"/maladies-chroniques-et-aigues\"],[\"présentation des trois étapes par Monash University\",\"https://monashfodmap.com/documents/192/3-step_FODMAP_Diet_2025_A4_info_sheet.pdf\"],[\"relation à l’alimentation et les difficultés alimentaires\",\"/approche-dietetique-et-tca\"],[\"coordonnées du cabinet\",\"/#contact\"]],\"h1\":\"Troubles digestifs & Nutrition : adapter votre alimentation avec un diététicien\",\"blocks\":[{\"type\":\"p\",\"text\":\"Ballonnements, douleurs abdominales, constipation ou diarrhée peuvent finir par compliquer chaque repas. Vous cherchez parfois l’aliment responsable, supprimez plusieurs produits et ne savez plus ce que vous pouvez manger. Le suivi diététique aide à remettre de l’ordre dans ces essais et à construire une alimentation adaptée à votre situation.\"},{\"type\":\"p\",\"text\":\"Je suis Valentin Diamantini, diététicien-nutritionniste à Metz. Mon parcours en gastro-entérologie et en chirurgie digestive nourrit une approche attentive à vos symptômes, à vos besoins nutritionnels et à votre quotidien. Nous travaillons à partir du diagnostic médical, lorsqu’il est établi, sans attribuer automatiquement chaque gêne à une intolérance ou au microbiote.\"},{\"type\":\"cta\",\"kind\":\"intro\"},{\"type\":\"h2\",\"id\":\"symptomes\",\"text\":\"Quand consulter pour des troubles digestifs ?\"},{\"type\":\"h3\",\"text\":\"Lorsque les repas deviennent une source d’inconfort\"},{\"type\":\"p\",\"text\":\"Vous pouvez consulter lorsque vous ne savez plus comment composer vos repas, lorsque vous évitez de manger à l’extérieur ou lorsque les conseils reçus semblent contradictoires. La consultation permet de décrire précisément ce que vous vivez : symptômes, moments d’apparition, transit, aliments déjà écartés et conséquences sur votre vie quotidienne.\"},{\"type\":\"h3\",\"text\":\"Après un diagnostic de syndrome de l’intestin irritable\"},{\"type\":\"p\",\"text\":\"Le syndrome de l’intestin irritable, aussi appelé colopathie fonctionnelle, peut associer des douleurs abdominales et des modifications du transit. L’accompagnement vise à rechercher des adaptations utiles et supportables, en complément du suivi médical. Les informations de l’Assurance Maladie sur l’intestin irritable permettent de mieux comprendre les principes de cette prise en charge.\"},{\"type\":\"p\",\"text\":\"Les situations ne sont pas interchangeables. Un reflux, une maladie cœliaque, une maladie inflammatoire chronique de l’intestin ou des suites de chirurgie nécessitent leurs propres repères. Si une maladie digestive est diagnostiquée, la page sur la nutrition et les maladies chroniques présente le cadre d’un accompagnement coordonné avec vos soins.\"},{\"type\":\"h2\",\"id\":\"bilan\",\"text\":\"Un bilan pour comprendre ce qui se passe autour de vos repas\"},{\"type\":\"p\",\"text\":\"Le premier échange reprend votre histoire digestive, les examens réalisés, les traitements et les conseils déjà reçus. Nous regardons également comment vous mangez : horaires, durée des repas, quantités habituelles, boissons et contraintes de travail. Ces éléments ne servent pas à vous attribuer la responsabilité des symptômes, mais à choisir des pistes pertinentes.\"},{\"type\":\"p\",\"text\":\"Un relevé simple peut parfois aider à repérer des associations entre repas et inconfort. Il reste limité à ce qui est utile et ne doit pas devenir une surveillance permanente. Un aliment présent avant un symptôme n’en est pas forcément la cause. Nous interprétons les observations avec prudence, en tenant compte du contexte et des variations d’un jour à l’autre.\"},{\"type\":\"p\",\"text\":\"Nous définissons ensuite une priorité concrète : rendre un repas plus confortable, diminuer certaines exclusions ou faciliter l’organisation d’une journée de travail. Les essais sont discutés ensemble. Vous savez ce que nous cherchons à observer, comment revenir sur une adaptation inutile et à quel moment faire le point.\"},{\"type\":\"h2\",\"id\":\"adaptations\",\"text\":\"Des adaptations progressives plutôt qu’une accumulation d’interdits\"},{\"type\":\"h3\",\"text\":\"Commencer par les habitudes qui peuvent être ajustées\"},{\"type\":\"p\",\"text\":\"Selon votre situation, nous pouvons revoir la répartition des repas, la vitesse à laquelle vous mangez ou la place de certaines boissons. Les fibres sont aussi abordées en fonction du transit et de votre tolérance. Ajouter brutalement des aliments considérés comme bons pour la santé n’est pas toujours confortable ; la progression se discute individuellement.\"},{\"type\":\"h3\",\"text\":\"Préserver une alimentation variée et suffisante\"},{\"type\":\"p\",\"text\":\"Le suivi tient compte de ce que vous arrivez encore à manger avec plaisir. Lorsque plusieurs aliments ont disparu de vos repas, nous cherchons des possibilités de diversification et des alternatives adaptées. Le but est d’éviter que la peur des symptômes réduise progressivement toute votre alimentation. Les choix restent compatibles avec vos goûts et vos moyens.\"},{\"type\":\"h3\",\"text\":\"Les FODMAP : une option encadrée, pas une exclusion permanente\"},{\"type\":\"p\",\"text\":\"Les FODMAP sont certains glucides fermentescibles qui peuvent participer aux symptômes chez des personnes présentant un intestin irritable. Une démarche pauvre en FODMAP peut être envisagée dans certaines situations, après évaluation. Elle ne constitue ni un traitement universel des troubles digestifs, ni une liste à suivre indéfiniment.\"},{\"type\":\"p\",\"text\":\"Le protocole comporte une phase de réduction limitée, des réintroductions organisées et une personnalisation selon les tolérances observées. La présentation des trois étapes par Monash University détaille ce principe. Nous discutons de sa pertinence, de sa faisabilité et du risque de restriction excessive avant de l’envisager.\"},{\"type\":\"cta\",\"kind\":\"mid\"},{\"type\":\"h2\",\"id\":\"sans\",\"text\":\"Faut-il supprimer le gluten, le lactose ou d’autres aliments ?\"},{\"type\":\"p\",\"text\":\"La réponse dépend du diagnostic et de votre tolérance. Supprimer plusieurs familles d’aliments simultanément rend les observations difficiles et peut compliquer les repas. Nous faisons le point sur les exclusions déjà engagées, leurs effets réels et les raisons de les maintenir ou de les réexaminer.\"},{\"type\":\"p\",\"text\":\"La maladie cœliaque est une maladie auto-immune distincte du syndrome de l’intestin irritable. Si elle est suspectée, demandez un avis médical avant de commencer un régime sans gluten, qui peut perturber les investigations. Une allergie alimentaire demande également un cadre médical précis. Une gêne digestive isolée ne suffit pas à poser l’un de ces diagnostics.\"},{\"type\":\"p\",\"text\":\"La consultation ne repose pas sur une promesse de réparer votre intestin ou de rééquilibrer votre microbiote à partir des seuls symptômes. Les compléments, probiotiques et tests commercialisés ne sont pas proposés comme une réponse automatique. Nous recherchons d’abord ce qui est justifié dans votre situation et ce qui peut être évalué concrètement.\"},{\"type\":\"h2\",\"id\":\"medical\",\"text\":\"La place du suivi médical et de votre vécu\"},{\"type\":\"p\",\"text\":\"Des symptômes persistants ou récemment apparus méritent un avis médical. Du sang dans les selles, une perte de poids involontaire, de la fièvre ou des symptômes qui s’aggravent doivent conduire à consulter rapidement. Le suivi diététique ne remplace pas l’examen nécessaire pour comprendre leur origine.\"},{\"type\":\"p\",\"text\":\"La peur de manger, les expériences difficiles et l’attention constante portée au ventre méritent aussi d’être entendues. Aborder le stress ou les émotions ne signifie pas que vos symptômes sont imaginaires. Selon les besoins, un autre professionnel peut compléter l’accompagnement. Nous gardons une approche qui reconnaît à la fois votre inconfort physique et son retentissement.\"},{\"type\":\"p\",\"text\":\"Lorsque l’alimentation devient très contrôlée ou anxiogène, nous adaptons les outils utilisés. Un travail sur la relation à l’alimentation et les difficultés alimentaires peut être utile. Il ne s’agit pas de vous imposer de nouveaux interdits au moment où manger occupe déjà trop de place dans votre journée.\"},{\"type\":\"h2\",\"id\":\"faq\",\"text\":\"Vos questions sur le suivi diététique digestif\"},{\"type\":\"h3\",\"text\":\"Puis-je consulter sans diagnostic précis ?\"},{\"type\":\"p\",\"text\":\"Oui, pour faire le point sur votre alimentation et vos difficultés. En revanche, la consultation diététique ne permet pas de poser à elle seule un diagnostic médical. Selon vos symptômes et leur évolution, un avis auprès de votre médecin peut être nécessaire avant certains ajustements.\"},{\"type\":\"h3\",\"text\":\"Le régime pauvre en FODMAP est-il obligatoire ?\"},{\"type\":\"p\",\"text\":\"Non. Il s’agit d’une possibilité parmi d’autres, réservée aux situations où elle paraît pertinente. Nous évaluons d’abord vos habitudes, les essais déjà réalisés et la faisabilité de la démarche. Si elle est engagée, la réintroduction fait partie du travail dès le départ.\"},{\"type\":\"h3\",\"text\":\"Combien de temps faut-il pour se sentir mieux ?\"},{\"type\":\"p\",\"text\":\"Le délai varie selon l’origine des symptômes et les adaptations mises en place. Nous définissons des points de réévaluation pour décider de poursuivre, modifier ou arrêter un essai. Aucune disparition complète des symptômes ne peut être promise. Une absence d’amélioration mérite d’être discutée, pas de multiplier seul les restrictions.\"},{\"type\":\"h3\",\"text\":\"Dois-je apporter un journal alimentaire ?\"},{\"type\":\"p\",\"text\":\"Seulement si vous en avez déjà un ou si nous avons convenu de cet outil. Vos comptes rendus médicaux et la liste des traitements peuvent être utiles. Vous pouvez aussi simplement noter les questions que vous souhaitez aborder. Le premier rendez-vous sert à organiser la suite.\"},{\"type\":\"h2\",\"id\":\"commencer\",\"text\":\"Retrouver des repères pour manger plus sereinement\"},{\"type\":\"p\",\"text\":\"Vous n’avez pas besoin d’identifier vous-même l’aliment responsable avant de consulter. Nous partirons de votre situation actuelle, de vos priorités et des possibilités réalistes dans votre quotidien. L’objectif est de construire des essais lisibles et un accompagnement que vous comprenez.\"},{\"type\":\"p\",\"text\":\"Prenez rendez-vous pour faire le point sur votre alimentation et votre confort digestif. Pour une question pratique, vous pouvez aussi consulter les coordonnées du cabinet. Votre demande peut être précisée lors du premier échange.\"},{\"type\":\"cta\",\"kind\":\"end\"}]},{\"slug\":\"equilibre-alimentaire\",\"moduleId\":\"equilibre\",\"crumb\":\"Équilibre alimentaire\",\"title\":\"Équilibre alimentaire à Metz | Valentin Diamantini\",\"description\":\"Mieux manger avec des repères simples, adaptés à vos goûts, votre budget et vos horaires. Découvrez l’accompagnement de Valentin Diamantini, diététicien à Metz.\",\"ctaAfter\":\"consultations\",\"links\":[[\"repères de Manger Bouger pour les adultes\",\"https://www.mangerbouger.fr/manger-mieux/a-tout-age-et-a-chaque-etape-de-la-vie/les-recommandations-alimentaires-pour-les-adultes\"],[\"accompagnement de la perte de poids\",\"/perte-de-poids\"],[\"troubles digestifs\",\"/troubles-digestifs\"],[\"nutrition en cas de maladie chronique\",\"/maladies-chroniques-et-aigues\"],[\"suivi en nutrition du sport\",\"/nutrition-du-sport\"],[\"informations de contact\",\"/#contact\"]],\"h1\":\"Équilibre alimentaire à Metz : des repères simples pour votre quotidien\",\"blocks\":[{\"type\":\"p\",\"text\":\"Vous souhaitez mieux manger, mais les conseils nutritionnels semblent parfois difficiles à traduire dans vos repas. Entre les horaires, les courses, le budget et les goûts de chacun, connaître les recommandations ne suffit pas toujours à les appliquer. Un accompagnement diététique permet de partir de votre organisation réelle pour choisir des changements utiles.\"},{\"type\":\"p\",\"text\":\"Je suis Valentin Diamantini, diététicien-nutritionniste à Metz. Je vous aide à comprendre votre alimentation et à construire des repères adaptés à vos besoins. Vous pouvez consulter pour varier vos repas, retrouver de la régularité, simplifier les courses ou répondre à vos questions, sans avoir nécessairement un objectif de perte de poids.\"},{\"type\":\"cta\",\"kind\":\"intro\"},{\"type\":\"h2\",\"id\":\"definition\",\"text\":\"Qu’est-ce qu’une alimentation équilibrée ?\"},{\"type\":\"p\",\"text\":\"Une alimentation équilibrée cherche à couvrir vos besoins tout en restant compatible avec votre santé, vos préférences et votre vie. Elle se construit dans la durée. Un repas plus copieux, une journée inhabituelle ou un aliment apprécié n’annulent pas l’ensemble de vos habitudes. L’enjeu est de trouver une organisation suffisamment régulière et suffisamment souple.\"},{\"type\":\"p\",\"text\":\"Le rééquilibrage alimentaire n’a donc pas besoin de devenir un régime déguisé. Nous pouvons travailler sur la variété, les quantités, la répartition des repas et la place du plaisir. Les repères généraux apportent un cadre, puis la consultation permet de les adapter à votre situation. Une maladie, des symptômes digestifs ou une période de vie particulière peuvent modifier les priorités.\"},{\"type\":\"p\",\"text\":\"Il ne s’agit pas de cuisiner parfaitement ni de contrôler chaque détail. Une solution simple que vous pouvez réutiliser vaut souvent mieux qu’une organisation trop ambitieuse. Le suivi aide à identifier ce qui mérite votre attention et ce qui peut rester flexible, pour que l’alimentation prenne une place raisonnable dans votre journée.\"},{\"type\":\"h2\",\"id\":\"reperes\",\"text\":\"Des repères alimentaires compréhensibles et adaptables\"},{\"type\":\"h3\",\"text\":\"Varier les aliments sans compliquer chaque repas\"},{\"type\":\"p\",\"text\":\"Les recommandations destinées aux adultes invitent notamment à donner davantage de place aux fruits, légumes, légumes secs et céréales complètes, et à varier les sources de protéines. Les repères de Manger Bouger pour les adultes offrent une base publique pour comprendre ces orientations. Ils doivent ensuite être traduits selon vos besoins et votre tolérance.\"},{\"type\":\"p\",\"text\":\"Nous pouvons partir de quelques repas que vous appréciez déjà. Ajouter une possibilité de légume, varier un accompagnement ou découvrir une nouvelle préparation peut suffire pour commencer. Le suivi ne repose pas sur une obligation de renouveler tous vos menus. Vos habitudes culturelles, vos goûts et les aliments disponibles près de chez vous sont pris en compte.\"},{\"type\":\"h3\",\"text\":\"Comprendre le rôle des différentes familles d’aliments\"},{\"type\":\"p\",\"text\":\"Féculents, aliments protéiques, fruits et légumes, produits laitiers ou alternatives adaptées, matières grasses et boissons n’ont pas tous le même rôle. La consultation permet de clarifier leur place et de répondre aux questions qui vous freinent. Nous évitons de classer les aliments entre ceux qui feraient réussir et ceux qui feraient échouer votre alimentation.\"},{\"type\":\"h3\",\"text\":\"Introduire des possibilités que vous avez envie de garder\"},{\"type\":\"p\",\"text\":\"Les légumes secs, par exemple, peuvent être utilisés dans des soupes, des salades ou des plats mijotés. Manger Bouger propose de les consommer au moins deux fois par semaine chez l’adulte. Nous pouvons réfléchir à des recettes, à leur préparation et à une introduction progressive selon votre confort digestif, sans transformer ce repère en contrainte identique pour tous.\"},{\"type\":\"h2\",\"id\":\"quantites\",\"text\":\"Ajuster les quantités et le rythme des repas\"},{\"type\":\"p\",\"text\":\"Les quantités pertinentes dépendent notamment de vos besoins et de votre situation. Copier l’assiette d’un proche ou les portions d’un programme trouvé en ligne n’est pas toujours utile. Nous regardons comment se passent vos repas, ce qui vous satisfait et à quel moment vous ressentez de la faim ou de l’inconfort.\"},{\"type\":\"p\",\"text\":\"Des repères structurés peuvent aider lorsque les journées sont irrégulières ou les sensations difficiles à interpréter. Ils sont discutés avec vous et ajustés selon vos retours. Un petit-déjeuner, une collation ou une autre répartition ne se décident pas uniquement à partir d’une règle générale : leur intérêt s’évalue dans votre journée.\"},{\"type\":\"p\",\"text\":\"L’objectif est aussi de vous rendre plus autonome. Vous devez pouvoir adapter un repas lorsque l’horaire change ou qu’un ingrédient manque. Nous travaillons donc sur des possibilités et des équivalences pratiques, plutôt que sur un menu qu’il faudrait reproduire à l’identique pour avoir l’impression de bien faire.\"},{\"type\":\"h2\",\"id\":\"organisation\",\"text\":\"Mieux manger avec vos contraintes de temps et de budget\"},{\"type\":\"h3\",\"text\":\"Simplifier les courses\"},{\"type\":\"p\",\"text\":\"Nous pouvons construire une base de courses à partir de vos repas habituels et des aliments que vous utilisez réellement. Quelques produits de placard, des surgelés ou des conserves peuvent faciliter les jours chargés. Lire les étiquettes doit vous aider à choisir, sans vous obliger à comparer chaque produit pendant de longues minutes.\"},{\"type\":\"h3\",\"text\":\"Prévoir des repas accessibles les jours difficiles\"},{\"type\":\"p\",\"text\":\"Lorsque le temps manque, disposer de quelques associations simples permet de limiter l’improvisation subie. Nous pouvons réfléchir à un repas transportable, à des restes faciles à réutiliser ou à une préparation rapide. Les solutions retenues tiennent compte de votre équipement, de votre budget et du temps que vous souhaitez consacrer à la cuisine.\"},{\"type\":\"h3\",\"text\":\"Garder une place pour les repas partagés\"},{\"type\":\"p\",\"text\":\"Restaurants, invitations et repas de famille font partie de l’alimentation. Le suivi peut vous aider à les aborder avec davantage de souplesse. Il n’est pas nécessaire de préparer systématiquement un menu différent pour chaque personne. Nous recherchons des bases communes et les adaptations utiles, sans faire de la table familiale un lieu de contrôle permanent.\"},{\"type\":\"h2\",\"id\":\"consultations\",\"text\":\"Ce que nous travaillons en consultation\"},{\"type\":\"p\",\"text\":\"Le premier rendez-vous permet de comprendre votre demande : avez-vous surtout besoin d’idées, de connaissances, d’une meilleure organisation ou d’un regard extérieur sur vos habitudes ? Nous faisons le point sur ce qui fonctionne déjà, les conseils reçus et les difficultés qui reviennent. Vous n’avez pas à présenter une alimentation exemplaire pour être accompagné.\"},{\"type\":\"p\",\"text\":\"Nous choisissons ensuite des actions précises à essayer. Par exemple, rendre un déjeuner plus complet, diversifier deux repas habituels ou prévoir une solution pour une journée sans pause. Ce sont des exemples de travail, pas un programme universel. Les changements retenus doivent répondre à votre priorité et rester compatibles avec vos possibilités.\"},{\"type\":\"p\",\"text\":\"Lors du suivi, nous reprenons vos observations et vos questions. Ce qui vous convient peut être consolidé ; ce qui ajoute de la charge mentale est réexaminé. Vous progressez aussi en comprenant pourquoi un conseil vous aide. Le but est de disposer de repères que vous pourrez faire évoluer lorsque votre quotidien changera.\"},{\"type\":\"cta\",\"kind\":\"mid\"},{\"type\":\"h2\",\"id\":\"besoins\",\"text\":\"Un accompagnement adapté à votre besoin principal\"},{\"type\":\"p\",\"text\":\"Si votre demande concerne surtout une évolution pondérale, la page sur l’accompagnement de la perte de poids précise comment cet objectif est abordé. Si des aliments déclenchent un inconfort ou si vous en avez supprimé plusieurs, l’accompagnement des troubles digestifs peut être plus adapté à votre situation.\"},{\"type\":\"p\",\"text\":\"Une alimentation équilibrée peut aussi s’inscrire dans un parcours de soins. Dans ce cas, les recommandations générales sont adaptées aux consignes médicales, aux traitements et aux capacités à manger. La page sur la nutrition en cas de maladie chronique présente ce cadre. Votre motif de consultation permet de choisir le bon point de départ.\"},{\"type\":\"p\",\"text\":\"Si vos questions portent surtout sur l’organisation des repas autour des entraînements, découvrez le suivi en nutrition du sport. Nous pouvons préciser ensemble la place de votre activité physique dans l’accompagnement recherché.\"},{\"type\":\"h2\",\"id\":\"faq\",\"text\":\"Vos questions sur l’équilibre alimentaire\"},{\"type\":\"h3\",\"text\":\"Faut-il supprimer le sucre ou les féculents ?\"},{\"type\":\"p\",\"text\":\"Une suppression systématique n’est pas la base de cet accompagnement. Nous regardons la place des aliments dans votre alimentation globale et les éventuelles indications médicales. Une règle rigide n’aide pas nécessairement à construire des habitudes satisfaisantes et durables.\"},{\"type\":\"h3\",\"text\":\"Peut-on mieux manger avec un petit budget ?\"},{\"type\":\"p\",\"text\":\"Oui, l’accompagnement peut intégrer cette contrainte dès le départ. Nous travaillons sur les aliments accessibles, leur préparation et la limitation du gaspillage. Les produits spécialisés, les compléments et les ingrédients coûteux ne constituent pas une condition pour commencer à améliorer votre organisation alimentaire.\"},{\"type\":\"h3\",\"text\":\"Vais-je recevoir un menu imposé ?\"},{\"type\":\"p\",\"text\":\"Les supports dépendent de votre besoin. Des exemples de repas peuvent être utiles, mais ils servent à comprendre et à choisir. Nous pouvons aussi travailler à partir de vos propres recettes. L’objectif est de construire une organisation que vous pourrez utiliser sans dépendre d’un menu unique.\"},{\"type\":\"h3\",\"text\":\"Puis-je consulter seulement pour apprendre à mieux manger ?\"},{\"type\":\"p\",\"text\":\"Oui. Vous n’avez pas besoin d’avoir une maladie ou un objectif de poids. Vous pouvez souhaiter mieux comprendre les aliments, préparer une nouvelle organisation ou faire le point sur des conseils contradictoires. Votre demande peut être simple et se préciser pendant la consultation.\"},{\"type\":\"h2\",\"id\":\"commencer\",\"text\":\"Construire une alimentation qui vous ressemble\"},{\"type\":\"p\",\"text\":\"Vous souhaitez des repères plus clairs et des solutions adaptées à votre quotidien ? Une première consultation permet de choisir un point de départ concret. Pour connaître les modalités pratiques ou poser une question avant de réserver, retrouvez les informations de contact.\"},{\"type\":\"p\",\"text\":\"Nous partirons de ce que vous mangez aujourd’hui, de ce que vous aimez et de ce que vous avez envie de faire évoluer. Mieux manger devient alors un travail progressif, compréhensible et ajustable à votre vie.\"},{\"type\":\"cta\",\"kind\":\"end\"}]},{\"slug\":\"nutrition-du-sport\",\"moduleId\":\"nutrition-sport\",\"crumb\":\"Nutrition du sport\",\"title\":\"Diététicien du sport à Metz | Valentin Diamantini\",\"description\":\"Adaptez votre alimentation à vos entraînements, à votre récupération et à vos objectifs. Consultation en nutrition du sport à Metz et découverte de StrongDiet.\",\"ctaAfter\":\"methode\",\"links\":[[\"difficultés du comportement alimentaire\",\"/approche-dietetique-et-tca\"],[\"troubles digestifs\",\"/troubles-digestifs\"],[\"Agence française de lutte contre le dopage explique les précautions liées aux compléments\",\"https://www.afld.fr/la-lutte-antidopage/education-et-prevention/les-complements-alimentaires/\"],[\"site StrongDiet et la Préparation Nutritionnelle A2P\",\"https://www.strongdiet-nutrition.com/\"],[\"informations de contact du cabinet\",\"/#contact\"]],\"h1\":\"Diététicien du sport à Metz : une alimentation adaptée à vos entraînements\",\"blocks\":[{\"type\":\"p\",\"text\":\"Vous vous entraînez régulièrement, mais vous ne savez pas toujours comment ajuster vos repas à votre pratique. Manque d’énergie pendant les séances, récupération difficile, contraintes de poids ou inconfort digestif peuvent compliquer votre progression. Un accompagnement en nutrition du sport permet de relier votre alimentation aux exigences de votre discipline et à votre organisation réelle.\"},{\"type\":\"p\",\"text\":\"Je suis Valentin Diamantini, diététicien-nutritionniste. J’accompagne les sportifs à Metz pour construire des repères individualisés, du quotidien à la préparation d’une échéance. La consultation s’adresse aux pratiquants amateurs comme aux compétiteurs, avec des objectifs définis selon votre niveau, vos contraintes et votre santé.\"},{\"type\":\"cta\",\"kind\":\"intro\"},{\"type\":\"h2\",\"id\":\"objectifs\",\"text\":\"Pourquoi consulter en nutrition du sport ?\"},{\"type\":\"h3\",\"text\":\"Adapter l’alimentation à la charge d’entraînement\"},{\"type\":\"p\",\"text\":\"Votre semaine sportive peut alterner séances intenses, travail technique, récupération et repos. Nous regardons comment vos repas s’organisent autour de ces journées et les difficultés que vous rencontrez. L’objectif est de définir des ajustements cohérents avec votre pratique, sans reproduire automatiquement les habitudes d’un autre sportif ou un programme trouvé en ligne.\"},{\"type\":\"h3\",\"text\":\"Mieux organiser la récupération\"},{\"type\":\"p\",\"text\":\"La récupération se prépare aussi dans les conditions concrètes de votre journée : heure de fin de séance, trajet, prochain repas et disponibilité des aliments. Nous travaillons sur des solutions utilisables lorsque vous rentrez tard ou enchaînez plusieurs activités. Les apports alimentaires sont abordés avec le sommeil, le calendrier sportif et les autres facteurs pertinents pour votre situation.\"},{\"type\":\"h3\",\"text\":\"Préparer une compétition ou une nouvelle phase d’entraînement\"},{\"type\":\"p\",\"text\":\"Une compétition, une reprise ou une augmentation du volume d’entraînement peut nécessiter une organisation différente. Nous anticipons les possibilités de repas, les déplacements et les conditions de l’effort. Les stratégies envisagées sont testées à l’entraînement lorsque cela est pertinent, afin de disposer de repères familiers le jour de l’échéance.\"},{\"type\":\"h2\",\"id\":\"disciplines\",\"text\":\"Un suivi adapté aux exigences de votre discipline\"},{\"type\":\"h3\",\"text\":\"Musculation et sports de force\"},{\"type\":\"p\",\"text\":\"Prise de masse musculaire, organisation des repas et évolution de la composition corporelle peuvent faire partie de la demande. Nous examinons les apports, leur répartition et leur faisabilité dans votre quotidien. Le travail ne se limite pas à choisir une quantité de protéines : il doit prendre en compte l’ensemble de votre alimentation et de votre préparation.\"},{\"type\":\"h3\",\"text\":\"Sports de combat et disciplines à catégories de poids\"},{\"type\":\"p\",\"text\":\"La gestion du poids demande d’être anticipée et replacée dans le contexte de santé, d’entraînement et de compétition. La consultation ne repose pas sur des protocoles extrêmes de restriction ou de déshydratation. Nous évaluons la demande, le calendrier et les marges d’adaptation, en coordination avec les autres intervenants lorsque la situation le nécessite.\"},{\"type\":\"h3\",\"text\":\"Endurance, sports collectifs et pratiques hybrides\"},{\"type\":\"p\",\"text\":\"Les besoins d’organisation varient selon la durée des séances, leur intensité, les horaires et l’accès à l’alimentation. Nous pouvons travailler sur les repas avant et après l’effort, les possibilités pendant certaines séances et la tolérance digestive. Course à pied, cyclisme ou sports collectifs n’impliquent pas une stratégie identique pour chaque pratiquant.\"},{\"type\":\"h2\",\"id\":\"methode\",\"text\":\"Comment se construit votre stratégie nutritionnelle ?\"},{\"type\":\"h3\",\"text\":\"Comprendre votre pratique et votre fonctionnement quotidien\"},{\"type\":\"p\",\"text\":\"Le bilan reprend votre discipline, vos objectifs, votre calendrier et vos habitudes alimentaires. Nous discutons de ce qui se passe concrètement avant, pendant et après les séances. Vos éventuels problèmes de santé, les traitements, les symptômes digestifs et les compléments utilisés font également partie des informations utiles.\"},{\"type\":\"p\",\"text\":\"Vous pouvez apporter votre planning d’entraînement et les questions qui reviennent le plus souvent. Il n’est pas nécessaire de disposer d’une montre connectée, de mesures détaillées ou d’un relevé alimentaire exhaustif. Les outils sont choisis selon leur utilité. Nous commençons par les informations qui permettent de comprendre votre demande.\"},{\"type\":\"h3\",\"text\":\"Transformer les besoins en solutions applicables\"},{\"type\":\"p\",\"text\":\"Nous définissons des repères de repas et des adaptations autour des entraînements. Cela peut concerner un départ matinal, une séance après le travail ou une compétition loin du domicile. Les choix tiennent compte de vos goûts, de votre budget et de votre matériel. Une stratégie doit rester réalisable dans les conditions où vous pratiquez.\"},{\"type\":\"h3\",\"text\":\"Réviser les choix à partir de vos retours\"},{\"type\":\"p\",\"text\":\"Le suivi permet d’examiner votre confort, votre organisation et les difficultés observées. Une préparation sportive évolue ; les conseils peuvent évoluer avec elle. Nous distinguons les changements alimentaires de ce qui relève du programme d’entraînement ou d’un avis médical. Les performances dépendent de plusieurs facteurs et aucun résultat sportif ne peut être garanti par la nutrition seule.\"},{\"type\":\"cta\",\"kind\":\"mid\"},{\"type\":\"h2\",\"id\":\"sante\",\"text\":\"Faire progresser le projet sportif en préservant la santé\"},{\"type\":\"p\",\"text\":\"Manger trop peu par rapport aux dépenses d’exercice peut avoir des conséquences sur la santé et la performance. Le consensus du Comité international olympique décrit ce risque dans le cadre du déficit énergétique relatif dans le sport, ou REDs. Une fatigue persistante, des blessures répétées ou des perturbations du cycle menstruel méritent une évaluation adaptée ; ces signes ne suffisent pas à poser soi-même un diagnostic.\"},{\"type\":\"p\",\"text\":\"Une demande de modification du poids ou de la composition corporelle doit donc être discutée dans ce contexte. Nous examinons sa pertinence, son calendrier et ses effets possibles sur votre alimentation. Si le contrôle des repas devient envahissant ou source de souffrance, un accompagnement des difficultés du comportement alimentaire peut être nécessaire.\"},{\"type\":\"p\",\"text\":\"L’inconfort digestif à l’effort mérite également une attention spécifique. Nous regardons les conditions de survenue, les habitudes et les essais déjà réalisés. Si les symptômes existent aussi au quotidien, la page sur les troubles digestifs présente le cadre du suivi. Un symptôme persistant ne doit pas être attribué automatiquement à l’entraînement.\"},{\"type\":\"h2\",\"id\":\"complements\",\"text\":\"Compléments alimentaires : commencer par évaluer leur intérêt\"},{\"type\":\"p\",\"text\":\"Un complément n’est pas automatiquement utile parce qu’il est populaire dans votre discipline. Nous faisons le point sur votre alimentation, votre besoin, les produits utilisés et les éventuelles contre-indications. Les risques de contamination par des substances interdites doivent aussi être pris en compte chez les sportifs concernés par les contrôles antidopage.\"},{\"type\":\"p\",\"text\":\"L’Agence française de lutte contre le dopage explique les précautions liées aux compléments. Aucune démarche de sélection ne permet de promettre un risque nul. La consultation permet d’aborder ces questions sans construire le suivi autour de l’achat systématique de produits.\"},{\"type\":\"h2\",\"id\":\"strongdiet\",\"text\":\"StrongDiet : découvrir un accompagnement dédié à la préparation sportive\"},{\"type\":\"p\",\"text\":\"StrongDiet est mon activité dédiée à la nutrition du sport. Son site présente les modalités d’accompagnement et la Préparation Nutritionnelle A2P. Cette offre s’adresse aux sportifs qui souhaitent organiser leur nutrition dans le cadre d’un projet de préparation, avec des ajustements selon les objectifs et les échéances.\"},{\"type\":\"p\",\"text\":\"Une consultation peut répondre à un besoin identifié et aider à préciser la suite. Pour découvrir le programme, son fonctionnement et les conditions actuelles, consultez le site StrongDiet et la Préparation Nutritionnelle A2P. Les informations de l’offre sont regroupées sur ce site dédié afin de vous permettre de choisir en connaissance de cause.\"},{\"type\":\"h2\",\"id\":\"faq\",\"text\":\"Vos questions sur la nutrition sportive\"},{\"type\":\"h3\",\"text\":\"Faut-il être compétiteur pour consulter ?\"},{\"type\":\"p\",\"text\":\"Non. Vous pouvez consulter pour mieux organiser votre alimentation autour de quelques séances hebdomadaires, reprendre une activité ou résoudre une difficulté précise. L’accompagnement est ajusté à votre pratique réelle. Il n’exige pas de viser le haut niveau pour être utile.\"},{\"type\":\"h3\",\"text\":\"Un plan alimentaire est-il indispensable ?\"},{\"type\":\"p\",\"text\":\"Pas systématiquement. Certains sportifs ont besoin d’un cadre détaillé, d’autres de repères plus souples. Nous choisissons un support selon votre objectif et votre organisation. Le suivi doit aussi vous aider à comprendre les adaptations, afin de pouvoir les utiliser lorsque vos journées changent.\"},{\"type\":\"h3\",\"text\":\"Puis-je préparer une prise de masse ou une évolution du poids ?\"},{\"type\":\"p\",\"text\":\"Oui, cette demande peut être abordée. Nous évaluons d’abord sa pertinence dans votre projet sportif et votre contexte de santé. Le calendrier et les méthodes sont individualisés. Un objectif physique ne justifie pas de compromettre l’alimentation, la récupération ou la relation au corps.\"},{\"type\":\"h3\",\"text\":\"Comment choisir entre une consultation et StrongDiet ?\"},{\"type\":\"p\",\"text\":\"Une consultation permet de faire le point sur un besoin et de définir la suite. Le site StrongDiet présente une préparation plus structurée autour d’un projet sportif. Si vous hésitez, vous pouvez expliquer votre demande avant de choisir ; aucun programme n’a besoin d’être décidé sans comprendre votre situation.\"},{\"type\":\"h2\",\"id\":\"commencer\",\"text\":\"Préparer la prochaine étape de votre pratique\"},{\"type\":\"p\",\"text\":\"Vous souhaitez relier plus clairement votre alimentation à vos entraînements ? Prenez rendez-vous pour examiner votre situation et définir les premières priorités. Pour une question sur le suivi, retrouvez les informations de contact du cabinet.\"},{\"type\":\"p\",\"text\":\"Apportez votre objectif, vos contraintes et votre calendrier, même s’ils sont encore en construction. Nous travaillerons à partir de ces éléments pour élaborer des repères adaptés à votre pratique et que vous pourrez réellement mettre en œuvre.\"},{\"type\":\"cta\",\"kind\":\"end\"}]},{\"slug\":\"maladies-chroniques-et-aigues\",\"moduleId\":\"maladies\",\"crumb\":\"Maladies chroniques et aiguës\",\"title\":\"Nutrition et maladies chroniques à Metz | Diététicien\",\"description\":\"Diabète, cancer, dénutrition ou maladie digestive : un accompagnement nutritionnel personnalisé à Metz, adapté à vos traitements et à votre quotidien.\",\"ctaAfter\":\"parcours\",\"links\":[[\"informations de l’Assurance Maladie sur l’alimentation et le diabète\",\"https://www.ameli.fr/assure/sante/themes/diabete-adulte/diabete-vivre-quotidien/equilibre-alimentaire/gerer-alimentation-repas\"],[\"Institut national du cancer propose des informations sur l’alimentation pendant les traitements\",\"https://www.cancer.fr/catalogue-des-publications/cancer-votre-alimentation-pendant-les-traitements\"],[\"troubles digestifs et à l’alimentation\",\"/troubles-digestifs\"],[\"équilibre alimentaire au quotidien\",\"/equilibre-alimentaire\"],[\"coordonnées du cabinet\",\"/#contact\"]],\"h1\":\"Nutrition et maladies chroniques à Metz : adapter votre alimentation à vos soins\",\"blocks\":[{\"type\":\"p\",\"text\":\"Une maladie, un traitement ou une hospitalisation peuvent modifier l’appétit, la digestion et l’organisation des repas. Vous recevez parfois plusieurs conseils sans savoir comment les concilier au quotidien. Le suivi diététique aide à construire une alimentation adaptée à votre situation, en tenant compte des consignes médicales et de ce que vous pouvez réellement manger.\"},{\"type\":\"p\",\"text\":\"Je suis Valentin Diamantini, diététicien-nutritionniste à Metz, avec une expérience en milieu hospitalier et en nutrition clinique. Je vous accompagne pour préciser les priorités nutritionnelles, trouver des solutions pratiques et faire évoluer les conseils au fil de votre parcours. Votre confort, vos besoins et votre qualité de vie restent au centre du travail.\"},{\"type\":\"cta\",\"kind\":\"intro\"},{\"type\":\"h2\",\"id\":\"role\",\"text\":\"Quel est le rôle de la nutrition dans votre parcours de soins ?\"},{\"type\":\"p\",\"text\":\"L’accompagnement nutritionnel peut aider à adapter les repas aux conséquences d’une maladie ou d’un traitement. Les objectifs varient : maintenir des apports suffisants, retrouver des possibilités alimentaires, organiser les repas ou comprendre les recommandations reçues. Ils sont définis à partir de votre état de santé et réévalués lorsque la situation évolue.\"},{\"type\":\"p\",\"text\":\"La consultation diététique complète les soins médicaux. Elle ne remplace ni le diagnostic, ni les traitements, ni leur surveillance. Un conseil alimentaire pertinent pour une personne peut être inadapté à une autre, notamment lorsque plusieurs maladies ou traitements coexistent. Nous travaillons donc à partir des informations utiles à votre prise en charge.\"},{\"type\":\"p\",\"text\":\"Vous n’avez pas à gérer seul des consignes qui semblent incompatibles. Le premier échange permet de les reprendre, de distinguer les priorités et de préparer les questions à transmettre à votre médecin si nécessaire. Avec votre accord, les échanges entre professionnels peuvent faciliter la cohérence du suivi.\"},{\"type\":\"h2\",\"id\":\"situations\",\"text\":\"Dans quelles situations un suivi diététique peut-il être utile ?\"},{\"type\":\"h3\",\"text\":\"Diabète et organisation de l’alimentation\"},{\"type\":\"p\",\"text\":\"En cas de diabète, l’accompagnement aide à comprendre la place des aliments et à organiser les repas en tenant compte du traitement. Nous pouvons aborder les horaires, les repas pris à l’extérieur, les habitudes familiales et les difficultés rencontrées. Il ne s’agit pas de supprimer indistinctement les glucides, mais de personnaliser les repères avec l’équipe soignante.\"},{\"type\":\"p\",\"text\":\"Les informations de l’Assurance Maladie sur l’alimentation et le diabète constituent une base pour comprendre les principes généraux. Les changements de traitement restent du ressort du prescripteur. Si vous observez des difficultés particulières, elles sont prises en compte pour adapter le travail alimentaire et orienter les questions médicales.\"},{\"type\":\"h3\",\"text\":\"Cancer et conséquences des traitements sur les repas\"},{\"type\":\"p\",\"text\":\"Pendant les traitements d’un cancer, les priorités alimentaires peuvent changer. Une baisse d’appétit, des modifications du goût ou des difficultés à manger nécessitent des adaptations qui tiennent compte de vos symptômes. Nous cherchons à préserver les apports et à rendre les repas plus accessibles, en lien avec les consignes de l’équipe d’oncologie.\"},{\"type\":\"p\",\"text\":\"Il n’existe pas d’aliment qui remplace les traitements du cancer. Une restriction importante ou un jeûne entrepris sans avis de l’équipe soignante peut compromettre les apports. L’Institut national du cancer propose des informations sur l’alimentation pendant les traitements. Elles peuvent compléter les échanges avec vos professionnels de santé.\"},{\"type\":\"h3\",\"text\":\"Maladies digestives et tolérance alimentaire\"},{\"type\":\"p\",\"text\":\"Une maladie de Crohn, une rectocolite hémorragique ou des suites de chirurgie digestive peuvent modifier les priorités nutritionnelles. Les conseils dépendent de votre état, des traitements et des consignes médicales. Le suivi vise à identifier des solutions compatibles avec les symptômes et à préserver les possibilités alimentaires, sans imposer un régime unique à toutes les situations.\"},{\"type\":\"p\",\"text\":\"La maladie cœliaque est une maladie auto-immune distincte des maladies inflammatoires chroniques de l’intestin. Son accompagnement repose sur les consignes propres au diagnostic. Pour les symptômes fonctionnels ou un intestin irritable, vous pouvez consulter la page dédiée aux troubles digestifs et à l’alimentation, qui présente une démarche différente.\"},{\"type\":\"h3\",\"text\":\"Préparation et suivi après une chirurgie\"},{\"type\":\"p\",\"text\":\"Une chirurgie bariatrique ou digestive s’inscrit dans un parcours médical spécifique. Le travail diététique peut porter sur la préparation, la reprise alimentaire et les difficultés rencontrées après l’intervention. Les étapes, textures et éventuelles supplémentations doivent respecter les indications de l’équipe qui vous suit. Un protocole trouvé en ligne ne suffit pas à organiser cette période.\"},{\"type\":\"h2\",\"id\":\"denutrition\",\"text\":\"Dénutrition : ne pas banaliser une baisse des apports\"},{\"type\":\"p\",\"text\":\"Une perte de poids involontaire, une diminution de l’appétit ou des repas devenus difficiles justifient d’en parler aux soignants. La dénutrition peut concerner une personne dont le poids paraît habituel ou élevé. L’évaluation tient compte de plusieurs éléments ; l’apparence physique ne permet pas de l’écarter.\"},{\"type\":\"p\",\"text\":\"Selon la situation, l’accompagnement peut rechercher des repas plus faciles à consommer, une organisation différente ou un enrichissement adapté. Ces choix sont individualisés, en tenant compte des symptômes et des traitements. Les compléments nutritionnels oraux, lorsqu’ils sont indiqués, s’intègrent au parcours de soins et aux modalités de prescription nécessaires.\"},{\"type\":\"p\",\"text\":\"Chez une personne âgée, les difficultés à faire les courses, à cuisiner, à mâcher ou à manger seul méritent également d’être explorées. L’objectif est de comprendre les obstacles et les aides possibles. La consultation peut associer un proche lorsque cela facilite l’organisation et que la personne concernée le souhaite.\"},{\"type\":\"h2\",\"id\":\"parcours\",\"text\":\"Comment se déroule votre accompagnement nutritionnel ?\"},{\"type\":\"h3\",\"text\":\"Rassembler les informations utiles\"},{\"type\":\"p\",\"text\":\"Le premier rendez-vous reprend votre demande, les diagnostics connus, les traitements et les recommandations déjà reçues. Les comptes rendus disponibles peuvent aider à comprendre le contexte. Nous examinons aussi ce que vous mangez actuellement, ce qui vous gêne et ce qui reste agréable. Vos priorités sont une partie essentielle du bilan.\"},{\"type\":\"h3\",\"text\":\"Choisir des adaptations réalisables\"},{\"type\":\"p\",\"text\":\"Nous définissons des objectifs concrets, adaptés à la période que vous traversez. Il peut s’agir de rendre une prise alimentaire plus facile, de répartir autrement les repas ou d’organiser les courses. Nous tenons compte de votre fatigue, de votre budget et des personnes qui vous aident. Les exemples proposés sont ensuite ajustés à vos possibilités.\"},{\"type\":\"h3\",\"text\":\"Faire évoluer les conseils avec votre situation\"},{\"type\":\"p\",\"text\":\"Le suivi permet de reprendre ce qui fonctionne et ce qui devient difficile. Un changement de traitement, une hospitalisation ou une amélioration des symptômes peut conduire à revoir les repères. La fréquence des séances dépend des besoins. Si une difficulté sort du champ de la consultation, une orientation vers le professionnel approprié est discutée.\"},{\"type\":\"cta\",\"kind\":\"mid\"},{\"type\":\"h2\",\"id\":\"quotidien\",\"text\":\"Préserver la vie quotidienne autour des repas\"},{\"type\":\"h3\",\"text\":\"Concilier les conseils et le plaisir de manger\"},{\"type\":\"p\",\"text\":\"Les recommandations prennent tout leur sens lorsqu’elles peuvent être appliquées chez vous. Nous cherchons des préparations adaptées à vos goûts et des solutions pour les jours où l’énergie manque. Une alimentation plus simple peut être pertinente à certaines périodes. La recherche d’une alimentation parfaite ne doit pas compliquer davantage votre parcours.\"},{\"type\":\"h3\",\"text\":\"Soutenir aussi les proches aidants\"},{\"type\":\"p\",\"text\":\"Lorsqu’un proche prépare les repas, il peut avoir besoin de repères pour comprendre les priorités et éviter des changements inutiles. Nous pouvons clarifier ce qu’il est possible d’adapter et ce qui relève d’un avis médical. L’accompagnement vise également à rendre l’organisation plus lisible pour la personne aidée et son entourage.\"},{\"type\":\"p\",\"text\":\"Lorsque votre situation permet de revenir à des repères généraux, la page sur l’équilibre alimentaire au quotidien apporte des explications complémentaires. Ces repères ne remplacent pas les adaptations spécifiques à votre maladie. Ils peuvent servir de base lorsque les contraintes évoluent et que vous souhaitez retrouver davantage d’autonomie.\"},{\"type\":\"h2\",\"id\":\"faq\",\"text\":\"Vos questions sur la nutrition thérapeutique\"},{\"type\":\"h3\",\"text\":\"Puis-je consulter si plusieurs maladies coexistent ?\"},{\"type\":\"p\",\"text\":\"Oui, le bilan sert justement à comprendre les différentes contraintes et les priorités. Certaines situations demandent une coordination plus étroite ou un suivi spécialisé. Nous examinons ce qui peut être travaillé en consultation et les informations nécessaires pour éviter des conseils contradictoires.\"},{\"type\":\"h3\",\"text\":\"Dois-je venir avec une ordonnance ?\"},{\"type\":\"p\",\"text\":\"Vous pouvez prendre contact pour préciser votre demande. Si votre médecin a prescrit des soins, formulé des consignes alimentaires ou demandé un suivi, apportez les documents disponibles. Ils facilitent la cohérence de l’accompagnement. Les modalités pratiques peuvent être clarifiées avant le rendez-vous.\"},{\"type\":\"h3\",\"text\":\"L’alimentation peut-elle remplacer mon traitement ?\"},{\"type\":\"p\",\"text\":\"Non. Elle peut être une composante du soin et demander une adaptation importante, mais elle ne justifie pas l’arrêt ou la modification d’un traitement sans avis médical. Nous travaillons avec les prescriptions existantes et signalons les questions qui nécessitent un échange avec votre médecin.\"},{\"type\":\"h3\",\"text\":\"Peut-on venir accompagné ?\"},{\"type\":\"p\",\"text\":\"Oui, la présence d’un proche peut être utile si vous le souhaitez, notamment lorsqu’il participe aux courses ou aux repas. Vous restez au centre de l’échange. Le contenu de la consultation et les informations partagées avec d’autres professionnels tiennent compte de votre accord et du cadre du soin.\"},{\"type\":\"h2\",\"id\":\"commencer\",\"text\":\"Faire le point sur vos besoins actuels\"},{\"type\":\"p\",\"text\":\"Vous cherchez à adapter votre alimentation à une maladie, à un traitement ou à une période de récupération ? Prenez rendez-vous pour clarifier les priorités et les premières possibilités. Les coordonnées du cabinet permettent de poser une question pratique avant la consultation.\"},{\"type\":\"p\",\"text\":\"Nous partirons de votre situation actuelle, des recommandations médicales et des repas que vous arrivez à prendre. Le suivi doit vous aider à avancer avec des conseils compréhensibles, ajustables et cohérents avec votre parcours de soins.\"},{\"type\":\"cta\",\"kind\":\"end\"}]},{\"slug\":\"approche-dietetique-et-tca\",\"moduleId\":\"tca\",\"crumb\":\"Troubles du comportement alimentaire\",\"title\":\"TCA à Metz | Diététicien Valentin Diamantini\",\"description\":\"Un accompagnement diététique à Metz pour les TCA, les crises alimentaires et la restriction. Écoute sans jugement et coordination avec vos autres soignants.\",\"ctaAfter\":\"premier\",\"links\":[[\"Haute Autorité de santé décrit l’importance de cette coordination pour la boulimie et l’hyperphagie boulimique\",\"https://www.has-sante.fr/jcms/c_2581436/fr/boulimie-et-hyperphagie-boulimique-reperage-et-elements-generaux-de-prise-en-charge\"],[\"troubles digestifs\",\"/troubles-digestifs\"],[\"page de contact du cabinet\",\"/#contact\"]],\"h1\":\"TCA à Metz : un accompagnement diététique sans jugement\",\"blocks\":[{\"type\":\"p\",\"text\":\"Lorsque manger devient une source d’angoisse, de perte de contrôle ou de règles envahissantes, demander de l’aide peut être difficile. Vous pouvez craindre de ne pas être compris, de devoir tout raconter immédiatement ou de ne pas être assez en difficulté pour consulter. Votre souffrance mérite d’être entendue, même si vous ne savez pas encore comment la nommer.\"},{\"type\":\"p\",\"text\":\"Je suis Valentin Diamantini, diététicien-nutritionniste à Metz. Je vous accompagne dans le travail sur l’alimentation, en lien avec les professionnels nécessaires à votre situation. La démarche tient compte de votre santé, de votre vécu et de votre rythme, sans réduire les difficultés à un manque de volonté.\"},{\"type\":\"cta\",\"kind\":\"intro\"},{\"type\":\"h2\",\"id\":\"aide\",\"text\":\"Quand demander de l’aide pour votre relation à l’alimentation ?\"},{\"type\":\"p\",\"text\":\"Vous pouvez consulter lorsque les pensées autour des repas occupent une place importante, lorsque vous évitez certaines situations sociales ou lorsque vous vous sentez prisonnier de règles alimentaires. Des épisodes de perte de contrôle, une restriction marquée ou des comportements de compensation sont aussi des raisons de demander un avis professionnel.\"},{\"type\":\"p\",\"text\":\"Il n’est pas nécessaire d’attendre une aggravation visible. Un trouble alimentaire ne se repère pas uniquement à l’apparence ou au poids. Certaines difficultés restent discrètes pour l’entourage alors qu’elles prennent beaucoup de place au quotidien. Le premier échange permet de comprendre ce que vous vivez et d’envisager l’accompagnement approprié.\"},{\"type\":\"p\",\"text\":\"Manger sous l’effet d’une émotion ne constitue pas automatiquement un TCA. Une difficulté alimentaire peut néanmoins mériter du soutien avant même qu’un diagnostic soit posé. La consultation diététique n’a pas pour rôle de vous attribuer seul une étiquette ; elle s’inscrit dans une évaluation adaptée lorsque la situation le nécessite.\"},{\"type\":\"h2\",\"id\":\"formes\",\"text\":\"Des troubles et des difficultés qui peuvent prendre plusieurs formes\"},{\"type\":\"h3\",\"text\":\"Anorexie mentale et restriction alimentaire\"},{\"type\":\"p\",\"text\":\"L’anorexie mentale implique notamment une restriction des apports et des difficultés importantes autour du poids ou de l’image corporelle. D’autres formes de restriction peuvent aussi avoir des conséquences sérieuses. Une évaluation médicale est nécessaire pour apprécier l’état de santé et organiser les soins, sans attendre que la situation corresponde à une représentation stéréotypée du trouble.\"},{\"type\":\"h3\",\"text\":\"Boulimie et hyperphagie boulimique\"},{\"type\":\"p\",\"text\":\"Ces troubles comportent des épisodes de prise alimentaire associés à un sentiment de perte de contrôle. Dans la boulimie, ils s’accompagnent de comportements compensatoires. L’hyperphagie boulimique se caractérise par l’absence de recours régulier à ces compensations. Les formes rencontrées et leur retentissement nécessitent une évaluation professionnelle ; un épisode isolé ne suffit pas à poser un diagnostic.\"},{\"type\":\"h3\",\"text\":\"Évitement alimentaire et ARFID\"},{\"type\":\"p\",\"text\":\"Certaines restrictions sont liées aux textures, à la peur de conséquences désagréables ou à un faible intérêt pour l’alimentation, plutôt qu’à une recherche de minceur. Elles peuvent relever d’un trouble d’évitement ou de restriction de l’ingestion d’aliments, appelé ARFID. L’accompagnement doit alors tenir compte de ces particularités et ne pas être construit comme une prise en charge centrée sur le poids.\"},{\"type\":\"h3\",\"text\":\"Règles alimentaires envahissantes et culpabilité\"},{\"type\":\"p\",\"text\":\"La recherche d’une alimentation perçue comme parfaite peut devenir rigide et prendre une place excessive. Sans poser automatiquement un diagnostic, nous pouvons explorer l’impact de ces règles sur les repas, la vie sociale et votre confort. Ce qui compte pour commencer est la difficulté vécue et la possibilité de trouver un accompagnement adapté.\"},{\"type\":\"h2\",\"id\":\"place\",\"text\":\"La place du suivi diététique dans les TCA\"},{\"type\":\"h3\",\"text\":\"Construire des repères alimentaires sécurisants\"},{\"type\":\"p\",\"text\":\"Le travail peut porter sur une alimentation plus régulière et suffisante, des repères de repas ou la réintroduction de possibilités alimentaires. Il se construit selon votre état de santé et le projet de soins. Certaines situations nécessitent un cadre nutritionnel plus structuré ; le suivi ne consiste donc pas uniquement à attendre ou à suivre les sensations de faim.\"},{\"type\":\"h3\",\"text\":\"Réexaminer progressivement les règles et les peurs\"},{\"type\":\"p\",\"text\":\"Nous pouvons aborder les aliments redoutés, la culpabilité après les repas et les contraintes que vous vous imposez. Les étapes sont préparées et discutées ensemble. Le but n’est pas de vous mettre à l’épreuve, mais de comprendre ce qui rend un changement possible et les soutiens nécessaires pour le mettre en place.\"},{\"type\":\"h3\",\"text\":\"Redonner une place à la vie autour de l’alimentation\"},{\"type\":\"p\",\"text\":\"Pouvoir partager un repas, reprendre une pause au travail ou diminuer le temps consacré aux préoccupations alimentaires peut faire partie des objectifs. Ils ne sont pas identiques pour tout le monde. Nous cherchons des évolutions qui ont du sens pour vous, en tenant compte des difficultés physiques, émotionnelles et sociales.\"},{\"type\":\"p\",\"text\":\"Le suivi diététique ne remplace pas une psychothérapie ou une surveillance médicale lorsqu’elles sont nécessaires. Il apporte un travail spécifique sur les repas et les repères nutritionnels. La complémentarité des professionnels permet d’aborder les différentes dimensions de la situation, sans attendre d’une seule consultation qu’elle réponde à tout.\"},{\"type\":\"h2\",\"id\":\"premier\",\"text\":\"Comment se passe le premier rendez-vous ?\"},{\"type\":\"p\",\"text\":\"Nous commençons par ce qui vous amène et par ce que vous souhaitez pouvoir exprimer aujourd’hui. Vous pouvez parler de vos repas, de vos inquiétudes, des suivis déjà engagés ou simplement de la difficulté à demander de l’aide. Vous n’avez pas à préparer un récit parfaitement organisé pour être accueilli.\"},{\"type\":\"p\",\"text\":\"L’échange permet aussi de faire le point sur votre santé et sur la présence d’autres soignants. Selon les besoins, un avis médical ou une orientation spécialisée peut être proposé. Les mesures éventuellement utiles au suivi sont expliquées et discutées. Lorsqu’une surveillance clinique est nécessaire, elle fait partie du cadre de soins coordonné.\"},{\"type\":\"p\",\"text\":\"Nous définissons ensuite une première étape adaptée à la situation. Elle peut être modeste et très concrète. Il n’est pas attendu que toutes les difficultés disparaissent entre deux séances. Vos retours servent à ajuster l’accompagnement et à repérer ce qui demande davantage de soutien.\"},{\"type\":\"cta\",\"kind\":\"mid\"},{\"type\":\"h2\",\"id\":\"coordination\",\"text\":\"Un accompagnement coordonné avec les professionnels utiles\"},{\"type\":\"p\",\"text\":\"La prise en charge des TCA peut associer médecin, diététicien, psychologue ou psychiatre, et parfois une équipe spécialisée. La Haute Autorité de santé décrit l’importance de cette coordination pour la boulimie et l’hyperphagie boulimique. Les échanges utiles au soin sont organisés avec vous, dans le respect du cadre de confidentialité.\"},{\"type\":\"p\",\"text\":\"Si votre état nécessite un niveau de soins plus intensif, la consultation au cabinet ne doit pas retarder cette orientation. Un malaise important, une douleur thoracique ou l’impossibilité de vous alimenter ou de boire nécessitent un avis médical urgent. Le cabinet ne remplace pas les services d’urgence.\"},{\"type\":\"p\",\"text\":\"Des symptômes digestifs peuvent également compliquer les repas. Ils méritent d’être pris en compte sans multiplier les évictions. Vous trouverez des explications sur la page des troubles digestifs. Dans le contexte d’un TCA, les adaptations doivent rester cohérentes avec l’ensemble du projet de soins.\"},{\"type\":\"h2\",\"id\":\"faq\",\"text\":\"Vos questions avant de consulter\"},{\"type\":\"h3\",\"text\":\"Faut-il déjà avoir un diagnostic de TCA ?\"},{\"type\":\"p\",\"text\":\"Non. Vous pouvez demander de l’aide pour une souffrance alimentaire sans disposer d’un diagnostic. Le premier rendez-vous permet de comprendre la demande et d’envisager les avis nécessaires. Il ne remplace pas une évaluation médicale lorsque celle-ci est indiquée.\"},{\"type\":\"h3\",\"text\":\"Puis-je venir si mon poids paraît normal ?\"},{\"type\":\"p\",\"text\":\"Oui. L’apparence ou un chiffre de poids ne suffisent pas à évaluer la gravité des difficultés alimentaires. Les pensées, les comportements, les conséquences physiques et le retentissement sur votre quotidien méritent d’être entendus. Vous n’avez pas à attendre une modification visible du corps pour consulter.\"},{\"type\":\"h3\",\"text\":\"Puis-je venir avec un proche ?\"},{\"type\":\"p\",\"text\":\"Oui, si vous le souhaitez et si cette présence vous aide. La place de l’entourage se discute selon votre âge, votre situation et les besoins du suivi. Un proche peut aussi chercher à mieux comprendre comment soutenir sans surveiller chaque repas ni multiplier les commentaires sur le corps.\"},{\"type\":\"h3\",\"text\":\"Que faire si je souhaite aussi perdre du poids ?\"},{\"type\":\"p\",\"text\":\"Vous pouvez exprimer cette demande. Elle sera entendue et replacée dans l’évaluation globale. En présence d’un TCA actif, la priorité est de traiter les difficultés alimentaires et de protéger la santé. Un objectif d’amaigrissement ne doit pas renforcer la restriction, les crises ou les compensations.\"},{\"type\":\"h2\",\"id\":\"commencer\",\"text\":\"Faire un premier pas, même avec des hésitations\"},{\"type\":\"p\",\"text\":\"Vous pouvez prendre rendez-vous ou utiliser la page de contact du cabinet pour préciser votre demande. Un premier message peut rester simple : il n’est pas nécessaire d’y détailler votre histoire médicale. L’échange en consultation permettra d’aborder les informations utiles dans un cadre adapté.\"},{\"type\":\"p\",\"text\":\"Demander de l’aide ne vous oblige pas à avoir déjà toutes les réponses. Nous prendrons le temps de comprendre votre situation, d’identifier les priorités et de construire la suite avec les professionnels nécessaires. Votre rythme compte, tout comme la sécurité et la cohérence des soins proposés.\"},{\"type\":\"cta\",\"kind\":\"end\"}]}]");
function getServicePage(slug) {
	return servicePages.find((page) => page.slug === slug);
}
var emphasis = {
	"perte-de-poids": [
		"habitudes alimentaires compatibles avec votre vie",
		"La balance ne résume pas votre santé.",
		"Le travail ne repose pas sur une liste universelle d’aliments autorisés et interdits.",
		"Il n’est pas nécessaire d’avoir déjà modifié votre alimentation",
		"des actions concrètes à essayer entre deux séances",
		"elle ne signifie pas que vous manquez de volonté",
		"Cette autonomie se construit progressivement",
		"Votre expérience est une partie importante du bilan."
	],
	"troubles-digestifs": [
		"construire une alimentation adaptée à votre situation",
		"Mon parcours en gastro-entérologie et en chirurgie digestive",
		"Un aliment présent avant un symptôme n’en est pas forcément la cause.",
		"rendre un repas plus confortable",
		"des possibilités de diversification et des alternatives adaptées",
		"La réponse dépend du diagnostic et de votre tolérance.",
		"la réintroduction fait partie du travail dès le départ",
		"Vous n’avez pas besoin d’identifier vous-même l’aliment responsable avant de consulter."
	],
	"equilibre-alimentaire": [
		"des repères adaptés à vos besoins",
		"sans avoir nécessairement un objectif de perte de poids",
		"suffisamment régulière et suffisamment souple",
		"vous rendre plus autonome",
		"des restes faciles à réutiliser ou à une préparation rapide",
		"Les changements retenus doivent répondre à votre priorité",
		"sans dépendre d’un menu unique",
		"progressif, compréhensible et ajustable à votre vie"
	],
	"nutrition-du-sport": [
		"relier votre alimentation aux exigences de votre discipline",
		"aux pratiquants amateurs comme aux compétiteurs",
		"Les stratégies envisagées sont testées à l’entraînement lorsque cela est pertinent",
		"l’ensemble de votre alimentation et de votre préparation",
		"votre discipline, vos objectifs, votre calendrier et vos habitudes alimentaires",
		"Une stratégie doit rester réalisable dans les conditions où vous pratiquez.",
		"Une préparation sportive évolue ; les conseils peuvent évoluer avec elle.",
		"Préparation Nutritionnelle A2P"
	],
	"maladies-chroniques-et-aigues": [
		"en tenant compte des consignes médicales",
		"Votre confort, vos besoins et votre qualité de vie",
		"maintenir des apports suffisants",
		"La consultation diététique complète les soins médicaux.",
		"une organisation différente ou un enrichissement adapté",
		"des objectifs concrets, adaptés à la période que vous traversez",
		"des solutions pour les jours où l’énergie manque",
		"conseils compréhensibles, ajustables et cohérents avec votre parcours de soins"
	],
	"approche-dietetique-et-tca": [
		"Votre souffrance mérite d’être entendue",
		"Il n’est pas nécessaire d’attendre une aggravation visible.",
		"une alimentation plus régulière et suffisante",
		"Les étapes sont préparées et discutées ensemble.",
		"Vous n’avez pas à préparer un récit parfaitement organisé pour être accueilli.",
		"Les échanges utiles au soin sont organisés avec vous",
		"Vous pouvez demander de l’aide pour une souffrance alimentaire sans disposer d’un diagnostic.",
		"Demander de l’aide ne vous oblige pas à avoir déjà toutes les réponses."
	]
};
function richText(text, links, phrases) {
	const marks = [];
	for (const [phrase, href] of links) {
		const start = text.indexOf(phrase);
		if (start >= 0) marks.push({
			start,
			end: start + phrase.length,
			href
		});
	}
	for (const phrase of phrases) {
		let from = 0;
		while (from < text.length) {
			const start = text.indexOf(phrase, from);
			if (start < 0) break;
			marks.push({
				start,
				end: start + phrase.length,
				strong: true
			});
			from = start + phrase.length;
		}
	}
	const points = /* @__PURE__ */ new Set([0, text.length]);
	for (const mark of marks) {
		points.add(mark.start);
		points.add(mark.end);
	}
	const cuts = [...points].sort((a, b) => a - b);
	const slices = cuts.slice(0, -1).map((start, index) => {
		const end = cuts[index + 1];
		const href = marks.find((mark) => mark.href && mark.start <= start && mark.end >= end)?.href;
		const strong = marks.some((mark) => mark.strong && mark.start <= start && mark.end >= end);
		return {
			text: text.slice(start, end),
			href,
			strong
		};
	});
	const nodes = [];
	for (let index = 0; index < slices.length;) {
		const slice = slices[index];
		if (!slice.href) {
			nodes.push(slice.strong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "font-bold",
				children: slice.text
			}, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: slice.text }, index));
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
		nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: slice.href,
			className: "text-ink underline decoration-[#2b78d6] decoration-2 underline-offset-2",
			...external ? {
				target: "_blank",
				rel: "noreferrer"
			} : {},
			children: run.map((part, partIndex) => part.strong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "font-bold",
				children: part.text
			}, partIndex) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part.text }, partIndex))
		}, index));
		index = next;
	}
	return nodes;
}
function PrimaryButton({ href, children, onDark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: href.startsWith("http") ? "noreferrer" : void 0,
		className: `focus-ring inline-flex min-h-12 items-center rounded-full px-7 text-xl font-bold text-paper ${onDark ? "bg-olive-deep hover:bg-ink" : "bg-olive hover:bg-olive-deep"}`,
		children
	});
}
function TextLink({ href, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "focus-ring inline-flex min-h-12 items-center text-xl font-bold text-link",
		children
	});
}
function Cta({ kind, sommaire, calm }) {
	if (kind === "end") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative -mx-5 mt-14 bg-olive-lift text-paper sm:-mx-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-serif text-2xl text-balance text-paper sm:text-3xl",
				children: [
					"Besoin d’un ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lime",
						children: "suivi"
					}),
					" diététique ?"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						href: RDV,
						onDark: true,
						children: "Prendre rendez-vous"
					}),
					calm ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						href: "/#contact",
						children: "Poser une question"
					}),
					calm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "focus-ring text-lg font-semibold text-paper underline decoration-paper/70 underline-offset-4",
						children: "Poser une question"
					}) : null
				]
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-7 flex flex-wrap items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
			href: RDV,
			children: "Prendre rendez-vous"
		}), kind === "intro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
			href: sommaire ?? "#consultations",
			children: "Comprendre le suivi"
		}) : null]
	});
}
function Portrait({ soft, src, alt, shift = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative mx-auto w-[17.5rem] max-w-full sm:w-[20rem] lg:ml-auto lg:mr-0 lg:w-[22rem] ${shift}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: src ?? "/media/portrait.webp",
			alt: src ? alt ?? "Illustration" : "Valentin Diamantini, diététicien-nutritionniste",
			width: 911,
			height: 1400,
			decoding: "async",
			className: `relative z-0 w-full ${src ? "aspect-[911/1400] object-contain" : ""}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 390 180",
			preserveAspectRatio: "none",
			className: "pointer-events-none absolute inset-x-[-12%] bottom-0 z-10 h-[30%] w-[124%] lg:hidden",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: soft,
				d: "M0 96C70 78 130 110 200 64C270 18 330 36 390 58V180H0Z"
			})
		})]
	});
}
var headerTones = {
	"approche-dietetique-et-tca": {
		strong: "#d584f8",
		soft: "#f3ddfd"
	},
	"perte-de-poids": {
		strong: "#719a54",
		soft: "#e8f6ca"
	},
	"troubles-digestifs": {
		strong: "#5d8444",
		soft: "#e8f6ca"
	},
	"equilibre-alimentaire": {
		strong: "#8fb56f",
		soft: "#e8f6ca"
	},
	"nutrition-du-sport": {
		strong: "#7fa465",
		soft: "#e8f6ca"
	},
	"maladies-chroniques-et-aigues": {
		strong: "#719a54",
		soft: "#e8f6ca"
	}
};
function HeroDecor({ strong, soft }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 120 860",
			preserveAspectRatio: "none",
			className: "pointer-events-none absolute inset-y-0 left-0 z-0 hidden h-full w-[6.25rem] lg:block",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: strong,
				d: "M0 20C48 48 108 110 108 210C108 318 18 372 14 468C10 548 72 608 86 700C98 786 20 828 0 860Z"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 390 90",
			preserveAspectRatio: "none",
			className: "pointer-events-none absolute inset-x-0 top-0 z-0 h-16 w-full lg:hidden",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: strong,
				d: "M0 0H390V36C320 78 240 28 150 52C80 70 30 48 0 36Z"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 320 460",
			preserveAspectRatio: "none",
			className: "pointer-events-none absolute top-0 right-0 z-0 hidden h-[24rem] w-[18rem] lg:block",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: strong,
				d: "M320 0H190C120 36 48 120 36 210C20 320 90 420 190 460H320Z"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 1440 400",
			preserveAspectRatio: "none",
			className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-[34%] w-full lg:block",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: soft,
				d: "M640 400C820 400 940 300 1080 180C1200 80 1320 70 1440 130V400Z"
			})
		})
	] });
}
var heroes = {
	"perte-de-poids": {
		h2: "Perte de poids à Metz",
		lead: "Un accompagnement diététique adapté à votre vie"
	},
	"troubles-digestifs": {
		h2: "Troubles digestifs & Nutrition à Metz",
		lead: "Adaptez votre alimentation avec un diététicien"
	},
	"equilibre-alimentaire": {
		h2: "Équilibre alimentaire à METZ",
		lead: "Des repères simples pour votre quotidien"
	},
	"maladies-chroniques-et-aigues": {
		h2: "Maladies chroniques et nutrition à METZ",
		lead: "Adaptez votre alimentation à vos soins",
		emphasis: true
	},
	"approche-dietetique-et-tca": {
		h2: "Trouble du comportement alimentaire à METZ",
		lead: "Un accompagnement diététique sans jugement",
		emphasis: true
	}
};
function textWidth(slug, id) {
	if (slug === "perte-de-poids" && id !== "consultations") return "max-w-6xl";
	if (slug === "troubles-digestifs" && id !== "adaptations") return "max-w-4xl";
	if (slug === "equilibre-alimentaire" && id === "definition") return "max-w-5xl";
	return "max-w-3xl";
}
function ServicePage({ page }) {
	const [openFaq, setOpenFaq] = (0, import_react.useState)(null);
	const intro = [];
	const sections = [];
	for (const block of page.blocks) if (block.type === "h2") sections.push({
		id: block.id ?? "",
		title: block.text ?? "",
		blocks: []
	});
	else if (sections.length === 0) intro.push(block);
	else sections[sections.length - 1].blocks.push(block);
	const firstSection = sections[0]?.id ? `#${sections[0].id}` : "#contenu";
	const calm = page.slug === "approche-dietetique-et-tca";
	const hero = heroes[page.slug];
	const tone = headerTones[page.slug] ?? headerTones["perte-de-poids"];
	const airy = page.slug === "troubles-digestifs" || calm;
	const titleClass = "font-calibri text-3xl leading-[1.05] font-bold text-balance text-ink sm:text-4xl lg:text-[3.15rem] lg:leading-[1.02]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "contenu",
			className: "bg-paper text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative isolate overflow-hidden bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroDecor, {
						strong: tone.strong,
						soft: tone.soft
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative z-10 mx-auto grid w-full max-w-[90rem] items-start gap-8 px-5 pt-16 pb-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16 lg:px-0 lg:py-12 lg:pr-16 lg:pl-40 ${airy ? "lg:pt-14" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-30 order-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
									"aria-label": "Fil d’Ariane",
									className: "text-sm text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "/",
											className: "text-ink underline decoration-[#2b78d6] underline-offset-2",
											children: "Accueil"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											children: " › "
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: page.crumb })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 text-sm font-semibold text-olive lg:text-base",
									children: page.crumb
								}),
								hero ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: `mt-2 ${titleClass}`,
									children: hero.h2
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-4 max-w-[34rem] text-xl leading-snug text-ink sm:text-2xl ${hero.emphasis ? "font-bold italic" : ""}`,
									children: hero.lead
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: `mt-2 ${titleClass}`,
									children: page.h1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "service-copy mt-5 max-w-[68ch] space-y-4 text-base leading-7 text-muted lg:text-[17px]",
									children: intro.map((block, index) => block.type === "p" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: richText(block.text ?? "", page.links, emphasis[page.slug] ?? []) }, index) : null)
								}),
								intro.map((block, index) => block.type === "cta" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {
									kind: "intro",
									sommaire: firstSection,
									calm
								}, index) : null)
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 order-2 lg:mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
								soft: tone.soft,
								src: page.slug === "perte-de-poids" ? "/media/perte-silhouette.webp" : page.slug === "troubles-digestifs" ? "/media/digestifs-intestin-2.webp" : page.slug === "maladies-chroniques-et-aigues" ? "/media/maladies-coeur.webp" : void 0,
								alt: page.slug === "troubles-digestifs" ? "Illustration d’un intestin pour les troubles digestifs" : page.slug === "maladies-chroniques-et-aigues" ? "Illustration d’un cœur tenu dans une main pour les maladies chroniques" : "Illustration d’une silhouette pour la perte de poids",
								shift: page.slug === "perte-de-poids" ? "lg:-translate-x-36" : page.slug === "troubles-digestifs" || page.slug === "maladies-chroniques-et-aigues" ? "lg:-translate-x-10" : ""
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Sur cette page",
					className: "bg-paper px-5 py-6 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-olive",
							children: "Sur cette page"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${section.id}`,
								className: "focus-ring inline-flex rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink",
								children: section.title
							}) }, section.id))
						})]
					})
				}),
				page.slug === "equilibre-alimentaire" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "bg-mint px-5 py-12 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/plate.webp",
						alt: "Assiette de légumes, fruits et céréales",
						width: 720,
						height: 530,
						loading: "lazy",
						decoding: "async",
						className: "mx-auto w-full max-w-lg rounded-[2.5rem]"
					})
				}) : null,
				sections.map((section, index) => {
					const faq = section.id === "faq";
					const dark = section.id === "strongdiet";
					const mint = !dark && !faq && index % 2 === 1;
					let step = 0;
					const framed = page.slug === "perte-de-poids" && section.id === "situations" || page.slug === "troubles-digestifs" && section.id === "medical";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: section.id,
						className: `relative scroll-mt-24 overflow-hidden px-5 sm:px-6 ${dark ? "bg-night text-paper" : mint ? "bg-mint" : "bg-paper"} ${airy ? "py-16 lg:py-24" : "py-14 lg:py-16"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative mx-auto ${textWidth(page.slug, section.id)} ${framed ? "rounded-[2rem] border-2 border-olive bg-paper px-6 py-8 shadow-card md:px-10 md:py-10" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: `text-center font-serif text-2xl text-balance sm:text-3xl lg:text-4xl ${dark ? "text-paper" : mint ? "text-ink" : "text-olive"}`,
									children: section.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mx-auto mt-5 h-px max-w-xl ${dark ? "bg-paper/25" : "bg-line"}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `service-copy mt-8 space-y-5 text-left text-base leading-7 lg:text-[17px] ${dark ? "text-paper/90" : "text-muted"}`,
									children: [section.blocks.map((block, blockIndex) => {
										if (block.type === "h3") {
											step += 1;
											if (faq) {
												const answer = section.blocks[blockIndex + 1];
												const q = block.text ?? "";
												const open = openFaq === q;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-2xl border border-[#e6e6e6] bg-[#f3f3f3] text-ink",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														className: "focus-ring flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-[15px] sm:px-5 sm:text-base",
														"aria-expanded": open,
														onClick: () => setOpenFaq(open ? null : q),
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "grid size-7 shrink-0 place-items-center rounded-full border border-ink/15 text-muted",
															children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
																className: "size-4",
																"aria-hidden": true
															}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
																className: "size-4",
																"aria-hidden": true
															})
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "acc-panel",
														"data-open": open,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: answer?.type === "p" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "px-5 pb-5 leading-relaxed text-muted",
															children: richText(answer.text ?? "", page.links, emphasis[page.slug] ?? [])
														}) : null })
													})]
												}, blockIndex);
											}
											const numbered = section.id === page.ctaAfter;
											const card = numbered && page.slug === "maladies-chroniques-et-aigues";
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: `pt-2 text-left text-xl leading-snug font-normal text-ink sm:text-2xl ${card ? "rounded-3xl bg-mint px-5 py-4" : ""} ${dark ? "text-paper" : ""}`,
												children: [numbered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mr-3 font-bold text-olive",
													children: String(step).padStart(2, "0")
												}) : null, block.text]
											}, blockIndex);
										}
										if (block.type === "p") {
											if (faq) return null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: richText(block.text ?? "", page.links, emphasis[page.slug] ?? []) }, blockIndex);
										}
										if (block.type === "cta" && block.kind !== "end") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, { kind: "mid" }, blockIndex);
										return null;
									}), section.id === "strongdiet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: STRONGDIET,
										target: "_blank",
										rel: "noreferrer",
										className: "focus-ring inline-flex min-h-12 items-center rounded-full bg-lime px-7 text-xl font-bold text-ink",
										children: "Découvrir StrongDiet"
									}) : null]
								})
							]
						}), section.blocks.some((block) => block.type === "cta" && block.kind === "end") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {
							kind: "end",
							calm
						}) : null]
					}, section.id);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "bg-paper px-5 py-10 text-center text-sm text-muted sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#parcours",
						className: "font-semibold text-ink underline decoration-[#2b78d6] underline-offset-2",
						children: "Valentin Diamantini, diététicien-nutritionniste"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " · Mis à jour le 10 novembre 2026" })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
var $$splitComponentImporter$4 = () => import("../_slug-CmKlZcls.mjs");
var Route$6 = createFileRoute("/$slug")({
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
				{
					name: "description",
					content: loaderData?.description
				},
				{
					property: "og:title",
					content: loaderData?.title
				},
				{
					property: "og:description",
					content: loaderData?.description
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:image",
					content: "https://diamantini-nutrition.fr/og.jpg"
				},
				{
					property: "og:locale",
					content: "fr_FR"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: loaderData ? [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [{
						"@type": "ListItem",
						position: 1,
						name: "Accueil",
						item: "https://diamantini-nutrition.fr/"
					}, {
						"@type": "ListItem",
						position: 2,
						name: loaderData.crumb,
						item: url
					}]
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "MedicalWebPage",
					about: loaderData.crumb,
					publisher: { "@id": "https://diamantini-nutrition.fr/#cabinet" }
				})
			}] : []
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./cookies-DPJ_zeQM.mjs");
var TITLE$3 = "Gestion des cookies | Valentin Diamantini";
var DESCRIPTION$3 = "Gestion des cookies du site diamantini-nutrition.fr.";
var URL$4 = "https://diamantini-nutrition.fr/cookies/";
var Route$5 = createFileRoute("/cookies")({
	head: () => ({
		links: [{
			rel: "canonical",
			href: URL$4
		}],
		meta: [
			{ title: TITLE$3 },
			{
				name: "description",
				content: DESCRIPTION$3
			},
			{
				name: "robots",
				content: "noindex, follow"
			},
			{
				property: "og:title",
				content: TITLE$3
			},
			{
				property: "og:description",
				content: DESCRIPTION$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: URL$4
			},
			{
				property: "og:image",
				content: "https://diamantini-nutrition.fr/og.jpg"
			},
			{
				property: "og:locale",
				content: "fr_FR"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./mentions-legales-DIHcAajJ.mjs");
var TITLE$2 = "Mentions légales | Valentin Diamantini";
var DESCRIPTION$2 = "Mentions légales du site diamantini-nutrition.fr.";
var URL$3 = "https://diamantini-nutrition.fr/mentions-legales/";
var Route$4 = createFileRoute("/mentions-legales")({
	head: () => ({
		links: [{
			rel: "canonical",
			href: URL$3
		}],
		meta: [
			{ title: TITLE$2 },
			{
				name: "description",
				content: DESCRIPTION$2
			},
			{
				name: "robots",
				content: "noindex, follow"
			},
			{
				property: "og:title",
				content: TITLE$2
			},
			{
				property: "og:description",
				content: DESCRIPTION$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: URL$3
			},
			{
				property: "og:image",
				content: "https://diamantini-nutrition.fr/og.jpg"
			},
			{
				property: "og:locale",
				content: "fr_FR"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$3 = createFileRoute("/mentionslegales")({ beforeLoad: () => {
	throw redirect({ to: "/mentions-legales" });
} });
var $$splitComponentImporter$1 = () => import("./politique-de-confidentialite-DXSTHKcC.mjs");
var TITLE$1 = "Politique de confidentialité | Valentin Diamantini";
var DESCRIPTION$1 = "Politique de confidentialité du site diamantini-nutrition.fr.";
var URL$2 = "https://diamantini-nutrition.fr/politique-de-confidentialite/";
var Route$2 = createFileRoute("/politique-de-confidentialite")({
	head: () => ({
		links: [{
			rel: "canonical",
			href: URL$2
		}],
		meta: [
			{ title: TITLE$1 },
			{
				name: "description",
				content: DESCRIPTION$1
			},
			{
				name: "robots",
				content: "noindex, follow"
			},
			{
				property: "og:title",
				content: TITLE$1
			},
			{
				property: "og:description",
				content: DESCRIPTION$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: URL$2
			},
			{
				property: "og:image",
				content: "https://diamantini-nutrition.fr/og.jpg"
			},
			{
				property: "og:locale",
				content: "fr_FR"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Route$1 = createFileRoute("/politiquedeconfidentialite")({ beforeLoad: () => {
	throw redirect({ to: "/politique-de-confidentialite" });
} });
var $$splitComponentImporter = () => import("./sante-au-travail-CY38sgap.mjs");
var TITLE = "Santé au travail à Metz | Valentin Diamantini";
var DESCRIPTION = "Interventions nutritionnelles en entreprise à Metz. Ateliers et accompagnement en santé au travail avec Valentin Diamantini, diététicien-nutritionniste.";
var URL$1 = "https://diamantini-nutrition.fr/sante-au-travail/";
var Route = createFileRoute("/sante-au-travail")({
	head: () => ({
		links: [{
			rel: "canonical",
			href: URL$1
		}],
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: URL$1
			},
			{
				property: "og:image",
				content: "https://diamantini-nutrition.fr/og.jpg"
			},
			{
				property: "og:locale",
				content: "fr_FR"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	SlugRoute: Route$6.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => Route$8
	}),
	CookiesRoute: Route$5.update({
		id: "/cookies",
		path: "/cookies",
		getParentRoute: () => Route$8
	}),
	MentionsLegalesRoute: Route$4.update({
		id: "/mentions-legales",
		path: "/mentions-legales",
		getParentRoute: () => Route$8
	}),
	MentionslegalesRoute: Route$3.update({
		id: "/mentionslegales",
		path: "/mentionslegales",
		getParentRoute: () => Route$8
	}),
	PolitiqueDeConfidentialiteRoute: Route$2.update({
		id: "/politique-de-confidentialite",
		path: "/politique-de-confidentialite",
		getParentRoute: () => Route$8
	}),
	PolitiquedeconfidentialiteRoute: Route$1.update({
		id: "/politiquedeconfidentialite",
		path: "/politiquedeconfidentialite",
		getParentRoute: () => Route$8
	}),
	SanteAuTravailRoute: Route.update({
		id: "/sante-au-travail",
		path: "/sante-au-travail",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route$6 as n, ServicePage as r, router_exports as t };
