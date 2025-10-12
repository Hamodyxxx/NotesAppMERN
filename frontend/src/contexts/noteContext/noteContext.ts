import { createContext } from "react";
import type { INote } from "../../types/INote";

type noteContext = INote;

const noteContext = createContext<noteContext | null>(null)

export default noteContext;