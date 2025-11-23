module.exports = ({ env }) => ({
  url: env('PUBLIC_URL', 'https://apex-backend-production-a86e.up.railway.app'),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
});
