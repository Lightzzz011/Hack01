import { useState } from 'react';
import { Building, MapPinIcon, Clock3, CreditCard, Award, Sparkles, Snowflake, Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  const [showListSpace, setShowListSpace] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'basic',
      name: 'Winter Basic',
      price: '$9.99/month',
      image: 'https://images.unsplash.com/photo-1613310023042-ad79320c00ff?auto=format&fit=crop&q=80',
      features: ['Basic spot reservations', 'Snow removal service', 'Mobile app access']
    },
    {
      id: 'premium',
      name: 'Winter Premium',
      price: '$19.99/month',
      image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?auto=format&fit=crop&q=80',
      features: ['Heated parking spots', '24/7 winter support', 'Advanced reservations', 'Reward points 2x']
    },
    {
      id: 'business',
      name: 'Winter Business',
      price: '$49.99/month',
      image: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&q=80',
      features: ['Multiple vehicle support', 'Dedicated heated zones', 'Team management', 'Priority snow clearing']
    }
  ];

  const parkingModes = [
    {
      title: "Click",
      description: "Signup for our website and – Search/Select an available space from the displayed parking lots in the map.",
      image: "https://images.unsplash.com/photo-1606787620156-2b4e1e6d3b8b?auto=format&fit=crop&q=80"
    },
    {
      title: "Call",
      description: "Commuters at the parking lot can call the customer number with Parking lot and Bay Info - Provide Vehicle Details.",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80"
    },
    {
      title: "Come-In",
      description: "Check the availability over the app. Drive your vehicle to your desired location and our operator shall assist you create a parking entry.",
      image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80"
    }
  ];

  const howItWorks = [
    {
      icon: <SearchIcon className="text-indigo-400" size={40} />,
      title: "Find Your Spot",
      description: "Search for available parking spots in your desired location"
    },
    {
      icon: <Clock3 className="text-green-400" size={40} />,
      title: "Book & Pay",
      description: "Select your time slot and complete the secure payment process"
    },
    {
      icon: <CreditCard className="text-pink-400" size={40} />,
      title: "Park with Ease",
      description: "Use your digital pass to access your reserved heated parking spot"
    },
    {
      icon: <Award className="text-orange-400" size={40} />,
      title: "Earn Rewards",
      description: "Collect points with every booking and unlock exclusive benefits"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black relative overflow-hidden">
      {/* Santa sleigh animation */}
      <div 
        className="fixed z-20 pointer-events-none"
        style={{
          animation: 'santa-fly 20s linear infinite',
          top: '50px',
          right: '-200px'
        }}
      >
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1577385384026-3175a59404a8?auto=format&fit=crop&q=80" 
            alt="Santa's Sleigh"
            className="w-32 h-32 object-contain transform -scale-x-100"
            style={{
              filter: 'brightness(1.2) contrast(1.1)'
            }}
          />
          {[...Array(5)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-yellow-300/50"
              size={16}
              style={{
                top: '50%',
                right: `${i * 20}px`,
                transform: 'translateY(-50%)',
                animation: `sparkle ${i * 0.5 + 1}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      </div>

      <nav className="bg-gray-900 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white flex items-center">
            ParkEase
          </h1>
          <div className="space-x-4">
            <Link to="/search" className="text-white hover:text-blue-400">
              Search Parking
            </Link>
            <button 
              onClick={() => setShowListSpace(true)} 
              className="text-white hover:text-blue-400"
            >
              List Your Space
            </button>
            <Link to="/team" className="text-white hover:text-blue-400">
              Our Team
            </Link>
            <Link to="/blogs" className="text-white hover:text-blue-400">
              Blogs
            </Link>
            <Link to="/profile" className="text-white hover:text-blue-400">
              Profile
            </Link>
            <button
              onClick={() => setShowSurprise(true)}
              className="text-white hover:text-blue-400 flex items-center gap-1"
            >
              <Sparkles size={16} className="text-yellow-400" />
              Surprise
            </button>
          </div>
        </div>
      </nav>

      <div className="relative h-[400px] mb-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <img
          src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?auto=format&fit=crop&q=80"
          alt="Parking Lot"
          className="w-full h-full object-cover brightness-50"
        />
        /{'>'}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Parking Made Easy</h1>
            <p className="text-xl text-gray-200 mb-6">Park,Pay,and go--its that simple</p>
            <Link 
              to="/search"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
            >
              <SearchIcon size={20} />
              Find Parking
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Modes of Parking Section */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Modes Of Parking</h2>
          <p className="text-center text-gray-300 mb-8">
            Commuter can select from any of the 3 modes to create a Parking Event.<br />
            You must obtain a receipt or an electronic confirmation of your parking event before leaving the lot.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {parkingModes.map((mode, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={mode.image} 
                    alt={mode.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{mode.title}</h3>
                  <p className="text-gray-300">{mode.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How ParkEase Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl text-center relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-600 text-4xl">
                    →
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience Winter Parking</h2>
          
          {/* Interactive Plan Selection */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-gray-800 rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedPlan === plan.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-2xl text-blue-400 mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <Snowflake className="text-blue-400 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Feature Showcase */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?auto=format&fit=crop&q=80"
                alt="Winter Smart Parking"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-4">Heated Smart Parking</h3>
              <p className="text-gray-300">
                Stay warm this winter with our climate-controlled parking spots. Advanced heating systems and snow removal
                services ensure your vehicle is protected from harsh winter conditions.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&q=80"
                alt="Winter Valet Service"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-white mb-4">Winter Valet Service</h3>
              <p className="text-gray-300">
                Let our experienced winter drivers handle your vehicle. We'll warm up your car, clear the snow,
                and ensure it's ready for your journey in any weather condition.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for a Cozy Winter Parking Experience?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied users who stay warm and stress-free during winter.
            </p>
            <Link
              to="/search"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              <SearchIcon size={20} />
              Find Your Spot
            </Link>
          </div>
        </div>

        {/* List Your Space Modal */}
        {showListSpace && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-2xl max-w-md w-full">
              <h2 className="text-2xl font-bold text-white mb-4">List Your Space</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Workplace Name</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Business name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Location</label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      className="w-full bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Additional Details</label>
                  <textarea
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
                    placeholder="Describe your parking space and requirements..."
                  ></textarea>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowListSpace(false)}
                    className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Surprise Modal */}
        {showSurprise && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-8 rounded-2xl max-w-2xl w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <button
                onClick={() => setShowSurprise(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ×
              </button>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">🎅 Holiday Parking Fortune 🎄</h2>
              <div className="space-y-6 relative z-10">
                <div className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-indigo-400 mb-4">Today's Lucky Spot: #{Math.floor(Math.random() * 100)}</h3>
                  <p className="text-gray-300">Book this magical spot today and receive:</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2">
                    <li>50% off your first hour</li>
                    <li>A complimentary car wash</li>
                    <li>Double reward points</li>
                    <li>Special winter care package</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-indigo-400 mb-4">Winter Parking Horoscope</h3>
                  <p className="text-gray-300 italic">
                    "The winter stars align for perfect parking today. Keep your spirits warm and your car warmer!"
                  </p>
                </div>
                <button
                  onClick={() => setShowSurprise(false)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Claim Your Holiday Spot
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;