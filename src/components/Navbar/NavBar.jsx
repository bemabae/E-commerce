import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dropdown } from "flowbite-react";
import { Squash as Hamburger } from "hamburger-react";
import { FaPerson, FaPersonDress, FaComputer } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { useProductStore } from "../../store/store";
import logo from "../../img/logoCC.png";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const cart = useProductStore((state) => state.cart);

    // ถ้ากดเปิด menu สำหรับ mobile แล้ว Resize ขึ้นมา Desktop มันจะค้างไว้อันนี้วิธีแก้
    // useEffect(() => {
    //     window.addEventListener("resize", () => {
    //         if (window.innerHeight > 767) {
    //             setIsOpen(false);
    //             console.log("lol");
    //         }
    //     });
    // }, []);

    // ALL category

    return (
        <>
            <nav className="h-[80px] bg-white sticky top-0 z-50">
                <div className="flex justify-between items-center px-[50px] md:px-[100px]  h-[100%] py-0">
                    <div className="cursor-pointer">
                        <Link to="/">
                            <img
                                src={logo}
                                alt=""
                                width={85}
                            />
                        </Link>
                    </div>

                    {/* Toggle Menu Button Burger */}
                    <div className="md:hidden">
                        <Hamburger
                            duration={0.5}
                            toggled={isOpen}
                            toggle={setIsOpen}
                        />
                    </div>

                    {/* Navbar Moblie version start */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="fixed shadow-xl right-0 top-[3.5rem] p-5 pt-0 bg-gray-50 border-b border-b-white/20 z-50 mt-3"
                                initial={{ height: 0 }}
                                animate={{ height: 150 }}
                                transition={{ duration: 0.2 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.ul
                                    className="text-white flex-col px-5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ durtaion: 0.7, delay: 0.2 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <li className="pt-2">
                                        <Link
                                            to="/"
                                            className="text-black text-xl hover:underline"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="pt-2">
                                        <Link
                                            to="/about"
                                            className="text-black text-xl hover:underline"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li className="pt-2">
                                        <div className="text-black text-xl hover:underline">
                                            <Dropdown
                                                label="Products"
                                                inline
                                            >
                                                <Dropdown.Header>
                                                    <span className="block text-xl text-center font-bold">
                                                        Category
                                                    </span>
                                                </Dropdown.Header>
                                                <Dropdown.Item
                                                    as={Link}
                                                    to={"/product"}
                                                    className="hover:bg-transparent focus:bg-transparent"
                                                >
                                                    <span className="text-md hover:underline">All products</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as={Link}
                                                    to={"/product/men's clothing"}
                                                    className="hover:bg-transparent focus:bg-transparent"
                                                >
                                                    <span className="text-md hover:underline">Men</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as={Link}
                                                    to={"/product/women's clothing"}
                                                    className="hover:bg-transparent focus:bg-transparent"
                                                >
                                                    <span className="text-md hover:underline">Women</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as={Link}
                                                    to={"/product/jewelery"}
                                                    className="hover:bg-transparent focus:bg-transparent"
                                                >
                                                    <span className="text-md hover:underline">Jewery</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as={Link}
                                                    to={"/product/electronics"}
                                                    className="hover:bg-transparent focus:bg-transparent"
                                                >
                                                    <span className="text-md hover:underline">Electronics</span>
                                                </Dropdown.Item>
                                            </Dropdown>
                                        </div>
                                    </li>
                                    <li className="pt-2">
                                        <Link
                                            to="/cart"
                                            className="text-black text-xl hover:underline flex items-center relative"
                                        >
                                            Cart
                                            <CiShoppingCart className="-z-40" />
                                            {cart.length > 0 && (
                                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full right-5">
                                                    <span>{cart.length}</span>
                                                </div>
                                            )}
                                        </Link>
                                    </li>
                                </motion.ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {/* Navbar Moblie version end */}

                    {/* Navbar Website version start */}
                    <div className="hidden md:block">
                        <ul className="text-white flex">
                            <li className="pl-[35px]">
                                <Link
                                    to="/"
                                    className="text-black text-xl "
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="pl-[35px]">
                                <Link
                                    to="/about"
                                    className="text-black text-xl"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="pl-[35px]">
                                <div className="text-black text-xl">
                                    <Dropdown
                                        label="Products"
                                        inline
                                    >
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Dropdown.Header>
                                                <span className="block text-xl text-center font-bold">Category</span>
                                            </Dropdown.Header>
                                            <Dropdown.Item
                                                as={Link}
                                                to={"/product"}
                                                className="hover:bg-transparent focus:bg-transparent"
                                            >
                                                <span className="text-lg hover:underline">All products</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as={Link}
                                                to={"/product/men's clothing"}
                                                className="hover:bg-transparent focus:bg-transparent"
                                            >
                                                <FaPerson className="w-5 h-5" />
                                                <span className="text-lg hover:underline">&nbsp;Men</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as={Link}
                                                to={"/product/women's clothing"}
                                                className="hover:bg-transparent focus:bg-transparent"
                                            >
                                                <FaPersonDress className="w-5 h-5" />
                                                <span className="text-lg hover:underline">&nbsp;Women</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as={Link}
                                                to={"/product/jewelery"}
                                                className="hover:bg-transparent focus:bg-transparent"
                                            >
                                                <IoDiamond className="w-5 h-5" />
                                                <span className="text-lg hover:underline">&nbsp;Jewery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as={Link}
                                                to={"/product/electronics"}
                                                className="hover:bg-transparent focus:bg-transparent"
                                            >
                                                <FaComputer className="w-5 h-5" />
                                                <span className="text-lg hover:underline">&nbsp;Electronics</span>
                                            </Dropdown.Item>
                                        </motion.div>
                                    </Dropdown>
                                </div>
                            </li>
                            <li className="pl-[35px]">
                                <Link
                                    to="/cart"
                                    className="text-black text-xl relative z-50 flex items-center"
                                >
                                    Cart
                                    <CiShoppingCart className="-z-40" />
                                    {cart.length > 0 && (
                                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                                            <span>{cart.length}</span>
                                        </div>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Navbar Website version end */}
                </div>
            </nav>
        </>
    );
}

export default NavBar;
