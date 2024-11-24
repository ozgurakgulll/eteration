import type {Metadata} from "next";
import "@/styles/globals.css";
import {redirect} from "next/navigation";


export const metadata: Metadata = {
    title: "Eteration",
    description: "Eteration case",
};


export default async function Home() {
    return redirect(`/products?page=1&query&sort=old_to_new&brand&model`);
}
