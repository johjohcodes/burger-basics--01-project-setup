import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const burger = (props) => {
    const ingredients = props.ingredients || {};
    const transformedIngredients = Object.keys(ingredients)
       .map(igKey => {
            return [...Array(ingredients[igKey])].map((_, i) => (
                <BurgerIngredient key={igKey + i} type={igKey}/>
            ));
        });

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;