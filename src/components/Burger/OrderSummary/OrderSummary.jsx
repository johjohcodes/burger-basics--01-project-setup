import React, { Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

  render(){
    const ingredients = this.props.ingredients || this.props.ingredient || {};
    const ingredientSummary = Object.keys(ingredients)
         .map(igKey => (
           <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}</li>
         ));

    const price = Number(this.props.price || 0);

    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {price.toFixed(2)}</strong></p>
        <p>CONTINUE TO CHECK OUT?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </>
    )
  }
}

export default OrderSummary;