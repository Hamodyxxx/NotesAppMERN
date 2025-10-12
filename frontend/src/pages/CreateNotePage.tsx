import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"
import FormContainer from "../components/FormContainer"

const CreateNotePage = () => {
  return (
    <div className="container mx-auto mt-16 flex flex-col gap-6">
      <Link to={`/`} className="flex items-center gap-2 text-gray-300 hover:text-white duration-200 transition">
        <ArrowLeft className="size-5"/>
        Back to Notes
      </Link>

      <FormContainer title="Create New Note">
        <FormContainer.CreateNoteForm/>
      </FormContainer>
    </div>
  )
}

export default CreateNotePage