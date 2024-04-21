import React from "react";
function CartItem({ name, quantity, price, onIncrese, onDecrese }) {
  const ant = +price;
  return (
    <li className="cart-item">
      <p>
        {name} - ₺{quantity * ant}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrese}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrese}>+</button>
      </p>
    </li>
  );
}

export default CartItem;
