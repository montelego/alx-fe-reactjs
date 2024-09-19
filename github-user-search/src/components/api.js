import axios from 'axios';

// GitHub API base URL
const GITHUB_API_URL = 'https://api.github.com';

// Axios instance with baseURL and optional headers for authentication
const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
});

// Function to search GitHub users
export const searchGitHubUsers = (query) => {
  return api.get(`/search/users?q=${query}`);
};
