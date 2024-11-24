import type {Metadata} from "next";
import {FETCH_POSTS_LIMIT} from "@/lib/constants";
import getProducts from "@/lib/action";
import {SearchParams, SortOption} from "@/types";
import {CardList, CartFilter, Filters,MobileFilter} from "@/components";

export async function generateMetadata({searchParams}: { searchParams: Promise<SearchParams> }): Promise<Metadata> {
    const {query, page} = await searchParams;
    const search = query || "";
    const pageNumber = page || "1";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const currentUrl = `${baseUrl}/products?page=${pageNumber}&query=${search}`;
    return {
        title: `Products ${pageNumber}`,
        description: "Products listing page",
        alternates: {canonical: currentUrl},
    };
}

export default async function Products(
    props: {
        searchParams: Promise<SearchParams>
    }
) {
    const searchParams = await props.searchParams
    const search = searchParams?.query || ""
    const limit = FETCH_POSTS_LIMIT || 12
    const page = searchParams?.page || '1';
    const {paginatedProducts, totalCount,grouped} = await getProducts({
        page: page,
        limit: limit.toString(),
        search: search,
        sortBy:searchParams?.sort as SortOption || 'old_to_new',
        brand:searchParams?.brand|| "",
        model:searchParams?.model|| ""
    });
    return (
        <div className="w-full h-full flex flex-col lg:flex-row">
            <MobileFilter  grouped={grouped}/>
            <Filters grouped={grouped}/>
            <CardList
                data={paginatedProducts}
                totalCount={totalCount}
                page={Number(page)}
                searchParams={searchParams}
            />
             <CartFilter/>
        </div>
    );
}
