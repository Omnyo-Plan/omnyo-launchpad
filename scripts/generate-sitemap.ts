import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { loadEnv } from "vite";
import {
  ROUTES,
  SEO_CONFIG,
  type Language,
  type RouteId,
} from "../src/seo/seo.config";

const FALLBACK_SITE_URL = "https://myomnio.com";

const env = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const { origin, basePath } = resolveSiteInfo(env);
const siteRoot = `${origin}${basePath}`;
const lastmod = new Date().toISOString().split("T")[0];

const urls: { loc: string; lastmod: string }[] = [];

const languages: Language[] = ["en", "gr"];
const routeIds = Object.keys(ROUTES) as RouteId[];

for (const routeId of routeIds) {
  for (const language of languages) {
    const entry = SEO_CONFIG[routeId][language];
    if (entry.robots?.index === false) {
      continue;
    }

    const loc = buildUrl(siteRoot, entry.canonicalPath);
    urls.push({ loc, lastmod });
  }
}

const xml = buildSitemapXml(urls);
const distDir = path.resolve(process.cwd(), "dist");
mkdirSync(distDir, { recursive: true });
writeFileSync(path.join(distDir, "sitemap.xml"), xml, "utf-8");

function resolveSiteInfo(loadedEnv: Record<string, string>) {
  const envUrl =
    loadedEnv.VITE_SITE_URL ?? process.env.VITE_SITE_URL ?? FALLBACK_SITE_URL;
  let originValue = envUrl.replace(/\/+$/, "");
  let basePathValue = "";

  try {
    const parsed = new URL(envUrl);
    originValue = parsed.origin;
    basePathValue = parsed.pathname.replace(/\/+$/, "");
  } catch {
    basePathValue = "";
  }

  const envBase = loadedEnv.VITE_BASE_PATH ?? process.env.VITE_BASE_PATH;
  if (envBase) {
    basePathValue = envBase.replace(/\/+$/, "");
  }

  if (basePathValue === "/") {
    basePathValue = "";
  }

  return { origin: originValue, basePath: basePathValue };
}

function buildUrl(root: string, pathname: string) {
  if (pathname === "/") {
    return `${root}/`;
  }

  return `${root}${pathname}`;
}

function buildSitemapXml(entries: { loc: string; lastmod: string }[]) {
  const urlset = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n  </url>`,
    )
    .join("\n");

  return `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${urlset}\n</urlset>\n`;
}
