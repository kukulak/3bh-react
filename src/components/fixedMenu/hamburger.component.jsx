import React from 'react'
import './fixedMenu.styles.scss'

// IMPORT MODULES


const Hamburger = (props) => (

    <a onClick={props.click} id={props.myName} className='hamCircle'>
        <div className='hamLines'></div>
        <div className='hamLines'></div>
        <div className='hamLines'></div>
    </a>
)


export default Hamburger