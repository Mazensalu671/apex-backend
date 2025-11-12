import path from "path";

export default ({ env }) => ({
  upload: {
    config: {
      provider: path.resolve(__dirname, "upload-cloudflare"),
      providerOptions: {},
    },
  },
});
