"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { sortRadios } from "@/lib/action";
import {SortOption} from "@/types";

export function SortByCard() {
    const sortRadiosArray = sortRadios;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [selectedSort, setSelectedSort] = useState(searchParams.get("sort") || "");

    useEffect(() => {
        setSelectedSort(searchParams.get("sort") || "");
    }, [searchParams]);

    const updateSearchParams = (newSort:SortOption) => {
        const params = new URLSearchParams(searchParams);
        if (newSort) {
            params.set("sort", newSort);
            params.set("page", "1");
        } else {
            params.delete("sort");
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div>
            <span className="text-sm text-slate-500 ">Sort By</span>
            <div className="bg-white shadow-md p-3 mt-1 mr-3">
                {sortRadiosArray.map((sortRadio, index) => (
                    <div
                        className={`flex items-center ${index !== 0 ? "mt-2" : ""} cursor-pointer`}
                        key={sortRadio.value}
                    >
                        <input
                            type="radio"
                            name="sort"
                            value={sortRadio.value}
                            checked={selectedSort === sortRadio.value}
                            onChange={() => updateSearchParams(sortRadio.value as SortOption)}
                            className="cursor-pointer"
                        />
                        <label
                            className="ml-2 cursor-pointer"
                            onClick={() => updateSearchParams(sortRadio.value as SortOption)}
                        >
                            {sortRadio.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
