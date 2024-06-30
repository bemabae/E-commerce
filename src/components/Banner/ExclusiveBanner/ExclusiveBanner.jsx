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
            <div className="mt-[100px] text-center">
                <h2 className="text-5xl font-semibold">Get Exclusive Offers On Your Email</h2>
            </div>

            <div className="mt-[30px] text-center">
                <p className="text-xl">Subscribe to our newsletter and stay updated</p>
            </div>

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
                        className="inline-block w-[300px] md:w-[400px]"
                        required
                    />
                    <button className="rounded-lg px-2 ml-1 bg-black text-white md:px-4">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default ExclusiveBanner;
