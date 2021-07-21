import React, { Component, useEffect } from 'react';

import { gsap } from "gsap";

import Titulo from './titulos.component'
import Partner from './partner.component';

import './homePartners.styles.scss'

class HomePartners extends Component {
    // constructor(props) {
    //   super(props);
  
    // }
    state = {
        person: []
    };

    

    
    
     

  
    componentDidMount() {
    //   this.PartnersApi();
    // }
    
    // gsap.from(".hrzR", {
    //     scrollTrigger: {
    //       trigger: ".partners",
    //       start: "100 center",
    //       end: "+=110",
    //       pin: false,
    //       scrub: true,
    //       markers: false,
    //       toggleActions: "play pause resume reset"
    //     },
    //     x: "-210%",
    //     ease: "bounce",
    //     duration: 35
    //   });
  
      // gsap.from(".hrzL", {
      //   scrollTrigger: {
      //     trigger: ".partners",
      //     start: "150 center",
      //     end: "+=500",
      //     pin: false,
      //     scrub: true,
      //     markers: false,
      //     toggleActions: "play pause resume reset"
      //   },
      //   x: "200%",
      //   ease: "none",
      //   duration: 13
      // });


      // PartnersApi() {
      fetch('https://3bh.mx/api/wp-json/wp/v2/media?search=partner&per_page=50')
        .then(res => res.json())
        .then(
            ( results ) => this.setState({ person: results }));
    }
  
    render() {

        const partners = this.state.person.map((item, i) => (
          <Partner
            id={item.id}
            rendered={item.title.rendered}
            url={item.source_url}
            alt={item.alt_text}
            />
            // <a className="LP" key={item.id} href={item.title.rendered}>
            // <img className="logoPartners" src={item.source_url} alt={item.alt_text}/>
            // </a>
        ));
  
        return (
            <div className="partners contentSection">
              <Titulo txt="Partners"/>
                    {/* <p className="centeredTitle"> Partners </p> */}
               <div className="partnersContainer">

                <div className="hrz hrzR">
                          {partners}        
                </div>

               </div>
                {/* <div className="hrz hrzL">
                        {partners}
                      
                </div> */}

                {/* <div className="vert">
                  {partners}
                </div> */}

            </div>
            
        );
    }
  }
  

export default HomePartners;