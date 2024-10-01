"use client"; 
import { useState } from "react";

export default function NewItem () {
    const [quantity, setQuantity] = useState(1); 

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
        })
    }

    return (
        <div>
      <h1 className="text-center text-lg" >The Current Quantity Value: {quantity}</h1>
      <div className="flex justify-center space-x-2 mt-4">
      <button 
        onClick={decrement} 
        disable = {quantity === 1}
        className={`py-2 px-4 border-b-4 rounded font-bold ${quantity === 1 ? 'bg-gray-300 border-gray-300 text-gray-500' : 'bg-blue-500 hover:bg-blue-400 active:bg-pink-700 border-blue-700 hover:border-blue-500 text-white'}`}      >
        Decrement
      </button>
      <button 
        onClick={increment} 
        disable = {quantity === 20}
        className={`py-2 px-4 border-b-4 rounded font-bold ${quantity === 20 ? 'bg-gray-300 border-gray-300 text-gray-500' : 'bg-blue-500 hover:bg-blue-400 active:bg-pink-700 border-blue-700 hover:border-blue-500 text-white'}`}      >
        Increment
      </button>
      </div>
    </div>
    )
}