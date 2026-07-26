# Krish WhatsApp AI Bot

An AI-powered WhatsApp chatbot built with **Node.js**, **Express.js**, **WhatsApp Cloud API**, and **Google Gemini AI**.

---

# Features

- 🤖 AI-powered conversations using Google Gemini
- 💬 Receive WhatsApp messages via WhatsApp Cloud API
- 📤 Send AI-generated replies automatically
- 🔐 Secure webhook verification
- ⚙️ Environment-based configuration
- 🧠 Powered by the KAIOS (Krish AI Intelligence Operating System) development framework

---

# Technology Stack

| Component | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Messaging | WhatsApp Cloud API |
| AI Model | Google Gemini AI |
| Environment | dotenv |

---

# Project Structure

```text
Krish WhatsApp AI Bot
│
├── AI/                     # KAIOS Framework
├── routes/
├── services/
├── utils/
├── server.js
├── package.json
├── .env
└── README.md
```

---

# Installation

Clone the repository and install dependencies.

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the project root.

```env
VERIFY_TOKEN=
WHATSAPP_TOKEN=
PHONE_NUMBER_ID=
GEMINI_API_KEY=
```

---

# Run the Application

```bash
node server.js
```

For development with automatic restart:

```bash
npx nodemon server.js
```

---

# WhatsApp Webhook

The application provides:

- Webhook verification endpoint
- Incoming message processing
- AI response generation
- WhatsApp reply delivery

---

# KAIOS Framework

This project follows the **KAIOS (Krish AI Intelligence Operating System)** framework for AI-assisted software development.

Framework documentation is located in:

```text
AI/
├── KAIOS_MANIFEST.md
├── UNIVERSAL_STARTUP_PROMPT.md
├── GUARDRAILS.md
├── AI_PROTOCOL.md
├── AI_MEMORY.md
├── PROJECT_CONTEXT.md
├── PROJECT_ROADMAP.md
├── ARCHITECTURE_GUIDELINES.md
├── CODING_STANDARDS.md
├── DECISIONS.md
├── TASKS.md
├── BUG_TRACKER.md
├── CHANGELOG_AI.md
├── TESTING_CHECKLIST.md
├── DEPLOYMENT_CHECKLIST.md
├── RELEASE_CHECKLIST.md
├── GIT_WORKFLOW.md
└── PROMPTS.md
```

---

# Development Workflow

1. Review the KAIOS documentation.
2. Understand the current project context.
3. Follow coding standards and architecture guidelines.
4. Test changes before release.
5. Update documentation when required.

---

# Security

Never commit:

- `.env`
- API Keys
- Access Tokens
- Secrets
- Credentials

---

# License

Private

KAIOS is proprietary software.

Copyright © 2026 Koppula Mahender (Krish). All Rights Reserved.

This framework is private and may not be copied, redistributed, modified, or used without explicit written permission from the author.

---

# Version

**Project Version:** v1.0.0

**KAIOS Framework:** v1.0.1