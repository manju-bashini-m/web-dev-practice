import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { getProduct } from "../Store/productSlice";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [item, setItem] = useState([]);

  const { data: items } = useSelector((state) => state.product);

  useEffect(() => {
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((response) => {
    //     setItem(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    dispatch(getProduct());
  }, []);

  const addToCart = (product) => {
    // dispatch an add action
    sessionStorage.getItem("islogedin")
      ? dispatch(add(product))
      : navigate("/login");
  };

  return (
    <div>
      <div className="text-center">
        <h1>Product Dashboard</h1>
      </div>
      <div className="row" style={{ marginLeft: "1rem" }}>
        {items.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-3 mt-3"
            style={{ marginBottom: "2rem" }}
          >
            <Card style={{ width: "18rem" }} className="h-100">
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    width: "150px",
                    height: "150px",
                    marginTop: "1rem",
                  }}
                />
              </div>

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text> Price : INR. {product.price}</Card.Text>
              </Card.Body>

              <Card.Footer className="text-center">
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
