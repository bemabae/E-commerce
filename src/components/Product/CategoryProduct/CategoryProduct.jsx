import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategoryProduct } from "../../../services/getCategoryProduct";
import NavBar from "../../Navbar/NavBar";
import { motion } from "framer-motion";
import MainTextProduct from "../../Text/MainTextProduct";
import FooterBar from "../../Footer/Footer";
import CategoryProductCard from "../../Card/CategoryProdcutCard/CategoryProductCard";
import ReactLoading from "react-loading";

function CategoryProduct() {
    const { category } = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProduct = async (category) => {
        setLoading(true);
        const product = await getCategoryProduct.categoryProduct(category);
        setProduct(product);
        setLoading(false);
    };

    useEffect(() => {
        getProduct(category);
    }, [category]);
    return (
        <div className="h-[100vh] flex flex-col">
            <div>
                <NavBar />
                <motion.hr
                    className="border-slate-300"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 2 }}
                />
            </div>
            <MainTextProduct title={category} />
            <div className="flex">
                <div className="flex-1 py-10 flex flex-wrap gap-10 justify-center">
                    {loading && (
                        <div className="flex justify-center h-[550px] items-center">
                            <ReactLoading
                                type="cubes"
                                color="bg-gradient-to-r from-slate-300 to-gray-800"
                                width={150}
                            />
                        </div>
                    )}
                    {!loading &&
                        product.map((item) => (
                            <CategoryProductCard
                                item={item}
                                key={item.id}
                            />
                        ))}
                </div>
            </div>
            <FooterBar />
        </div>
    );
}

export default CategoryProduct;
