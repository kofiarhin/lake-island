# Project Rules

## Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS (default)
- React Router
- Redux Toolkit (global state only)
- TanStack Query (server state)
- Axios (shared API client when needed)
- Vitest + React Testing Library

### Backend

- Node.js
- Express
- MongoDB (Mongoose)
- Jest + Supertest

---

## Frontend Design Skill Rule

- Mandatory: always use the `frontend-design` skill for any frontend-related generation.
- Frontend-related includes:
  - UI components
  - pages
  - layouts
  - dashboards
  - landing pages
  - forms
  - modals
  - navigation
  - onboarding flows
  - settings screens
  - visual refactors
- Never generate frontend code without applying the `frontend-design` skill first.
- Backend-only tasks are exempt.

---

## Frontend Visual Refinement Loop (Screenshot-Based)

For any frontend/UI generation:

### Step 1 — Generate UI

- Use the `frontend-design` skill to generate the initial implementation.

### Step 2 — Render + Screenshot

- Run the frontend locally.
- Capture screenshots of the UI.

### Screenshot Requirements

- Capture at minimum:
  - Desktop view
  - Mobile view
- Capture additional states if relevant (hover, modal open, etc.)

### Screenshot Storage Rule

- Save all screenshots to a root-level folder:
  ```
  /_screenshots
  ```
- If the folder does not exist, create it automatically.

### Naming Convention

```
_screenshots/
  iteration-1/
    desktop.png
    mobile.png
  iteration-2/
    desktop.png
    mobile.png
```

---

### Step 3 — Visual Evaluation

Each iteration must evaluate screenshots based on:

- Layout structure
- Spacing and rhythm
- Typography hierarchy
- Color usage and contrast
- Visual hierarchy and focus
- Component consistency
- Responsiveness (mobile vs desktop)
- Accessibility basics (readability, clarity)
- Overall polish

---

### Step 4 — Refinement

- Refactor the UI based on actual issues visible in screenshots
- Do not make random or cosmetic-only changes
- Prioritize:
  - clarity
  - hierarchy
  - spacing
  - consistency
  - usability
  - polish

---

### Step 5 — Iteration Constraints

- Maximum of 5 iterations
- Stop early if:
  - the UI is already visually strong
  - only minor changes remain
  - a new iteration does not produce meaningful improvement

---

### Step 6 — Completion Criteria

The loop ends when:

- The UI is:
  - visually intentional
  - clean and well-spaced
  - consistent
  - responsive
  - production-ready

---

## Frontend Generation Rule

When generating frontend code:

- Always apply the `frontend-design` skill first
- Default to React with Vite
- Default to Tailwind CSS unless repo already uses SCSS/SASS
- Do not mix styling systems
- Keep components focused on UI and interaction
- Keep API logic out of components
- Keep route pages thin
- Prefer reusable components
- Build mobile-first
- Maintain accessibility basics

---

## Styling Rule

- Tailwind CSS is the default styling system.
- If the current repo already uses SCSS/SASS, follow that unless a migration is requested.
- Do not mix styling systems within the same feature.

---

## State Management Rule

- Use Redux Toolkit for global client-side state.
- Do not use React Context as the main app-state solution.
- Use TanStack Query for all backend/server-state interactions.
- Wrap TanStack Query in custom hooks.
- Keep API logic inside `services/`.
- Do not duplicate server data into Redux.
- Existing Context-based code may remain temporarily and be migrated gradually.

---

## Redux Folder Rule

- Use `redux/` as the root folder.
- Organize by domain:
  - `redux/auth/`
  - `redux/navigation/`
  - `redux/ui/`
- Store → `redux/store.js`
- Providers → `redux/providers.jsx`

---

## Testing Rule

- Frontend → Vitest (`client/test/`)
- Backend → Jest + Supertest (`server/tests/`)
- New tests must follow this split.
- Legacy tests may remain temporarily.

---

## Environment Variables Rule

- Backend env → root `.env`
- Frontend env → `client/.env`
- Do not move backend env to `server/.env`
- Use `VITE_` prefix for frontend env vars
- Never hard-code secrets
- Include `.env.example` files
- Backend must fail fast on missing required env vars

---

## API Call Rule

- Never hard-code API URLs like `http://localhost:5000` in frontend code.
- Always use environment variables for the frontend API base URL.
- Use:
  ```js
  import.meta.env.VITE_API_URL;
  ```
- All frontend API calls must go through:
  ```
  client/src/lib/api.js
  ```
- Service files must use that shared client
- Do not add local vs production switching logic

---

## Deployment Rule

- Follow repo-specific deployment setup.
- Do not assume platforms.
- Current setup:
  - Frontend → Namecheap (FTP via GitHub Actions)
  - Backend → Heroku
- Do not change deployment unless requested.

---

## Project Structure Rule

```txt
client/
  src/
    redux/
      store.js
      providers.jsx
      auth/
      navigation/
      ui/

    components/
    hooks/
      queries/
      mutations/
    lib/
    pages/
    routes/
    services/
    utils/
    constants/
      constans.js
    styles/
    legacy/
      context/
      Pages/

  test/

server/
  config/
  controllers/
  middleware/
  models/
  routes/
  utils/
  constants/
  tests/
```

---

## Server Structure Rule

- Do not use `server/src/`
- Keep backend flat under `server/`

---

## Structure Migration Rule

- New code must follow the new structure.
- Legacy folders may remain temporarily.
- Do not force full refactors.
- Migrate gradually when touching files.

---

## Security Rule

- Never expose:
  - passwordHash
  - sensitive user data
- Backend is always the source of truth.
- Do not trust client-side calculations.

---

## General Rules

- Keep API logic out of components
- Keep components focused on UI
- Prefer consistency over novelty
- Avoid unnecessary refactors
- Follow existing repo conventions unless explicitly changing them
