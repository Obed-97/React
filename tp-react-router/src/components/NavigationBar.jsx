import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  const linkStyle = ({ isActive }) => ({
    color: '#374151',
    textDecoration: 'none',
    padding: '8px 16px',
    borderBottom: isActive ? '2px solid #6b7280' : '2px solid transparent'
  });

  return (
    <nav style={{ 
      padding: '10px',
      display: 'flex',
      gap: '20px'
    }}>
      <NavLink to="/" style={linkStyle}>
        Accueil
      </NavLink>
      <NavLink to="/posts" style={linkStyle}>
        Posts
      </NavLink>
      <NavLink to="/contact" style={linkStyle}>
        Contact
      </NavLink>
    </nav>
  );
}
