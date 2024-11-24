"use client";

import {CartView,TotalPrice} from "@/components";

export function CartFilter() {

    return (
        <div className={'w-[20%] flex-col h-full ml-3 space-y-3 hidden lg:flex'}>
            <CartView/>
            <TotalPrice/>
        </div>
    );
}
