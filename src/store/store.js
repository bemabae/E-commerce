import { create } from "zustand";

export const useProductStore = create((set) => ({
    fetchAllProduct: [],
    allProduct: [],

    setFetchAllProduct: (value) => set({ fetchAllProduct: value }),
    setAllProduct: (value) => set({ allProduct: value }),

    cart: [],
    addToCart: (product, size) =>
        set((state) => ({
            cart: [...state.cart, { ...product, size, quantity: 1 }]
        }))
}));
