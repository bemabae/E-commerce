import React from "react";
import { motion } from "framer-motion";

function MainText() {
    return (
        <>
            <div className="inline-block md:flex-1">
                <header class="text-center mt-12">
                    <h1 class="text-5xl font-bold text-slate-600">Welcome to my shop!</h1>
                </header>
                <section class="mt-7 p-10">
                    <article>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid, reprehenderit, itaque
                            voluptate optio, explicabo asperiores perspiciatis totam error porro quo molestias vero ad
                            qui sapiente deleniti nihil possimus voluptatibus id illo eaque odit? Consectetur soluta
                            nulla iure cum culpa! Assumenda neque quas qui aliquam et nemo dolor laborum consequuntur.
                        </p>
                    </article>
                </section>
            </div>
        </>
    );
}

export default MainText;
