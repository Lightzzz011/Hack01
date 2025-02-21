import React, { useState } from 'react';

const Chatbot: React.FC = () => {
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

        // Rule-based responses
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
        <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="p-4 bg-blue-500 text-white rounded-t-lg">
                <h3 className="text-lg font-semibold">Parking Assistant</h3>
            </div>
            <div className="p-4 h-60 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t border-gray-200">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your question..."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
            </div>
        </div>
    );
};

export default Chatbot;