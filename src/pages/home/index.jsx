import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import PromoBanner from "../../components/Banner/PromoBanner/PromoBanner";
import MainBanner from "../../components/Banner/MainBanner/MainBanner";
import MainText from "../../components/Text/MainText";
import NewProduct from "../../components/Product/NewProduct";
import ExclusiveBanner from "../../components/Banner/ExclusiveBanner/ExclusiveBanner";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

function Homepage() {
    return (
        <>
            <div className="h-[100vh] p">
                <NavBar />
                <motion.hr
                    className="border-slate-300"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 2 }}
                />
                <PromoBanner />
                <div className="flex flex-col md:flex-row">
                    <MainBanner />
                    <MainText />
                </div>
                <div className="mt-[80px]">
                    <NewProduct />
                </div>

                <div className="mt-[60px]">
                    <ExclusiveBanner />
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Homepage;
