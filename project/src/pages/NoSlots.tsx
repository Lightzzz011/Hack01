import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HeartHandshake } from 'lucide-react';
import Footer from '../components/Footer';

function NoSlots() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <div className="max-w-4xl mx-auto p-6">
        <Link to="/home" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Search
        </Link>

        <div className="bg-gray-900 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <HeartHandshake size={64} className="text-indigo-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Coming Soon to Your Area!</h1>
          <p className="text-gray-400 text-lg mb-6">
            We're working hard to bring ParkEase to your location. Our team is currently establishing partnerships
            with local businesses to provide you with the best parking experience.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">What's Next?</h2>
            <p className="text-gray-300 mb-4">
              We're committed to providing you with a seamless parking experience. Our customer care team is available
              24/7 to assist you with any questions or concerns.
            </p>
            <p className="text-indigo-400 font-semibold">
              Stay tuned for updates as we expand our services in your area!
            </p>
          </div>
          <Link
            to="/home"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NoSlots;