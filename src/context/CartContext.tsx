"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ProductsInterface } from "@/types";

interface CartContextType {
    cartItems: ProductsInterface[];
    addItemToCart: (item: ProductsInterface) => void;
    removeItemFromCart: (itemId: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
    undefined
);

interface CartProviderProps {
    children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<ProductsInterface[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("cartItems");
        if (storedItems) {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addItemToCart = (item: ProductsInterface) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i!, quantity: i!.quantity! + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeItemFromCart = (itemId: string) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === itemId);
            if (existingItem && existingItem!.quantity! > 1) {
                return prevItems.map((i) =>
                    i.id === itemId ? { ...i!, quantity: i!.quantity! - 1 } : i
                );
            }
            return prevItems.filter((i) => i.id !== itemId);
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
