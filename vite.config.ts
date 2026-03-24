import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const sentryAuthToken = process.env.SENTRY_AUTH_TOKEN;
  const shouldEnableSentry = command === 'build' && Boolean(sentryAuthToken);

  return {
    plugins: [
      react(),
      ...(shouldEnableSentry
        ? [sentryVitePlugin({
            authToken: sentryAuthToken,
            org: "uwa-z0",
            project: "my-portfolio",
            telemetry: false,
          })]
        : []),
    ],
    build: {
      sourcemap: true
    }
  };
})
