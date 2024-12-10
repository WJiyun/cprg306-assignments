import React, { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <main>
      <div
      className="text-left">
        Sort by:
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`py-2 px-4 border-b-4 rounded font-bold ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`py-2 px-4 border-b-4 rounded font-bold ml-2 ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          Category
        </button>
      </div>
      <div>
        {sortedItems.map((item) => (
          <div key={item.id} className="p-1 bg-zinc-800 m-2shadow-md hover:bg-slate-400">
            <Item {...item} onSelect={onItemSelect} />
          </div>
        ))}
      </div>
    </main>
  );
}