# KAIOS

## Krish AI Intelligence Operating System

### Document Information

| Item | Value |
|------|------|
| Framework | KAIOS |
| Document | KAIOS Bootstrap Guide |
| Version | 1.0.1 |
| Author | Koppula Mahender (Krish) |
| Status | Active |
| Last Updated | 2026-07-26 |
| License | Private |

---

# Purpose

This document explains how to start a new project using the KAIOS (Krish AI Intelligence Operating System) framework.

It provides a standardized onboarding process for both human developers and AI collaborators, ensuring every project begins with the same structure, workflow, and engineering standards.

---

# Bootstrap Workflow

Follow these steps whenever creating a new project.

## Step 1 — Create the Project

Create the project using your preferred technology stack.

Examples:

- Node.js
- React
- Python
- FastAPI
- Next.js
- Flutter
- .NET
- Java
- Other

---

## Step 2 — Add the KAIOS Framework

Copy the complete `AI/` folder into the project.

```text
Project/
│
├── AI/
├── src/
├── README.md
└── ...
```

---

## Step 3 — Complete Project Documents

Update the following documents with project-specific information:

- PROJECT_CONTEXT.md
- PROJECT_ROADMAP.md
- TASKS.md
- DECISIONS.md
- BUG_TRACKER.md
- CHANGELOG_AI.md
- AI_MEMORY.md

All other framework documents normally remain unchanged.

---

## Step 4 — Configure the Project

Create the required project configuration files.

Examples:

- .env
- .env.example
- config/
- package.json
- requirements.txt

---

## Step 5 — Configure External Services

Use generic configuration whenever possible.

Examples:

```env
AI_PROVIDER=
AI_MODEL=
AI_API_KEY=
AI_BASE_URL=
```

Avoid coupling the framework to a specific vendor.

---

## Step 6 — Start AI Collaboration

Before requesting implementation work, every AI collaborator should read:

1. KAIOS_MANIFEST.md
2. UNIVERSAL_STARTUP_PROMPT.md
3. GUARDRAILS.md
4. AI_PROTOCOL.md
5. PROJECT_CONTEXT.md
6. CODING_STANDARDS.md
7. ARCHITECTURE_GUIDELINES.md
8. AI_MEMORY.md
9. DECISIONS.md
10. TASKS.md

Only after understanding these documents should implementation begin.

---

# Standard Development Workflow

1. Understand the project.
2. Review project context.
3. Review active tasks.
4. Review previous decisions.
5. Analyze the request.
6. Explain recommendations.
7. Wait for approval.
8. Implement approved changes.
9. Recommend testing.
10. Update documentation if required.

---

# Framework vs Project

## Framework Documents

These documents are shared across all projects and should rarely change.

- KAIOS_MANIFEST.md
- UNIVERSAL_STARTUP_PROMPT.md
- GUARDRAILS.md
- AI_PROTOCOL.md
- CODING_STANDARDS.md
- ARCHITECTURE_GUIDELINES.md
- TESTING_CHECKLIST.md
- DEPLOYMENT_CHECKLIST.md
- RELEASE_CHECKLIST.md
- GIT_WORKFLOW.md
- PROMPTS.md

---

## Project Documents

These documents should be customized for each project.

- PROJECT_CONTEXT.md
- PROJECT_ROADMAP.md
- TASKS.md
- DECISIONS.md
- BUG_TRACKER.md
- CHANGELOG_AI.md
- AI_MEMORY.md
- README.md

---

# KAIOS Principles

- Think before implementing.
- Preserve architecture.
- Avoid unnecessary changes.
- Keep documentation current.
- Follow coding standards.
- Test before release.
- Keep the framework vendor-neutral.
- Build reusable solutions whenever possible.

---

# Related Documents

- KAIOS_MANIFEST.md — Framework philosophy
- UNIVERSAL_STARTUP_PROMPT.md — AI startup workflow
- GUARDRAILS.md — AI collaboration rules
- PROJECT_CONTEXT.md — Project overview
- AI_PROTOCOL.md — Standard AI operating workflow

---

# Version History

## v1.0.1

- Initial release of the KAIOS Bootstrap Guide.