"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import {ProductsInterface} from "@/types";

export function TotalPrice() {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <div className="text-center text-gray-500">CartContext yüklenemedi.</div>;
    }

    const { cartItems } = cartContext;
    const totalPrice = calculateTotalPrice(cartItems)

    return (
        <div className="flex flex-col items-start justify-center w-full bg-white shadow-md p-3 mt-1">
            <div className="text-sm text-gray-800">
                Total Price:{" "}
                <span className="text-blue-500 font-bold">
                    {totalPrice.toFixed(2)}₺
                </span>
            </div>
            <button className="w-full mt-4 px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                Checkout
            </button>
        </div>
    );
}
export function calculateTotalPrice(cartItems: ProductsInterface[]): number {
    return cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0) || 0;
}
