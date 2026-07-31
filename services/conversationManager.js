/**
 * ============================================================================
 * CONVERSATION MANAGER
 * ============================================================================
 * Coordinates conversation history between Memory Store and Gemini.
 * ============================================================================
 */

const memoryStore = require("./memoryStore");

class ConversationManager {

  /**
   * Save user message
   */
  saveUserMessage(phoneNumber, message) {
    memoryStore.addMessage(phoneNumber, "user", message);
  }

  /**
   * Save assistant response
   */
  saveAssistantMessage(phoneNumber, message) {
    memoryStore.addMessage(phoneNumber, "assistant", message);
  }

  /**
   * Build conversation history
   */
  buildConversation(phoneNumber) {

    const history = memoryStore.getHistory(phoneNumber);

    if (history.length === 0) {
      return "";
    }

    return history
      .map(item => {

        const speaker =
          item.role === "user"
            ? "User"
            : "Assistant";

        return `${speaker}: ${item.content}`;

      })
      .join("\n\n");

  }

  /**
   * Clear conversation
   */
  clearConversation(phoneNumber) {
    memoryStore.clearConversation(phoneNumber);
  }

}

module.exports = new ConversationManager();