import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Snowflake } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userName', name);
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black relative overflow-hidden">
      <div className="flex w-full max-w-5xl mx-4 relative">
        <div className="hidden md:block w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10 rounded-l-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?auto=format&fit=crop&q=80"
            alt="Winter Parking"
            className="rounded-l-2xl h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-900/95 p-8 rounded-2xl md:rounded-l-none backdrop-blur-sm">
          <div className="flex items-center justify-center mb-6">
            <Snowflake className="text-blue-400 mr-2" size={24} />
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          </div>
          <p className="text-center text-blue-300 mb-8">Discover winter-exclusive parking spots ❄️</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-800/50 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800/50 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800/50 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Sign In
            </button>
          </form>
          <p className="text-gray-400 mt-6 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </p>
          
          {/* Winter promotion */}
          <div className="mt-8 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-4 rounded-lg backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white mb-2">❄️ Winter Special</h3>
            <p className="text-sm text-gray-300">
              Get 20% off on all premium parking spots this winter season! Perfect for your winter adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;