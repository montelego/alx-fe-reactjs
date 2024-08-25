import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';



/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/

/*
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

/*import WelcomeMessage from './components/WelcomeMessage';


function App() {
    return (
        <div>
            <WelcomeMessage />*/
            {/* Other components or content */}
  /*      </div>
    );
}

export default App;
*/


/*
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
*/
/*
function App() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  );
}

export default App;
*/
/*
import UserProfile from './components/UserProfile';

function App() {
  return (
      <div>
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
  );
}

export default App;
*/

// src/App.jsx
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
