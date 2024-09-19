// Results.jsx
import React from 'react';

function Results({ users }) {
  return (
    <div className="p-4">
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.id} className="p-4 border border-gray-300 rounded-lg">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <h2 className="text-xl font-bold">{user.login}</h2>
              </a>
              <p className="text-gray-600">Location: {user.location || 'N/A'}</p>
              <p className="text-gray-600">Repositories: {user.public_repos || 'N/A'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Results;

// Results.jsx (continued)
import { useState } from 'react';

function Results({ users, onLoadMore }) {
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    onLoadMore(page + 1);
  };

  return (
    <div className="p-4">
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.id} className="p-4 border border-gray-300 rounded-lg">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <h2 className="text-xl font-bold">{user.login}</h2>
              </a>
              <p className="text-gray-600">Location: {user.location || 'N/A'}</p>
              <p className="text-gray-600">Repositories: {user.public_repos || 'N/A'}</p>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleLoadMore}
        className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Load More
      </button>
    </div>
  );
}
