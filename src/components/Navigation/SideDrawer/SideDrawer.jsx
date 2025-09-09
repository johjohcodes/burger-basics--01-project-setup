import React from "react";

import Logo from '../../Logo/Logo'
import NavigationItems from "../Navigationitems/NavigationItems";
import  './SideDrawer.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
    //...
    return (
        <>
         <Backdrop show/>
        <div className="SideDrawer">
                <div className="'Logo">
                <Logo />
            </div>
            
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </>
        
    )
};

export default SideDrawer;