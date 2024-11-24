import { Metadata } from "next";
import { ProductsInterface } from "@/types";
import { Suspense } from "react";
import { ProductsDetail } from "@/components";


interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
                                           params,
                                       }: ProductPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const productId = slug.split("-").pop() || "";

    let product: ProductsInterface | null = null;

    try {
        product = await fetchProduct(productId);
    } catch (error) {
        console.error("Error fetching product details:", error);
    }

    return {
        title: `Product Details - ${product?.name}`
    };
}


export default async function ProductPage({ params }: ProductPageProps) {
    const resolvedParams = await params; // Await the promise if params is a promise
    const { slug } = resolvedParams;
    const productId = slug.split("-").pop() || "";

    let product: ProductsInterface | null = null;

    try {
        product = await fetchProduct(productId);
    } catch (error) {
        console.error("Error fetching product details:", error);
        return <div>Error: Unable to fetch product details. Please try again later.</div>;
    }

    return (
        <div className="space-y-4 w-full">
            <Suspense
                fallback={
                    <div className="">
                        <div>Loading...</div>
                    </div>
                }
            >
                <div className="w-full flex space-x-2">
                    <ProductsDetail data={product} />
                </div>
            </Suspense>
        </div>
    );
}

async function fetchProduct(productId: string): Promise<ProductsInterface> {
    const res = await fetch(
        `https://5fc9346b2af77700165ae514.mockapi.io/products/${productId}`
    );

    if (!res.ok) {
        throw new Error("Product fetch failed");
    }
    return await res.json();
}
