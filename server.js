const express = require("express");
require("dotenv").config();

console.log("================================");
console.log("TOKEN LENGTH:", process.env.WHATSAPP_TOKEN.length);
console.log("TOKEN START:", process.env.WHATSAPP_TOKEN.substring(0, 12));
console.log("TOKEN END:", process.env.WHATSAPP_TOKEN.slice(-12));
console.log("================================");

const webhookRoutes = require("./routes/webhook");

const app = express();

app.use(express.json());

// Test Route
app.get("/ping", (req, res) => {
  res.send("✅ WhatsApp Bot Server is Running!");
});
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.originalUrl}`);
  next();
});

// WhatsApp Webhook
app.use("/webhook", webhookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});