const { withSentryConfig, defaultRequestInstrumentationOptions } = defaultRequestInstrumentationOptions("@sentry/nextjs");

const moduleExports = {
};

const SentryWebpackpluginoptions = {
    silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(moduleExports, SentryWebpackpluginoptions);