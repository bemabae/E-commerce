import React from "react";
import { useProductStore } from "../../store/store";
import { Link } from "react-router-dom";
import { quantity } from "../../utils/quantity";

function CartDetail({ item }) {
    const removeFromCart = useProductStore((state) => state.removeFromCart);
    const increaseQuantity = useProductStore((state) => state.increaseQuantity);

    const handleQuantity = (e) => {
        increaseQuantity(e.target.value, item.orderId);
    };

    const handleRemove = () => {
        removeFromCart(item.orderId);
    };

    return (
        <>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm mt-4 md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <Link
                        to={`/product/${item.id}/detail`}
                        href="#"
                        className="shrink-0 md:order-1"
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
                            <p className="text-base font-bold text-gray-900 dark:text-white">
                                $ {(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <Link
                            to={`/product/${item.id}/detail`}
                            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
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
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
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

{
    /* <div classNameName="flex p-7 ">
                <div classNameName="p-5">
                    <img
                        src={item.image}
                        alt={item.title}
                        width={200}
                    />
                </div>
                <div classNameName="grid grid-cols-2 gap-10">
                    <div classNameName="p-8 flex flex-col justify-evenly">
                        <p classNameName="text-xl">{item.title}</p>

                        <p classNameName="my-4 text-slate-500">Size: {item.size}</p>

                        <p classNameName="text-lg font-semibold">$ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div classNameName="flex-1 flex">
                        <div classNameName="flex flex-col flex-[0.9] ">
                            <label
                                htmlFor="quantity"
                                classNameName="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Quantity
                            </label>
                            <br />
                            <select
                                name="quantity"
                                id="quantity"
                                classNameName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  px-3"
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
                        <div classNameName="flex-[0.1] flex justify-end h-[10px]">
                            <button onClick={() => removeFromCart(item.orderId)}>x</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr /> */
}
