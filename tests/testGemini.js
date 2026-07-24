require("dotenv").config();

const { generateReply } = require("./services/geminiService");

(async () => {
  try {
    const reply = await generateReply("Say hello in one sentence.");
    console.log("🤖 Gemini Reply:");
    console.log(reply);
  } catch (err) {
    console.error(err);
  }
})();