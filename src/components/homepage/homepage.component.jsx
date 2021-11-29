import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.styles.scss';

// IMPORT MODULES


import FixedMenu from '../fixedMenu/fixedMenu.components';
import HeroBanner from './herobanner.component';
import Proyectos from './projects.component';
import Video from './video.component';
import DescansoUno from './descansoUno.component'
import HomeInstagram from './homeInstagrams.component'
import DescansoDos from './descansoDos.component'
import HomeFooter from './footer.component'
import AnimatedBackground from '../general/animatedBackground.component'
import HomePartners from './homePartners.component'


import TheCursor from '../../components/general/cursor.component'



const HomePage = () => (
    <div className="homepage">
        {/* <TheCursor/> */}
        <div className="menu"> 
        <FixedMenu/>
        </div>

     
        <HeroBanner />
        <Proyectos />
        {/* <DescansoUno /> */}
        {/* <Video category='18' video='second' muter='mSecond' btn='btnSecond'/> */}
        <HomeInstagram />
        {/* <DescansoDos/> */}
        {/* <HomePartners /> */}
        {/* <HomeFooter />  */}
        <AnimatedBackground />
{/* 
        */}

    </div>
)

export default HomePage;