import React from 'react'
import './Mainpage.css'
import {Link} from 'react-router-dom'

export default function Mainpage() {
  return (
    <div className="main">
        <h1 className="titre-mainpage">La villa ou l'appartement de vos rêves en bord de mer en Turquie</h1>
        <div>
        <Link to="/villa" className="link-entry" >
         Villa
         </Link>
        <Link to="/appartement" className="link-entry">
         Appartement
         </Link>
         </div>
    </div>
  )
}
