import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';  // Import mock data from the JSON file

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load recipe data when the component mounts
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all rounded-lg">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
              <a href={`/recipe/${recipe.id}`} className="text-blue-500 hover:text-blue-600">View Recipe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
