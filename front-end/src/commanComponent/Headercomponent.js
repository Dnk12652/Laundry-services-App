import React from 'react'
import {useHistory} from "react-router-dom"
import "../commanComponent/Headercompo.css"



function Headercomponent(props) {
  const {registration,action}=props
  const history = useHistory()
  const router=()=>{
    history.push(action)
 
  }
  return (
  <div className="parent">
    <div className="header">
     <div className="nav-bar">
        <h1>Laundry</h1>
      </div>
        
      <div className="navbar">
          <a href="#"><p>Home</p></a>
          <a href="#"><p>Pricing</p></a>
          <a href="#"><p>Career</p></a>

          <button onClick={router}>
          {registration}
            </button>
      </div>
      </div>
 

  </div>
   )
     
}

export default Headercomponent
