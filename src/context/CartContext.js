import { createContext, useContext, useReducer } from "react";

import { cartReducer } from "../reducer";

const cartInitialState = {
    cartList: [],
    total: 0,
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
    const value = {
        cartList: [],
        total: 0,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}