"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export function CartView() {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <div className="text-center text-gray-500">CartContext yüklenemedi.</div>;
    }

    const { cartItems, addItemToCart, removeItemFromCart } = cartContext;


    if (!cartItems || cartItems.length === 0) {
        return '';
    }

    return (
        <div className="w-full max-w-md mx-auto rounded shadow p-4 bg-white  overflow-y-scroll max-h-[600px]">
            {cartItems.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center justify-between w mb-2"
                >
                    <div>
                        <div className="text-gray-800 font-medium">{item.name}</div>
                        <div className="text-blue-500 font-bold">{item.price}₺</div>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={() => removeItemFromCart(item.id)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition"
                        >
                            -
                        </button>
                        <div className="w-12 text-center text-zinc-600 font-bold">
                            {item.quantity}
                        </div>
                        <button
                            onClick={() =>
                                addItemToCart({
                                    ...item,
                                    quantity: 1, // Yeni ekleme yapıldığında varsayılan miktar
                                })
                            }
                            className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
