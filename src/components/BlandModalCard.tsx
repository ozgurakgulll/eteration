"use client";
import { CategoryModel } from "@/types";
import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function BlandModelCard({ grouped }: { grouped: CategoryModel[] }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [selectedBrand, setSelectedBrand] = useState<string | null>(searchParams.get("brand"));
    const [brandSearch, setBrandSearch] = useState("");
    const [modelSearch, setModelSearch] = useState("");
    const [selectedModel, setSelectedModel] = useState<string | null>(searchParams.get("model"));

    useEffect(() => {
        setSelectedBrand(searchParams.get("brand"));
        setSelectedModel(searchParams.get("model"));
    }, [searchParams]);

    const updateSearchParams = () => {
        const params = new URLSearchParams(searchParams);
        if (selectedBrand) {
            params.set("brand", selectedBrand);
        } else {
            params.delete("brand");
        }

        if (selectedModel) {
            params.set("model", selectedModel);
        } else {
            params.delete("model");
        }

        const sort = searchParams.get("sort");
        const page = searchParams.get("page");
        const query = searchParams.get("query");

        if (sort) params.set("sort", sort);
        if (page) params.set("page", '1');
        if (query) params.set("query", query);

        replace(`${pathname}?${params.toString()}`);
    };

    const handleBrandChange = (brand: string) => {
        const newBrand = selectedBrand === brand ? null : brand;
        setSelectedBrand(newBrand);
        setSelectedModel(null);
    };

    const handleModelChange = (model: string) => {
        const newModel = selectedModel === model ? null : model;
        setSelectedModel(newModel);
    };

    const filteredBrands = grouped
        .filter((group) => group.name.toLowerCase().includes(brandSearch.toLowerCase()))
        .sort((a, b) => {
            if (a.name === selectedBrand) return -1;
            if (b.name === selectedBrand) return 1;
            return 0;
        });

    const filteredModels = selectedBrand
        ? (grouped.find((group) => group.name === selectedBrand)?.model || [])
            .filter((model) => model.toLowerCase().includes(modelSearch.toLowerCase()))
            .sort((a, b) => {
                if (a === selectedModel) return -1;
                if (b === selectedModel) return 1;
                return 0;
            })
        : [];

    useEffect(() => {
        updateSearchParams();

        // eslint-disable-next-line
    }, [selectedBrand, selectedModel]);

    return (
        <>
            <div className="space-y-3">
                <div className="w-[95%]">
                    <span className="text-sm text-slate-500">Brands</span>
                    <div className="bg-white shadow-md p-3 mt-1">
                        <div className="mb-2">
                            <input
                                type="text"
                                placeholder="Search Brands"
                                value={brandSearch}
                                onChange={(e) => setBrandSearch(e.target.value)}
                                className="w-full p-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="max-h-[150px] overflow-y-scroll">
                            {filteredBrands.map((group) => (
                                <div key={group.name} className="flex items-center mt-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="brand"
                                        value={group.name}
                                        checked={selectedBrand === group.name}
                                        onChange={() => handleBrandChange(group.name)}
                                        className="cursor-pointer"
                                    />
                                    <label
                                        className="ml-2 cursor-pointer"
                                        onClick={() => handleBrandChange(group.name)}
                                    >
                                        {group.name}
                                    </label>
                                </div>
                            ))}
                            {filteredBrands.length === 0 && (
                                <div className="text-sm text-slate-400 mt-2">No brands found</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-[95%]">
                    <span className="text-sm text-slate-500">Model</span>
                    <div className="bg-white shadow-md p-3 mt-1">
                        <div className="mb-2">
                            <input
                                type="text"
                                placeholder="Search Models"
                                value={modelSearch}
                                onChange={(e) => setModelSearch(e.target.value)}
                                className="w-full p-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="max-h-[150px] overflow-y-scroll min-h-[150px]">
                            {filteredModels.map((model) => (
                                <div key={model} className="flex items-center mt-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="model"
                                        value={model}
                                        checked={selectedModel === model}
                                        onChange={() => handleModelChange(model)}
                                        className="cursor-pointer"
                                    />
                                    <label
                                        className="ml-2 cursor-pointer"
                                        onClick={() => handleModelChange(model)}
                                    >
                                        {model}
                                    </label>
                                </div>
                            ))}
                            {filteredModels.length === 0 && (
                                <div className="text-sm text-slate-400 mt-2">No models found</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
