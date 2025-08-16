import React from 'react';
import classes from './layout.css'

const Layout = (props) => {
    return (
        <>
            <div>Toolbar, SideDrawer, Backdrop </div>
            <main className= {classes.Content}>
                {props.children}
            </main>
        </>
    );
}

export default Layout;