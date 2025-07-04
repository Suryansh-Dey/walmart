import ProductGrid from '@/components/ProductGrid'
import { searchProducts } from '@/lib/products'

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams
  const query = q || ''
  
  const products = query ? searchProducts(query) : []
  const title = query ? `Search Results for "${query}"` : 'All Products'

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid products={products} title={title} />
      
      {query && products.length === 0 && (
        <div className="container mx-auto p-4 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No products found</h2>
            <p className="text-gray-600 mb-6">Try searching for:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">white shoes</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">onion</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">butter</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">paneer</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">sauce</span>
            </div>
          </div>
        </div>
      )}
      
      <footer className="bg-gray-800 text-white p-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">&copy; 2025 Walmart. All Rights Reserved. This is a demo site.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:underline transition-colors hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:underline transition-colors hover:text-gray-300">Terms of Use</a>
            <a href="#" className="hover:underline transition-colors hover:text-gray-300">Customer Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}