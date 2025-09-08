import React from "react";

import './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/NavigationItems";


const Toolbar = (props) => (
    <header className="Toolbar">
        <div className="Menu">MENU</div>
        <div className="Logo">
            {/* Replace 'burger.png' with your actual image file name and path */}
            <img src="/assets/images/burger.png" alt="Burger" style={{height: '100%', width: 'auto'}} />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;