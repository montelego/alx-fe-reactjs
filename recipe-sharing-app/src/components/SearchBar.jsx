// src/components/SearchBar.js
import React from 'react';
import { useRecipeStore } from '../recipeStore'; // Adjust the path if necessary

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
