import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"
import Form from "../components/Form"

const CreateNotePage = () => {
  return (
    <div className="container mx-auto mt-16 flex flex-col gap-6">
      <Link to={`/`} className="flex items-center gap-2 text-gray-300 hover:text-white duration-200 transition">
        <ArrowLeft className="size-5"/>
        Back to Notes
      </Link>

      <Form title="Create New Note">
        <Form.CreateNoteForm/>
      </Form>
    </div>
  )
}

export default CreateNotePage