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
- For Vite apps, use `import.meta.env.VITE_API_URL`.
- All frontend API calls must go through a shared API client.
- The shared API client must live in `client/src/lib/api.js`.
- Service files must use that shared client.
- Do not add local vs production URL switching logic inside components or services.

---

## Deployment Rule

- Follow repo-specific deployment setup.
- Do not assume Vercel or any platform.
- For this repo:
  - Frontend → Namecheap (FTP via GitHub Actions)
  - Backend → Heroku
- Do not change deployment unless explicitly requested.

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
