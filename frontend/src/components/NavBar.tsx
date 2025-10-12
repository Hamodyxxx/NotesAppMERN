import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

const NavBar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10  '>
        <nav className='p-4 mx-auto flex justify-between items-center max-w-6xl'>
            <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>
                Jotter
            </h1>

            <Link to={"/create"} className="btn flex justify-between gap-4 rounded-full btn-primary">
                <PlusIcon className="size-5"/>
                <span>New Note</span>
            </Link>
        </nav>
    </header>
  )
}

export default NavBar