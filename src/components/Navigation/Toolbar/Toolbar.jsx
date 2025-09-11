import React from "react";

import './Toolbar.css';
import NavigationItems from "../Navigationitems/NavigationItems";
// import burgerLogo from '../../assets/images/burgerLogo.png';

const Toolbar = (props) => (
    <header className="Toolbar">
        <div className="Menu" onClick={props.openSideDrawer}>MENU</div>
        <div className="Logo">
            <img src="/assets/images/burgerLogo.png" alt="Burger" style={{height: '100%', width: 'auto'}} />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;