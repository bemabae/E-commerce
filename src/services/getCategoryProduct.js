import axios from "axios";

export const getCategoryProduct = {
    categoryProduct: async (category) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
};
