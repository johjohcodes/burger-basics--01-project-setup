import React, { Component } from 'react'
import Burger from '../../components/Burger/BurgerIngredient/Burger'
import BuildControls from '../../components/Burger/BuildsControls/BuildControls'

class BurgerBuilder extends Component{
    state = {
        ingredient :{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0

        }
    }

    render(){
        return (
            <>
             <Burger ingredients={this.state.ingredient} /> 
            <BuildControls/>
            </>
        )
    }
}

export default BurgerBuilder