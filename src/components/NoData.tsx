
export  function NoData() {
    return (
        <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="rounded-lg text-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">No Products Found</h2>
                <p className="text-gray-500">
                    We couldn&apos;t find any products matching your search. Try adjusting your filters or search
                    term.
                </p>
            </div>
        </div>
    )
}
