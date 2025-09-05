import React from "react";

import './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/NavigationItems";

const Toolbar = (props) => (
    <header className="Toolbar">
        <div className="Menu">MENU</div>
        <div className="Logo">
           <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;