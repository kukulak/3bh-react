import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.styles.scss';

// IMPORT MODULES


import FixedMenu from '../fixedMenu/fixedMenu.components';
import HeroBanner from './herobanner.component';
import Proyectos from './projects.component';
import Video from './video.component';

const HomePage = () => (
    <div className="homepage">
        
        <div className="menu"> 
        <FixedMenu/>
        </div>

     
        <HeroBanner />
        <Proyectos />
        <Video category='14'/>
{/* 
        <Descanso />
        <RedInstagram />
        <Parners />
        <Footer /> */}

    </div>
)

export default HomePage;