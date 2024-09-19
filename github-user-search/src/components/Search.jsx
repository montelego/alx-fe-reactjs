// import React, { useState } from 'react';
// import { fetchUserData } from '../services/githubService';

// const Search = () => {
//   // State to store the input value, loading status, and result
//   const [username, setUsername] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [userData, setUserData] = useState(null);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null); // Clear previous errors
//     setUserData(null); // Clear previous user data

//     try {
//       const data = await fetchUserData(username); // Call the service
//       setUserData(data); // Store user data if successful
//     } catch (err) {
//       setError("Looks like we can't find the user"); // Set error message
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>} {/* Display error message */}
//       {userData && (
//         <div>
//           <img src={userData.avatar_url} alt={userData.login} width="100" />
//           <h3>{userData.login}</h3>
//           <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
//             View GitHub Profile
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;


import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  // State to store the input value, loading status, error, and user data
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // To store error message
  const [userData, setUserData] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous error
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Set user data
    } catch (err) {
      setError("Looks like we can't find the user"); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Show error message when user not found */}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h3>{userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
