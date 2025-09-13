import React from "react";

import './Toolbar.css';
import NavigationItems from "../Navigationitems/NavigationItems";

const Toolbar = (props) => (
    <header className="Toolbar">
        <div className="Menu" onClick={props.openSideDrawer}>MENU</div>
        <div className="Logo">
            <img src="/assets/images/burgerLogo.png" alt="Burger" />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;