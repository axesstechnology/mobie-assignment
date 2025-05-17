import React, { useState } from "react";

const Search = () => {
  const sampleProducts = [
    { name: "Amazing Shoes", price: 12 },
    { name: "Fabulous Shoes", price: 15 },
    { name: "Fantastic Shoes", price: 15 },
    { name: "Spectacular Shoes", price: 12 },
    { name: "Stunning Shoes", price: 12 },
    { name: "Wonderful Shoes", price: 15 },
  ];

  const availableColors = [
    "Black", "White", "Grey", "Yellow", "Blue",
    "Purple", "Green", "Red", "Pink", "Orange", "Gold", "Silver"
  ];

  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState(["Shoes", "Jacket", "Pants"]);
  const [showFiltersPage, setShowFiltersPage] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // 🟢 Filter Page View
  if (showFiltersPage) {
    return (
      <div className="min-h-screen bg-white p-4 text-sm flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button className="text-blue-600" onClick={() => setShowFiltersPage(false)}>Cancel</button>
          <h2 className="font-semibold text-base">Filter</h2>
          <button className="text-blue-600" onClick={() => setSelectedColors([])}>Clear All</button>
        </div>

        {/* Color Filters */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Color</p>
          <div className="flex flex-wrap gap-2">
            {availableColors.map((color) => (
              <button
                key={color}
                onClick={() => toggleColor(color)}
                className={`border px-3 py-1 rounded-full text-sm transition ${
                  selectedColors.includes(color)
                    ? "bg-blue-600 text-white"
                    : "text-gray-600"
                }`}
              >
                {color.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Apply Button */}
        <button
          onClick={() => setShowFiltersPage(false)}
          className="w-full bg-blue-600 text-white py-2 rounded-md text-sm"
        >
          Apply Filters
        </button>
      </div>
    );
  }

  // 🟢 Main Search Page View
  return (
    <div className="min-h-screen p-4 bg-white text-sm pb-16">
      {/* Search Input */}
      <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center mb-6">
        <span className="mr-2 text-lg">🔍</span>
        <input
          type="text"
          className="bg-transparent outline-none w-full text-sm"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Recent Searches */}
      <div className="mb-6">
        <p className="text-xs text-gray-500 mb-2">RECENT SEARCHES</p>
        {recentSearches.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm text-gray-700 mb-1">
            <span>{item}</span>
            <button className="text-gray-400 hover:text-red-500">×</button>
          </div>
        ))}
      </div>

      {/* Sort & Filter Bar */}
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <span className="font-medium">Sort</span>
        <button
          className="text-blue-600"
          onClick={() => setShowFiltersPage(true)}
        >
          Filter {selectedColors.length > 0 && `(${selectedColors.length})`}
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product, idx) => (
          <div key={idx} className="bg-gray-100 p-3 rounded-md shadow-sm">
            <div className="h-20 bg-white mb-2 flex items-center justify-center rounded-md text-gray-400 text-xs">
              Image
            </div>
            <div className="text-sm font-semibold">{product.name}</div>
            <div className="text-xs text-gray-500">€ {product.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
