import React, { useState } from 'react';
import { User, Building, Mail, Phone, MapPinIcon, Image, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ListYourSpace = () => {
  const [name, setName] = useState('');
  const [workplaceName, setWorkplaceName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [workplacePics, setWorkplacePics] = useState<File[]>([]);
  const [thoughts, setThoughts] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setWorkplacePics(files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log({
      name,
      workplaceName,
      email,
      contactNumber,
      location,
      workplacePics,
      thoughts,
    });
    alert('Your space has been listed successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">List Your Space</h1>
          <Link
            to="/home"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            {/* Workplace Name */}
            <div>
              <label className="block text-gray-300 mb-2">Workplace Name</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={workplaceName}
                  onChange={(e) => setWorkplaceName(e.target.value)}
                  className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter workplace name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-gray-300 mb-2">Contact Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="tel"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-300 mb-2">Location</label>
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter location"
                  required
                />
              </div>
            </div>

            {/* Workplace Pictures */}
            <div>
              <label className="block text-gray-300 mb-2">Workplace Pictures</label>
              <div className="relative">
                <Image className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  multiple
                  accept="image/*"
                  required
                />
              </div>
            </div>

            {/* Thoughts to Share */}
            <div>
              <label className="block text-gray-300 mb-2">Thoughts to Share</label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                  value={thoughts}
                  onChange={(e) => setThoughts(e.target.value)}
                  className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
                  placeholder="Share your thoughts or additional details"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Submit
              </button>
              <Link
                to="/home"
                className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListYourSpace;