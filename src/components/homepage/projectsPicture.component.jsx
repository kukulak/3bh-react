import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './projects.styles.scss';
import { gsap } from "gsap";

// IMPORT MODULES

function ProPic(props) {
    const pic = React.createRef();

    useEffect(() => {
        gsap.from(pic.current, {
            scrollTrigger:{
                trigger: ".proPic",
                start: "center center",
                end: "center center",
                pin: false,
                scrub: true,
                markers: true,
                toggleActions: "play pause resume reset",

            },
            x: -100,
            ease: 'none',
            duration: 2
        })
    }, [pic]);

    return(

        <div ref={pic} className="proPic">
        
            <img src={props.img} alt={props.alt} />

        </div>
        )

}

export default ProPic;