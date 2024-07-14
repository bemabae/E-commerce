import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

function MainBanner() {
    return (
        <div className="h-[300px] sm:h-[450px] w-[100%] md:w-[100%] md:h-[500px] 2xl:h-[600px] lg:w-[55%] ">
            <Carousel slideInterval={4000}>
                <Link to="/product/men's clothing">
                    <img
                        src="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="men's clothing"
                    />
                </Link>
                <Link to="/product/women's clothing">
                    <img
                        src="https://images.unsplash.com/photo-1525845859779-54d477ff291f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="women's clothing"
                    />
                </Link>
                <Link to="/product/jewelery">
                    <img
                        src="https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="jewelery"
                    />
                </Link>
                <Link to="/product/electronics">
                    <img
                        src="https://images.unsplash.com/photo-1614624533048-a9c2f9cb5a96?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="electronics"
                        className="object-cover object-center h-[100%] w-[100%]"
                    />
                </Link>
            </Carousel>
        </div>
    );
}

export default MainBanner;
