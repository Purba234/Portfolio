# Portfolio Frontend

Built with Vite + React. Uses `framer-motion` for transitions and `AOS` for scroll-based animations.

How to run

- Install deps: `npm install`
- Run dev: `npm run dev`

Notes
- The frontend expects the backend API to be available at `/api/*`. When running the backend locally on port 5000, use a proxy in development or run both in parallel and adjust requests accordingly. Example: run the frontend with a small proxy or configure CORS in the backend (already enabled).
