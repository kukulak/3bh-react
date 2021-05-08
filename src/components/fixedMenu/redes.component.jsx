import React from 'react'
import './fixedMenu.styles.scss'
import face from '../../assets/iconos/iconInsta.svg';

import insta from '../../assets/iconos/iconYoutube.svg';

// IMPORT MODULES


const Redes = () => (

    <div className='redes'>
        <a href="http://www.facebook.com" className="face" >
            <img src={face} alt="faceBook" />
        </a>
        <a href="http://www.instagram.com" className="insta">
            <img src={insta}  alt="instagram" />
        </a>

    </div>

)


export default Redes