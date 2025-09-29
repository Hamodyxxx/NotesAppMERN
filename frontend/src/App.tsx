import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import NoteDetailsPage from './pages/NoteDetailsPage'
import { Toaster } from 'react-hot-toast'
import useScrollToTopOnPathchange from './hooks/useScrollToTopOnPathchange'

function App() {
  useScrollToTopOnPathchange();

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreateNotePage/>}/>
        <Route path='/note/:id' element={<NoteDetailsPage/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App  
