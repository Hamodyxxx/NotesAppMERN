import { useQuery } from "@tanstack/react-query";
import { getNoteById } from "../../api/notes";

const useGetNoteById = (id:number) => {
    return useQuery({
        queryKey: [ "notes", id ],
        queryFn: () => getNoteById(id)
    })
}

export default useGetNoteById;