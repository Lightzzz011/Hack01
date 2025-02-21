import { useState } from 'react';
import { MapPin, Calendar, Clock, Search as SearchIcon } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link
import Footer from '../components/Footer';

function Search() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setShowResults(true);
    setTimeout(() => {
      navigate('/no-slots');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Back to Home Button */}
      <div className="absolute top-4 right-4 z-50">
        <Link
          to="/home"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <img
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80"
          alt="Parking"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Perfect Spot</h1>
            <p className="text-xl text-gray-200">Secure, heated parking spots available 24/7</p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-gray-900 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter location"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Vehicle Type</option>
              <option value="2">Two Wheeler</option>
              <option value="4">Four Wheeler</option>
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <SearchIcon size={20} />
            Search Parking
          </button>
        </div>

        {/* Loading Spinner */}
        {showResults && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                <h3 className="text-xl text-white font-semibold">Searching for available spots...</h3>
                <p className="text-gray-400 mt-2">We're finding the best parking spots for you</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Search;