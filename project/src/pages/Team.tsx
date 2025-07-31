import { Github, Linkedin, Mail } from 'lucide-react';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Passionate about revolutionizing urban parking",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:alex@parkease.com"
    }
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    bio: "Full-stack wizard & parking optimization expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:sarah@parkease.com"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "UX Designer",
    bio: "Creating seamless parking experiences",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:michael@parkease.com"
    }
  }
];

function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Meet Our Team</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{member.name}</h2>
                <p className="text-indigo-400 mb-2">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.email} className="text-gray-400 hover:text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Join Our Team</h2>
          <p className="text-gray-400 text-center mb-6">
            We're always looking for talented individuals who are passionate about revolutionizing urban parking.
            If you think you'd be a great fit, we'd love to hear from you!
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:careers@parkease.com"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;