import React from "react";

import './Backdrop.css'


const Backdrop = (props) => {
    const handleClick = () => {
        console.log('Backdrop clicked!'); // Debug log
        if (props.clicked) {
            props.clicked();
        } else {
            console.log('No clicked handler provided!'); // Debug log
        }
    };

    console.log('Backdrop props:', props); // Debug log

    return props.show ? (
        <div className="Backdrop" onClick={handleClick}>
            {/* Temporary debug text - remove after fixing */}
            <div style={{color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                Click to close
            </div>
        </div>
    ) : null;
};
export default Backdrop;