import type {Metadata} from "next";

import "@/styles/globals.css";
import {ReactNode} from "react";
import MainLayout from "@/layouts/MainLayout";
import {Header} from "@/components";
import CartProvider from "@/context/CartContext";

export const metadata: Metadata = {
    title: "Products",
    description: "Products Page",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="Montserrat flex flex-col min-h-screen  bg-[#f9f9f9]">
        <div className="relative flex min-h-screen flex-col">
            <CartProvider>
                <Header/>
                <MainLayout>
                    {children}
                </MainLayout>
            </CartProvider>
        </div>
        </body>
        </html>
    );
}
