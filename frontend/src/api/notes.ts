import type { INote } from "../types/INote";

const BASE_URI = "http://localhost:5001/notes";

export const getAllNotes = async () => {
    const res = await fetch(BASE_URI);
    const data = await res.json();

    return data;
}

export const getNoteById = async (id: number) => {
    const res = await fetch(`${BASE_URI}/${id}`);
    const data = await res.json();

    return data;
}

export const createNote = async (note: Omit<INote, "_id">) => {
    const res = await fetch(BASE_URI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
    
    if (!res.ok) throw new Error("Failed to create note");
    return res.json();
}

export const updateNote = async ({id, note}: { id: number, note: Partial<Omit<INote, "_id">> }) => {
    const res = await fetch(`${BASE_URI}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
    
    if (!res.ok) throw new Error("Failed to update note");
    return res.json();
}

export const deleteNote = async (id: number) => {
    const res = await fetch(`${BASE_URI}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete note");
    return id;
};