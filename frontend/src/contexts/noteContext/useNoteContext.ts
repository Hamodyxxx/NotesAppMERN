import { useContext } from "react"
import noteContext from "./noteContext";

const useNoteContext = () => {
    const context = useContext(noteContext);

    if(!context) throw new Error(`useNoteContext can not be used outside of the NoteContextProvider`);

    return context;
}

export default useNoteContext;