import type { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps {
    register: UseFormRegisterReturn
    title: string
    error?: string
    placeholder?: string
}

const Input = ({
    register,
    title,
    error,
    placeholder
}: InputProps) => {
  return (
    <div className="form-cont mb-4 flex flex-col gap-2">
        <label className="label text-xl">
            <span className="label-text">{title}</span>
        </label>
        <input
            type="text"
            placeholder={placeholder ?? ""}
            className="input input-bordered rounded-2xl w-full text-lg"
            {...register}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}

export default Input