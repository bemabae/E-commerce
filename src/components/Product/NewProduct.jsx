import React, { useState, useEffect } from "react";
import { category } from "../../utils/category";
import NewProductCard from "../Card/NewProductCard/NewProdcutCard";
import axios from "axios";
import ReactLoading from "react-loading";

function NewProduct() {
    const [newProduct, setNewProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getNewProduct(category);
    }, []);

    const getNewProduct = async (category) => {
        try {
            setLoading(true);
            const results = [];
            for (const name of category) {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/category/${name}?limit=1&sort=desc`
                );
                results.push(response.data);
            }
            setLoading(false);
            setNewProduct(results);
        } catch (e) {
            console.log("err", e);
        }
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">New Product</h1>

            {loading && (
                <div className="flex justify-center h-[550px] items-center">
                    <ReactLoading
                        type="cubes"
                        color="bg-gradient-to-r from-slate-300 to-gray-800"
                        width={150}
                    />
                </div>
            )}

            {!loading && (
                <div className="flex gap-10 flex-wrap justify-center mt-10">
                    {newProduct.map((arr) =>
                        arr.map((item) => (
                            <NewProductCard
                                item={item}
                                key={item.id}
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default NewProduct;
