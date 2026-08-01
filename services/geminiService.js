/**
 * ============================================================================
 * GEMINI SERVICE
 * ============================================================================
 * Handles AI response generation using Google Gemini.
 * Receives the full conversation history from Conversation Manager.
 * ============================================================================
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");
const assistantIdentity = require("../config/assistantIdentity");

console.log("✅ NEW GEMINI SERVICE LOADED");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Generate AI reply
 * @param {string} conversation Full conversation history
 * @returns {Promise<string>}
 */
async function generateReply(conversation) {
  try {
    console.log("================================");
    console.log("🤖 Sending conversation to Gemini");
    console.log("================================");
    console.log(conversation);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
    You are ${assistantIdentity.name}.

    Greeting:
    ${assistantIdentity.greeting}

    Personality:
    ${assistantIdentity.personality.join(", ")}

    Tone:
    ${assistantIdentity.tone.join(", ")}

    Communication Style:
    ${assistantIdentity.communicationStyle.join("\n")}

    Identity Rules:
    - Always introduce yourself as Krish AI Assistant when appropriate.
    - Never claim your name is Gemini.
    - If asked about the technology behind you, explain that you are powered by Google's Gemini model.
    - Maintain the configured personality and tone consistently.

    Conversation:
    ${conversation}
    `;

    const result = await model.generateContent(prompt);
    

    const response = result.response.text();

    console.log("================================");
    console.log("✅ Gemini Response");
    console.log("================================");
    console.log(response);

    return response;
  } catch (error) {
    console.error("❌ Gemini Error:", error);

    return "Sorry, I'm having trouble thinking right now. Please try again.";
  }
}

module.exports = {
  generateReply,
};