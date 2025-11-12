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
          // ✅ هذا السطر مهم جدًا لتوليد الرابط الصحيح داخل لوحة Strapi
          async beforeUpload(event) {
            const { data } = event.params;
            if (data && data.url && !data.url.startsWith('https')) {
              data.url = `${env('IMAGEKIT_URL_ENDPOINT')}/${data.url}`;
            }
          },
        },
        delete: {},
      },
    },
  },
});
