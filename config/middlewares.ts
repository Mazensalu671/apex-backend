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
            "*.imagekit.io",
            "https://ik.imagekit.io/uwhb4abom"
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.imagekit.io",
            "https://ik.imagekit.io/uwhb4abom"
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["https://apx-ics.com", "http://localhost:5173"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
    },
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
