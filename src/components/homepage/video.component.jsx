import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import './video.styles.scss';

// IMPORTS
import audifonos from '../../assets/iconos/audifonos.svg';



function stringToHTML(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    var divVideo = doc.getElementsByClassName('wp-video');
    var pathElement = divVideo.item(0).innerText;
   

    return pathElement;

}


function ctrVideo(vcr){
    vcr.volume = 0.5
    vcr.muted = !vcr.muted
}



function Video(props){
    const [list, setList] = useState([]);
    const [video, takeVideo] = useState([]);
    
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
             takeVideo(document.getElementById('video'))
         }
 
         return() => mounted = false;
 
     });




    return(

        <div className="video3bh">
        
             {list.map(item => 
             <video id="video" autoPlay muted poster='' loop controls src={ stringToHTML(item.content.rendered) }></video>
               
            )}    
    


        </div>
    )


}

export default Video;