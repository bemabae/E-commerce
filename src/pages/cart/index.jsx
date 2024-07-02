// https://flowbite.com/blocks/e-commerce/shopping-cart/

import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import { motion } from "framer-motion";
import { useProductStore } from "../../store/store";
import CartDetail from "../../components/Cart/CartDetail";
import Summary from "../../components/Cart/Summary";
import { Link } from "react-router-dom";

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
            <section className="bg-white p-8 antialiased md:py-16 flex gap-[50px] flex-col lg:flex-row">
                <div className="flex-[0.7] border rounded-xl px-10 py-3">
                    <div>
                        <h1 className="text-4xl font-bold text-center">Shopping Cart</h1>
                    </div>
                    <br />
                    <hr />

                    <div className="h-[100%]">
                        {cart.length == 0 && (
                            <div className="flex justify-center h-[100%] items-center flex-col">
                                <div className="mb-5">
                                    <p className="text-lg">Your cart is empty..</p>
                                </div>
                                <Link className="text-xl hover:border-b-2 border-b-0 transition-all">
                                    Click here to shopping
                                </Link>
                            </div>
                        )}
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
