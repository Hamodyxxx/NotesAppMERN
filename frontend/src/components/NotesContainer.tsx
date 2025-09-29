import toast from 'react-hot-toast';
import useGetAllNotesQuery from '../hooks/queries/useGetAllNotesQuery';
import NoteCardList from './NoteCardList';
import RateLimitedUI from './RateLimitedUI';
import type AppError from '../utils/AppError';

const NotesContainer = () => {
    const { data, isLoading, isError, error } = useGetAllNotesQuery();

    if(isLoading) {
        return (<div className='text-primary container py-10 px-10 flex justify-center'>Loading Notes...</div>)
    }
    
    if(isError) {
        toast.error((error as AppError<{message:string}>).extraDetails?.message || "");
        return <RateLimitedUI/>
    }

    if(!data) {
        return;
    }

  return (
    <NoteCardList notes={data}/>
  )
}

export default NotesContainer