import { Link } from "react-router"
import type { INote } from "../types/INote"
import { formatDate } from "../utils/dateformatters"
import useDeleteNoteMutation from "../hooks/queries/useDeleteNoteMutation"
import { PenSquareIcon, Trash2Icon } from "lucide-react"

interface NoteCardProps {
    note: INote
}

const NoteCard = ({
    note
}: NoteCardProps) => {
    const deleteNote = useDeleteNoteMutation();

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#6c16f7]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => {
                e.preventDefault()
                deleteNote.mutate(note._id)
              }}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard