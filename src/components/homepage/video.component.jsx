import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import audifonos from '../../assets/iconos/audifonos.svg';
import './video.styles.scss';

// IMPORTS



function stringToHTML(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var divVideo = doc.getElementsByClassName('wp-video');
    var pathElement = divVideo.item(0).innerText;
   

    return pathElement;

}


async function ctrVideo(vcr){
    var i = 0;
    var sounds = document.querySelectorAll('video');
    var muter = document.querySelectorAll('.muter');

    
    
    for(i=0; i<sounds.length; i++) {
        sounds[i].muted = true;
    }
    
    vcr.volume = 0.5
    vcr.muted = !vcr.muted
   

    // if (!vcr.paused){
    //     console.log('sounds', vcr)
    //     vcr.play()
    // } else {
    //     vcr.pause();
    // }

  

    console.log("waterfunken")
    
    // finally {
    //     vcr.volume = 0.5
    //     vcr.muted = !vcr.muted
    // }
}


function Mute(vcr){
    vcr.muted = !vcr.muted
}

function HideMuter(hm){
    hm.style.display = 'block'
}

function HideBtn(hb){
    hb.style.display = 'none'
}


function Video(props){
    const [list, setList] = useState([]);
    const [video, takeVideo] = useState([]);
    const [muter, takeMuter] = useState([]);
    const [btn, takeBtn] = useState([]);
    
    function setVideo(){
        return fetch(`https://3bh.mx/api/wp-json/wp/v2/posts?categories=${props.category}&page=1&per_page=1`)
        // return fetch('https://3bh.mx/api/wp-json/wp/v2/posts?categories=14&page=1&per_page=1')
        .then(res => res.json())
       
    }

    useEffect(()=>{
        let mounted = true;
        setVideo()
        .then(items => {
            if(mounted) {
                setList(items)
             }
         })
         return() => mounted = false;
     }, [])
     
 
     useEffect(()=>{
         let mounted = true;
         if(mounted){
             takeVideo(document.getElementById(`${props.video}`))
             takeMuter(document.getElementById(`${props.muter}`))
             takeBtn(document.getElementById(`${props.btn}`))
         }
 
         return() => mounted = false;
 
     });




    return(

        <div className="video3bh">

            <button id={ props.btn} onClick ={() => {
                takeMuter( HideMuter(muter));
                takeVideo( ctrVideo(video));
                takeBtn( HideBtn(btn))
                 }} className="audifonos">
                <img src={audifonos}  alt="logo" />
                <p>Inmersive Sound</p>


            </button>


            <button id={ props.muter } onClick ={() => takeVideo( Mute(video) )} className="muter">
                <img src={audifonos}  alt="logo" />
                <p>Mute Sound</p>


            </button>
            
        
             {list.map(item => 
             <video id={ props.video } autoPlay muted poster='' loop controls src={ stringToHTML(item.content.rendered) }></video>
               
            )}    
    


        </div>
    )


}

export default Video;