import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";
import { ROUTES } from "./src/seo/seo.config";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = resolveBasePath(env);

  return {
    base,
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "production" &&
        env.VITE_PRERENDER !== "false" &&
        prerender({
          routes: [
            ROUTES.home.en,
            ROUTES.product.en,
            ROUTES.pricing.en,
            ROUTES.contact.en,
            ROUTES.about.en,
            ROUTES.home.gr,
            ROUTES.product.gr,
            ROUTES.pricing.gr,
            ROUTES.contact.gr,
            ROUTES.about.gr,
            ROUTES.notFound.en,
            ROUTES.notFound.gr,
          ],
          renderer: new PuppeteerRenderer({
            renderAfterDocumentEvent: "prerender-ready",
            maxConcurrentRoutes: 2,
            skipThirdPartyRequests: true,
            navigationOptions: {
              waitUntil: "domcontentloaded",
              timeout: 45000,
            },
          }),
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

function resolveBasePath(env: Record<string, string>) {
  const envBase = env.VITE_BASE_PATH;
  const envUrl = env.VITE_SITE_URL;
  let basePath = "/";

  if (envBase) {
    basePath = envBase;
  } else if (envUrl) {
    try {
      basePath = new URL(envUrl).pathname || "/";
    } catch {
      basePath = "/";
    }
  }

  if (!basePath.startsWith("/")) {
    basePath = `/${basePath}`;
  }

  if (!basePath.endsWith("/")) {
    basePath = `${basePath}/`;
  }

  return basePath === "//" ? "/" : basePath;
}
