import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/home";
import About from "./pages/about";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/about",
            element: <About />
        }
    ]);
    return <RouterProvider router={router} />;
}

export default App;
