import React, { useState, useEffect, } from 'react';
import ReactDOM from 'react-dom';
import './cursor.styles.scss';



import Cursor from '../../cursor';

// const cursor = new Cursor(document.querySelector('.cursor'));

function CurosrDetection(){
    console.log("do you read?")

}


// [...document.querySelectorAll('a')].forEach(el => {
//     el.addEventListener('mouseenter', () => cursor.emit('enter'));
//     el.addEventListener('mouseleave', () => cursor.emit('leave'));
// });




function TheCursor(){
    const [theCursor, takeCursor] = useState([]);
    const [theA, takeA] = useState([]);
    

    useEffect(()=>{
        let mounted = true;
        if(mounted){
            takeCursor(new Cursor(document.querySelector('.cursor')))
            
        }
        return()=>mounted = false;
        
    })

    useEffect(()=>{
        let mounted = true;
        if(mounted){
            takeA(document.querySelectorAll('a'))
            
        }
        return()=>mounted = false;
        
    })
    
    // [document.querySelectorAll('a')].forEach(el => {
        //     el.addEventListener('mouseenter', () => theCursor.emit('enter'));
        //     el.addEventListener('mouseleave', () => theCursor.emit('leave'));
        // });
        
        
        theA.forEach(el => {
            el.addEventListener('mouseenter', () => theCursor.emit('enter'));
            el.addEventListener('mouseleave', () => theCursor.emit('leave'));
        })
        // console.log('WHATYOUSEE', theA)


    return(
        <svg class="cursor" width="120" height="120" viewBox="0 0 220 220">
        <defs>
            <filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%" 
            filterUnits="objectBoundingBox">
                <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
                <feOffset dx="-30" result="warpOffset" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
            </filter>
        </defs>
        <circle class="cursor__inner" cx="110" cy="110" r="60"/>
    </svg>
    )
}

export default TheCursor;