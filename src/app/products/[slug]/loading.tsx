export default function Loading() {
    return (
        <div className="flex flex-col justify-start w-full h-screen">
            <div className="w-full flex lg:justify-start justify-between mb-2">
                <div className="w-32 h-10 bg-gray-300 rounded-md"></div>
                <div className="block lg:hidden w-48 h-10 bg-gray-300 rounded-md"></div>
            </div>
            <div className="w-full flex space-x-2">
                <div className="lg:w-[80%] w-full">
                    <div className="md:flex mx-auto p-4 border rounded-lg shadow-md bg-gray-100 space-y-4 md:space-y-0 md:space-x-6">
                        <div className="md:w-1/3 w-full h-64 bg-gray-300 rounded-lg"></div>
                        <div className="md:w-2/3 w-full pl-0 md:pl-6 space-y-4">
                            <div className="h-8 bg-gray-300 rounded"></div>
                            <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
                            <div className="h-10 bg-gray-300 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 hidden lg:block w-[20%]">
                    <div className="h-32 bg-gray-300 rounded-lg"></div>
                    <div className="h-12 bg-gray-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}
