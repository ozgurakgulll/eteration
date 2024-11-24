import {ReactNode} from "react";

export type ChildrenProps = {
    children: ReactNode;
};

export interface ProductsInterface {
    createdAt: string;
    name: string;
    image: string;
    price: number;
    description: string
    model: string
    brand: string
    id: string
    quantity?:number
}

export type SearchParams = {
    query?: string;
    page?: string;
    limit?: string;
    sort?:SortOption
    brand?:string
    model?:string
};
export interface CategoryModel{ name: string; model: string[] }
export type SortOption = 'old_to_new' | 'new_to_old' | 'price_high_to_low' | 'price_low_to_high';
