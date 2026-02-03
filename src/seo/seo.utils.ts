import { siteConfig } from "@/lib/config";

const DEFAULT_SITE_URL = siteConfig.url;

export const LANGUAGE_TAGS = {
  en: "en",
  gr: "el",
};

export const OG_LOCALES = {
  en: "en_US",
  gr: "el_GR",
};

export function resolveSiteOrigin() {
  const envUrl = import.meta.env.VITE_SITE_URL;
  const fallback = typeof window !== "undefined" ? window.location.origin : DEFAULT_SITE_URL;
  const rawUrl = envUrl || fallback;

  try {
    const parsed = new URL(rawUrl);
    return parsed.origin;
  } catch {
    return rawUrl.replace(/\/+$/, "");
  }
}

export function resolveBasePath() {
  const envBase = import.meta.env.VITE_BASE_PATH;
  if (envBase) {
    const trimmed = envBase.replace(/\/+$/, "");
    return trimmed === "/" ? "" : trimmed;
  }

  const envUrl = import.meta.env.VITE_SITE_URL;
  if (!envUrl) {
    return "";
  }

  try {
    const parsed = new URL(envUrl);
    const pathname = parsed.pathname.replace(/\/+$/, "");
    return pathname === "/" ? "" : pathname;
  } catch {
    return "";
  }
}

export function buildAbsoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const origin = resolveSiteOrigin();
  const basePath = resolveBasePath();
  const normalizedPath = path === "/" ? "" : path;
  const base = basePath ? `${origin}${basePath}` : origin;
  return normalizedPath ? `${base}${normalizedPath}` : `${base}/`;
}
