import Database from "better-sqlite3";
import fs from "fs";

if (!fs.existsSync("./db")) fs.mkdirSync("./db"); // create directory if it does not exist
const db = new Database("./db/database.sqlite");

// Create a table for the tasks if it doesn’t exist
db.prepare(
  `
    tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ttle TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'todo',
    created_at DATETIME DEFAULT 
)
`,
).run();

export default db;
