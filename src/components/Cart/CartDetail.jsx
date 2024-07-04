import React, { useState, useEffect } from "react";
import { useProductStore } from "../../store/store";
import { Link } from "react-router-dom";
import { quantity } from "../../utils/quantity";

function CartDetail({ item }) {
    const [quantityItem, setQuantityItem] = useState(1);
    const removeFromCart = useProductStore((state) => state.removeFromCart);
    const increaseQuantity = useProductStore((state) => state.increaseQuantity);

    const handleQuantity = (e) => {
        setQuantityItem(e.target.value);
    };

    useEffect(() => {
        increaseQuantity(quantityItem, item.orderId);
    }, [quantityItem]);

    const handleRemove = () => {
        removeFromCart(item.orderId);
    };

    return (
        <>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm mt-4 md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <Link
                        to={`/product/${item.id}/detail`}
                        className="shrink-0 md:order-1 flex justify-center lg:block"
                    >
                        <img
                            className="h-[200px] w-[200px] object-contain"
                            src={item.image}
                            alt={item.title}
                        />
                    </Link>

                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center flex-col">
                            <label htmlFor="quantity">Quantity</label>
                            <select
                                name="quantity"
                                id="quantity"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  px-4"
                                onChange={handleQuantity}
                            >
                                {quantity.map((item) => (
                                    <option
                                        value={item}
                                        key={item}
                                    >
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                            <p className="text-xl font-bold text-gray-900">
                                $ {(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <Link
                            to={`/product/${item.id}/detail`}
                            className="text-base font-medium text-gray-900 hover:underline"
                        >
                            {item.title}
                        </Link>

                        <div>
                            <p className="text-slate-400">Size {item.size}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                                onClick={handleRemove}
                            >
                                <svg
                                    className="me-1.5 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                </svg>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CartDetail;
