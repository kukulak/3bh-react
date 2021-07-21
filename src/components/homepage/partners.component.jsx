import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import './homepage.styles.scss';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { ScrollTrigger } from "gsap/ScrollTrigger";

// IMPORT MODULES
import ProTitulo from './projectsTitulo.component';
import ProPic from './projectsPicture.component';
import ProDescripcion from './projectsDescripcion.component';
import ProPartners from './projectsParners.component';
import BtnFlecha from './btnFlecha.component';

import TituloFlecha from './titulos.component';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function textToHTML(str){
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var valElement = doc.querySelectorAll('p');
  
    return valElement.item(0).innerText
  }


function fotoProyecto(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var divGallery = doc.getElementsByClassName('gallery');
    var pathElement = divGallery.item(0).querySelectorAll('img');
    // var pathNElement = pathElement.getElementsByClassName();
    var imageGroup = [];
  
    for (let i = 0; i < pathElement.length; i++) {
      
      imageGroup[i] = pathElement[i].attributes.src.value
      
    }
  
    var imgPathsS = Object.entries(imageGroup);
  
  
      
    
  
  
  
    return imageGroup;
  
  
  }

function fotosParners(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var divGallery = doc.getElementsByClassName('gallery');
    var pathElement = divGallery.item(1).querySelectorAll('img');
    // var pathNElement = pathElement.getElementsByClassName();
    var imageGroup = [];
  
    for (let i = 0; i < pathElement.length; i++) {
      
      imageGroup[i] = pathElement[i].attributes.src.value
      
    }
  
    var imgPathsS = Object.entries(imageGroup);
  
    return imageGroup;
  
  
  }

function setVideo(){
    return fetch(`https://3bh.mx/api/wp-json/wp/v2/posts?categories=16&per_page=3`)
    // return fetch('https://3bh.mx/api/wp-json/wp/v2/posts?categories=14&page=1&per_page=1')
    .then(res => res.json())
   
}  
  
  

function Partners() {

    const pro = React.createRef();
    const [projects, setProjects] = useState([]);   
    
        useEffect(() => {
            gsap.fromTo(pro.current,
                {
                    x: "-200%",
                    ease: 'none',
                    duration: 2
                },
                {
                    x: "20%",
                    ease: 'none',
                    duration: 2,
                    scrollTrigger:{
                        trigger: pro.current,
                        start: "300px center",
                        // end: "bottom 100px",
                        end: () => "+=" + document.querySelector(".contenedorProjects").offsetWidth,
                        pin: ".spaceProjects",
                        // scrub: true,
                        scrub: 1,
                        markers: false,
                        toggleActions: "play pause resume pause",
                    },
                }
            )
        }, [pro]);

    useEffect(()=>{
        let mounted = true;
        setVideo()
        .then(items => {
            if(mounted) {
                setProjects(items)
             }
         })
         return() => mounted = false;
     }, [])
     
    return(
        <div className="spaceProjects">

            <TituloFlecha txt="Partners"/>

            <div ref={pro} className='contenedorProjects'>

            {projects.map(item => 
        
        
            <div className="projects">
                    
                <ProPic img={ fotoProyecto(item.content.rendered)[1] } />
                <div className='proInfo'>
                    <ProTitulo titulo={item.title.rendered} />
                    <ProDescripcion descripcion={textToHTML(item.excerpt.rendered)}  />
                    <div className="groupPartner">
                        
                        { fotosParners(item.content.rendered).map((item) => (
                            <ProPartners partners={ item } alt={item.slug}/>
                        )) }

                    </div>
                    <BtnFlecha goTo='dono' txt='ver proyecto' />
                    </div>
                </div>


            )}   
      
            </div>
        </div>
    

        )

}

export default Partners;