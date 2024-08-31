/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

/*
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
*/

/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import HomePage from './HomePage'; // assuming you have a HomePage component

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
  </Router>
);

export default App;
*/

/*
// src/App.js
import React from 'react';
import SearchBar from './components/SearchBar'; // Adjust the path if necessary
import RecipeList from './components/RecipeList'; // Adjust the path if necessary

const App = () => (
  <div>
    <h1>Recipe Sharing App</h1>
    <SearchBar />
    <RecipeList />
  </div>
);

export default App;
*/

import React, { useEffect } from 'react';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './store/recipeStore';

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Fetch recipes from an API or define them statically
    const fetchRecipes = async () => {
      // Example static data
      const recipesData = [
        { id: 1, title: 'Spaghetti Bolognese', description: 'A classic Italian dish.' },
        { id: 2, title: 'Chicken Curry', description: 'A spicy and savory curry.' },
        { id: 3, title: 'Vegetable Stir Fry', description: 'A quick and healthy meal.' },
        // Add more recipes as needed
      ];
      setRecipes(recipesData);
    };

    fetchRecipes();
  }, [setRecipes]);

  return (
    <div style={{ padding: '32px' }}>
      <header>
        <h1>Recipe Sharing Application</h1>
      </header>
      <main>
        <FavoritesList />
        <RecommendationsList />
      </main>
    </div>
  );
};

export default App;
