# KAIOS

## Krish AI Intelligence Operating System

### Document Information

| Item | Value |
|------|------|
| Framework | KAIOS |
| Document | Project Context |
| Version | 1.0.1 |
| Author | Koppula Mahender (Krish) |
| Status | Active |
| Last Updated | 2026-07-26 |
| License | Private |

---

# Purpose

This document provides the essential context required for AI systems and human collaborators to understand the project before making recommendations or implementing changes.

It serves as the single source of truth for project objectives, architecture, technologies, constraints, and priorities.

All AI systems should review this document before performing project analysis or implementation.

---

# Project Overview

## Project Name

Krish WhatsApp AI Bot

## Project Type

AI-powered WhatsApp chatbot / messaging automation service.

## Description

A Node.js and Express service that connects the WhatsApp Cloud API with Google Gemini AI to receive WhatsApp messages and reply automatically with AI-generated responses. The project is governed by the KAIOS framework.

---

# Business Goals

- Primary Goal: Provide automated, AI-powered conversational replies to WhatsApp users.
- Target Users: Individuals and businesses wanting an automated WhatsApp assistant.
- Expected Outcome: Incoming WhatsApp messages are received, processed, and answered automatically with AI-generated responses while maintaining a stable, extensible foundation for future capabilities (memory, document understanding, voice, and multi-modal interactions).

---

# Technical Stack

Frontend: Not applicable (the messaging interface is WhatsApp).

Backend: Node.js, Express.js.

Database: None (stateless).

Authentication: WhatsApp webhook verification.

Hosting: Local server exposed via Cloudflare Tunnel.

Version Control: Git / GitHub.

AI Services: Google Gemini AI.

Other Tools: axios, dotenv, nodemon (development).

---

# Project Architecture

High-level architecture summary (responsibility level).

- server.js — Application bootstrap and middleware.
- routes/webhook.js — Webhook verification, request processing, and message routing.
- services/geminiService.js — AI response generation.
- services/whatsapp.js — WhatsApp Cloud API communication, including message delivery and long-message handling.
- tests/ — Ad-hoc verification scripts (no automated test runner).

---

# Current Status

Development Stage: Stable baseline (v1.0.2).

Completed Modules:

- Webhook verification
- Cloudflare Tunnel exposure
- WhatsApp Cloud API integration
- Gemini AI integration
- Incoming message processing
- Automatic AI replies
- Smart long-message splitting (4096-character limit handled)

In Progress: None.

Pending:

- Conversation memory
- Better WhatsApp formatting
- Typing indicator
- PDF and document Q&A
- Voice support

Known Issues: None recorded at baseline.

---

# Project Constraints

- Preserve existing architecture and folder structure.
- Minimize breaking changes.
- Maintain backward compatibility.
- Prioritize security; never expose secrets in logs.
- Follow the KAIOS approval workflow before implementation.

---

# Development Priorities

1. Conversation memory
2. Better WhatsApp formatting
3. Typing indicator
4. PDF and document Q&A
5. Voice support

---

# Success Criteria

This project is considered successful when:

- Business goals are achieved.
- Code quality meets standards.
- Performance targets are satisfied.
- Security requirements are met.
- Documentation is complete.

---

# AI Instructions

Before making recommendations, the AI should:

1. Read this document.
2. Understand the project goals.
3. Understand the current status.
4. Consider project constraints.
5. Recommend solutions aligned with business objectives.

---

# Related Documents

- AI_MEMORY.md — Long-term project knowledge
- PROJECT_ROADMAP.md — Future project direction
- DECISIONS.md — Important project decisions
- TASKS.md — Current work and priorities
- ARCHITECTURE_GUIDELINES.md — Architecture principles

---

# Version History

## v1.0.2

- Populated project-specific context to reflect the v1.0.2 stable baseline.
- Documented completed modules, stack, architecture (responsibility level), constraints, and priorities.

## v1.0.1

- Improved document consistency.
- Added Related Documents section.

## v1.0.0

- Initial release.
