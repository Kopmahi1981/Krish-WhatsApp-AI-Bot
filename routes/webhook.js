const express = require("express");
console.log("✅ routes/webhook.js loaded");

const router = express.Router();

const { generateReply } = require("../services/geminiService");
const { sendWhatsAppMessage } = require("../services/whatsapp");

// ===============================
// Webhook Verification (GET)
// ===============================
router.get("/", (req, res) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
  console.log("VERIFY_TOKEN:", process.env.VERIFY_TOKEN);

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  console.log("Mode:", mode);
  console.log("Token:", token);
  console.log("Verify Token:", VERIFY_TOKEN);

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook Verified");
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

// ===============================
// Incoming WhatsApp Messages (POST)
// ===============================
router.post("/", (req, res) => {
  console.log("🔥🔥🔥 WEBHOOK HIT 🔥🔥🔥");
  console.log(JSON.stringify(req.body, null, 2));

  // Acknowledge immediately so Meta does not retry (fast 200 required),
  // then process the message asynchronously.
  res.sendStatus(200);

  processIncomingMessage(req.body);
});

// ===============================
// Async Message Processing
// ===============================
async function processIncomingMessage(body) {
  try {
    const value = body?.entry?.[0]?.changes?.[0]?.value;
    const message = value?.messages?.[0];

    // Ignore status callbacks (delivery/read receipts) and empty payloads.
    if (!message) {
      return;
    }

    // Phase 1 handles text messages only.
    if (message.type !== "text") {
      console.log(`ℹ️ Ignoring non-text message of type: ${message.type}`);
      return;
    }

    const from = message.from;
    const text = message.text?.body;

    if (!from || !text) {
      return;
    }

    // Diagnostic: incoming message
    console.log(`📥 Incoming message from ${from}: ${text}`);

    const reply = await generateReply(text);

    // Diagnostic: AI reply generated
    console.log(`🧠 AI reply generated: ${reply}`);

    await sendWhatsAppMessage(from, reply);

    // Diagnostic: reply sent successfully
    console.log(`📤 Reply sent successfully to ${from}`);
  } catch (error) {
    console.error("❌ Error processing incoming message:", error);
  }
}

module.exports = router;