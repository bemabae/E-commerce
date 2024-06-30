import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

// Link to Category here also
function MainBanner() {
    return (
        <div className="h-[300px] sm:h-[450px] w-[100%] md:w-[55%] md:h-[450px]  2xl:h-[600px] ">
            <Carousel slideInterval={4000}>
                <Link to="/about">
                    <img
                        src="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="men's clothing"
                    />
                </Link>
                <img
                    src="https://images.unsplash.com/photo-1525845859779-54d477ff291f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="women's clothing"
                />
                <img
                    src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="jewelry"
                    className="object-cover h-[100%] w-[100%]"
                />
                <img
                    src="https://images.unsplash.com/photo-1590212151175-e58edd96185b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="electrics"
                    className="object-cover h-[100%] w-[100%]"
                />
            </Carousel>
        </div>
    );
}

export default MainBanner;
