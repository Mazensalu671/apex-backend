export default ({ env }) => ({
  upload: {
    config: {
      provider: './config/plugins/upload-cloudflare', // المسار المخصص للمزود
      providerOptions: {},
    },
  },
});
