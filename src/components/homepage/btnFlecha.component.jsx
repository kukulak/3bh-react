import React from 'react';
import ReactDOM from 'react-dom';
import './projects.styles.scss';
import flecha from '../../assets/iconos/flecha.svg'

// IMPORT MODULES


const BtnFlecha = (props) => (
    <a href={props.goTo} className="btnFlecha">
        {props.txt}
        <img src={flecha} alt="flecha" />
    </a>
)

export default BtnFlecha;