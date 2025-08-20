import React, { Component } from 'react'
import Burger from '../../components/Burger/BurgerIngredient/Burger'

class BurgerBuilder extends Component{
    state = {
        ingredient :{
            salad : 1,
            bacon : 1,
            cheese : 2,
            meat : 2

        }
    }

    render(){
        return (
            <>
             <Burger ingredients={this.state.ingredient} /> 
            <div>Build controls</div>
            </>
        )
    }
}

export default BurgerBuilder