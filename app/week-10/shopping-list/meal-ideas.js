"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="mb-2">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for "{ingredient}".</p>
      )}
    </div>
  );
}