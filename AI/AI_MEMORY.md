# KAIOS

## Krish AI Intelligence Operating System

### Document Information

| Item | Value |
|------|------|
| Framework | KAIOS |
| Document | AI Memory |
| Version | 1.0.2 |
| Author | Koppula Mahender (Krish) |
| Status | Active |
| Last Updated | 2026-07-26 |
| License | Private |

---

# Purpose

This document captures long-term project knowledge that should persist throughout the project's lifecycle.

It records important information that every AI collaborator should understand before making recommendations or implementing changes.

Unlike **TASKS.md** or **CHANGELOG_AI.md**, AI Memory stores stable project knowledge rather than temporary work.

---

# Usage

Every AI assistant should read this document at the beginning of a new session before making recommendations or implementing changes.

This document serves as the long-term memory of the project.

---

# Project Identity

Project Name: Krish WhatsApp AI Bot

Project Type: AI-powered WhatsApp chatbot / messaging automation service

Business Domain: Conversational AI / messaging automation

Primary Objective: Automatically receive and answer WhatsApp messages with AI-generated responses

---

# Business Knowledge

- Secrets must never be exposed in logs or committed to version control.
- Preserve existing workflows and architecture unless explicitly approved.
- The human developer retains final authority over all changes (KAIOS approval workflow).
- Documentation reflects only completed work, never assumptions about future implementation.

---

# Development Principles

- Preserve the existing project architecture unless explicitly approved.
- Implement one feature at a time.
- Prefer minimal, incremental changes.
- Complete testing before introducing additional functionality.
- Documentation follows completed implementation.
- Every milestone ends with:
  - Save All
  - Test
  - Git Commit
  - Git Push
  - ZIP Backup

---

# Security Memory

- Never expose API keys, access tokens, or secrets.
- Never commit .env files.
- Mask sensitive values in logs whenever possible.
- Avoid printing full credentials during debugging.

---

# Current Stable Baseline

Version: v1.0.2

Status: Stable

Completed:

- Webhook verification
- WhatsApp Cloud API integration
- Cloudflare Tunnel
- Gemini AI integration
- Automatic AI replies
- Long-message splitting

---

# Technical Knowledge

- Backend runtime: Node.js with Express.
- AI responses are generated through Google Gemini.
- Messaging is handled through the WhatsApp Cloud API.
- The application is stateless; no database is currently used.

---

# Project Conventions

- Configuration is managed through environment variables.
- Framework documentation is maintained inside the AI/ folder.
- Ad-hoc verification scripts are used for testing (no automated test runner).
- Semantic Versioning is followed for releases.

---

# Lessons Learned

- Acknowledge the inbound webhook immediately, then process the message, to avoid provider retries.
- Ignore non-message and non-text payloads to prevent unintended replies.
- Validate external input before processing.

---

# Known Constraints

- No conversation memory as of v1.0.2 (each message is handled independently).
- Dependent on external providers: WhatsApp Cloud API and Gemini AI.
- No data persistence.

---

# AI Reminders

Before making recommendations, every AI assistant should:

1. Read this document.
2. Respect documented project knowledge.
3. Avoid repeating previous mistakes.
4. Preserve successful design decisions.
5. Update this document only when long-term knowledge changes.

---

# Related Documents

- PROJECT_CONTEXT.md
- DECISIONS.md
- TASKS.md
- CHANGELOG_AI.md

---
# Related Documents

- PROJECT_CONTEXT.md — Overall project overview
- DECISIONS.md — Important project decisions
- TASKS.md — Current work and pending tasks
- CHANGELOG_AI.md — AI-generated project changes

# Version History

## v1.0.2

- Populated AI Memory to reflect the v1.0.2 stable baseline.
- Added Development Principles, Security Memory, and Current Stable Baseline sections.

## v1.0.1

- Improved wording and consistency.
- Added Usage section.
- Added Related Documents.

## v1.0.0

- Initial release.
