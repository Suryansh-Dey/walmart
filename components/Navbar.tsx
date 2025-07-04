'use client'
import { useEffect, useState } from "react"
import { useCartStore } from '@/lib/store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('')
    const [mounted, setMounted] = useState(false)
    const totalItems = useCartStore((state) => state.getTotalItems())
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
        const addBot = document.createElement('script');
        addBot.src = "link.js"
        document.body.appendChild(addBot)
    }, [])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center w-full sm:w-auto">
                    <Link href="/" className="text-3xl font-bold mr-6 hover:text-blue-200 transition-colors">
                        Walmart
                    </Link>
                    <form onSubmit={handleSearch} className="relative w-full max-w-md">
                        <input 
                            type="text" 
                            placeholder="Search for products..." 
                            className="w-full py-2 pl-10 pr-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all" 
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </form>
                </div>
                <nav className="flex items-center space-x-6">
                    <div className="hidden sm:flex space-x-4">
                        <Link href="/products/white-shoes" className="hover:underline transition-all hover:text-blue-200">Shoes</Link>
                        <Link href="/products/onion" className="hover:underline transition-all hover:text-blue-200">Groceries</Link>
                        <Link href="/products/sauce" className="hover:underline transition-all hover:text-blue-200">Condiments</Link>
                    </div>
                    <Link href="#" className="hover:underline transition-all hover:text-blue-200">My Account</Link>
                    <Link href="/cart" className="hover:underline transition-all hover:text-blue-200 relative">
                        Cart
                        {mounted && totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </nav>
            </div>
        </div>
    )
}