import React from "react";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import NavBar from "../../components/Navbar/NavBar";
import { motion } from "framer-motion";

function Checkout() {
    return (
        <>
            <NavBar />
            <motion.hr
                className="border-slate-300"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 2 }}
            />
            <section>
                <CheckoutForm />
            </section>
        </>
    );
}

export default Checkout;
