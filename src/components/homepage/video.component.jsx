import React, { Component, useState, useEffect, useContext, useRef } from 'react';
// import ReactDOM from 'react-dom';
import audifonos from '../../assets/iconos/audifonos.svg';
import './video.styles.scss';


import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
// IMPORTS



function stringToHTML(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var divVideo = doc.getElementsByClassName('wp-video');
    var poster = doc.getElementsByClassName('wp-video')
    var pathElement = divVideo.item(0).innerText;
   
    console.log("elpathdel MOVIE", pathElement)
    return pathElement;

}

function stringToPoster(imgP) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(imgP, 'text/html');
    let poster = doc.getElementsByClassName('wp-video')
    let pathPoster = poster.item(0).childNodes[2].attributes[4].nodeValue;
   
    console.log("elpathdel POSTER", pathPoster)
    // console.log(poster)
    return pathPoster;

}


async function ctrVideo(vid){
    var i = 0;
    var sounds = document.querySelectorAll('video');
    var muter = document.querySelectorAll('.muter');

    for(i=0; i<sounds.length; i++) {
        sounds[i].muted = true;
    }
    
    vid.volume = 0.5
    vid.muted = !vid.muted

    console.log("waterfunken")

}


async function Mute(vcr){
    vcr.muted = !vcr.muted
}

async function HideMuter(hm){
    console.log('this is HM', hm)
    hm.style.display = 'block'
}


async function HideBtn(hb){
    hb.style.display = 'none'
}


function activateLasers(ct){
    console.log('this is CONT', ct)
    ct.style.opacity = 0;
}

function alphaLasers(c){
    c.style.opacity = 0;
}

function Video(props){
    const [list, setList] = useState([]);
    const [video, takeVideo] = useState([]);
    const [muter, takeMuter] = useState([]);
    const [btn, takeBtn] = useState([]);
    const [cont, contentMuter] = useState([]);
    
    // function setVideo(){
    //     return fetch(`https://3bh.mx/api/wp-json/wp/v2/posts?categories=${props.category}&page=1&per_page=1`)
    //     // return fetch('https://3bh.mx/api/wp-json/wp/v2/posts?categories=14&page=1&per_page=1')
    //     .then(res => res.json())
       
    // }

    useEffect(()=>{
        let mounted = true;
        fetch(`https://3bh.mx/api/wp-json/wp/v2/posts?categories=${props.category}&page=1&per_page=1`)
        // return fetch('https://3bh.mx/api/wp-json/wp/v2/posts?categories=14&page=1&per_page=1')
        .then(res => res.json())
        .then(items => {
            if(mounted) {
                setList(items)
                takeVideo(document.getElementById(`${props.video}`))
                takeMuter(document.getElementById(`${props.muter}`))
                takeBtn(document.getElementById(`${props.btn}`))
                contentMuter(document.getElementById(`${props.cont}`))
             }
         })
         return() => mounted = false;
     })
    // }, [props.category, props.video, props.muter, props.btn, props.cont])
 
    //  useEffect(()=>{
    //      let mounted = true;
    //      if(mounted){
    //          takeVideo(document.getElementById(`${props.video}`))
    //          takeMuter(document.getElementById(`${props.muter}`))
    //          takeBtn(document.getElementById(`${props.btn}`))
    //          contentMuter(document.getElementById(`${props.cont}`))
    //      }
 
    //      return() => mounted = false;
 
    //  });



          
 
    //  useEffect(()=>{
    //         takeVideo(document.getElementById(`${props.video}`))
    //         takeMuter(document.getElementById(`${props.muter}`))
    //         takeBtn(document.getElementById(`${props.btn}`))
    //         contentMuter(document.getElementById(`${props.cont}`))
        


    // }, [props.video, props.muter, props.btn, props.cont ]);



    //  mediaSOURCE for VIDEO

    return(

        <div className="video3bh">

            <div className="btnContenedor">
                
                <button id={ props.btn } onClick={()=> {
                    takeMuter( HideMuter(muter));
                    takeVideo( ctrVideo(video));
                    takeBtn( HideBtn(btn))
                    }} className="audifonos">
                    <img src={audifonos}  alt="activar" />
                    <p>Activar Sonido</p>


                </button>


                <button id={ props.muter } onClick={() => {
                    takeVideo( Mute(video) );
                    takeBtn( HideMuter(btn));
                    takeMuter( HideBtn(muter) );
                    }} className="muter">
                    <img src={audifonos}  alt="Mute" />
                    <p>Mute Sound</p>
                </button>


            </div>

            
            {/* https://3bh.mx/api/wp-content/uploads/2021/04/videofinal-web1080DiscordNitro.mp4 */}
          
        
{/* 
                 <video  id={ props.video } autoPlay muted loop src="https://3bh.mx/api/wp-content/uploads/2021/04/videofinal-web1080DiscordNitro.mp4"></video> */}


            <BrowserView>
             {list.map((item, index) => 
           
                <video key={index} id={ props.video } autoPlay muted loop controls poster={ stringToPoster(item.content.rendered) } src={ stringToHTML(item.content.rendered) }></video>
            
                 
            )}   

            </BrowserView>

            <MobileView>
                <h1> El video pesa mucho </h1>
            </MobileView>



{/* 
             <video key="0" id={ props.video } autoPlay muted poster='' loop controls poster={ stringToPoster(list[0].content.rendered) } src={ stringToHTML(list[0].content.rendered) }></video>
                */}
             
    


        </div>
    )


}

export default Video;