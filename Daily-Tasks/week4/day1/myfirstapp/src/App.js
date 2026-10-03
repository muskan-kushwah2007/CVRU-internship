import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import UserProfile from './Pages/UserProfile';
import Post from './Pages/Post';
import NotFound from './Pages/NotFound';
import './App.css';


function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dynamic Routes */}
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/post/:postId" element={<Post />} />

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
