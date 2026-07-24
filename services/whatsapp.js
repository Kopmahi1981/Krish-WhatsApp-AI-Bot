const axios = require("axios");

async function sendWhatsAppMessage(to, message) {
  try {
    console.log("================================");
    console.log("Preparing WhatsApp Message");
    console.log("================================");

    console.log(
      "Token starts with:",
      process.env.WHATSAPP_TOKEN?.substring(0, 20) + "..."
    );

    console.log("Phone Number ID:", process.env.PHONE_NUMBER_ID);
    console.log("Recipient:", to);
    console.log("Message Type:", typeof message);
    console.log("Message:");
    console.log(JSON.stringify(message));

    const payload = {
      messaging_product: "whatsapp",
      to,
      text: {
        body: String(message),
      },
    };

    console.log("Payload:");
    console.log(JSON.stringify(payload, null, 2));

    const response = await axios.post(
      `https://graph.facebook.com/v23.0/${process.env.PHONE_NUMBER_ID}/messages`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ WhatsApp reply sent");
    console.log(response.data);
  } catch (error) {
    console.error("❌ WhatsApp Send Error");

    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }

    throw error;
  }
}

module.exports = {
  sendWhatsAppMessage,
};