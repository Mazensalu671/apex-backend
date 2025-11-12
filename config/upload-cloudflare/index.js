"use strict";

const axios = require("axios");
const FormData = require("form-data");

module.exports = {
  init(config) {
    return {
      async upload(file) {
        try {
          const formData = new FormData();
          formData.append("file", Buffer.from(file.buffer), file.name);

          const response = await axios.post(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
                ...formData.getHeaders(),
              },
            }
          );

          if (response.data?.success) {
            file.url = response.data.result.variants[0];
            console.log("✅ Uploaded to Cloudflare:", file.url);
          } else {
            console.error("❌ Cloudflare upload failed:", response.data);
          }
        } catch (error) {
          console.error("❌ Cloudflare upload error:", error.message);
          throw error;
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
          console.log("🗑️ Deleted from Cloudflare:", id);
        } catch (error) {
          console.error("❌ Cloudflare delete error:", error.message);
        }
      },
    };
  },
};

