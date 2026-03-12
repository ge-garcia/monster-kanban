import express from "express";
import db from "../db.js";

const router = express.Router();

// Get all tasks
router.get("/", (req, res) => {});

// Create a task
router.post("/", (req, res) => {});

// Update a task
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;

  const stmt = db.prepare("UPDATE tasks title = ?, status = ?");

  stmt.run(title, status, id);
  const updated = db.prepare("SELECT * FROM tasks").get(id);
  res.json(updated);
});

// Delete a task
router.delete("/:id", (req, res) => {});

export default router;
