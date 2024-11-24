import { FETCH_POSTS_LIMIT } from "@/lib/constants";

export function SkeletonCardList() {
    return (
        <div className="flex space-x-6 w-full h-full">

            <div className="w-1/4 space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="bg-gray-300 h-5 w-1/2 rounded-md mb-4 animate-pulse"></div>
                    <div className="space-y-2">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 animate-pulse"
                            >
                                <div className="bg-gray-300 w-4 h-4 rounded-full"></div>
                                <div className="bg-gray-300 w-3/4 h-4 rounded-md"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="bg-gray-300 h-5 w-1/2 rounded-md mb-4 animate-pulse"></div>
                    <div className="space-y-2">
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 animate-pulse"
                            >
                                <div className="bg-gray-300 w-4 h-4 rounded-md"></div>
                                <div className="bg-gray-300 w-3/4 h-4 rounded-md"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="bg-gray-300 h-5 w-1/2 rounded-md mb-4 animate-pulse"></div>
                    <div className="bg-gray-300 w-full h-10 rounded-md animate-pulse"></div>
                </div>
            </div>
            <div className="flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {[...Array(FETCH_POSTS_LIMIT)].map((_, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white p-3 rounded-lg shadow-md w-full h-[320px] animate-pulse"
                        >
                            <div className="bg-gray-300 h-40 w-full rounded-md"></div>
                            <div className="flex flex-col flex-1 mt-3 space-y-2">
                                <div className="bg-gray-300 h-5 w-3/4 rounded-md"></div>
                                <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div>
                                <div className="bg-gray-300 h-10 w-full mt-auto rounded-md"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
