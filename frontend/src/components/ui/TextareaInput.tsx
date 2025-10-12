import type { UseFormRegisterReturn } from 'react-hook-form'

interface TextareaInputProps {
    register: UseFormRegisterReturn
    title: string
    error?: string
    placeholder?: string
}

const TextareaInput = ({
    register,
    title,
    error,
    placeholder
}: TextareaInputProps) => {
  return (
    <div className="form-cont mb-4 flex flex-col gap-2">
        <label className="label text-xl">
            <span className="label-text">{title}</span>
        </label>
        <textarea
            placeholder={placeholder ?? ""}
            className="textarea rounded-2xl w-full text-lg"
            {...register}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}

export default TextareaInput