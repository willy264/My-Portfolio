import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App";
import "./index.css";
import "lenis/dist/lenis.css";
import { ThemeProvider } from "./provider";
import LenisProvider from "./providers/LenisProvider";

Sentry.init({
  dsn: "https://21a5e301c6339c2cd596185f9897224e@o4508139830116352.ingest.us.sentry.io/4508142619656192",
  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "dark",
      enableScreenshot: true,
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element '#root' was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <LenisProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <App />
      </ThemeProvider>
    </LenisProvider>
  </StrictMode>,
);
