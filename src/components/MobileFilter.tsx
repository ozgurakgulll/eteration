"use client";

import { BlandModelCard, CartView, SortByCard, TotalPrice } from "@/components";
import { CategoryModel } from "@/types";
import {Suspense, useState} from "react";
import { Modal } from "./Modal";

export function MobileFilter({ grouped }: { grouped: CategoryModel[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <div className="flex lg:hidden p-2 justify-end">
            <button
                onClick={toggleModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
            >
                Show All Filters
            </button>

            <Modal isOpen={isModalOpen} onClose={toggleModal} title="Filters">
                <Suspense>
                    <SortByCard/>
                </Suspense>
                <Suspense>
                <BlandModelCard grouped={grouped} />
                </Suspense>
                <CartView />
                <TotalPrice />
            </Modal>
        </div>
    );
}
