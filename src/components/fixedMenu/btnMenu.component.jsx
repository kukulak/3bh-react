import React from 'react'
import './fixedMenu.styles.scss'

import flecha from '../../assets/iconos/flecha.svg'

// TweenLite.to("#rect", 1, {attr:{x:100, y:50, width:100, height:100}, ease:Linear.easeNone});

// IMPORT MODULES


const BtnMenu = (props) => (

    <a href={ props.link } className='btnFlecha hamMenuBtn'>
      {props.txt}
      {/* <img src={flecha} alt="flecha" /> */}
    </a>

)


export default BtnMenu