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


// import React, { useState } from 'react';
// import { fetchUserData } from '../services/githubService';

// const Search = () => {
//   // State to store the input value, loading status, error, and user data
//   const [username, setUsername] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null); // To store error message
//   const [userData, setUserData] = useState(null);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null); // Clear previous error
//     setUserData(null); // Clear previous user data

//     try {
//       const data = await fetchUserData(username); // Fetch user data
//       setUserData(data); // Set user data
//     } catch (err) {
//       setError("Looks like we cant find the user"); // Set error message
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

//       {loading && <p>Loading...</p>} {/* Show loading message */}
//       {error && <p>{error}</p>} {/* Show error message when user not found */}
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
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors
    setUserData([]); // Clear previous results

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos);
      setUserData(data.items); // GitHub Search API returns results in an 'items' array
    } catch (err) {
      setError("Error fetching users, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      <div className="mt-6 space-y-4">
        {userData.length > 0 && userData.map(user => (
          <div key={user.id} className="flex items-center space-x-4 p-4 border rounded">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-xl font-bold">{user.login}</h3>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
