import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../../api/notes";

const useGetAllNotesQuery = () => {
    return useQuery({
        queryKey: [ "notes" ],
        queryFn: () => getAllNotes()
    })
}

export default useGetAllNotesQuery;