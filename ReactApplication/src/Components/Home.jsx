import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="hero">
      <div className="home hero-content">
        <h1>Welcome to ShopEase</h1>
        <p>Your one-stop shop for all your daily needs.</p>
        <p>Discover a wide range of products at unbeatable prices.</p>
        <p>Join our community and enjoy exclusive offers.</p>
        <Link to="/products" className="btn btn-primary btn-lg">
          {" "}
          Shop Now
        </Link>
      </div>
    </div>
  );
}
