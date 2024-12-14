import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../redux/cartSlice';

function ShoppingCartPage() {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ${totalPrice}</p>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(addItem(item))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))}>-</button>
          <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
    </div>
  );
}

export default ShoppingCartPage;
