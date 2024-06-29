import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import PromoBanner from "../../components/Banner/PromoBanner/PromoBanner";

function Homepage() {
    return (
        <>
            <div className="h-[100vh]">
                <NavBar />
                <div className="mt-[1px]">
                    <PromoBanner />
                </div>
            </div>
        </>
    );
}

export default Homepage;
