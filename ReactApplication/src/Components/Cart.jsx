import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../Store/cartSlice";
import CheckOut from "./CheckOut";
import { Link } from "react-router-dom";
import "./Cart.css"; // Import the custom CSS file

export default function Cart() {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="cart-title">Cart Items</h1>
      </div>
      {cartProduct.length === 0 ? (
        <div className="text-center">
          <p>No items in the cart</p>
          <Link to="/products" className="btn btn-primary">
            View products to shop now
          </Link>
        </div>
      ) : (
        <div className="row justify-content-center">
          {cartProduct.map((product) => (
            <div
              key={product.id}
              className="col-md-4 mb-4 d-flex align-items-stretch"
            >
              <Card className="h-100 shadow-sm">
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-img"
                  />
                </div>

                <Card.Body className="d-flex flex-column">
                  <Card.Title className="product-title">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="product-price">
                    Price: INR {product.price.toFixed(2)}
                  </Card.Text>
                  <Button
                    variant="danger"
                    className="mt-auto"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove Item
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
      {cartProduct.length > 0 && (
        <div className="checkout-section">
          <CheckOut />
        </div>
      )}
    </div>
  );
}
