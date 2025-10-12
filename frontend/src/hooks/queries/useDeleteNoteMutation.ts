import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../../api/notes";
import type { INote } from "../../types/INote";

const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess: (deletedId: string) => {
      // Invalidate the notes list so it refreshes
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.invalidateQueries({ queryKey: ["notes", deletedId] });

      queryClient.setQueryData(["notes"], (oldData: INote[]) => {
        if (!oldData) return oldData;
        return oldData.filter((note: INote) => note._id !== deletedId);
      });
    },
  });
};

export default useDeleteNoteMutation;
