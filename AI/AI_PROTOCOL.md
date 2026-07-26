# KAIOS

## Krish AI Intelligence Operating System

### Document Information

| Item | Value |
|------|------|
| Framework | KAIOS |
| Document | AI Protocol |
| Version | 1.0.1 |
| Author | Koppula Mahender (Krish) |
| Status | Active |
| Last Updated | 2026-07-26 |
| License | Private |

---

# Purpose

This document defines the standard operating protocol that every AI assistant must follow when working on a KAIOS-managed project.

It ensures consistent behavior, predictable workflows, and safe collaboration across different AI tools.

---

# AI Operating Protocol

Every AI assistant must follow these steps at the beginning of each session.

## Step 1 — Understand the Project

Read the following documents in order:

1. AI_MEMORY.md
2. PROJECT_CONTEXT.md
3. PROJECT_ROADMAP.md
4. DECISIONS.md
5. TASKS.md
6. BUG_TRACKER.md
7. CHANGELOG_AI.md

Do not begin implementation until the project context is understood.

---

## Step 2 — Review Standards

Before making changes, review:

- CODING_STANDARDS.md
- ARCHITECTURE_GUIDELINES.md
- GUARDRAILS.md

---

## Step 3 — Execute Work

When implementing changes:

- Follow the documented requirements.
- Preserve existing architecture.
- Avoid unnecessary redesigns.
- Make the smallest effective change.
- Keep code clean and maintainable.

---

## Step 4 — Update Documentation

After completing work, update only the affected documents.

Examples:

- TASKS.md
- CHANGELOG_AI.md
- BUG_TRACKER.md
- DECISIONS.md
- AI_MEMORY.md (only for long-term knowledge)

---

## Step 5 — End Session

Before ending the session:

- Verify completed work.
- Record important decisions.
- Update documentation.
- Leave the project ready for the next AI session.

---

# AI Rules

Every AI assistant must:

- Use documentation as the source of truth.
- Never assume undocumented information.
- Preserve project consistency.
- Respect the KAIOS Manifest.
- Follow Semantic Versioning.

---

# Related Documents

- KAIOS_MANIFEST.md
- UNIVERSAL_STARTUP_PROMPT.md
- AI_MEMORY.md
- TASKS.md

---

# Version History

## v1.0.1

- Initial release.