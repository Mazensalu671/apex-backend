const axios = require("axios");
const FormData = require("form-data");

module.exports = {
  init() {
    return {
      async upload(file) {
        try {
          const formData = new FormData();
          formData.append("file", Buffer.from(file.buffer), file.name);

          const res = await axios.post(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
                ...formData.getHeaders(),
              },
            }
          );

          if (res.data?.success) {
            file.url = res.data.result.variants[0];
            console.log("✅ Cloudflare Upload Successful:", file.url);
          } else {
            throw new Error("Cloudflare upload failed");
          }
        } catch (err) {
          console.error("❌ Cloudflare upload error:", err.message);
          throw err;
        }
      },

      async delete(file) {
        try {
          const id = file.url.split("/").slice(-2, -1)[0];
          await axios.delete(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1/${id}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
              },
            }
          );
        } catch (err) {
          console.error("❌ Cloudflare delete error:", err.message);
        }
      },
    };
  },
};
