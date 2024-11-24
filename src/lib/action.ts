import {SortOption} from "@/types";
import {filterProductsByCriteria, groupProductsByBrand} from "@/lib/utils";


export default async function getProducts({page, limit, search,sortBy,brand,model}: { page: string; limit: string; search: string,sortBy?: SortOption,brand:string,model:string}) {
    //Todo: I couldn't retrieve the total count from the header, maybe they didn't provide it, so I tried this approach instead.
    try {
        const baseUrl = new URL('https://5fc9346b2af77700165ae514.mockapi.io/products');
        if (search) baseUrl.searchParams.append('name', search);
        if (sortBy) {
            const selectedSort = sortRadios?.find((x) => x.value === sortBy);
            if (selectedSort) {
                baseUrl.searchParams.append('sortBy', selectedSort.key);
                baseUrl.searchParams.append('order', selectedSort.type);
            }
        }
        const allResponse = await fetch(baseUrl, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if (!allResponse.ok) {
            new Error('Error fetching all products');
        }
        const allProducts = await allResponse.json();
        const grouped = groupProductsByBrand(allProducts)
        const filteredProducts = filterProductsByCriteria(allProducts, brand, model, search);
        if (!allResponse.ok) {
            return {
                paginatedProducts: [],
                totalCount: 0,grouped:[]
            }
        }
        const totalCount = Math.ceil(filteredProducts.length / parseInt(limit, 10));

        const pageNumber = parseInt(page, 10) || 1;

        const itemsPerPage = parseInt(limit, 10) || 10;

        const startIndex = (pageNumber - 1) * itemsPerPage;

        const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

        return {
            paginatedProducts,
            totalCount,grouped
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
export const sortRadios = [
    {
        value: 'old_to_new',
        name: 'Old to new',
        key: 'createdAt',
        type: 'asc',
    },
    {
        value: 'new_to_old',
        name: 'New to old',
        key: 'createdAt',
        type: 'desc',
    },
    {
        value: 'price_high_to_low',
        name: 'Price high to low',
        key: 'price',
        type: 'desc',
    },
    {
        value: 'price_low_to_high',
        name: 'Price low to high',
        key: 'price',
        type: 'asc',
    },
];
