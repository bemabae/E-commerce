import React from "react";
import "./AboutUs.css";
import { BiLogoInstagramAlt, BiLogoFacebookSquare } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

function AboutUs() {
    return (
        <div className="flex">
            <motion.div
                id="img"
                className="md:w-[0] md:h-[0px] xl:w-[900px] xl:h-[650px] relative top-[80px] left-[100px] -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
            <div className="flex-1 flex flex-col justify-center">
                <motion.span
                    className="xl:relative text-7xl xl:top-[40px] font-extrabold text-center mt-10 lg:text-center xl:text-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                >
                    About Us
                </motion.span>
                <div className="xl:relative xl:left-[150px] xl:top-[50px] xl:w-[700px] text-center mt-10 px-20 xl:px-0 lg:block">
                    <motion.p
                        initial={{ y: -130, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.6 }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam animi adipisci aperiam placeat sed
                        a velit veritatis doloremque porro debitis fugit id rerum aut eum numquam, quasi ducimus quod
                        inventore! Praesentium dicta sequi, fugiat, facilis iusto itaque repellendus enim maiores natus
                        eaque harum ipsam tempore iste nesciunt neque incidunt corporis. Facilis quam repellendus labore
                        ipsa magni consequuntur odit ratione optio? Distinctio explicabo odio asperiores dolorum tempora
                        laboriosam provident voluptatibus eum, doloremque blanditiis recusandae reprehenderit aliquid
                        pariatur labore ea sed exercitationem iusto quos suscipit omnis quam quo. Quisquam nam
                        consequuntur cupiditate consectetur porro quam inventore rem sed velit necessitatibus aspernatur
                        saepe nisi eveniet ab, unde magnam excepturi veritatis eaque adipisci animi magni culpa optio
                        facere! Adipisci laboriosam tempore vel cum sunt.
                    </motion.p>
                    <motion.div
                        className="mt-[40px] flex justify-center items-center"
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.6 }}
                    >
                        <BiLogoInstagramAlt className="cursor-pointer h-5 w-5" />
                        &nbsp; &nbsp;
                        <BiLogoFacebookSquare className="cursor-pointer h-5 w-5" />
                        &nbsp; &nbsp;
                        <FaSquareXTwitter className="cursor-pointer h-5 w-4" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
