import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNote } from "../../api/notes";
import type { INote } from "../../types/INote";

const useUpdateNoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateNote,
    onMutate: async (updatedNote) => {
      await queryClient.cancelQueries({ queryKey: ["notes"] });

      const prevNotes = queryClient.getQueryData<INote[]>(["notes"]);

      if (prevNotes) {
        queryClient.setQueryData(
          ["notes"],
          prevNotes.map((note) =>
            note._id === updatedNote.id ? { ...note, ...updatedNote } : note
          )
        );
      }

      return { prevNotes }; 
    },
    onError: (_err, _updatedNote, context) => {
      if (context?.prevNotes) {
        queryClient.setQueryData(["notes"], context.prevNotes);
      }
    },
    onSettled: (_,__,{id}) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.invalidateQueries({ queryKey: ["notes", id] });
    },
  });
};

export default useUpdateNoteMutation;
