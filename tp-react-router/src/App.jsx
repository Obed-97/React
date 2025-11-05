import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Accueil from './pages/Accueil';
import Posts from './pages/Posts';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="posts" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}