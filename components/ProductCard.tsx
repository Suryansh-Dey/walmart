'use client'
import { Product, useCartStore } from '@/lib/store'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    addItem(product)
    
    // Add a small delay for better UX
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-baseline mb-3">
          <span className="text-xl font-bold text-green-700">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-2 px-4 rounded-md font-medium transition-all duration-200 ${
            isAdding 
              ? 'bg-green-500 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-md'
          } focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          {isAdding ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}