import { useState } from "react";
import Item from "./item.js";

export default function ItemList({items}){

    let sortedItems = [...items]; 
    const [sortBy, setSortBy] = useState("name");
    if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "groupedCategory") {
    sortedItems = sortedItems.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
    sortedItems = Object.keys(sortedItems)
      .sort()
      .reduce((acc, category) => {
        const items = sortedItems[category].sort((a, b) => a.name.localeCompare(b.name));
        acc.push({ category, items });
        return acc;
      }, []);
  }
    return(
        <main>
            <div 
            className="flex">
            <h1>Sort by:</h1>
            <button
            onClick={() => setSortBy("name")}
            className={`py-2 px-4 bg-blue-400 border-b-1 font-bold ml-2 hover:bg-blue-900 ${sortBy === "name" ? "bg-blue-950 text-gray-500" : "bg-gray-300 text-white"}`}>Name</button>
            <button
            onClick={()=> setSortBy("category")}
            className={`py-2 px-4 bg-blue-400 border-b-1 font-bold ml-4 hover:bg-blue-900 ${sortBy === "category" ? "bg-blue-950 text-gray-500" : "bg-gray-300 text-white"}`}>Category</button>
       </div> 
       <div>
              {sortedItems.map((item, index) => {
                return <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
              })}
       </div>
       </main>
    )
}
