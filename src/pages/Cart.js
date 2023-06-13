import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {cartProducts.map((cartProduct) => (
          <div key={cartProduct.id} className="cartCard">
            <img src={cartProduct.image} alt="" />
            <h5>{cartProduct.title}</h5>
            <h5>{cartProduct.price}</h5>
            <button
              className="btn"
              onClick={() => handleRemove(cartProduct.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
