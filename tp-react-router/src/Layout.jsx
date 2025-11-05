import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function Header() {
  return (
    <header style={{ 
      color: '#374151', 
      padding: '20px', 
      borderBottom: '2px solid #e5e7eb' 
    }}>
      <h2 style={{ margin: '0 0 10px 0' }}>Mon Mini-Blog</h2>
      <NavigationBar />
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ 
      color: '#6b7280', 
      padding: '20px', 
      textAlign: 'center',
      marginTop: 'auto',
      borderTop: '2px solid #e5e7eb'
    }}>
      <p style={{ margin: 0 }}>© 2025 Mon Mini-Blog</p>
    </footer>
  );
}

export default function Layout() {
  return (
    <div style={{ 
      minHeight: '92vh', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: 'white'
    }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}