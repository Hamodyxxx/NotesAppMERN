import { useState } from "react";
import NavBar from "../components/NavBar"
import RateLimitedUi from "../components/RateLimitedUI";

const HomePage = () => {
  const [isRateLimited,] = useState(true);


  return (
    <>
      <NavBar/>
     {isRateLimited ? <RateLimitedUi/> : null} 
    </>
  )
}

export default HomePage