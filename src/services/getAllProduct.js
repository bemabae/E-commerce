import { BASE_URL } from "../utils/constant";
import axios from "axios";

export const getProduct = {
    AllProduct: async () => {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
};
