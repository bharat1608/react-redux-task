import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../features/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
      </div>
      <div className="cart-item-actions">
        <select value={item.quantity} onChange={handleQuantityChange}>
          {[...Array(item.stock).keys()].map(num => (
            <option key={num} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        <button onClick={handleRemove}>Remove</button>
      </div>
      <div className="cart-item-total">
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
