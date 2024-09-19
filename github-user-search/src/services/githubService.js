// import axios from 'axios';

// // Function to fetch user data by username
// export const fetchUserData = async (username) => {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${username}`);
//     return response.data;
//   } catch (error) {
//     throw new Error('User not found');
//   }
// };

// import axios from 'axios';

// // Function to fetch user data by username
// export const fetchUserData = async (username) => {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${username}`);
//     return response.data;
//   } catch (error) {
//     throw new Error('User not found'); // Throw an error if the user is not found
//   }
// };

import axios from 'axios';

// Function to fetch user data based on username, location, and repo count
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  const query = [];

  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);

  const searchQuery = query.join('+'); // Construct the query string

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from GitHub API');
  }
};
