import { useLocation } from "react-router"
import { useEffect } from "react"

const useScrollToTopOnPathchange = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "instant"
        })
    }, [pathname])
    
}

export default useScrollToTopOnPathchange;