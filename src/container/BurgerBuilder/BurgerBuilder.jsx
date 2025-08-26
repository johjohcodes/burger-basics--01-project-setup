import React, { Component } from 'react'
import Burger from '../../components/Burger/BurgerIngredient/Burger'
import BuildControls from '../../components/Burger/BuildsControls/BuildControls'
import { object } from 'prop-types'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'



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
        totalPrice : 4,
        purchasable : false,
        purchasing : false
    }
    updtePurchaseState (ingredient){
       
    const sum =  Object.keys(ingredient)
           .map(igkey =>{
              return ingredient[igkey]
           })
           .reduce((sum, el)=>{
              return sum + el;
           }, 0 );
        this.setState({purchasable : sum > 0})
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
        this.updtePurchaseState(updatedIngredients)


    } 

    removeIngredientHandler = (type) => {
         const oldCount  = this.state.ingredient[type];
         if (oldCount <= 0 ){
            return;
         }
       const updatedCount = oldCount - 1;
       const updatedIngredients = {
          ...this.state.ingredient
       };
       updatedIngredients[type] = updatedCount
       const  priceDeduction   = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice -  priceDeduction;
        this.setState({totalPrice : newPrice, ingredient : updatedIngredients});
        this.updtePurchaseState(updatedIngredients)
        

    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    render(){
        const disabledInfo  = {
            ...this.state.ingredient
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <>
            <Modal show = {this.state.purchasing}>
                <OrderSummary ingredient= {this.state.ingredient}/>


            </Modal>

             <Burger ingredients={this.state.ingredient} /> 
                        <BuildControls
                            ingredientAdded = {this.addIngredientHandler}
                            ingredientRemoved = {this.removeIngredientHandler}
                            disabled = {disabledInfo}
                            purchasable = {this.state.purchasable}
                            price = {this.state.totalPrice}
                            ordered={this.purchaseHandler} />
            </>
        )
    }
}

export default BurgerBuilder