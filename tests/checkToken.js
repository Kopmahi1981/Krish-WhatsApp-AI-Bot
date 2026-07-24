require("dotenv").config();
const axios = require("axios");

(async () => {
  try {
    const res = await axios.get("https://graph.facebook.com/v23.0/me", {
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      },
    });

    console.log("✅ Token is valid");
    console.log(res.data);
  } catch (err) {
    console.log("❌ Token failed");
    console.log(err.response?.data || err.message);
  }
})();