"use client";
import { ProductsInterface } from "@/types";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export function ProductsCard({ data }: { data: ProductsInterface }) {
    const cartContext = useContext(CartContext)!;
    const { addItemToCart } = cartContext;
    const router = useRouter();
    const productLink = `/products/${data?.name ? data?.name.replace(/\s+/g, "-").toLowerCase() : ""}-${data?.id}`;

    return (
        <div className="flex flex-col items-start justify-center max-w-lg mx-auto bg-white p-3 w-full h-64">
            <div className={'h-1/2 w-full'}><img
                className="object-cover w-full h-full cursor-pointer"
                src={data.image}
                alt={data.name}
                onClick={() => router.push(productLink)}
            /></div>
            <div className="h-1/2 flex flex-col w-full">
                <p className="text-blue-500 text-xs mt-4">{data.price} ₺</p>
                <Link href={productLink}>
                    <h4 className="mt-2 text-sm line-clamp-2 cursor-pointer">{data.name}</h4>
                </Link>
                <button
                    onClick={() => addItemToCart(data)}
                    className="mt-auto bg-[#2A59FE] w-full p-1 rounded-md"
                >
                    <span className="text-center text-white">Add to cart</span>
                </button>
            </div>
        </div>
    );
}
