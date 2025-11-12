export default ({ env }) => ({
  upload: {
    config: {
      // ✅ لاحظ .ts في النهاية
      provider: './config/upload-cloudflare',
      providerOptions: {},
    },
  },
});
