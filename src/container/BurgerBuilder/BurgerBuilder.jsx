import React, { Component } from 'react'
import Burger from '../../components/Burger/BurgerIngredient/Burger'
import BuildControls from '../../components/Burger/BuildsControls/BuildControls'



const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}
class BurgerBuilder extends Component{
    state = {
        ingredient :{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0

        }, 
        totalPrice : 4
    }

    addIngredientHandler = (type) => {
       const oldCount  = this.state.ingredient[type];
       const updatedCount = oldCount + 1;
       const updatedIngredients = {
          ...this.state.ingredient
       };
       updatedIngredients[type] = updatedCount
       const  priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice : newPrice, ingredient : updatedIngredients});

    } 

    removeIngredientHandler = (type) => {
         const oldCount  = this.state.ingredient[type];
       const updatedCount = oldCount - 1;
       const updatedIngredients = {
          ...this.state.ingredient
       };
       updatedIngredients[type] = updatedCount
       const  priceDeduction   = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice -  priceDeduction;
        this.setState({totalPrice : newPrice, ingredient : updatedIngredients});

    }

    render(){
        return (
            <>
             <Burger ingredients={this.state.ingredient} /> 
            <BuildControls
              ingredientAdded = {this.addIngredientHandler}
              ingredientRemoved = {this.removeIngredientHandler} />
            </>
        )
    }
}

export default BurgerBuilder