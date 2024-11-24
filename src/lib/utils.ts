import {ProductsInterface} from "@/types";


export function groupProductsByBrand(products: ProductsInterface[]) {
    if (!Array.isArray(products)) {
        return []
    }

    const grouped: { name: string; model: string[] }[] = [];

    products.forEach((product) => {
        let brandEntry = grouped.find((entry) => entry.name === product.brand);

        if (!brandEntry) {
            brandEntry = { name: product.brand, model: [] };
            grouped.push(brandEntry);
        }
        if (!brandEntry.model.includes(product.model)) {
            brandEntry.model.push(product.model);
        }
    });

    return grouped;
}
export function filterProductsByCriteria(
    products: ProductsInterface[] | undefined,
    brand: string,
    model: string,
    search: string
): ProductsInterface[] {
    if (!Array.isArray(products)) {
        return [];
    }

    const brandList = brand ? brand.split('+').map((b) => b.trim().toLowerCase()) : [];
    const modelList = model ? model.split('+').map((m) => m.trim().toLowerCase()) : [];

    return products.filter((product) => {
        const matchesBrand = brandList.length
            ? brandList.some((b) => product.brand?.toLowerCase() === b)
            : true;

        const matchesModel = modelList.length
            ? modelList.some((m) => product.model?.toLowerCase() === m)
            : true;

        const matchesSearch = search
            ? product.name?.toLowerCase().includes(search.toLowerCase())
            : true;

        return matchesBrand && matchesModel && matchesSearch;
    });
}

