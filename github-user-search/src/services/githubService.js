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

import axios from 'axios';

// Function to fetch user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found'); // Throw an error if the user is not found
  }
};
