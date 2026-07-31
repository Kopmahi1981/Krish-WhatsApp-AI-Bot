/**
 * ============================================================================
 * MEMORY STORE
 * ============================================================================
 * Purpose:
 *   In-memory conversation storage for WhatsApp users.
 *
 * Responsibilities:
 *   - Create conversations
 *   - Store messages
 *   - Retrieve history
 *   - Clear conversations
 *   - Limit conversation size
 *
 * Storage:
 *   JavaScript Map (RAM)
 *
 * Author:
 *   Koppula Mahender (Krish)
 * ============================================================================
 */

class MemoryStore {
  constructor(maxMessages = 20) {
    this.conversations = new Map();
    this.maxMessages = maxMessages;
  }

  /**
   * Create conversation if it doesn't exist
   */
  createConversation(phoneNumber) {
    if (!this.conversations.has(phoneNumber)) {
      this.conversations.set(phoneNumber, []);
    }
  }

  /**
   * Check whether a conversation exists
   */
  hasConversation(phoneNumber) {
    return this.conversations.has(phoneNumber);
  }

  /**
   * Add a message to conversation
   */
  addMessage(phoneNumber, role, content) {
    if (!phoneNumber || !role || !content) {
      throw new Error("Invalid message data.");
    }

    this.createConversation(phoneNumber);

    const history = this.conversations.get(phoneNumber);

    history.push({
      role,
      content,
      timestamp: new Date().toISOString(),
    });

    // Keep only the latest messages
    if (history.length > this.maxMessages) {
      history.shift();
    }
  }

  /**
   * Get conversation history
   */
  getHistory(phoneNumber) {
    return this.conversations.get(phoneNumber) || [];
  }

  /**
   * Clear conversation
   */
  clearConversation(phoneNumber) {
    this.conversations.delete(phoneNumber);
  }

  /**
   * Get active conversation count
   */
  getConversationCount() {
    return this.conversations.size;
  }

  /**
   * Return all conversations
   * (Useful for debugging)
   */
  getAllConversations() {
    return this.conversations;
  }
}

module.exports = new MemoryStore();