import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Walmart</h1>
          <p className="text-xl text-gray-600 mb-8">Your one-stop shop for everything you need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link href="/products/white-shoes" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="White Shoes" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">White Shoes</h2>
                <p className="text-gray-600">Stylish and comfortable footwear for every occasion</p>
              </div>
            </div>
          </Link>

          <Link href="/products/onion" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <img 
                src="https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Fresh Onions" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fresh Onions</h2>
                <p className="text-gray-600">Premium quality onions for your cooking needs</p>
              </div>
            </div>
          </Link>

          <Link href="/products/butter" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <img 
                src="https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Fresh Butter" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fresh Butter</h2>
                <p className="text-gray-600">Creamy and delicious butter for baking and cooking</p>
              </div>
            </div>
          </Link>

          <Link href="/products/paneer" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Fresh Paneer" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fresh Paneer</h2>
                <p className="text-gray-600">High-quality paneer for authentic Indian cuisine</p>
              </div>
            </div>
          </Link>

          <Link href="/products/sauce" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <img 
                src="https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Sauces" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sauces & Condiments</h2>
                <p className="text-gray-600">Flavorful sauces to enhance your meals</p>
              </div>
            </div>
          </Link>

          <Link href="/search?q=" className="group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <div className="p-6 text-white h-full flex flex-col justify-center items-center">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h2 className="text-2xl font-semibold mb-2">Browse All Products</h2>
                <p className="text-blue-100 text-center">Discover our complete product catalog</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Shop with Walmart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-blue-500 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your orders delivered quickly and safely</p>
            </div>
            <div>
              <div className="text-blue-500 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive prices on all your favorite products</p>
            </div>
            <div>
              <div className="text-blue-500 text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Premium quality products you can trust</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">&copy; 2025 Walmart. All Rights Reserved. This is a demo site.</p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="hover:underline transition-colors hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="hover:underline transition-colors hover:text-gray-300">Terms of Use</Link>
            <Link href="#" className="hover:underline transition-colors hover:text-gray-300">Customer Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}