"use client"
import {ProductsInterface, SearchParams} from "@/types";
import {ProductsCard, Pagination, NoData} from "@/components";

export  function CardList({data,totalCount,page,searchParams}: { data: ProductsInterface[],totalCount:number ,page:number,
    searchParams: SearchParams
}) {
    const shouldHidePagination = data.length < 12 && page === 1;
    return (
        <div
            className={'lg:w-[60%] w-full  flex flex-col mt-2'}>
            <div className={'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5 xl:grid-cols-4 xl:gap-1'}>
                {
                    data.map((value) =>
                        <ProductsCard data={value} key={value.id}/>
                    )
                }
            </div>
            {
                data.length<1 && (<NoData/>)
            }
            {!shouldHidePagination && (
                <Pagination
                    currentPage={page}
                    totalPages={totalCount}
                    basePath={'products'}
                    searchParams={searchParams}
                />
            )}

        </div>
    );
};


