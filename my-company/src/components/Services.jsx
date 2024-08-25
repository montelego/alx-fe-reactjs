/*
import React from 'react';

function Services() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Services</h1>
      <ul>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
*/

import React from 'react';

function Services() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', textAlign: 'left' }}>
      <h1 style={{ color: '#007bff' }}>Our Services</h1>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}>Technology Consulting</li>
        <li style={{ marginBottom: '10px' }}>Market Analysis</li>
        <li style={{ marginBottom: '10px' }}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
