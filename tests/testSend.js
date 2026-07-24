require("dotenv").config();
const axios = require("axios");

(async () => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v23.0/${process.env.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: "919000191640",
        type: "text",
        text: {
          body: "Hello from testSend.js"
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ SUCCESS");
    console.log(response.data);
  } catch (err) {
    console.log("❌ FAILED");
    console.log(err.response?.data || err.message);
  }
})();