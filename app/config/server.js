module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_BASE_URL', 'https://galamerkis.local/content'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '268602d55563dcf0daeb1ac3c314d269'),
    },
    url: env('STRAPI_DASHBOARD_URL', 'https://galamerkis.local/dashboard'),
  },
});
