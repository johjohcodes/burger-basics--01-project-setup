import React from "react";

import './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/Navigationitems";

const Toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);


export default Toolbar;