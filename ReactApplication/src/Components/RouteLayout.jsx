import { Outlet } from "react-router-dom";
import NavBar from "Navbar";
import { Provider } from "react-redux";
import store from "../Store/Store";

export default function RouteLayout() {
  return (
    <Provider store={store}>
      <NavBar ></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
    </Provider>
  );
}
