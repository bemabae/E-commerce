import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import { motion } from "framer-motion";
import MainTextProduct from "../../components/Text/MainTextProduct";
import Filter from "../../components/Filter/Filter";
import AllProduct from "../../components/Product/AllProduct/AllProduct";
import FooterBar from "../../components/Footer/Footer";

function Product() {
    return (
        <div className="h-[100vh] flex flex-col">
            <div>
                <NavBar />
                <motion.hr
                    className="border-slate-300"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 2 }}
                />
                <MainTextProduct title={"All Products"} />
                <div className="flex">
                    <Filter />
                    <AllProduct />
                </div>
            </div>
            <FooterBar />
        </div>
    );
}

export default Product;
