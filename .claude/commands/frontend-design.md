---
description: Redesign or polish the current frontend using the frontend-design skill
---

Use the `frontend-design` skill.

When this command is invoked:

- inspect the current page, component, or route before editing
- identify the relevant frontend entry file and any imported child components
- preserve existing functionality unless the user explicitly requests structural changes
- choose one strong visual direction and keep it consistent
- avoid generic SaaS-looking UI, bland card grids, and random gradients
- improve typography, spacing, hierarchy, composition, and responsiveness
- keep the result accessible and production-ready
- follow project rules from `CLAUDE.md`

Preferred implementation defaults:

- React + Vite
- Tailwind CSS unless the repo already uses a different styling system
- semantic HTML
- minimal, purposeful motion only

If the target file is unclear, infer the most likely relevant frontend file from the current conversation and inspect it first before making changes.
