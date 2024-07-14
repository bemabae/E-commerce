import React from "react";
import { TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import "./ExclusiveBanner.css";

function ExclusiveBanner() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div
            className="h-[500px] overflow-hidden"
            id="main"
        >
            <header className="mt-[50px] sm:mt-[100px] text-center px-4 md:px-0">
                <h2 className="sm:text-5xl font-semibold text-4xl">Get Exclusive Offers On Your Email</h2>
            </header>

            <article className="mt-[30px] text-center">
                <p className="text-lg sm:text-xl">Subscribe to our newsletter and stay updated</p>
            </article>

            <div className="flex justify-center">
                <form
                    className="mt-[30px] flex"
                    onSubmit={handleSubmit}
                >
                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        icon={HiMail}
                        placeholder="name@ourstore.com"
                        className="inline-block w-[250px] sm:w-[400px]"
                        required
                    />
                    <button className="rounded-lg px-2 ml-2 sm:ml-1 bg-black text-white md:px-4">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default ExclusiveBanner;
