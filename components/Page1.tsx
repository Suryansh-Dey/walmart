export default function Page1() {
    return (
        <>
            <main className="container mx-auto p-4 flex-grow">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">White Shoes</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/e0e0e0/333333?text=White+Sneakers" alt="White Sneakers" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Men's classNameic White Sneakers</h2>
                                <p className="text-gray-600 text-sm mb-3">Comfortable and stylish for everyday wear.</p>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-xl font-bold text-green-700">$39.99</span>
                                    <span className="text-sm text-gray-500 line-through ml-2">$49.99</span>
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">Add to Cart</button>
                            </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/e0e0e0/333333?text=Women+White+Runners" alt="Women's White Running Shoes" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Women's Lightweight Running Shoes</h2>
                                <p className="text-gray-600 text-sm mb-3">Perfect for jogging and athletic activities.</p>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-xl font-bold text-green-700">$59.99</span>
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">Add to Cart</button>
                            </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/e0e0e0/333333?text=Kids+White+Shoes" alt="Kids' White Casual Shoes" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Kids' Durable White Casual Shoes</h2>
                                <p className="text-gray-600 text-sm mb-3">Easy to clean and great for active kids.</p>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-xl font-bold text-green-700">$24.99</span>
                                    <span className="text-sm text-gray-500 line-through ml-2">$29.99</span>
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">Add to Cart</button>
                            </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/e0e0e0/333333?text=White+Dress+Shoes" alt="White Dress Shoes" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Elegant White Dress Shoes</h2>
                                <p className="text-gray-600 text-sm mb-3">Perfect for formal occasions and weddings.</p>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-xl font-bold text-green-700">$79.99</span>
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">Add to Cart</button>
                            </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/e0e0e0/333333?text=White+Canvas+Shoes" alt="White Canvas Shoes" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Unisex White Canvas Shoes</h2>
                                <p className="text-gray-600 text-sm mb-3">classNameic design, comfortable for everyday wear.</p>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-xl font-bold text-green-700">$29.99</span>
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">Add to Cart</button>
                            </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        <img src="https://placehold.co/400x300/e0e0e0/333333?text=White+Sport+Shoes" alt="White Sport Shoes" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Professional White Sport Shoes</h2>
                                <p className="text-gray-600 text-sm mb-3">Enhanced grip and cushioning for peak performance.</p>
                                <div className="flex items-baseline mb-2">
                                    <span className="text-xl font-bold text-green-700">$69.99</span>
                                    <span className="text-sm text-gray-500 line-through ml-2">$89.99</span>
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">Add to Cart</button>
                            </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white p-4 mt-8">
                <div className="container mx-auto text-center text-sm">
                    <p>&copy; 2025 Walmart. All Rights Reserved. This is a dummy page.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <a href="#" className="hover:underline">Customer Service</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

