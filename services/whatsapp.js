const axios = require("axios");

// WhatsApp allows a maximum of 4096 characters.
// We stay below that for safety.
const MAX_MESSAGE_LENGTH = 3800;

// Delay between sending multiple messages
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function splitMessage(text) {
  const message = String(text);

  if (message.length <= MAX_MESSAGE_LENGTH) {
    return [message];
  }

  const parts = [];
  let remaining = message;

  while (remaining.length > MAX_MESSAGE_LENGTH) {
    let splitIndex = remaining.lastIndexOf("\n\n", MAX_MESSAGE_LENGTH);

    if (splitIndex === -1) {
      splitIndex = remaining.lastIndexOf("\n", MAX_MESSAGE_LENGTH);
    }

    if (splitIndex === -1) {
      splitIndex = remaining.lastIndexOf(". ", MAX_MESSAGE_LENGTH);
    }

    if (splitIndex === -1) {
      splitIndex = remaining.lastIndexOf(" ", MAX_MESSAGE_LENGTH);
    }

    if (splitIndex === -1) {
      splitIndex = MAX_MESSAGE_LENGTH;
    }

    parts.push(remaining.substring(0, splitIndex).trim());
    remaining = remaining.substring(splitIndex).trim();
  }

  if (remaining.length > 0) {
    parts.push(remaining);
  }

  return parts;
}

async function sendSingleMessage(to, body) {
  const payload = {
    messaging_product: "whatsapp",
    to,
    text: {
      body,
    },
  };

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

  return response.data;
}

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

    const parts = splitMessage(message);

    console.log(`Total Parts: ${parts.length}`);

    for (let i = 0; i < parts.length; i++) {

      const text =
        parts.length === 1
          ? parts[i]
          : `(${i + 1}/${parts.length})\n\n${parts[i]}`;

      console.log("--------------------------------");
      console.log(`Sending Part ${i + 1} of ${parts.length}`);
      console.log(`Characters: ${text.length}`);

      const response = await sendSingleMessage(to, text);

      console.log(`✅ Part ${i + 1} sent`);
      console.log(response);

      if (i < parts.length - 1) {
        await sleep(700);
      }
    }

    console.log("================================");
    console.log("✅ All message parts sent");
    console.log("================================");

  } catch (error) {

    console.error("========== WHATSAPP ERROR ==========");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error(JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error);
    }

    throw error;
  }
}

module.exports = {
  sendWhatsAppMessage,
};