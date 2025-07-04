import ProductGrid from '@/components/ProductGrid'
import { getProductsByCategory } from '@/lib/products'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: Promise<{ category: string }>
}

const categoryTitles: Record<string, string> = {
  'white-shoes': 'White Shoes',
  'onion': 'Fresh Onions',
  'butter': 'Fresh Butter',
  'paneer': 'Fresh Paneer',
  'sauce': 'Sauces & Condiments'
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category } = await params
  
  const normalizedCategory = category.replace('-', ' ')
  const products = getProductsByCategory(normalizedCategory)
  
  if (products.length === 0) {
    notFound()
  }

  const title = categoryTitles[category] || normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1)

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid products={products} title={title} />
      
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

export async function generateStaticParams() {
  return [
    { category: 'white-shoes' },
    { category: 'onion' },
    { category: 'butter' },
    { category: 'paneer' },
    { category: 'sauce' }
  ]
}