import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import NoteDetailsPage from './pages/NoteDetailsPage'
import { Toaster } from 'react-hot-toast'
import useScrollToTopOnPathchange from './hooks/useScrollToTopOnPathchange'
import NavBar from './components/NavBar'

function App() {
  useScrollToTopOnPathchange();

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#5C59F6_100%)]" />
      <NavBar/>
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
