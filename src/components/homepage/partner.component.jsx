import React, { useEffect } from 'react';

import { gsap } from "gsap";


import './homePartners.styles.scss'

function Partner(props) {
    
  const partner = React.createRef();
  const cpartner = React.createRef();
    
    
     

  
  useEffect(() => {
    gsap.from(cpartner.current, {
        scrollTrigger: {
          trigger: cpartner.current,
          start: "600 90%",
          end: "700px center",
          pin: false,
          scrub: 2,
          markers: false,
          toggleActions: "play pause resume reset"
        },
        y: 102,
        rotation: 0,
        ease: "none",
        opacity: 0,
        duration: 1.5
      })
    }
    );
  
    

      
        return (
            <div ref={cpartner} className="partners contentSection">
             
              <a className={`LP${props.id}`} key={props.id} href={props.rendered}>
              <img className="logoPartners" src={props.url} alt={props.alt}/>
              </a>

            </div>
            
        );
    
  }
  

export default Partner;