import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './provider.jsx'


import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://21a5e301c6339c2cd596185f9897224e@o4508139830116352.ingest.us.sentry.io/4508142619656192",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
      enableScreenshot: true,
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <App />
    </ThemeProvider>
  </StrictMode>,
)
