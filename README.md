# SwiftStay Nigeria

SwiftStay Nigeria is an AI-powered hotel reservation and inventory management platform designed for hotels and guest houses in Southeastern Nigeria. It streamlines bookings, automates hotel onboarding, manages room inventory, customer data, and payments—connecting travelers with trusted stays.

## Monorepo Structure

```
swiftstay/
│
├── backend/                # Node.js + Express API
│   ├── app.js              # Main server file
│   ├── package.json        # Backend dependencies & scripts
│   ├── frontend/           # Built frontend files will land here
│   └── ...other backend files...
│
├── frontend/               # React/Vue/Angular source code
│   ├── public/             # Static files (index.html, icons, etc.)
│   ├── src/                # Your React/Vue components
│   ├── package.json        # Frontend dependencies
│   └── ...other frontend files...
│
└── README.md
```

---

## Getting Started

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## Deployment

- **Frontend:** Deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- **Backend:** Deploy on [Railway](https://railway.app/), [Render](https://render.com/), or [AWS/GCP/Azure]
- **Database:** Use [Supabase](https://supabase.com/) or [Railway] for managed PostgreSQL

---

## Expanding Features

- Connect frontend to backend via REST API (`/api/hotels`, `/api/chatbot`)
- Add onboarding logic in `backend/controllers/hotelsController.js`
- Use OpenAI API in `backend/controllers/aiController.js` for chatbot/recommendations
- Enhance UI with SVGs and Figma design inspiration

---

## AI Prompt Templates

See `backend/ai/prompts.js` for onboarding and recommendation prompts.
