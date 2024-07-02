import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import PromoBanner from "../../components/Banner/PromoBanner/PromoBanner";
import MainBanner from "../../components/Banner/MainBanner/MainBanner";
import MainText from "../../components/Text/MainText";
import NewProduct from "../../components/Product/NewProduct/NewProduct";
import ExclusiveBanner from "../../components/Banner/ExclusiveBanner/ExclusiveBanner";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

function Homepage() {
    return (
        <>
            <div className="m-h-[100vh]">
                <NavBar />
                <motion.hr
                    className="border-slate-300"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 2 }}
                />
                <PromoBanner />
                <motion.div
                    className="flex flex-col lg:flex-row"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                >
                    <MainBanner />
                    <MainText />
                </motion.div>
                <motion.div
                    className="mt-[80px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <NewProduct />
                </motion.div>

                <motion.div
                    className="mt-[60px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <ExclusiveBanner />
                </motion.div>

                <Footer />
            </div>
        </>
    );
}

export default Homepage;
