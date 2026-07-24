# Array Project Dashboard

A React-based online dashboard for consolidating team project information including project schedules, timelines, and module freeze tracking.

## Features

- **Overview** — Summary cards and project status table
- **Project Schedule** — Milestones and key dates grouped by project
- **Project Timeline** — Gantt-style visual timeline of all projects
- **Module Freeze Tracker** — Code freeze dates with urgency indicators

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for navigation
- Pure CSS (no external UI library — easy to customize)

## Project Structure

```
src/
├── components/     # Layout, Sidebar
├── data/           # Sample data (replace with API calls)
├── pages/          # Overview, Schedule, Timeline, ModuleFreeze
├── App.jsx         # Root with routing
└── main.jsx        # Entry point
```

## Next Steps

This is a skeleton dashboard. Future enhancements may include:
- Editable data with backend API integration
- User authentication
- Export to PDF/Excel
- Notifications for upcoming deadlines
- Filtering and search
