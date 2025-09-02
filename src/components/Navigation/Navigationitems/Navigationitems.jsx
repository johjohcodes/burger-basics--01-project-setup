import React from "react";
import './Navigationitems.css'
import NavigationItem  from "./Navigationitem/NavigationItem";
const NavigationItems = () => (
    <ul className="Navigationitems">
         <NavigationItem link = "/" active> Burger Builder</NavigationItem>
         <NavigationItem link = "/" >Checkout</NavigationItem>


    </ul>
)
export default NavigationItems;