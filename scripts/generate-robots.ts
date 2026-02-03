import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { loadEnv } from "vite";

const FALLBACK_SITE_URL = "https://myomnio.com";

const env = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const { origin, basePath } = resolveSiteInfo(env);
const siteRoot = `${origin}${basePath}`;
const content = [
  "User-agent: *",
  "Allow: /",
  "",
  `Sitemap: ${siteRoot}/sitemap.xml`,
  "",
].join("\n");

const distDir = path.resolve(process.cwd(), "dist");
mkdirSync(distDir, { recursive: true });
writeFileSync(path.join(distDir, "robots.txt"), content, "utf-8");

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
