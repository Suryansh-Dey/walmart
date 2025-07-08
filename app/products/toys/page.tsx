"use client";

import Image from "next/image";

import { useQuickShopTrigger } from '@/lib/quickshopTrigger';

const toys = [
  {
    name: "Remote Control Car",
    price: 799,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "High-speed RC car for kids with rechargeable battery.",
  },
  {
    name: "Building Blocks Set",
    price: 499,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Creative building blocks for endless fun and learning.",
  },
  {
    name: "Doll House",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    description: "Beautiful doll house with furniture and accessories.",
  },
  {
    name: "Puzzle Game",
    price: 299,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "Colorful puzzle game to boost problem-solving skills.",
  },
  {
    name: "Soft Teddy Bear",
    price: 399,
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
    description: "Super soft and cuddly teddy bear for all ages.",
  },
];

export default function ToysPage() {
  const { addItem } = require('@/lib/store').useCartStore();
  const { trigger } = require('@/lib/quickshopTrigger').useQuickShopTrigger();

  const handleAddToCart = (toy: any) => {
    addItem({
      id: toy.name.toLowerCase().replace(/\s+/g, '-'),
      name: toy.name,
      price: toy.price,
      image: toy.image,
      description: toy.description,
      category: 'toys',
    });
    if (toy.name === 'Remote Control Car') {
      trigger({
        id: toy.name.toLowerCase().replace(/\s+/g, '-'),
        name: toy.name,
        price: toy.price,
        image: toy.image,
        description: toy.description,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Toys for Kids</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {toys.map((toy, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="relative w-full h-56">
                <Image
                  src={toy.image}
                  alt={toy.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{toy.name}</h2>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{toy.description}</p>
                <div className="flex items-baseline mb-3">
                  <span className="text-xl font-bold text-green-700">₹{toy.price}</span>
                </div>
                <button className="w-full py-2 px-4 rounded-md font-medium bg-blue-500 hover:bg-blue-600 text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => handleAddToCart(toy)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
