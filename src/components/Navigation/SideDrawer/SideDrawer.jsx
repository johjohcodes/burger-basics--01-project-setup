import React from "react";

import Logo from '../../Logo/Logo'
import NavigationItems from "../Navigationitems/NavigationItems";
import  './SideDrawer.css'

const SideDrawer = (props) => {
    //...
    return (
        <div>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
};

export default SideDrawer;