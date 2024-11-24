"use client"
import {CategoryModel} from "@/types";
import {BlandModelCard,SortByCard} from "@/components";
import {Suspense} from "react";

export function Filters({grouped}:{grouped:CategoryModel[]}) {
    return (
        <div className="w-[20%]  flex-col h-full space-y-3 hidden lg:flex">
            <Suspense>
                <SortByCard/>
            </Suspense>
            <Suspense>
                <BlandModelCard grouped={grouped}/>
            </Suspense>
        </div>

    );
}
