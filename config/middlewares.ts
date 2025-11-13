export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://ik.imagekit.io/uwhb4abom",
            "*.imagekit.io"
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://ik.imagekit.io/uwhb4abom",
            "*.imagekit.io"
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
