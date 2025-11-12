export default ({ env }) => ({
  upload: {
    config: {
      provider: './config/upload-cloudflare', // ✅ هذا المسار لازم يكون كذا
      providerOptions: {},
    },
  },
});
