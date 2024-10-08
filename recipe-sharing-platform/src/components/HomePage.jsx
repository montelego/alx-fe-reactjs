/*
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
*/


// import React, { useState, useEffect } from 'react';
// import recipeData from '../data.json'; // Import mock data from the JSON file

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]);

//   // Load recipe data when the component mounts
//   useEffect(() => {
//     setRecipes(recipeData);
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       {/* Title Section */}
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Recipe Sharing Platform</h1>

//       {/* Recipe Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {recipes.map(recipe => (
//           <div
//             key={recipe.id}
//             className="bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden"
//           >
//             {/* Recipe Image */}
//             <img
//               src={recipe.image}
//               alt={recipe.title}
//               className="w-full h-48 object-cover"
//             />
            
//             {/* Recipe Info */}
//             <div className="p-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
//               <p className="text-gray-600 mb-4">{recipe.summary}</p>
//               <a
//                 href={`/recipe/${recipe.id}`}
//                 className="text-blue-500 hover:text-blue-700 font-medium"
//               >
//                 View Recipe
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// 



// import React, { useState, useEffect } from 'react';
// import recipeData from '../data.json'; // Import mock data from the JSON file

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]);

//   // Load recipe data when the component mounts
//   useEffect(() => {
//     setRecipes(recipeData);
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {recipes.map(recipe => (
//           <div 
//             key={recipe.id} 
//             className="bg-white p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all rounded-lg sm:min-w-64"
//           >
//             <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-t-lg" />
//             <div className="p-4">
//               <h2 className="text-xl font-bold">{recipe.title}</h2>
//               <p className="text-gray-700">{recipe.summary}</p>
//               <a href={`/recipe/${recipe.id}`} className="text-blue-500 hover:text-blue-600">View Recipe</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import recipes from '../data/recipes.json'; // Assuming recipes.json is in src/data/

// const HomePage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-6">Recipe Sharing Platform</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {recipes.map((recipe) => (
//           <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
//             {/* Wrap the recipe card with Link to navigate to the RecipeDetail page */}
//             <Link to={`/recipe/${recipe.id}`}>
//               <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h2 className="text-2xl font-bold">{recipe.title}</h2>
//                 <p className="text-gray-700 mt-2">{recipe.description}</p>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import AddRecipeForm from '../components/AddRecipeForm'; // Import the form component

const HomePage = () => {
  return (
    <div>
      {/* Add the form to the page */}
      <AddRecipeForm />

      {/* You can add more content or components below */}
      <div className="other-content">
        <h2>Other Recipes</h2>
        {/* Other components */}
      </div>
    </div>
  );
};

export default HomePage;
