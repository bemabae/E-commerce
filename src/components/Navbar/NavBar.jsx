import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dropdown } from "flowbite-react";
import { Squash as Hamburger } from "hamburger-react";
import { FaPerson, FaPersonDress, FaComputer } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    // ถ้ากดเปิด menu สำหรับ mobile แล้ว Resize ขึ้นมา Desktop มันจะค้างไว้อันนี้วิธีแก้
    // useEffect(() => {
    //     window.addEventListener("resize", () => {
    //         if (window.innerHeight > 767) {
    //             setIsOpen(false);
    //             console.log("lol");
    //         }
    //     });
    // }, []);

    return (
        <>
            <nav className="h-[80px]">
                <div className="flex justify-between items-center px-[100px] h-[100%] py-0">
                    <motion.div className="cursor-pointer">
                        <span className="text-2xl">LOGO</span>
                    </motion.div>

                    {/* Toggle Menu Button Burger */}
                    <div className="md:hidden">
                        <Hamburger
                            duration={0.5}
                            toggled={isOpen}
                            toggle={setIsOpen}
                        />
                    </div>

                    <AnimatePresence>
                        {/* Navbar Moblie version start */}
                        {isOpen && (
                            <motion.div
                                className="fixed  shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-gray-50 border-b border-b-white/20 z-50 mt-3"
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
                                                    to={"/"}
                                                    className="hover:bg-transparent focus:bg-transparent"
                                                >
                                                    <span className="text-md hover:underline">Men</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as={Link}
                                                    to={"/"}
                                                    className="hover:bg-transparent focus:bg-transparent"
                                                >
                                                    <span className="text-md hover:underline">Women</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as={Link}
                                                    to={"/about"}
                                                    className="hover:bg-transparent focus:bg-transparent"
                                                >
                                                    <span className="text-md hover:underline">Jewery</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as={Link}
                                                    to={"/about"}
                                                    className="hover:bg-transparent focus:bg-transparent"
                                                >
                                                    <span className="text-md hover:underline">Electronics</span>
                                                </Dropdown.Item>
                                            </Dropdown>
                                        </div>
                                    </li>
                                    <li className="pt-2">
                                        <Link
                                            to="/contact"
                                            className="text-black text-xl hover:underline"
                                        >
                                            Cart
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
                                    className="text-black text-xl"
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
                                                to={"/"}
                                                className="hover:bg-transparent focus:bg-transparent"
                                            >
                                                <FaPerson className="w-5 h-5" />
                                                <span className="text-lg hover:underline">&nbsp;Men</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as={Link}
                                                to={"/"}
                                                className="hover:bg-transparent focus:bg-transparent"
                                            >
                                                <FaPersonDress className="w-5 h-5" />
                                                <span className="text-lg hover:underline">&nbsp;Women</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as={Link}
                                                to={"/about"}
                                                className="hover:bg-transparent focus:bg-transparent"
                                            >
                                                <IoDiamond className="w-5 h-5" />
                                                <span className="text-lg hover:underline">&nbsp;Jewery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as={Link}
                                                to={"/about"}
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
                                    to="/contact"
                                    className="text-black text-xl"
                                >
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Navbar Website version end */}
                <motion.hr
                    className="border-slate-300"
                    initial={{ width: 0, opacity: 0.2 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </nav>
        </>
    );
}

export default NavBar;
