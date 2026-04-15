# Gallery Page Plan

## Goal

Add a production-ready `Gallery` page to the frontend that feels visually intentional, is mobile-first, and fits the existing React + Vite + Tailwind architecture.

## Frontend Design Intent

This plan is prepared using the project’s required frontend design approach:

- clear visual hierarchy
- strong spacing rhythm
- responsive gallery behavior
- accessible navigation and media presentation
- reusable UI primitives over page-specific duplication

## Proposed Scope

### 1. Discover and fit existing app structure

- Identify the current routing setup under `client/src/routes/` and page conventions under `client/src/pages/`.
- Confirm whether navigation lives in a shared header/layout component so the new page can be linked consistently.
- Reuse existing section, container, heading, and button patterns if present.

### 2. Define the gallery page UX

- Create a page structure with:
  - hero/header area
  - short intro copy
  - filter or category strip if content supports it
  - responsive image grid
  - optional featured item or lightbox/modal interaction
- Keep the page useful even without backend integration by supporting static seed content first.
- Ensure the gallery works well on mobile before scaling up to tablet and desktop.

### 3. Build reusable frontend pieces

- Add a page entry such as `client/src/pages/Gallery.jsx`.
- Extract reusable components only where they improve clarity, likely:
  - `GalleryGrid`
  - `GalleryCard`
  - `GalleryFilter` or `GalleryTabs`
  - `GalleryLightbox` if modal viewing is included
- Keep components presentation-focused and free of API logic.

### 4. Model gallery data cleanly

- Start with a local data source or constants file if no backend endpoint exists.
- If server-backed data already exists or is requested later:
  - add service logic under `client/src/services/`
  - use the shared API client from `client/src/lib/api.js`
  - expose data through a TanStack Query hook under `client/src/hooks/queries/`
- Avoid duplicating server state into Redux.

### 5. Add route and navigation integration

- Register the new gallery route in the existing router.
- Add or update navigation so users can reach the page from the main UI.
- Ensure active/hover states feel consistent with the rest of the app.

### 6. Apply Tailwind-first visual design

- Use Tailwind only, unless the repo already uses SCSS for the touched feature.
- Design for:
  - consistent card ratios
  - readable typography
  - generous but controlled spacing
  - clear hover/focus states
  - accessible contrast
- Keep motion subtle and purposeful if used.

### 7. Accessibility and responsive behavior

- Provide meaningful `alt` text for images.
- Ensure keyboard support for filters, cards, and any modal/lightbox behavior.
- Preserve visible focus states.
- Verify the layout across mobile and desktop breakpoints.

### 8. Screenshot-based refinement loop

- Save screenshots to:
  - `_screenshots/iteration-1/desktop.png`
  - `_screenshots/iteration-1/mobile.png`
- Review each iteration for:
  - layout balance
  - spacing rhythm
  - image cropping consistency
  - typography hierarchy
  - interaction clarity
  - overall polish
- Refine up to 5 iterations, stopping once the page looks production-ready.

### 9. Testing and validation

- Add frontend tests under `client/test/` for the new page and any key interaction.
- Prefer focused tests for:
  - page render
  - route accessibility
  - filter behavior if implemented
  - modal open/close behavior if implemented
- Run the relevant frontend test subset after implementation.

## Recommended Implementation Order

1. Inspect current routes, layout, and styling patterns.
2. Create gallery page scaffold with static content.
3. Build responsive grid/cards.
4. Add navigation link and route registration.
5. Add optional filters or lightbox.
6. Capture screenshots and refine visually.
7. Add/update tests.
8. Run validation.

## Acceptance Criteria

- A dedicated gallery route exists and is reachable from navigation.
- The page is responsive and visually polished on mobile and desktop.
- Styling follows the repo’s existing Tailwind conventions.
- Gallery UI remains componentized and free from embedded API logic.
- Any backend data usage flows through `client/src/lib/api.js` and query hooks.
- Screenshots are captured in `_screenshots/` during implementation.
- Relevant frontend tests are added or updated.

## Notes

- If the current app already contains project imagery or portfolio-like content, the gallery should reuse that content model rather than inventing a parallel structure.
- If no modal/lightbox pattern exists in the repo, it should be added only if it improves usability and does not overcomplicate the first version.
