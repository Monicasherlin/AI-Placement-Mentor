# AI Placement Mentor

A full-stack placement preparation platform built with React + Vite + Tailwind CSS and Python + Flask.

## Core flow

Student Profile → Resume PDF → Resume Intelligence → Company/Role Gap Analysis → Personalized Roadmap → Company-Specific Shadow Interview.

## Features included

- Student profile and target company/role
- PDF resume extraction with PyMuPDF
- Basic evidence/skill detection
- Data-driven company profiles
- Role profiles
- Readiness score and explainable gaps
- Personalized roadmap
- Adaptive-style shadow interview flow
- Technical + behavioral interview modes
- Answer evaluation with actionable feedback
- Browser localStorage for frontend session persistence
- Flask REST API with CORS
- Clean dark responsive UI

## Project structure

```text
ai-placement-mentor/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── routes/
│   ├── services/
│   ├── data/
│       ├── companies/
│       └── roles/
└── frontend/
    ├── package.json
    ├── src/
    └── public/
```

## Run backend

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

Backend runs at `http://localhost:5000`.

## Run frontend

Open a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal, normally `http://localhost:5173`.

## Important note about the AI layer

This ZIP is a complete runnable foundation with deterministic local interview generation/evaluation. It does **not** include a paid LLM API key or pretend to have live company hiring data.

The `services/interview_engine.py` and future `services/llm_service.py` boundary is intentionally separated so an LLM provider can be added later without rewriting the frontend.

For real deployment, company profiles should be based on current public sources and clearly labelled as evidence-based patterns rather than claims that a company asks exact questions.

## Troubleshooting

If PowerShell blocks activation:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\venv\Scripts\Activate.ps1
```

If `npm` is not recognized, install Node.js LTS and reopen VS Code.

If the frontend cannot reach Flask, verify that `http://localhost:5000/api/health` opens and that Flask is running.
