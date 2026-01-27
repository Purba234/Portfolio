# Portfolio Backend

Express server with MongoDB (Mongoose).

API endpoints
- `POST /api/contact` — save contact messages (expects JSON `{ name, email, message }`)
- `GET /api/projects` — returns sample projects

How to run
- Copy `.env.example` to `.env` and set `MONGODB_URI`.
- Install dependencies: `npm install`.
- Start dev server: `npm run dev` (nodemon) or `npm start`.
Note: The backend defaults to port `5001` (set `PORT` in `.env` to override).
