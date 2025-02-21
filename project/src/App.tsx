import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import NoSlots from './pages/NoSlots';
import Team from './pages/Team';
import Search from './pages/Search';
import ChatbotPage from './pages/ChatbotPage';
import ListYourSpace from './pages/ListYourSpace';
import SnowOverlay from './components/SnowOverlay';

function App() {
  return (
    <Router>
      <SnowOverlay />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/no-slots" element={<NoSlots />} />
          <Route path="/team" element={<Team />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/list-your-space" element={<ListYourSpace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;