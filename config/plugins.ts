export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-imagekit',
      providerOptions: {
        publicKey: env('IMAGEKIT_PUBLIC_KEY'),
        privateKey: env('IMAGEKIT_PRIVATE_KEY'),
        urlEndpoint: env('IMAGEKIT_URL_ENDPOINT'),
      },
      actionOptions: {
        upload: {
          async afterUpload(event) {
            const { result } = event;
            if (result && result.hash && result.ext) {
              result.url = `${env('IMAGEKIT_URL_ENDPOINT')}/${result.hash}${result.ext}`;
            }
          },
        },
        delete: {},
      },
    },
  },
});
