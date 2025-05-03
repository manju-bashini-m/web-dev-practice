import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./Components/Products";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import RouteLayout from "./Components/RouteLayout";
import Cart from "./Components/Cart";
import Registration from "./Components/Registration";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="about-us" element={<About />}></Route>
        <Route path="sign-up" element={<Registration />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
