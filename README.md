# Fullstack CI/CD Demo

A minimal full-stack app (React + Node/Express) containerized with Docker and deployed via GitHub Actions to Render.

## Stack
- **Frontend**: React (served via nginx)
- **Backend**: Node.js + Express
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Deployment**: Render (free tier)

---

## Local Development

### Prerequisites
- Docker & Docker Compose installed

### Run locally
```bash
docker-compose up --build
```
- Frontend: http://localhost:3000
- Backend:  http://localhost:5000/api/health

---

## GitHub Actions Pipeline

The workflow (`.github/workflows/ci-cd.yml`) triggers on every push to `main` and runs:

1. **Lint & Test** — backend and frontend in parallel
2. **Build & Push** — Docker images to GitHub Container Registry (GHCR)
3. **Deploy** — triggers Render deploy hooks for both services

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `REACT_APP_API_URL` | Public URL of your deployed backend (e.g. `https://your-backend.onrender.com`) |
| `RENDER_BACKEND_DEPLOY_HOOK` | Deploy hook ID from Render backend service |
| `RENDER_FRONTEND_DEPLOY_HOOK` | Deploy hook ID from Render frontend service |

### Setting up Render Deploy Hooks
1. Go to your Render service → **Settings** → **Deploy Hooks**
2. Copy the hook URL — use only the path segment after `/deploy/` as the secret value

---

## Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── index.js          # Express app
│   │   └── index.test.js     # Jest tests
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js            # React app
│   │   └── App.test.js       # React Testing Library tests
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── .github/
│   └── workflows/
│       └── ci-cd.yml         # GitHub Actions workflow
├── docker-compose.yml
└── README.md
```
