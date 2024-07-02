import { create } from "zustand";

export const useProductStore = create((set) => ({
    fetchAllProduct: [],
    allProduct: [],

    setFetchAllProduct: (value) => set({ fetchAllProduct: value }),
    setAllProduct: (value) => set({ allProduct: value }),

    cart: [],
    addToCart: (product, size) =>
        set((state) => ({
            cart: [...state.cart, { ...product, size, quantity: 1, orderId: crypto.randomUUID() }]
        })),
    increaseQuantity: (quantity, id) =>
        set((state) => ({
            cart: state.cart.map((item) => {
                if (item.orderId == id) return { ...item, quantity };
                return item;
            })
        })),

    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.orderId !== id)
        })),
    clearCart: () => set({ cart: [] })
}));
