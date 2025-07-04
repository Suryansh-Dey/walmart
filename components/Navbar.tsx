'use client'
import { useEffect } from "react"

export default function Navbar() {
    useEffect(() => {
        const addBot = document.createElement('script');
        addBot.src = "link.js"
        document.body.appendChild(addBot)
    })
    return (
        <div className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-3 sm:mb-0">
                    <a href="#" className="text-3xl font-bold mr-4">Walmart</a>
                    <div className="relative w-full max-w-md">
                        <input type="text" placeholder="Search for white shoes..." className="w-full py-2 pl-10 pr-4 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-300" value="white shoes" onChange={() => {}} />
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                </div>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="hover:underline">My Account</a>
                    <a href="#" className="hover:underline">Cart</a>
                </nav>
            </div>
        </div>
    )
}

