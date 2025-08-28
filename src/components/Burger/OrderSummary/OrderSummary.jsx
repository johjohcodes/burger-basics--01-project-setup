import React from "react";

const OrderSummary = (props) => {
   const ingredientSummary = Object.keys(props.ingredient)
         .map(igKey => (
           <li key={igKey }><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredient[igKey]}</li>
         ));
    
    return (
        <>
          <h3>Your Order</h3>
          <p> A delicious burger with the following ingredient:</p>
          <ul>
            {ingredientSummary}

          </ul>
          <p>CONTINUE TO CHECK OUT?</p>
          <button>CANCEL </button>
          <button>CONTINUE</button>
        </>
    )
}

export default OrderSummary;