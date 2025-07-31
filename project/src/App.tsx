import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import NoSlots from './pages/NoSlots';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/no-slots" element={<NoSlots />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;