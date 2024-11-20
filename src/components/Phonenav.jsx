import React from 'react'
import "./phonenav.css"
import { SiSamsung } from "react-icons/si";

const Phonenav = () => {
  return (
    <div>
           <div className="nav-bar-wapper d-flex justify-content-between p-3 ">
          <a href= '#Mi' style={{cursor: 'pointer', textDecoration: 'none', color:'black'}} className="items">MI</a>
          <a href= '#samsung' style={{cursor: 'pointer', textDecoration: 'none', color:'black'}} className="items">Samsung</a>
          <a href= '#footer' style={{cursor: 'pointer', textDecoration: 'none', color:'black'}} className="items">Realme</a>
          <a href= '#footer' style={{cursor: 'pointer', textDecoration: 'none', color:'black'}} className="items">OPPO</a>
          <a href= '#footer' style={{cursor: 'pointer', textDecoration: 'none', color:'black'}} className="items">Vivo</a>
        </div>
    </div>
  )
}

export default Phonenav
