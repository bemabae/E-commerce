import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import { motion } from "framer-motion";
import AboutUs from "../../components/About/AboutUs";
import Footer from "../../components/Footer/Footer";

function About() {
    return (
        <>
            <div className="min-h-[100vh] flex flex-col overflow-hidden">
                <NavBar />
                <motion.hr
                    className="border-slate-300"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 2 }}
                />
                <AboutUs />
                <Footer />
            </div>
        </>
    );
}

export default About;
