import React, { useState, useEffect } from 'react';
import { Camera, Smile, Car, Coffee, Music, Gamepad, Home as HomeIcon, Key, Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

interface UserInfo {
  name: string;
  email: string;
  password: string;
  catchphrase: string;
  favoriteCar: string;
  coffeeOrder: string;
  favoriteMusic: string;
  gamingStyle: string;
  vehicleNumber: string;
  licenseNumber: string;
  profileImage?: string;
}

interface UserAccounts {
  [email: string]: UserInfo;
}

function Profile() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const [currentEmail, setCurrentEmail] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    password: '',
    catchphrase: '',
    favoriteCar: '',
    coffeeOrder: '',
    favoriteMusic: '',
    gamingStyle: '',
    vehicleNumber: '',
    licenseNumber: ''
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('currentUserEmail');
    if (savedEmail) {
      const accounts = JSON.parse(localStorage.getItem('userAccounts') || '{}');
      const userData = accounts[savedEmail];
      if (userData) {
        setCurrentEmail(savedEmail);
        setUserInfo(userData);
        setIsSignedIn(true);
      }
    }
  }, []);

  // Function to handle image upload and storage
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        const updatedInfo = { ...userInfo, profileImage: imageData };
        setUserInfo(updatedInfo);
        
        // Update user accounts
        const accounts = JSON.parse(localStorage.getItem('userAccounts') || '{}');
        accounts[currentEmail] = updatedInfo;
        localStorage.setItem('userAccounts', JSON.stringify(accounts));
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const accounts = JSON.parse(localStorage.getItem('userAccounts') || '{}');
    accounts[currentEmail] = userInfo;
    localStorage.setItem('userAccounts', JSON.stringify(accounts));
    alert('Your profile has been saved! 🎉');
  };

  // Function to handle auth form submission
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const accounts: UserAccounts = JSON.parse(localStorage.getItem('userAccounts') || '{}');

    if (authMode === 'signup') {
      if (accounts[userInfo.email]) {
        alert('This email is already registered. Please sign in instead.');
        return;
      }
      accounts[userInfo.email] = userInfo;
    } else {
      // Sign in
      const account = accounts[userInfo.email];
      if (!account || account.password !== userInfo.password) {
        alert('Invalid email or password');
        return;
      }
      setUserInfo(account);
    }

    localStorage.setItem('userAccounts', JSON.stringify(accounts));
    localStorage.setItem('currentUserEmail', userInfo.email);
    setCurrentEmail(userInfo.email);
    setIsSignedIn(true);
    setShowAuthForm(false);
  };

  // Function to handle input changes
  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Function to handle sign out
  const handleSignOut = () => {
    setIsSignedIn(false);
    setCurrentEmail('');
    localStorage.removeItem('currentUserEmail');
    setUserInfo({
      name: '',
      email: '',
      password: '',
      catchphrase: '',
      favoriteCar: '',
      coffeeOrder: '',
      favoriteMusic: '',
      gamingStyle: '',
      vehicleNumber: '',
      licenseNumber: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <div className="p-4 bg-gray-900 shadow-lg">
        <Link to="/home" className="inline-flex items-center text-white hover:text-indigo-400">
          <HomeIcon size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-gray-900 rounded-3xl p-8 mb-8 shadow-xl">
          <div className="flex flex-col items-center mb-8">
            {isSignedIn && (
              <div className="relative mb-4">
                {userInfo.profileImage ? (
                  <img
                    src={userInfo.profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center border-4 border-indigo-500">
                    <Camera size={40} className="text-gray-400" />
                  </div>
                )}
                <label className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors">
                  <Camera size={20} className="text-white" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            )}
            {isSignedIn ? (
              <>
                <h1 className="text-3xl font-bold text-white mb-2 font-comic">{userInfo.name}</h1>
                <button
                  onClick={handleSignOut}
                  className="text-indigo-400 hover:text-indigo-300 font-comic"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Welcome to ParkEase</h1>
                <button
                  onClick={() => setShowAuthForm(true)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-comic"
                >
                  Sign In / Sign Up
                </button>
              </div>
            )}
          </div>

          {showAuthForm && !isSignedIn && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-gray-900 p-8 rounded-2xl max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {authMode === 'signup' ? 'Create Account' : 'Welcome Back'}
                  </h2>
                  <button
                    onClick={() => setShowAuthForm(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={userInfo.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                        value={userInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                        value={userInfo.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    {authMode === 'signup' ? 'Sign Up' : 'Sign In'}
                  </button>
                  <p className="text-center text-gray-400">
                    {authMode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <button
                      type="button"
                      onClick={() => setAuthMode(authMode === 'signup' ? 'signin' : 'signup')}
                      className="text-indigo-400 hover:text-indigo-300"
                    >
                      {authMode === 'signup' ? 'Sign In' : 'Sign Up'}
                    </button>
                  </p>
                </form>
              </div>
            </div>
          )}

          {isSignedIn && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-4 font-comic">About Me 🌟</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-comic">My Catchphrase</label>
                    <div className="relative">
                      <Smile className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={userInfo.catchphrase}
                        onChange={(e) => handleInputChange('catchphrase', e.target.value)}
                        className="w-full bg-gray-700 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-comic"
                        placeholder="Life is an adventure! 🚀"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-comic">Vehicle Number</label>
                    <div className="relative">
                      <Car className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={userInfo.vehicleNumber}
                        onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
                        className="w-full bg-gray-700 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-comic"
                        placeholder="Enter your vehicle number 🚗"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-comic">License Number</label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={userInfo.licenseNumber}
                        onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                        className="w-full bg-gray-700 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-comic"
                        placeholder="Enter your license number 🔑"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-comic">Favorite Car</label>
                    <div className="relative">
                      <Car className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={userInfo.favoriteCar}
                        onChange={(e) => handleInputChange('favoriteCar', e.target.value)}
                        className="w-full bg-gray-700 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-comic"
                        placeholder="Dream ride? 🚗"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-comic">Coffee Order</label>
                    <div className="relative">
                      <Coffee className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={userInfo.coffeeOrder}
                        onChange={(e) => handleInputChange('coffeeOrder', e.target.value)}
                        className="w-full bg-gray-700 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-comic"
                        placeholder="How do you take your coffee? ☕"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-comic">Favorite Music</label>
                    <div className="relative">
                      <Music className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={userInfo.favoriteMusic}
                        onChange={(e) => handleInputChange('favoriteMusic', e.target.value)}
                        className="w-full bg-gray-700 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-comic"
                        placeholder="What gets you grooving? 🎵"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-comic">Gaming Style</label>
                    <div className="relative">
                      <Gamepad className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={userInfo.gamingStyle}
                        onChange={(e) => handleInputChange('gamingStyle', e.target.value)}
                        className="w-full bg-gray-700 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-comic"
                        placeholder="Favorite game? 🎮"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-comic transform hover:scale-105"
                  >
                    Save My Fun Facts! 🎉
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold text-white mb-4 font-comic">Parking History 🚗</h2>
                  <div className="text-center py-8">
                    <p className="text-gray-400 font-comic">No parking history found yet! Time for an adventure! 🌟</p>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold text-white mb-4 font-comic">Achievements 🏆</h2>
                  <div className="text-center py-8">
                    <p className="text-gray-400 font-comic">No achievements yet received - let's make some parking memories! 🎯</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;