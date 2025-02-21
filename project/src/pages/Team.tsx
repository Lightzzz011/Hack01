import { Link } from 'react-router-dom';
import TeamPhoto from '../assets/TEAM.jpg'; // Import your team photo

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Meet Our Team</h1>
          <Link
            to="/home"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8">
          <div className="flex justify-center">
            <img
              src={TeamPhoto}
              alt="Our Team"
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">The Enthusiasts</h2>
            <p className="text-gray-300">
              We are a passionate group working to make parking easier for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;