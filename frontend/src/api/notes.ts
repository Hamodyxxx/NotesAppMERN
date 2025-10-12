import type { INote } from "../types/INote";
import AppError from "../utils/AppError";

const BASE_URI = `${import.meta.env.MODE === "development" ? "http://localhost:5001" : ""}/notes`;

export const getAllNotes = async (): Promise<INote[]> => {
    const res = await fetch(BASE_URI);

    if (!res.ok) throw new AppError({
      extraDetails: {
        statusCode: res.status,
        data: await res.json(),
        message: "Failed to show notes"
      }
    });

    const data = await res.json();

    return data as INote[];
}

export const getNoteById = async (id: string) => {
    const res = await fetch(`${BASE_URI}/${id}`);

    if (!res.ok) throw new AppError({
      extraDetails: {
        statusCode: res.status,
        data: await res.json(),
        message: "Note not found"
      }
    });

    const data = await res.json();

    return data;
}

export const createNote = async (note: Pick<INote, "title" |  "content">): Promise<INote> => {
    const res = await fetch(BASE_URI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
    
    if (!res.ok) throw new AppError({
      extraDetails: {
        statusCode: res.status,
        data: await res.json(),
        message: "Failed to Create Note"
      }
    });

    return res.json();
}

export const updateNote = async ({id, note}: { id: string, note: Partial<Omit<INote, "_id">> }) => {
    const res = await fetch(`${BASE_URI}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
    
    if (!res.ok) throw new AppError({
      extraDetails: {
        statusCode: res.status,
        data: await res.json(),
        message: "Failed to update note"
      }
    });    

    return res.json();
}

export const deleteNote = async (id: string) => {
    const res = await fetch(`${BASE_URI}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new AppError({
      extraDetails: {
        statusCode: res.status,
        data: await res.json(),
        message: "Note not deleted"
      }
    });    
    
    return id;
};