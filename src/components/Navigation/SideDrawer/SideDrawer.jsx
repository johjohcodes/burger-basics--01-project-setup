import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from "../Navigationitems/NavigationItems";
import './SideDrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="Logo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default SideDrawer;