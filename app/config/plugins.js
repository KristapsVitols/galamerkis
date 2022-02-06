module.exports = ({ env }) => ({
    // ...
    sentry: {
        dsn: env('SENTRY_STRAPI_DSN'),
    },
    // ...
});