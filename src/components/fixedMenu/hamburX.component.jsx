import React from 'react'
import './fixedMenu.styles.scss'

// IMPORT MODULES


const HamburX = (props) => (

    <a onClick={props.click} id={props.myName} className='hamX'>
        <div className='hamLines'></div>
        {/* <div className='hamLines'></div> */}
        <div className='hamLines'></div>
    </a>
)


export default HamburX;