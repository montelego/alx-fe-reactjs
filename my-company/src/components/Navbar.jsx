/*
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
*/

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '10px',
      backgroundColor: '#333',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
