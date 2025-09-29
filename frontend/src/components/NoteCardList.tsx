import type { INote } from '../types/INote'
import NoteCard from './NoteCard'

interface NoteCardListProps {
    notes: INote[]
}

const NoteCardList = ({ notes }: NoteCardListProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {notes.map(note => <NoteCard note={note} key={note._id}/>)}
    </div>
  )
}

export default NoteCardList;