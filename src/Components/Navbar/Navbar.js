import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Menu from './Pictures/menu.svg'

export default function Navbar() {

    const [toggleMenu,setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const closeMenu = ( ) => {
        setToggleMenu(!toggleMenu)
    }


  return (
      <div>
        <div className="header">
        <h1 className="titre">Sun & Sunset</h1>
           </div>
    <nav>
        {(toggleMenu || largeur > 500)  && (
     <ul className="liste">
         <Link to="/sunsunsetr" onClick={closeMenu}>
         <li className="items">Accueil</li>
         </Link>
         <Link to="/villa" onClick={closeMenu}>
         <li className="items">Villas</li>
         </Link>
         <Link to="/appartement" onClick={closeMenu}>
         <li className="items">Appartements</li>
         </Link>
         <Link to="/contact" onClick={closeMenu}>
         <li className="items">Contact</li>
         </Link>
     </ul>
        )}
     <button onClick={toggleNav} className="btn"><img src={Menu} alt="logo" className="menu"/></button>
    </nav>

    

    </div>
  )
}
