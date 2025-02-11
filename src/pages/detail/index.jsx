import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import { motion } from "framer-motion";
import { getProduct } from "../../services/getProductDetail";
import { Label, Rating, RatingStar } from "flowbite-react";
import { sizes } from "../../utils/size";
import FooterBar from "../../components/Footer/Footer";
import ReactLoading from "react-loading";
import { useProductStore } from "../../store/store";
import { Link } from "react-router-dom";

function Detail() {
    const { id } = useParams();

    const [detail, setDetail] = useState({});
    const [size, setSize] = useState("");
    const [loading, setLoading] = useState(true);

    const addToCart = useProductStore((state) => state.addToCart);

    useEffect(() => {
        getDetail(id);
    }, [id]);

    const handleCart = () => {
        if (size) {
            addToCart(detail, size);
        } else {
            alert("Pls Select 'Size' before add to cart");
        }
    };

    const getDetail = async (id) => {
        try {
            setLoading(true);
            const productDetail = await getProduct.getDetail(id);
            setDetail(productDetail);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-[100vh] flex flex-col">
                <NavBar />
                <motion.hr
                    className="border-slate-300"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 2 }}
                />
                <main>
                    {loading && (
                        <div className="flex justify-center h-[550px] items-center">
                            <ReactLoading
                                type="cubes"
                                color="bg-gradient-to-r from-slate-300 to-gray-800"
                                width={150}
                            />
                        </div>
                    )}
                    {!loading && (
                        <>
                            <div className="p-12 relative">
                                <nav
                                    className="flex absolute top-0 mt-3 "
                                    aria-label="Breadcrumb"
                                >
                                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                        <li className="inline-flex items-center">
                                            <Link
                                                to="/"
                                                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <svg
                                                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 6 10"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m1 9 4-4-4-4"
                                                    />
                                                </svg>
                                                <Link
                                                    to="/product"
                                                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                                >
                                                    Product
                                                </Link>
                                            </div>
                                        </li>
                                        <li aria-current="page">
                                            <div className="flex items-center">
                                                <svg
                                                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 6 10"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m1 9 4-4-4-4"
                                                    />
                                                </svg>
                                                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                                    {detail.title}
                                                </span>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                                <figure className="flex justify-between flex-col lg:flex-row lg:h-[700px] mt-4">
                                    <div className="flex justify-center w-full mt-5">
                                        <img
                                            className="xl:w-[550px] lg:w-[450px] md:w-[350px] w-[250px] h-[auto] object-contain"
                                            src={detail.image}
                                            alt={detail.name}
                                        />
                                    </div>
                                    <figcaption className="flex flex-col lg:justify-evenly lg:w-[60%]">
                                        <h2 className="font-bold mt-5 lg:text-4xl text-center lg:text-start lg:mt-0 text-3xl xl:text-5xl">
                                            {detail.title}
                                        </h2>
                                        <Rating className="flex justify-center lg:justify-start mt-3 lg:mt-0">
                                            <RatingStar />
                                            <p className="ml-2 text-sm font-bold text-gray-900">
                                                {detail.rating?.rate}
                                            </p>
                                            <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 " />
                                            <a
                                                href="#"
                                                className="text-sm font-medium text-gray-900 underline hover:no-underline "
                                            >
                                                {detail.rating?.count} reviews
                                            </a>
                                        </Rating>
                                        <h3 className="text-3xl font-semibold text-center lg:text-start my-3 lg:my-0">
                                            ${detail.price}
                                        </h3>
                                        <p>{detail.description}</p>
                                        <Label
                                            htmlFor="size"
                                            value="Select Size"
                                            className="text-xl my-3 lg:my-0"
                                        />
                                        <select
                                            name="size"
                                            id="size"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%]"
                                            onChange={(e) => setSize(e.target.value)}
                                        >
                                            <option value="">Choose</option>
                                            {sizes.map((size) => (
                                                <option
                                                    value={size}
                                                    key={size}
                                                >
                                                    {size}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="flex justify-end lg:justify-start">
                                            <button
                                                type="button"
                                                className="transition-all text-white bg-slate-700 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                                onClick={handleCart}
                                            >
                                                <svg
                                                    className="w-3.5 h-3.5 me-2"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 18 21"
                                                >
                                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                                </svg>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </>
                    )}
                </main>
                <FooterBar />
            </div>
        </>
    );
}

export default Detail;
