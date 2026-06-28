// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    resolve: {
      alias: {
        // Map bare Node.js built-in modules to node:* prefix for Cloudflare Workers runtime compatibility
        buffer: "node:buffer",
        stream: "node:stream",
        util: "node:util",
        crypto: "node:crypto",
        events: "node:events",
        path: "node:path",
        http: "node:http",
        url: "node:url",
        fs: "node:fs",
        os: "node:os",
        net: "node:net",
        tls: "node:tls",
      },
    },
  },
});
