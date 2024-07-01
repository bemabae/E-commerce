import React from "react";
import { motion } from "framer-motion";
import { Rating, RatingStar } from "flowbite-react";
import { Link } from "react-router-dom";

function CategoryProductCard({ item }) {
    return (
        <motion.div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg  flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <Link
                to={`/product/${item.id}/detail`}
                className="flex-1 flex justify-center"
            >
                <img
                    className="p-8 rounded-t-lg object-contain"
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                />
            </Link>
            <div className="px-5 pb-5">
                <a href="#">
                    <h4># {item.id}</h4>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{item.title}</h5>
                </a>
                <Rating className="w-[100%] flex justify-center lg:justify-start my-3">
                    <RatingStar />
                    <p className="ml-2 text-sm font-bold text-gray-900">{item.rating?.rate}</p>
                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 " />
                    <a
                        href="#"
                        className="text-sm font-medium text-gray-900 underline hover:no-underline "
                    >
                        {item.rating?.count} reviews
                    </a>
                </Rating>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">${item.price}</span>
                    <button className="transition-all text-white bg-slate-700 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                        Add to cart
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default CategoryProductCard;
