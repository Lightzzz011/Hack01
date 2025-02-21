import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const blogPosts = {
  1: {
    title: "The Future of Smart Parking",
    content: `
      Smart parking is revolutionizing the way we think about urban mobility. With the integration of IoT sensors and AI-powered systems, finding a parking spot is becoming more efficient than ever before.

      Key innovations include:
      - Real-time parking space detection
      - Automated payment systems
      - Predictive analytics for parking availability
      - Integration with smart city infrastructure

      These advancements are not just making parking easier; they're also reducing traffic congestion and emissions by minimizing the time spent searching for parking spots.
    `,
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80",
    date: "March 15, 2025",
    author: "Sarah Johnson"
  },
  2: {
    title: "Sustainable Parking Solutions",
    content: `
      As cities grow more conscious of their environmental impact, parking facilities are adapting to become more sustainable. From solar-powered parking meters to green rooftop parking structures, the industry is embracing eco-friendly solutions.

      Notable trends include:
      - Solar panel covered parking spaces
      - Electric vehicle charging stations
      - Permeable parking surfaces
      - Vertical parking solutions

      These innovations are helping to reduce the environmental footprint of urban parking while creating more efficient use of limited space.
    `,
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819dd233?auto=format&fit=crop&q=80",
    date: "March 10, 2025",
    author: "Michael Chen"
  },
  3: {
    title: "Urban Mobility Trends 2025",
    content: `
      The way people move through cities is changing rapidly, and parking systems are evolving to keep pace. From shared parking spaces to integration with public transit, new trends are emerging that will shape the future of urban mobility.

      Current trends include:
      - Mobile-first parking solutions
      - Integration with ride-sharing services
      - Dynamic pricing models
      - Multi-modal transportation hubs

      These changes are creating a more connected and efficient urban transportation ecosystem.
    `,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80",
    date: "March 5, 2025",
    author: "Emma Wilson"
  }
};

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts[id as unknown as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <div className="max-w-4xl mx-auto p-6">
        <Link to="/blogs" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Blogs
        </Link>

        <article className="bg-gray-900 rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-400 mb-8">
              <span className="text-indigo-400">{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
            <div className="prose prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPost;