export default ({ env }) => ({
  upload: {
    config: {
      provider: './config/plugins/upload-cloudflare',
      providerOptions: {},
    },
  },
});
