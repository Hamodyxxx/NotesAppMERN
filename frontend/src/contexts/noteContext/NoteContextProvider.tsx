import type { PropsWithChildren } from "react"
import noteContext from "./noteContext"

interface NoteContextProviderProps extends PropsWithChildren {
    value: noteContext
}

const NoteContextProvider = ({
    value,
    children
}: NoteContextProviderProps) => {
  return (
    <noteContext.Provider value={value}>
        {children}
    </noteContext.Provider>
  )
}

export default NoteContextProvider