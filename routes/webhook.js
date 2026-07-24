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
router.post("/", async (req, res) => {
  console.log("========== NEW REQUEST ==========");

  try {
    const message =
      req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

    if (!message) {
      console.log("ℹ️ No incoming message.");
      return res.sendStatus(200);
    }

    const from = message.from;
    const text = message.text?.body || "";

    console.log("User:", from);
    console.log("Text:", text);

    console.log("🚨 Calling Gemini...");

    const aiReply = await generateReply(text);

    console.log("🚨 Gemini Reply:");
    console.log(aiReply);
    console.log("Type:", typeof aiReply);

    if (typeof aiReply === "string") {
      console.log("Length:", aiReply.length);
    }

    console.log("🚨 About to send WhatsApp message...");

    await sendWhatsAppMessage(from, aiReply);

    console.log("✅ Reply sent successfully");
  } catch (err) {
    console.error("❌ WEBHOOK ERROR");
    console.error(err);
  }

  res.sendStatus(200);
});

module.exports = router;