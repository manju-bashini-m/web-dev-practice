import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { clearCart } from "../Store/cartSlice";

export default function CheckOut() {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartProduct.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const placeOrder = () => {
    // Logic to place the order
    if (cartProduct.length > 0) {
      alert("Order placed successfully!");
      dispatch(clearCart()); // Clear the cart after placing the order
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <div className="text-center mt-4">
      <h3>Total Price: INR. {totalPrice.toFixed(2)}</h3>
      <Button variant="success" onClick={placeOrder}>
        Place Order
      </Button>
    </div>
  );
}
