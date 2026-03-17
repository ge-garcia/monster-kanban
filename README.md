# Monster Kanban Board

The following files were "known" to be broken by a previous intern:

- server/db.js
- server/routes/tasks.js
- client/src/api/tasks.js

It used to look like this, and management would like to undo the changes and
revert. ![Old monsters image](completed-kanban.png).

Your onboarding documentation is as follows:

## Running the project

- **Client (React app)**: `cd client && npm install && npm run dev`
- **Server (API)**: `cd server && npm install && npm run dev`

## Project Structure

This project was intentionally built in a simple, understandable way.

```
monster-kanban
 ├─ client
 │  ├─ src
 │  │  ├─ assets
 │  │  │  └─ react.svg
 │  │  ├─ components
 │  │  │  ├─ Column.jsx
 │  │  │  ├─ Monster.jsx
 │  │  │  ├─ Task.jsx
 │  │  │  └─ KanbanBoard.jsx
 │  │  ├─ App.jsx
 │  │  ├─ main.jsx
 │  │  ├─ index.css
 │  │  ├─ api
 │  │  │  └─ tasks.js
 │  │  └─ App.css
 │  ├─ eslint.config.js
 │  ├─ package.json
 │  ├─ package-lock.json
 │  ├─ vite.config.js
 │  ├─ index.html
 │  └─ public
 │     ├─ robots.txt
 │     └─ vite.svg
 ├─ server
 │  ├─ db.js
 │  ├─ app.js
 │  ├─ db
 │  │  └─ database.sqlite (Only generated once server runs.)
 │  ├─ routes
 │  │  └─ tasks.js
 │  ├─ package.json
 │  └─ package-lock.json
 ├─ completed-kanban.png
 └─ README.md
```

---

🎉 Final Message

This project is designed to be:

- Fun 👾

- Refresh information from the last workshop 💡

- Easy to expand 🧱

- A great teaching tool 🎓

Add new monsters, animations, or even user accounts — the sky’s the limit.
