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


// githubService.js
export const searchUsers = async (username, location, minRepos) => {
  const query = `${username ? `user:${username}` : ''}${location ? ` location:${location}` : ''}${minRepos ? ` repos:${minRepos}` : ''}`;
  const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data;
};
