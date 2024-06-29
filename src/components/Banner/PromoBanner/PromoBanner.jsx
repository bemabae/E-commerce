import React from "react";
import { Banner, BannerCollapseButton } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { CiDiscount1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PiCursorClickLight } from "react-icons/pi";
import { motion } from "framer-motion";

function PromoBanner() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
        >
            <Banner>
                <div className="flex w-full justify-between bg-gray-50 p-4">
                    <div className="mx-auto flex items-center">
                        <p className="flex items-center text-sm font-normal text-gray-500 ">
                            <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 ">
                                <CiDiscount1 className="h-5 w-5" />
                            </span>
                            <span className="[&_p]:inline text-lg">
                                Get 5% Discount &nbsp;
                                <Link
                                    to="/"
                                    className="ml-0 flex items-center font-medium text-cyan-600 hover:underline md:ml-1 md:inline-flex text-lg"
                                >
                                    Click Here
                                    <PiCursorClickLight className="ml-3" />
                                </Link>
                            </span>
                        </p>
                    </div>
                    <BannerCollapseButton
                        color="gray"
                        className="border-0 bg-transparent text-gray-500"
                    >
                        <HiX className="h-4 w-4" />
                    </BannerCollapseButton>
                </div>
            </Banner>
        </motion.div>
    );
}

export default PromoBanner;
