import { useForm } from "react-hook-form";
import Input from "./ui/Input";
import toast from "react-hot-toast";
import useCreateNoteMutation from "../hooks/queries/useCreateNoteMutation";
import { useNavigate } from "react-router";
import TextareaInput from "./ui/TextareaInput";
import type { PropsWithChildren } from "react";
import useNoteContext from "../contexts/noteContext/useNoteContext";
import useUpdateNoteMutation from "../hooks/queries/useUpdateNoteMutation";

interface CreateNotForm {
  content: string;
  title: string;
}

interface FormProps extends PropsWithChildren {
  title: string;
}

const Form = ({ children, title }: FormProps) => {
  return (
    <div className="flex flex-col gap-6 py-5 px-5 bg-primary/38 rounded-2xl">
      <h2 className="text-4xl">{title}</h2>

      {children}
    </div>
  );
};

Form.CreateNoteForm = function CreateNoteForm() {
  const { register, handleSubmit } = useForm<CreateNotForm>();
  const { mutate, isError, error, isPending } = useCreateNoteMutation();
  const navigate = useNavigate();

  if (isError) {
    toast.error(error.message);
  }

  const onSubmit = ({ title, content }: CreateNotForm) => {
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    mutate(
      {
        title,
        content,
      },
      {
        onError: () => toast.error("An Error has been occured"),
        onSuccess: () => {
          navigate("/");
          toast.success("Note Has been Created");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        register={register("title")} 
        title="Title" 
        placeholder="content" 
      />

      <TextareaInput
        register={register("content")}
        title="Content"
        placeholder="content"
      />

      <div className="card-actions justify-end">
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? "Creating..." : "Create Note"}
        </button>
      </div>
    </form>
  );
};

Form.UpdateNoteForm = function UpdateNoteForm() {
  const note = useNoteContext();
  const { register, handleSubmit } = useForm<CreateNotForm>({
    defaultValues: {
      title: note.title,
      content: note.content
    }
  });
  const { mutate, isError, error, isPending } = useUpdateNoteMutation();

  if (isError) {
    toast.error(error.message);
  }

  const onSubmit = ({ title, content }: CreateNotForm) => {
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    mutate(
      {
        id: note._id,
        note: {
          title,
          content,
        }
      },
      {
        onError: () => toast.error("An Error has been occured"),
        onSuccess: () => toast.success("Note Has been Created")

      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        register={register("title")} 
        title="Title" 
        placeholder="title" 
      />

      <TextareaInput
        register={register("content")}
        title="Content"
        placeholder="content"
      />

      <div className="card-actions justify-end">
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? "Saving" : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default Form;
