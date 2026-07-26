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
// ===============================
// Incoming WhatsApp Messages (POST)
// ===============================
router.post("/", (req, res) => {
  console.log("🔥🔥🔥 WEBHOOK HIT 🔥🔥🔥");
  console.log(JSON.stringify(req.body, null, 2));

  res.sendStatus(200);
});

module.exports = router;