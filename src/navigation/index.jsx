import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Menu from "../pages/Menu";


const Navigation = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/cart" element = {<Cart />} />
                <Route path = "/login" element = {<Login />} />
                <Route path = "/menu" element = {<Menu />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Navigation;