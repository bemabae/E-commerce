import React, { useState } from "react";
import { useProductStore } from "../../store/store";
import { Link } from "react-router-dom";
import { Modal } from "flowbite-react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Summary({ title }) {
    const cart = useProductStore((state) => state.cart);
    const clearCart = useProductStore((state) => state.clearCart);

    const [checkout, setCheckout] = useState(false);

    const navigate = useNavigate();

    const findSum = (arr) => {
        let sum = 0;
        for (const item of arr) {
            sum += item.price * item.quantity;
        }
        return sum;
    };

    const handleCheckout = () => {
        setCheckout(true);
        clearCart();
        navigate("/");
    };

    return (
        <>
            <div className="mx-auto mt-6 max-w-4xl flex-[0.3] space-y-6 lg:mt-0 lg:w-full w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                    <p className="text-xl font-semibold text-gray-900">Order summary</p>
                    <hr />

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 ">Original price</dt>
                                <dd className="text-base font-medium text-gray-900 ">${findSum(cart).toFixed(2)}</dd>
                            </dl>

                            <ul className="ml-9">
                                {cart.map((item) => (
                                    <li
                                        className="text-sm opacity-45 list-disc"
                                        key={item.orderId}
                                    >
                                        {item.title} ({item.size}) x {item.quantity}
                                    </li>
                                ))}
                            </ul>

                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 ">Savings</dt>
                                <dd className="text-base font-medium text-green-600">$0</dd>
                            </dl>

                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 ">Store Pickup</dt>
                                <dd className="text-base font-medium text-gray-900 ">$0</dd>
                            </dl>

                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 ">Tax</dt>
                                <dd className="text-base font-medium text-gray-900 ">$0</dd>
                            </dl>
                        </div>

                        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                            <dt className="text-base font-bold text-gray-900 ">Total</dt>
                            <dd className="text-base font-bold text-gray-900 ">${findSum(cart).toFixed(2)}</dd>
                        </dl>
                    </div>

                    {title == "Proceed to Checkout" ? (
                        cart.length == 0 ? (
                            <button
                                onClick={() => alert("Your cart is empty")}
                                className="border bg-slate-300 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                            >
                                {title}
                            </button>
                        ) : (
                            <Link
                                to={"/checkout"}
                                className="border bg-slate-300 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                            >
                                <button>{title}</button>
                            </Link>
                        )
                    ) : (
                        <>
                            <button
                                className="border bg-slate-300 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                                onClick={handleCheckout}
                            >
                                {title}
                            </button>
                            <Modal
                                show={checkout}
                                onClose={() => setCheckout(false)}
                            >
                                <Modal.Header>
                                    {" "}
                                    <div className="flex items-center">
                                        Thank you for ordering
                                        <FaRegCheckCircle
                                            color="green"
                                            className="ml-4"
                                        />
                                    </div>
                                </Modal.Header>
                            </Modal>
                        </>
                    )}

                    <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-normal text-gray-500 "> or </span>
                        <Link
                            to={"/product"}
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline "
                        >
                            Continue Shopping
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Summary;
