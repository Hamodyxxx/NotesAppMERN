import { Link } from "react-router"
import type { INote } from "../types/INote"
import { formatDate } from "../utils/dateformatters"
import useDeleteNoteMutation from "../hooks/queries/useDeleteNoteMutation"
import { PenSquareIcon, Trash } from "lucide-react"

interface NoteCardProps {
    note: INote
}

const NoteCard = ({
    note
}: NoteCardProps) => {
    const deleteNote = useDeleteNoteMutation();

  return (
    <div className='bg-base-300 border-b border-base-content/10'>
        <Link to={`/note/${note._id}`}>
            <h2>{note.title}</h2>
        </Link>

        <p className="h-52">
            {note.content}
        </p>

        <div className="flex justify-between">
            <span>{formatDate(new Date(note.updatedAt))}</span>
            <div className="flex gap-2 items-center">
                <Link to={`/note/${note._id}`}>
                    <PenSquareIcon className="size-4"/>
                </Link>
                <button onClick={() => deleteNote.mutate(note._id)} className="text-error">
                    <Trash className="size-5"/>
                </button>
            </div>
        </div>

    </div>
  )
}

export default NoteCard