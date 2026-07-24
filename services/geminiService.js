const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateReply(userMessage) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(userMessage);

    return result.response.text();
  } catch (error) {
    console.error("❌ Gemini Error:", error);
    return "Sorry, I'm having trouble thinking right now. Please try again.";
  }
}

module.exports = { generateReply };