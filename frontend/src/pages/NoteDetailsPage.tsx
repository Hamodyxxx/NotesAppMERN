import { Link, useNavigate, useParams } from "react-router"
import Form from "../components/Form"
import NoteContextProvider from "../contexts/noteContext/NoteContextProvider"
import useGetNoteById from "../hooks/queries/useGetNoteById"
import { ArrowLeft, Trash2Icon } from "lucide-react"
import useDeleteNoteMutation from "../hooks/queries/useDeleteNoteMutation"

const NoteDetailsPage = () => {
  const { id } = useParams<{id: string}>();
  const { data: note, isLoading } = useGetNoteById(id ?? "");
  const { mutate } = useDeleteNoteMutation();
  const navigate = useNavigate();

  if(isLoading) return;

  return (
    <div className="container mx-auto mt-8 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Link to={`/`} className="flex items-center gap-2 text-gray-300 hover:text-white duration-200 transition">
          <ArrowLeft className="size-5"/>
          Back to Notes
        </Link>

        <button onClick={() => {
          mutate(note._id,{
            onSuccess: () => navigate("/")
          })
        }} className="btn rounded-xl btn-error btn-outline">
            <Trash2Icon className="h-5 w-5" />
            Delete Note
        </button>
      </div>

      <NoteContextProvider value={note}>
        <Form title="">
          <Form.UpdateNoteForm/>
        </Form>
      </NoteContextProvider>
    </div>
  )
}

export default NoteDetailsPage