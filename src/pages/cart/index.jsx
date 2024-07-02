// https://flowbite.com/blocks/e-commerce/shopping-cart/

import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import { motion } from "framer-motion";
import { useProductStore } from "../../store/store";
import CartDetail from "../../components/Cart/CartDetail";
import Summary from "../../components/Cart/Summary";

function Cart() {
    const cart = useProductStore((state) => state.cart);

    console.log(cart);
    return (
        <>
            <NavBar />
            <motion.hr
                className="border-slate-300"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 2 }}
            />
            <section className="bg-white p-8 antialiased md:py-16 flex gap-[50px]">
                <div className="flex-[0.7] border rounded-xl px-10 py-3">
                    <div>
                        <h1 className="text-4xl font-bold text-center">Shopping Cart</h1>
                    </div>
                    <br />
                    <hr />

                    <div>
                        {cart.map((item) => (
                            <CartDetail
                                key={item.orderId}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
                <Summary />

                {/* <div className="flex-[0.3]">
                    <div>
                        <h3>Order Summary</h3>
                    </div>
                </div> */}
            </section>
        </>
    );
}

export default Cart;
