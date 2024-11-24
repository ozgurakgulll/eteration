"use client";
import { ProductsInterface } from "@/types";
import { CartContext } from "@/context/CartContext";
import { useContext, useState } from "react";
import { Modal } from "@/components/Modal";
import { CartView } from "@/components/CartView";
import { TotalPrice } from "@/components/TotalPrice";
import {useRouter} from "next/navigation";

export function ProductsDetail({ data }: { data: ProductsInterface }) {
    const cartContext = useContext(CartContext)!;
    const { addItemToCart } = cartContext;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const goBack = () => router.back();
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <div className="flex flex-col justify-end w-full">
            <div className={'w-full flex lg:justify-start  justify-between mb-2'}>
                <button
                    onClick={goBack}
                    className="px-4 py-2 bg-white text-gray-500 rounded-md shadow-md w-32"
                >
                    Back
                </button>
                <button
                    onClick={toggleModal}
                    className="block lg:hidden  right-4  mb-2 bottom-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none w-48"
                >
                    Show Cart
                </button>
            </div>

            <div className={'w-full flex space-x-2'}>
                <div className={'lg:w-[80%]  w-full'}>
                    <div
                        className=" md:flex mx-auto p-4 border rounded-lg shadow-md bg-white space-y-4 md:space-y-0 md:space-x-6 ">
                        <div
                            className="md:w-1/3 w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                            {data.image ? (
                                <img
                                    src={data.image}
                                    alt={data.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="text-gray-500">No Image Available</div>
                            )}
                        </div>
                        <div className="md:w-2/3 w-full pl-0 md:pl-6 space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>
                            <p className="text-xl text-blue-600 font-semibold">{data.price}₺</p>
                            <button
                                onClick={() => addItemToCart(data)}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                            >
                                Add to Cart
                            </button>
                            <p className="text-gray-600">{data.description}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 hidden lg:block w-[20%]">
                    <CartView/>
                    <TotalPrice/>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={toggleModal} title="Show Cart">
                <CartView/>
                <TotalPrice/>
            </Modal>
        </div>
    );
}
