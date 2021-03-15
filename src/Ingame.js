import React from 'react';
import {Link} from 'react-router-dom';

const Ingame = () => {
    return (
        <div>
            <button><Link to='/start'><span style={{color:'white'}}>Start</span></Link></button>
        </div>
    )
}

export default Ingame
