import { useState } from "react";


export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity(quantityIncrement => {
      if (quantityIncrement < 20) {
        return quantityIncrement + 1;
      }
      return quantityIncrement;
    });
  };

  const decrement = () => {
    setQuantity(quantityDecrement => {
      if (quantityDecrement > 1) {
        return quantityDecrement - 1;
      }
      return quantityDecrement;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div>
        <h1 className="text-center text-lg mt-4">The Current Quantity Value: {quantity}</h1>
        <div className="flex justify-center space-x-2 mt-4">
          <button 
            onClick={decrement} 
            disabled={quantity === 1}
            className={`py-2 px-1 border-b-3 rounded font-bold ${quantity === 1 ? 'bg-gray-300 border-gray-300 text-gray-500' : 'bg-blue-500 hover:bg-blue-400 active:bg-pink-700 border-blue-700 hover:border-blue-500 text-white'}`}
          >
            Decrement
          </button>
          <button 
            onClick={increment} 
            disabled={quantity === 20}
            className={`py-2 px-1 border-b-3 rounded font-bold ${quantity === 20 ? 'bg-gray-300 border-gray-300 text-gray-500' : 'bg-blue-500 hover:bg-blue-400 active:bg-pink-700 border-blue-700 hover:border-blue-500 text-white'}`}
          >
            Increment
          </button>
    </div>
      <form onSubmit={handleSubmit} className="mt-1">
        <div className="text-center">
          <label className="text-center block text-white-700 text-lg font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="text-center mt-1">
          <label className="text-center block text-white-700 text-lg font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="py-2 px-3 border-b-4 rounded font-bold bg-green-500 hover:bg-green-400 active:bg-green-700 border-green-700 hover:border-green-500 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}