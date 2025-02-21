import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import Footer from '../components/Footer';

const blogs = [
  {
    id: 1,
    title: "The Future of Smart Parking",
    excerpt: "Discover how IoT and AI are revolutionizing parking management...",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80",
    date: "March 15, 2025",
    author: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Urban Mobility Revolution",
    excerpt: "How smart cities are transforming the way we park and commute...",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80",
    date: "March 10, 2025",
    author: "Michael Chen"
  },
  {
    id: 3,
    title: "The Economics of Smart Parking",
    excerpt: "Understanding the financial impact of modern parking solutions...",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80",
    date: "March 8, 2025",
    author: "Emma Wilson"
  },
  {
    id: 4,
    title: "Green Parking Solutions",
    excerpt: "Innovative approaches to environmentally conscious parking...",
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&q=80",
    date: "March 5, 2025",
    author: "Alex Thompson"
  }
];

function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <div className="p-4 bg-gray-900 shadow-lg">
        <Link to="/home" className="inline-flex items-center text-white hover:text-indigo-400">
          <HomeIcon size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-white mb-8">ParkEase Blog</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`} className="transform hover:scale-105 transition-transform">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2">{blog.title}</h2>
                  <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-indigo-400">{blog.author}</span>
                    <span className="text-gray-500">{blog.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;