import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProductStore = create(
    persist(
        (set) => ({
            fetchAllProduct: [],
            allProduct: [],

            setFetchAllProduct: (value) => set({ fetchAllProduct: value }),
            setAllProduct: (value) => set({ allProduct: value }),

            cart: [],

            addToCart: (product, size) =>
                set((state) => {
                    const existingItem = state.cart.find((item) => item.id === product.id && item.size === size);

                    if (existingItem) {
                        alert("You already add this size to your cart");
                        return state;
                    }

                    return {
                        cart: [...state.cart, { ...product, size, quantity: 1, orderId: crypto.randomUUID() }]
                    };
                }),

            increaseQuantity: (quantity, id) =>
                set((state) => ({
                    cart: state.cart.map((item) => {
                        if (item.orderId === id) return { ...item, quantity };
                        return item;
                    })
                })),

            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.orderId !== id)
                })),

            clearCart: () => set({ cart: [] })
        }),
        {
            name: "product-store", // unique name for localStorage key
            getStorage: () => localStorage // (optional) by default the 'localStorage' is used
        }
    )
);

// persistent data but warning in console
// export const useProductStore = create(
//     persist(
//         (set) => ({
//             fetchAllProduct: [],
//             allProduct: [],

//             setFetchAllProduct: (value) => set({ fetchAllProduct: value }),
//             setAllProduct: (value) => set({ allProduct: value }),

//             cart: [],

//             addToCart: (product, size) =>
//                 set((state) => {
//                     const existingItem = state.cart.find((item) => item.id === product.id && item.size === size);

//                     if (existingItem) {
//                         alert("You already add this size to your cart");
//                         return state;
//                     }

//                     return {
//                         cart: [...state.cart, { ...product, size, quantity: 1, orderId: crypto.randomUUID() }]
//                     };
//                 }),

//             increaseQuantity: (quantity, id) =>
//                 set((state) => ({
//                     cart: state.cart.map((item) => {
//                         if (item.orderId === id) return { ...item, quantity };
//                         return item;
//                     })
//                 })),

//             removeFromCart: (id) =>
//                 set((state) => ({
//                     cart: state.cart.filter((item) => item.orderId !== id)
//                 })),

//             clearCart: () => set({ cart: [] })
//         }),
//         {
//             name: 'product-store', // unique name for localStorage key
//             getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
//         }
//     )
// );
