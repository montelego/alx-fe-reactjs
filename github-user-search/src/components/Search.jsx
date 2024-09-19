import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  // State to store the input value, loading status, and result
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Call the service
      setUserData(data); // Store user data if successful
    } catch (err) {
      setError('Looks like we can’t find the user'); // Handle errors
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

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
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
