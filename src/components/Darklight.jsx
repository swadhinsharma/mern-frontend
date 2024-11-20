import React, { useState } from 'react'
import './darklight.css'
const Darklight = () => {
  const[toggle, setToggle]= useState(true)

  const changeColor = {
    color: toggle ? 'black': 'white'
  }

  const togglebutton = () => {
    setToggle(!toggle);
    document.body.style.backgroundColor= toggle? "black" : "white";
    
  }
  return (
    <div classNameName='mainDiv'  >
      <i onClick={togglebutton} style={changeColor} class="fa-solid fa-circle-half-stroke fa-2xl"></i>
    </div>
  )
}

export default Darklight
