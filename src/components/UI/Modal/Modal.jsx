import React from "react";
import './Modal.css'



const Modal = (prop) => (
   <div className="Modal">
        {prop.children}
   </div>
)

export default Modal;