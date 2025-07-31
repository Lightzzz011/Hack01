import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Snowflake } from 'lucide-react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black relative overflow-hidden">
      <div className="flex w-full max-w-5xl mx-4">
        <div className="hidden md:block w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10 rounded-l-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?auto=format&fit=crop&q=80"
            alt="Winter Parking"
            className="rounded-l-2xl h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-900/95 p-8 rounded-2xl md:rounded-l-none backdrop-blur-sm">
          <div className="flex items-center justify-center mb-2">
            <Snowflake className="text-blue-400 mr-2" size={24} />
            <h1 className="text-4xl font-bold text-white text-center">Welcome to ParkEase</h1>
          </div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-800/50 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  placeholder="Enter your name"
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
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Sign Up
            </button>
          </form>
          <p className="text-gray-400 mt-4 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300">
              Sign in
            </Link>
          </p>

          {/* Winter promotion */}
          <div className="mt-8 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-4 rounded-lg backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white mb-2">❄️ Winter Special Offer</h3>
            <p className="text-sm text-gray-300">
              Sign up now and get 3 months of heated parking spots at 30% off! Limited time winter offer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;