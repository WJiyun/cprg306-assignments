"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import ItemList from './shopping-list/item-list';
import NewItem from './shopping-list/new-item';
import MealIdeas from './shopping-list/meal-ideas';
import { getItems, addItem } from "./_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].trim().replace(/[^a-zA-Z ]/g, "");
    setSelectedItemName(cleanedItemName);
  };

  if (!user) {
    return <p>You need to be logged in to view this page.</p>;
  }

  return (
    <div className="container mx-auto p-4 flex">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}