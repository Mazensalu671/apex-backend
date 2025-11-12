export default ({ env }) => ({
  upload: {
    config: {
      provider: './config/upload-cloudflare', // ✅ لا تكتب index ولا .ts
      providerOptions: {},
    },
  },
});
