import * as Sentry from "@sentry/gatsby";

Sentry.init({
  dsn: "https://d6d4ac53802cc3c4625cc0e2c31e0015@o4508706297479168.ingest.us.sentry.io/4508706299838464", //process.env.GATSBY_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
