import React from "react";
import { useState, useEffect } from "react";
import { category } from "../../utils/category";
import NewProductCard from "../Card/NewProductCard/NewProdcutCard";
import axios from "axios";

function NewProduct() {
    const [newProduct, setNewProduct] = useState([]);

    useEffect(() => {
        getNewProduct(category);
    }, []);

    console.log(newProduct);

    const getNewProduct = async (category) => {
        try {
            const results = [];
            for (const name of category) {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/category/${name}?limit=1&sort=desc`
                );
                results.push(response.data);
            }
            setNewProduct(results);
        } catch (e) {
            console.log("err", e);
        }
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">New Product</h1>

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
        </div>
    );
}

export default NewProduct;
