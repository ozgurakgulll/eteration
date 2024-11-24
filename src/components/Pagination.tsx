"use client";

import React from "react";
import Link from "next/link";
import {SearchParams} from "@/types";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    basePath: string;
    searchParams: SearchParams;
};

export const Pagination: React.FC<PaginationProps> = ({
                                                          currentPage,
                                                          totalPages,
                                                          basePath,
                                                          searchParams
                                                      }) => {
        const buildUrl = (page: number) => {
        const urlParams = new URLSearchParams(searchParams);
        urlParams.set('page', page.toString());
        return `${basePath}?${urlParams.toString()}`;
    };

    const renderPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);
        pages.push(
            <Link
                key={1}
                href={buildUrl(1)}
                aria-label="Go to page 1"
                className={`px-3 py-1 rounded-md ${
                    currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
            >
                1
            </Link>
        );

        if (startPage > 2) {
            pages.push(
                <span key="start-ellipsis" className="px-2 text-gray-500" aria-hidden="true">
                    ...
                </span>
            );
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <Link
                    key={i}
                    href={buildUrl(i)}
                    aria-label={`Go to page ${i}`}
                    className={`px-3 py-1 rounded-md ${
                        currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                >
                    {i}
                </Link>
            );
        }

        if (endPage < totalPages - 1) {
            pages.push(
                <span key="end-ellipsis" className="px-2 text-gray-500" aria-hidden="true">
                    ...
                </span>
            );
        }

        if (totalPages > 1) {
            pages.push(
                <Link
                    key={totalPages}
                    href={buildUrl(totalPages)}
                    aria-label={`Go to page ${totalPages}`}
                    className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    {totalPages}
                </Link>
            );
        }

        return pages;
    };

    return (
        <nav
            className="flex items-center justify-center space-x-2 w-full mt-4"
            aria-label="Pagination"
        >
            {currentPage > 1 && (
                <Link
                    href={buildUrl(currentPage - 1)}
                    aria-disabled={currentPage === 1}
                    aria-label="Previous page"
                    className={`px-3 py-1 rounded-md ${
                        currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-700"
                    }`}
                >
                    &lt;
                </Link>
            )}
            {renderPageNumbers()}
            {currentPage < totalPages && (
                <Link
                    href={buildUrl(currentPage + 1)}
                    aria-disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-700"
                    }`}
                >
                    &gt;
                </Link>
            )}
        </nav>
    );
};
