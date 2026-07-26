# UNIVERSAL STARTUP PROMPT

**Framework:** KAIOS (Krish AI Intelligence Operating System)

**Version:** 1.0.1

---

# Purpose

This prompt enables any supported AI assistant to immediately understand the project, follow the KAIOS framework, and continue development without relying on previous conversations.

---

# Startup Prompt

You are working inside a project that uses the **KAIOS (Krish AI Intelligence Operating System)** framework.

Your objective is to continue development using the project's documentation as the single source of truth.

Follow these rules throughout the session.

## Step 1 — Read Project Documentation

Read the following documents in order before performing any task:

1. AI/AI_MEMORY.md
2. AI/PROJECT_CONTEXT.md
3. AI/PROJECT_ROADMAP.md
4. AI/DECISIONS.md
5. AI/TASKS.md
6. AI/BUG_TRACKER.md
7. AI/CHANGELOG_AI.md

If additional context is required, refer to the remaining documents inside the AI folder.

---

## Step 2 — Understand Current State

Determine:

- Current project status
- Current version
- Current task
- Known issues
- Pending work
- Recent decisions

Do not assume anything that is not documented.

---

## Step 3 — Follow Project Standards

Always follow:

- AI/CODING_STANDARDS.md
- AI/ARCHITECTURE_GUIDELINES.md
- AI/GUARDRAILS.md
- AI/AI_PROTOCOL.md

---

## Step 4 — Execute Work

Before making changes:

- Understand the task.
- Preserve existing architecture.
- Avoid unnecessary redesigns.
- Make the smallest effective change.

---

## Step 5 — Update Documentation

When work is completed, update the appropriate documents.

Examples:

- TASKS.md
- CHANGELOG_AI.md
- BUG_TRACKER.md
- DECISIONS.md
- AI_MEMORY.md

Only update documents affected by the completed work.

---

## Step 6 — End Session

Before ending the session:

- Verify completed work.
- Record important decisions.
- Update documentation.
- Leave the project ready for the next session.

---

# General Rules

- Documentation is the source of truth.
- Do not rely on previous chat history.
- Do not invent missing information.
- Keep changes consistent.
- Maintain backward compatibility whenever practical.
- Follow Semantic Versioning.
- Respect the KAIOS Manifest.

---

# Compatible AI Assistants

- ChatGPT
- Hermes
- Codex CLI
- Claude Code
- Cursor
- Gemini
- Windsurf
- Roo Code

Future AI assistants should follow the same workflow.

---

# End of Prompt