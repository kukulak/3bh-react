import React from 'react';
import ReactDOM from 'react-dom';
import './projects.styles.scss';
import flecha from '../../assets/iconos/flecha.svg'

// import {ReactComponent as Flecha} from '../../assets/iconos/flecha.svg';

// IMPORT MODULES


const BtnFlecha = (props) => (
    <a href={props.goTo} className="btnFlecha">
        {props.txt}

        {/* <Flecha/> */}

        {/* <img src={flecha} alt="flecha" /> */}

        {/* <svg width="100%" height="100%" viewBox="0 0 75 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:11;">
            <g>
                <path d="M25.192,69.31l44.88,-0l-0,-44.881" style="fill:none;stroke:#009def;stroke-width:8.33px;"/>
                <path d="M68.474,67.468l-60.658,-60.658" style="fill:none;stroke:#009def;stroke-width:8.33px;"/>
            </g>
        </svg> */}

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 75 75" style={{clipRule:'evenodd',fillRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:11,version:1.1}}>
            {/* <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs> */}
            {/* <path d="M25 69l45 0 0-45" filter="url(#goo)" style={{fill:'none',strokeWidth:8.33+'px',stroke:'#009def'}}/>
            <path d="M68 67l-61-61" filter="url(#goo)" style={{fill:'none',strokeWidth:8.33+'px',stroke:'#009def'}}/> */}

            <path d="M25 69l45 0 0-45" style={{fill:'none',strokeWidth:8.33+'px',stroke:'#009def'}}/>
            <path d="M68 67l-61-61" style={{fill:'none',strokeWidth:8.33+'px',stroke:'#009def'}}/>

        </svg>

        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 75 75" style="clip-rule:evenodd;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:11;version:1.1"><style>.a{fill:none;stroke-width:8.33px;stroke:#009def;}</style><path d="M25 69l45 0 0-45" class="a"/><path d="M68 67l-61-61" class="a"/></svg> */}

        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 75 75" class="a"><style>.a{clip-rule:evenodd;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:11;version:1.1;}.b{fill:none;stroke-width:8.33px;stroke:#009def;}</style><path d="M25 69l45 0 0-45" class="b"/><path d="M68 67l-61-61" class="b"/></svg> */}

        

    </a>
)

export default BtnFlecha;