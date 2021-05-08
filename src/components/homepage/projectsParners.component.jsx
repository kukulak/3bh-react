import React from 'react';
import ReactDOM from 'react-dom';
import './projects.styles.scss';

// IMPORT MODULES


const ProPartners = (props) => (
    <div className="proPartners">

        <img src={props.partners} alt={props.alt} />
        

    </div>
)

export default ProPartners;