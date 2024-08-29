import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li><Link to="details">Details</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;
