"use client";
import React from "react"
import { useState } from "react";
import { useCartStore } from '@/lib/store';
import { useRouter } from "next/navigation";
import { useQuickShopTrigger } from '@/lib/quickshopTrigger';

const rcCar = {
  id: "rc-car",
  name: "Remote Control Car",
  price: 799,
  image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  description: "High-speed RC car for kids with rechargeable battery.",
  quantity: 1,
};

const recipes: Record<string, { name: string; items: { name: string; qty: number; image: string }[] }> = {
  "paneer butter masala": {
    name: "Paneer Butter Masala",
    items: [
      { name: "Paneer (200g)", qty: 1, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/paneer-butter-masala-recipe.jpg" },
      { name: "Butter (2 tbsp)", qty: 1, image: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/07/butter.jpg?quality=82&strip=1&w=640" },
      { name: "Tomato (2)", qty: 1, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" },
      { name: "Onion (1)", qty: 1, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
      { name: "Cream (50ml)", qty: 1, image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
      { name: "Spices", qty: 1, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
    ],
  },
};

export default function QuickShop() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const [queue, setQueue] = useState<string[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [recipeItems, setRecipeItems] = useState<{ name: string; qty: number; image: string }[]>([]);
  const [browseLabel, setBrowseLabel] = useState<string | null>(null);
  const [finalized, setFinalized] = useState(false);
  const [selected, setSelected] = useState<any[]>([]); // items to show as icons
  const router = useRouter();
  const { items: cartItems, addItem } = useCartStore();
  const { open: triggerOpen, product: triggerProduct, reset: resetTrigger } = useQuickShopTrigger();

  // Open QuickShop and show RC car if triggered from toys page
  React.useEffect(() => {
    if (triggerOpen && triggerProduct) {
      setOpen(true);
      setDone(true);
      setFinalized(false);
      setQueue([]);
      setBrowseLabel(null);
      setRecipeItems([]);
      setSelected([
        {
          id: triggerProduct.id,
          name: triggerProduct.name,
          image: triggerProduct.image,
          price: triggerProduct.price,
        },
      ]);
      resetTrigger();
    }
  }, [triggerOpen, triggerProduct, resetTrigger]);

  // Remove: always add RC car to cart if not present
  // When opening QuickShop, show all items in cart as selected
  const handleOpen = () => {
    setOpen(!open);
    // Only show items in cart (including RC car only if actually added)
    setSelected([...cartItems]);
  };

  const handleAdd = () => {
    if (input.trim()) {
      setQueue([...queue, input.trim()]);
      setInput("");
    }
  };

  const handleRemove = (idx: number) => {
    setQueue(queue.filter((_, i) => i !== idx));
  };

  const handleDone = () => {
    setCurrentIdx(0);
    setDone(true);
    setFinalized(false);
    setupItem(0, queue);
  };

  const setupItem = (idx: number, arr: string[]) => {
    const item = arr[idx]?.toLowerCase() || "";
    if (item.includes("paneer butter masala")) {
      setRecipeItems([...recipes["paneer butter masala"].items]);
      setBrowseLabel(null);
    } else if (item.includes("toys for kids")) {
      setRecipeItems([]);
      setBrowseLabel("Browse toys for kids");
    } else {
      setRecipeItems([]);
      setBrowseLabel(null);
    }
  };

  const handleQtyChange = (idx: number, delta: number) => {
    setRecipeItems((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const handleNext = () => {
    const item = queue[currentIdx]?.toLowerCase() || "";
    if (item.includes("paneer butter masala")) {
      setSelected(
        recipes["paneer butter masala"].items.map((i) => ({
          id: i.name,
          name: i.name,
          image: i.image,
          price: 50, // You can set a default price for each ingredient
        }))
      );
    }
    // For toys for kids, do not add anything to selected, just show browse button
    // Move to next item
    if (currentIdx + 1 < queue.length) {
      setCurrentIdx(currentIdx + 1);
      setupItem(currentIdx + 1, queue);
    } else {
      setFinalized(true);
    }
  };

  // Add a dedicated finalize for paneer butter masala
  const handleFinalizePaneer = () => {
    recipeItems.forEach((item) => {
      addItem({
        id: item.name,
        name: item.name,
        price: 50, // default price for ingredients
        image: item.image,
        description: '',
        quantity: item.qty || 1,
      });
    });
    // Move to next item in queue if any, else finish
    if (currentIdx + 1 < queue.length) {
      setCurrentIdx(currentIdx + 1);
      setupItem(currentIdx + 1, queue);
    } else {
      setFinalized(true);
    }
  };

  const handleFinalize = () => {
    // If finalizing a recipe (paneer butter masala), add all recipeItems to cart
    if (recipeItems.length > 0) {
      recipeItems.forEach((item) => {
        addItem({
          id: item.name,
          name: item.name,
          price: 50, // default price for ingredients
          image: item.image,
          description: '',
          quantity: item.qty || 1,
        });
      });
    } else {
      // Add all selected to cart (for toys etc)
      selected.forEach((item) => {
        addItem({
          id: item.id,
          name: item.name,
          price: item.price || 0,
          image: item.image,
          description: '',
          quantity: 1,
        });
      });
    }
    alert('All items added to cart!');
    setDone(false);
    setOpen(false);
    setQueue([]);
    setSelected([]);
    setFinalized(false);
  };

  const handleRefresh = () => {
    setInput("");
    setQueue([]);
    setDone(false);
    setCurrentIdx(0);
    setRecipeItems([]);
    setBrowseLabel(null);
    setFinalized(false);
    setSelected([...cartItems]);
  };

  return (
    <>
      <button
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white text-2xl z-50"
        onClick={handleOpen}
        aria-label="Open Quick Shop"
      >
        +
      </button>
      {/* Sliding Drawer Modal */}
      <div
        className={`fixed left-0 bottom-0 w-full sm:w-96 z-50 transition-transform duration-500 ${
          open && done ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          background: "white",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.15)",
          padding: "1.5rem 1rem 1rem 1rem",
          minHeight: "320px",
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-green-700">Quick Shop</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="text-blue-500 hover:text-blue-700 text-base border border-blue-200 rounded px-2 py-0.5 transition-colors"
              title="Refresh Quick Shop"
            >
              Refresh
            </button>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
        </div>
        {/* Show selected items as icons, but only if not toys for kids step */}
        {selected.length > 0 && !browseLabel && done && !finalized && (
          // Only show this block if not currently processing a recipe (i.e., not paneer butter masala step)
          queue[currentIdx]?.toLowerCase().includes('paneer butter masala') ? null : (
            <>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover border" />
                    <span className="text-xs text-center max-w-[60px] truncate">{item.name}</span>
                    {typeof item.price === 'number' && (
                      <span className="text-green-700 font-bold text-xs">₹{item.price}</span>
                    )}
                  </div>
                ))}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded font-semibold mb-2"
                onClick={handleFinalize}
              >
                Finalize
              </button>
            </>
          )
        )}
        {done && queue.length > 0 && !finalized ? (
          recipeItems.length > 0 ? (
            <>
              <h3 className="text-green-700 font-semibold mb-2">Paneer Butter Masala Ingredients</h3>
              <ul className="mb-3 max-h-40 overflow-y-auto">
                {recipeItems.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between py-1 px-2 bg-gray-100 rounded mb-1">
                    <span>{item.name}</span>
                    <img src={item.image} alt={item.name} className="w-8 h-8 rounded object-cover ml-2" />
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gray-300 px-2 rounded text-lg"
                        onClick={() => handleQtyChange(idx, -1)}
                        disabled={item.qty === 1}
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{item.qty}</span>
                      <button
                        className="bg-gray-300 px-2 rounded text-lg"
                        onClick={() => handleQtyChange(idx, 1)}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded font-semibold mb-2"
                onClick={handleFinalizePaneer}
              >
                Finalize
              </button>
            </>
          ) : browseLabel ? (
            <>
              <h3 className="text-green-700 font-semibold mb-2">Toys for Kids</h3>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded font-semibold mb-2"
                onClick={() => {
                  setOpen(false);
                  router.push("/products/toys");
                }}
              >
                {browseLabel}
              </button>
            </>
          ) : (
            <>
              <h3 className="text-green-700 font-semibold mb-2">Your List:</h3>
              <ul className="mb-3 max-h-40 overflow-y-auto">
                {queue.map((item, idx) => (
                  <li key={idx} className="py-1 px-2 bg-gray-100 rounded mb-1">
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded font-semibold mb-2"
                onClick={handleNext}
              >
                Finalize
              </button>
            </>
          )
        ) : finalized ? (
          <>
            <h3 className="text-green-700 font-semibold mb-2">All items in cart!</h3>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 w-full py-2 rounded font-semibold"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </>
        ) : null}
      </div>
      {/* Main Quick Shop UI (when not done) */}
      {open && !done && (
        <div className="fixed bottom-24 left-6 bg-white rounded-lg shadow-lg p-4 w-80 z-40 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-green-700">Quick Shop</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
          <div className="flex mb-3">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-l px-2 py-1 focus:outline-none"
              placeholder="Add item..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAdd();
              }}
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-r"
              onClick={handleAdd}
              aria-label="Add item"
            >
              +
            </button>
          </div>
          <ul className="mb-3 max-h-40 overflow-y-auto">
            {queue.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between py-1 px-2 bg-gray-100 rounded mb-1"
              >
                <span>{item}</span>
                <button
                  className="text-red-400 hover:text-red-700 text-sm ml-2"
                  onClick={() => handleRemove(idx)}
                  aria-label="Remove item"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded font-semibold"
            onClick={handleDone}
            disabled={queue.length === 0}
          >
            Done
          </button>
        </div>
      )}
    </>
  );
}