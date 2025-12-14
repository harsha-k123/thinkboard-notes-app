import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js";

const router = express.Router();

// REST API -> get, post, put, delete
// STATUS CODES -> 1xx - info, 2xx - success (200 ok, 201 created), 3xx - redirect, 4xx, 5xx - client, server error
// CONTROLLERS -> used to store all routes and their logic modularly

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;