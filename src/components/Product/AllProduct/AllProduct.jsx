import React from "react";
import { useProductStore } from "../../../store/store";
import AllProductsCard from "../../Card/AllProductsCard/AllProductsCard";
import ReactLoading from "react-loading";

function AllProduct() {
    const allProduct = useProductStore((state) => state.allProduct);

    return (
        <div className="flex-1 py-10 flex flex-wrap gap-10 justify-center">
            {allProduct?.length == 0 && (
                <div className="flex justify-center h-[550px] items-center">
                    <ReactLoading
                        type="cubes"
                        color="bg-gradient-to-r from-slate-300 to-gray-800"
                        width={150}
                    />
                </div>
            )}
            {allProduct?.map((item) => (
                <AllProductsCard
                    item={item}
                    key={item.id}
                />
            ))}
        </div>
    );
}

export default AllProduct;
