import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rating, RatingStar } from "flowbite-react";

function NewProductCard({ item }) {
    return (
        <motion.div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg flex flex-col justify-between"
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
                    alt={item.title}
                    width={300}
                    height={300}
                />
            </Link>
            <div className="px-5 pb-5">
                <Link to={`/product/${item.id}/detail`}>
                    <h4># {item.id}</h4>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{item.title}</h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    <Rating className="w-[100%] flex justify-center lg:justify-start mt-3 lg:mt-0">
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
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">${item.price}</span>
                    <Link
                        to={`/product/${item.id}/detail`}
                        className="transition-all text-white bg-slate-700 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                        More detail
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default NewProductCard;
