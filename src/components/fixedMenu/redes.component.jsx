import React from 'react'
import './fixedMenu.styles.scss'
import insta from '../../assets/iconos/iconInsta.svg';

import face from '../../assets/iconos/iconFacebook.svg';

// IMPORT MODULES


const Redes = () => (

    <div className='redes'>
        <a href="http://www.facebook.com" target="_blank" className="face" >
            <img src={face} alt="faceBook" />
        </a>
        <a href="http://www.instagram.com" target="_blank" className="insta">
            <img src={insta}  alt="instagram" />
        </a>

    </div>

)


export default Redes