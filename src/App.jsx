import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/home";
import About from "./pages/about";
import Product from "./pages/products";
import CategoryProduct from "./components/Product/CategoryProduct/CategoryProduct";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/product",
            element: <Product />
        },
        {
            path: "/product/:category",
            element: <CategoryProduct />
        },
        {
            path: "/product/:id/detail",
            element: <Detail />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/checkout",
            element: <Checkout />
        }
    ]);
    return <RouterProvider router={router} />;
}

export default App;
