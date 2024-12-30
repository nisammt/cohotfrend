
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errorpage = () => {
 const navigate = useNavigate();

  return (
    <div>
        <h2>404 Page not found</h2>
        <button onClick={()=> navigate("/")}> Back to Home</button>
      
    </div>
  )
}

export default Errorpage
