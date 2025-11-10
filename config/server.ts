export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),
  url: env('PUBLIC_URL', 'https://apex-backend-i4jc.onrender.com'),
  app: {
    keys: env.array('APP_KEYS', ['randomAppKey123', 'anotherKey456']),
  },
});
