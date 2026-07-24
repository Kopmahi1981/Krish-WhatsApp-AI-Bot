# Krish WhatsApp AI Bot

## Overview

An AI-powered WhatsApp chatbot built using:

- Node.js
- Express.js
- WhatsApp Cloud API
- Google Gemini AI

## Features

- Receive WhatsApp messages
- Generate AI responses with Gemini
- Send replies through WhatsApp Cloud API
- Webhook verification

## Installation

```bash
npm install
```

Create a `.env` file with:

```env
VERIFY_TOKEN=
WHATSAPP_TOKEN=
PHONE_NUMBER_ID=
GEMINI_API_KEY=
```

Run:

```bash
node server.js
```

## Version

v1.0git ls-files | findstr node_modules