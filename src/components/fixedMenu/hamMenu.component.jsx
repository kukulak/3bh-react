import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap";

// IMPORT MODULES

import BtnFlecha from '../homepage/btnFlecha.component';
import HamburX from './hamburX.component';
import BtnMenu from './btnMenu.component';
import Redes from './redes.component';
import Logo from './logo.component';

const HamMenu = props => {

    const tl = useRef(gsap.timeline({ paused: true }));
    let modalVeil = null;
    let modalWrapper = null;
    let modalContent = null;

    useEffect(()=> {

   gsap.set(modalContent, {
        yPercent: -300,
        xPercent: -100
        // width: '20vw',
        // height: '20vw'
     });
        
    tl.current
      .to(modalVeil, 0.1, { autoAlpha: 0.85 })
      .to(modalWrapper, 0.05, { autoAlpha: 0.99 }, 0)
      .to(
        modalContent,
        0.25,
        {
          yPercent: -5,
          x: '3000px',
        //   width: '110vw',
        //   height: '110vw',
          autoAlpha: 1
        },
        0
      )
      .reverse();
  }, []);

  useEffect(() => {
    tl.current.reversed(!props.show);
    if (props.show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [props.show]);


  return ReactDOM.createPortal(

      <div className='contenedorHamMenu' ref={e => (modalWrapper = e)}>

        <div className='hamMenu' ref={e => (modalContent = e)}>
                {/* <Logo /> */}
               
               <div className='menuDesign'>

                <HamburX click={props.close} />
                
            <div className='contenedorBtns'>
                {/* <BtnFlecha txt='Servicios' goto='' />
                <BtnFlecha txt='Proyectos' goto='' />
                <BtnFlecha txt='Nosotros' goto='' />
                <BtnFlecha txt='Galeria' goto='' />
                <BtnFlecha txt='Tienda' goto='' />
                <BtnFlecha txt='Clientes' goto='' />
            <BtnFlecha txt='Contacto' goto='' /> */}

                <BtnMenu txt='Servicios' goto='' />
                <BtnMenu txt='Proyectos' goto='' />
                <BtnMenu txt='Nosotros' goto='' />
                <BtnMenu txt='Galeria' goto='' />
                <BtnMenu txt='Tienda' goto='' />
                <BtnMenu txt='Clientes' goto='' />
                <BtnMenu txt='Contacto' goto='' />


            </div>
                <Redes/>
            </div>
        </div>
        <div
        className="my-modal-veil"
        ref={e => (modalVeil = e)}
        onClick={props.close}
      />
    </div>,
    document.body

);

};

export default HamMenu;