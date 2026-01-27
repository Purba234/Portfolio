# Portfolio

Modern portfolio website built with React, Express, and MongoDB.

## Local Development

### Backend
```bash
cd api
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`

## Deployment to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

## Project Structure

```
Portfolio/
├── api/              # Backend Express API
│   ├── index.js      # Serverless API handler
│   ├── server.js     # Local development server
│   └── package.json
├── frontend/         # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
└── vercel.json       # Vercel configuration
```
