import type { RequestHandler } from "express";
import NoteModule from "../models/NoteModule.ts";

export const getAllNotes: RequestHandler = async (_, res) => {
    try {
        const notes = await NoteModule.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
}

export const getNoteById: RequestHandler = async (req, res) => {
    try {
        const note = await NoteModule.findById(req.params.id);
        if(!note) return res.status(404).json({ message: "Note not found" });

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
}

export const createNote: RequestHandler = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new NoteModule({ title, content });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
}

export const updateNote: RequestHandler = async (req, res) => {
    try {
        const { title, content } = req.body;

        const updatedNote = await NoteModule.findByIdAndUpdate(req.params.id, { title, content }, { new: true});

        if(!updatedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json({ message: "Note updated Successfully" });
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
}

export const deleteNote: RequestHandler = async (req, res) => {
    try {
        const deletedNote = await NoteModule.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json({ message: "Note Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
}