'use client';

import React, {Suspense, useContext} from 'react';
import Link from 'next/link';

import Search from "@/components/search";
import { CartContext } from "@/context/CartContext";
import { calculateTotalPrice } from "@/components/TotalPrice";
import {
    CIcon,
    cIconShoppingOutlined,
    cIconUser
} from "@/components/CIcon";

export const Header = () => {
    const cartContext = useContext(CartContext)!;
    const { cartItems } = cartContext;
    const totalPrice = calculateTotalPrice(cartItems);

    return (<div className="w-full h-full">
            <div className="w-full flex justify-center bg-[#2A59FE] text-white h-14">
                <header className="flex justify-between max-w-7xl w-full items-center ">
                    <Link href="/" className="w-1/3 md:w-[20%] flex justify-start">
                        <h1 className="font-bold text-lg md:text-2xl lg:text-3xl text-white">
                            Eteration
                        </h1>
                    </Link>
                    <div className="w-full md:w-[60%] flex justify-end md:justify-start">
                        <Suspense>
                            <Search/>
                        </Suspense>
                    </div>
                    <div className="hidden md:flex w-[20%] items-center justify-end space-x-8">
                        <CartInfo totalPrice={totalPrice}/>
                        <UserInfo userName="Kerem"/>
                    </div>
                </header>
            </div>

            <div className="flex md:hidden justify-between items-center px-4 bg-[#2A59FE] text-white h-14">
                <CartInfo totalPrice={totalPrice}/>
                <UserInfo userName="Kerem"/>
            </div>
        </div>
    );
};
const CartInfo = ({totalPrice}: {totalPrice:number}) => (
    <div className="flex items-center space-x-2">
        <CIcon icon={cIconShoppingOutlined}/>
        <span>{totalPrice} ₺</span>
    </div>
);


const UserInfo = ({userName}: {userName:string}) => (
    <div className="flex items-center space-x-2">
        <CIcon icon={cIconUser}/>
        <span>{userName}</span>
    </div>
);
