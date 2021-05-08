import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import './homepage.styles.scss';
import { gsap } from "gsap";

// IMPORT MODULES
import ProTitulo from './projectsTitulo.component';
import ProPic from './projectsPicture.component';
import ProDescripcion from './projectsDescripcion.component';
import ProPartners from './projectsParners.component';
import BtnFlecha from './btnFlecha.component';



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
  
  

function HomePage() {

    const pro = React.createRef();
    const [projects, setProjects] = useState([]);   
    
        useEffect(() => {
            gsap.from("contenedorProjects", {
                scrollTrigger:{
                    trigger: ".contenedorProjects",
                    start: "100 center",
                    end: "+=1010",
                    pin: true,
                    scrub: true,
                    markers: true,
                    toggleActions: "play pause resume reset",
    
                },
                x: "-10%",
                ease: 'none',
                duration: 2
            })
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
        <div ref={pro} className='contenedorProjects'>

        {projects.map(item => 
       
            
            <div className="projects">
                
                <ProPic img={ fotoProyecto(item.content.rendered)[1] } />
                <div className='proInfo'>
                    <ProTitulo titulo={item.title.rendered} />
                    <ProDescripcion descripcion={textToHTML(item.excerpt.rendered)}  />
                    <div className="groupPartner">
                        { fotosParners(item.content.rendered).map((item) => (
                            
                            //   <img className="imgPartnersHP" src={ item } alt={item.slug}/>
                            <ProPartners partners={ item } alt={item.slug}/>
                            )) }
                    </div>
                    <BtnFlecha goTo='dono' txt='ver proyecto' />
                </div>
            </div>

        
        )}   
      
        </div>
    

        )

}

export default HomePage;