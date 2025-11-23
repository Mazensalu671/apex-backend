export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // IMPORTANT — DO NOT USE OLD RENDER URL
  url: env('PUBLIC_URL'),

  app: {
    keys: env.array('APP_KEYS'),
  },
});
