import React from 'react';
import ReactDOM from 'react-dom';
import './projects.styles.scss';

// IMPORT MODULES


const ProDescripcion = (props) => (
    <div className="proDescripcion">
        
        {props.descripcion}

    </div>
)

export default ProDescripcion;