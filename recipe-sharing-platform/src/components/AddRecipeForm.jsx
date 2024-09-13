// import { useState } from "react";

// const AddRecipeForm = () => {
//   const [title, setTitle] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [steps, setSteps] = useState("");
//   const [errors, setErrors] = useState({});

//   // Validation check
//   const validateForm = () => {
//     const newErrors = {};
//     if (!title) newErrors.title = "Recipe title is required.";
//     if (!ingredients || ingredients.split("\n").length < 2)
//       newErrors.ingredients = "At least two ingredients are required.";
//     if (!steps) newErrors.steps = "Preparation steps are required.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Handle successful submission logic here (e.g., post data)
//       console.log({ title, ingredients, steps });
//       // Reset form fields after submission
//       setTitle("");
//       setIngredients("");
//       setSteps("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Recipe Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
//         />
//         {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
//         <textarea
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           rows="5"
//           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
//           placeholder="List each ingredient on a new line"
//         ></textarea>
//         {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Preparation Steps</label>
//         <textarea
//           value={steps}
//           onChange={(e) => setSteps(e.target.value)}
//           rows="5"
//           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
//           placeholder="Write each step on a new line"
//         ></textarea>
//         {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
//       >
//         Add Recipe
//       </button>
//     </form>
//   );
// };

// export default AddRecipeForm;


import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Recipe title is required.";
    if (!ingredients || ingredients.split("\n").length < 2)
      newErrors.ingredients = "At least two ingredients are required.";
    if (!steps) newErrors.steps = "Preparation steps are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ title, ingredients, steps });
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg md:p-8 lg:max-w-2xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-center md:text-3xl">Add New Recipe</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 md:text-lg"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="5"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 md:text-lg"
          placeholder="List each ingredient on a new line"
        ></textarea>
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows="5"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 md:text-lg"
          placeholder="Write each step on a new line"
        ></textarea>
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 md:text-lg"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
