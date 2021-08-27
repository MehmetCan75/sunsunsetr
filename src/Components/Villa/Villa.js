import React from 'react'
import './Villa.css'
import Villaone from './villaone.jpg'
import Villatwo from './villatwo.jpg'
import {Link} from 'react-router-dom'

export default function Villa() {
  return (
    <div className="villa">
      <div className='cards1'>
          <img src={Villaone} alt="villa1" className="img-villa1"/>
          <div className="infos">
          <span className="vendu">Vendu</span>

          <h1>190 000€</h1>
          <ul className="ul">
              <li>Meublé</li>
              <li>3 + 1</li>
              <li>Jacuzzi</li>
              <li>Piscine</li>
          </ul>  
          <Link to={{ pathname: "https://www.instagram.com/p/CL489OrMlom/" }} target="_blank" className="moreInfos">
         <li className="moreInfosLi">+ infos</li>
         </Link>

       
          </div>
      </div>
      <div className='cards'>
          <img src={Villatwo} alt="villa1" className="img-villa1"/>
          <div className="infos">
          <h1>206 500€</h1>
          <ul className="ul">
              <li>Meublé</li>
              <li>3 + 1</li>
              <li>200m²</li>
              <li>Piscine</li>
          </ul>  
          <Link to={{ pathname: "https://www.instagram.com/p/CMIUQ0Lsw8Z/" }} target="_blank" className="moreInfos">
         <li className="moreInfosLi">+ infos</li>
         </Link>
          </div>
      </div>
    </div>
  )
}
