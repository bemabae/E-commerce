import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getProduct } from "../services/getAllProduct";
import { useProductStore } from "../store/store";

const useFilter = () => {
    const { register, watch } = useForm();
    const keyword = watch("keyword");
    const sort = watch("sort");

    const setAllProduct = useProductStore((state) => state.setAllProduct);
    const fetchAllProduct = useProductStore((state) => state.fetchAllProduct);
    const setFetchAllProduct = useProductStore((state) => state.setFetchAllProduct);

    const getData = async () => {
        const products = await getProduct.AllProduct();
        setFetchAllProduct(products);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const product = filteredAndSortedProducts(fetchAllProduct, keyword, sort);
        setAllProduct(product);
    }, [keyword, sort, fetchAllProduct]);

    const filteredAndSortedProducts = (products, keyword, sort) => {
        const filtered = products?.filter((item) => item?.title?.toLowerCase().includes(keyword?.toLowerCase()));
        return sortBy(filtered, sort);
    };

    const sortBy = (products, sort) => {
        switch (sort) {
            case "id":
                return products?.sort((a, b) => a?.id - b?.id);
            case "name":
                return products?.sort((a, b) => (a?.title > b?.title ? 1 : a?.title < b?.title ? -1 : 0));
            case "hToL":
                return products?.sort((a, b) => b?.price - a?.price);
            case "lToH":
                return products?.sort((a, b) => a?.price - b?.price);
            default:
                return products?.sort((a, b) => a?.id - b?.id);
        }
    };

    return {
        fieldKeyword: register("keyword"),
        fieldSort: register("sort")
    };
};

export { useFilter };
