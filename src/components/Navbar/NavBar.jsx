"use client";
import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dropdown } from "flowbite-react";

function NavBar() {
    return (
        <>
            <nav className="h-[80px]">
                <div className="flex justify-between items-center px-[100px] h-[100%] py-0">
                    <div className="cursor-pointer">
                        <span className="text-2xl">LOGO</span>
                    </div>

                    <div>
                        <ul className="text-white flex">
                            <li>
                                <Link
                                    to="/"
                                    className="text-black text-xl"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-black text-xl"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <div className="text-black text-xl">
                                    <Dropdown
                                        label="Products"
                                        inline
                                    >
                                        <Dropdown.Header>
                                            <span className="block text-xl text-center font-bold">Category</span>
                                        </Dropdown.Header>
                                        <Dropdown.Item
                                            as={Link}
                                            to={"/"}
                                            className="hover:bg-transparent focus:bg-transparent"
                                        >
                                            <span className="text-lg">Men</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            as={Link}
                                            to={"/"}
                                            className="hover:bg-transparent focus:bg-transparent"
                                        >
                                            <span className="text-lg">Women</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            as={Link}
                                            to={"/about"}
                                            className="hover:bg-transparent focus:bg-transparent"
                                        >
                                            <span className="text-lg">Jewery</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            as={Link}
                                            to={"/about"}
                                            className="hover:bg-transparent focus:bg-transparent"
                                        >
                                            <span className="text-lg">Electronics</span>
                                        </Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-black text-xl"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
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
