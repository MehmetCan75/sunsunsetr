import React from 'react'
import '../Villa/Villa.css'
import Appart1 from './Appart1.jpg'
import Appart2 from './Appart2.jpg'
import Appart3 from './Appart3.jpg'
import Appart4 from './Appart4.jpg'
import Appart5 from './Appart5.jpg'
import {Link} from 'react-router-dom'

export default function Villa() {
  return (
    <div className="apparts">
      <div className='cards1'>
          <img src={Appart1} alt="villa1" className="img-villa1"/>
          <div className="infos">
          <h1>88 000€</h1>
          <ul className="ul">
              <li>Meublé</li>
              <li>2 + 1</li>
              <li>120m²</li>
              <li>Sauna..</li>
          </ul>  
          <Link to={{ pathname: "https://www.instagram.com/p/CMxuB8Xs298/" }} target="_blank" className="moreInfos">
         <li className="moreInfosLi">+ infos</li>
         </Link>

       
          </div>
      </div>
      <div className='cardss'>
          <img src={Appart2} alt="villa1" className="img-villa1"/>
          <div className="infos">
          <h1>110 000€</h1>
          <ul className="ul">
              <li>Neuf</li>
              <li>3 + 1</li>
              <li>135m²</li>
              <li>Parking..</li>
          </ul>  
          <Link to={{ pathname: "https://www.instagram.com/p/CM20Q76Mg8s/" }} target="_blank" className="moreInfos">
         <li className="moreInfosLi">+ infos</li>
         </Link>
          </div>
      </div>

      <div className='cardss'>
          <img src={Appart3} alt="villa1" className="img-villa1"/>
          <div className="infos">
          <h1>80 000€</h1>
          <ul className="ul">
              <li>Meublé</li>
              <li>2 + 1</li>
              <li>110m²</li>
              <li>Sauna..</li>
          </ul>  
          <Link to={{ pathname: "https://www.instagram.com/p/CN-t7Aaj1Pw/" }} target="_blank" className="moreInfos">
         <li className="moreInfosLi">+ infos</li>
         </Link>
          </div>
      </div>
      <div className='cardss'>
          <img src={Appart4} alt="villa1" className="img-villa1"/>
          <div className="infos">
          <h1>117 000€</h1>
          <ul className="ul">
              <li>Meublé</li>
              <li>3 + 1</li>
              <li>150m²</li>
              <li>Piscines..</li>
          </ul>  
          <Link to={{ pathname: "https://www.instagram.com/p/CODDcHUDgYh/" }} target="_blank" className="moreInfos">
         <li className="moreInfosLi">+ infos</li>
         </Link>
          </div>
      </div>
      <div className='cardss'>
          <img src={Appart5} alt="villa1" className="img-villa1"/>
          <div className="infos">
          <h1>70 000€</h1>
          <ul className="ul">
              <li>Meublé</li>
              <li>1 + 1</li>
              <li>55m²</li>
              <li>Plage..</li>
          </ul>  
          <Link to={{ pathname: "https://www.instagram.com/p/COFumoJjWcT/" }} target="_blank" className="moreInfos">
         <li className="moreInfosLi">+ infos</li>
         </Link>
          </div>
      </div>
    </div>
  )
}

