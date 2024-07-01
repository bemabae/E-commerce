import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const getProduct = {
    getDetail: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
};
