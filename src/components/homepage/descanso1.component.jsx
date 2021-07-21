import React, { Component } from 'react';

import './projects.styles.scss';

import { gsap } from "gsap";
// IMPORT MODULES

function textToHTML(str){
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var valElement = doc.querySelectorAll('p');
    // var theImages = []

    // var takeImages = valElement[1].querySelectorAll('img');
    // var bigPicture = [].map.call(takeImages,function(node) {
    //     theImages.push( node.src ) 
    // }
    
    // )
    // console.log('TAKE BIG IMAGES:', theImages)
    
    // console.log("TAKE IMAGES", bigPicture)
    return valElement.item(0).innerText

  }

function takeImages(str){
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var valElement = doc.querySelectorAll('p');
    var theImages = []

    var takeImages = valElement[1].querySelectorAll('img');
    var bigPicture = [].map.call(takeImages,function(node) {
        theImages.push( node.src ) 
    }
    
    )
    console.log('TAKE BIG IMAGES:', theImages)
    
    console.log("images")

    return theImages

  }


class DescansoUno extends Component{

    state = {
        frases: []
    };


    componentDidMount() {
          
        gsap.from(".txt", {
            scrollTrigger: {
              trigger: ".txt",
              start: "top 80%",
              end: "+=300",
              pin: false,
              scrub: true,
              markers: false,
              toggleActions: "play pause resume reset"
            },
            y: "20%",
            ease: "none",
            duration: 0.5,
            alpha: 0
          });
         
       
        fetch('https://3bh.mx/api/wp-json/wp/v2/posts?categories=13&per_page=1')
            .then(res => res.json())
            .then(
                ( results ) => this.setState({ frases: results }));
        
      
    
    
        }

    render(){


        const frase = this.state.frases.map((item, i) => (
            <div className="no-highlight fraseContainer" key={item.id}>
              
              <div className="no-highlight"> 
             
  
                {textToHTML(item.content.rendered) }

                {takeImages(item.content.rendered) }
{/* 
                <div>
                    {takeImages(item.content.rendererd).map((item) => (
                    // <img src={ item } alt= { item } />
                        <div> 
                            {item}
                        </div>
                    ))}
                </div>  */}

                {/* {
                    [].map.call(takeImages(item.content.rendererd), function(node) {

                        console.log('TAKE BIG IMAGES to your self:', node.src)
                    }
                        
                    )
                } */}

                
                </div>
          
  
               
                         
         
            </div>
  
           
          ));

    


        return(

            <div className="descansoUno">
                {frase}
            </div>
        )
    }

}

export default DescansoUno;