import { useState } from 'react';
import { Link } from 'react-router-dom';

const ChatbotPage = () => {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    // Greetings
    if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerInput.includes('how are you')) {
      return 'I’m just a bot, but I’m here to help you with your parking queries!';
    }

    // Website-related queries
    if (lowerInput.includes('book') || lowerInput.includes('booking')) {
      return 'To book a parking slot, go to the "Search" page, select your preferred slot, and follow the instructions.';
    } else if (lowerInput.includes('locate') || lowerInput.includes('find')) {
      return 'You can locate available parking slots on the "Search" page. Use the map or list view to find a slot near you.';
    } else if (lowerInput.includes('cancel') || lowerInput.includes('refund')) {
      return 'To cancel a booking, go to the "Profile" page, find your booking, and click "Cancel". Refunds will be processed within 5-7 business days.';
    } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return 'Parking prices vary depending on the location and duration. Check the "Search" page for detailed pricing.';
    } else {
      return 'I can only answer questions related to the parking system. Please ask about booking, locating slots, or canceling bookings.';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Parking Assistant</h1>
          <Link
            to="/home"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="h-96 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your question..."
              className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;