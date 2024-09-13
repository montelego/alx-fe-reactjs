// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import recipes from '../data/recipes.json'; // Import your mock data

// const RecipeDetail = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     // Fetch the recipe based on the id
//     const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));
//     setRecipe(selectedRecipe);
//   }, [id]);

//   if (!recipe) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
//         <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-6 rounded-lg" />
//         <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
//         <ul className="list-disc pl-5 mb-4">
//           {recipe.ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//         </ul>
//         <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
//         <ol className="list-decimal pl-5">
//           {recipe.instructions.map((step, index) => (
//             <li key={index} className="mb-2">{step}</li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default RecipeDetail;

/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data/recipes.json'; // Correct path to recipes.json

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe based on the id
    const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-6 rounded-lg" />
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the recipe data from JSON
    const fetchRecipeData = async () => {
      try {
        const response = await fetch('/data/recipes.json'); // Fetch data.json
        const data = await response.json();
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipeData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-6 rounded-lg" />
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
