### 🚗 Smart Parking Finder
A web-based parking assistant that helps users locate nearby parking areas using Google Maps, and informs them about the billing process after visiting the place.

📍 Features
 Interactive Google Map with visible markers

 Predefined parking locations using custom map pins

 Info box displaying a message after map loads

 Clean and responsive layout using React + TypeScript + Tailwind CSS

🧠 How It Works
The map loads with pre-defined parking spots.

Markers with custom icons show exact locations.

After loading, a message appears:
"Billing can be done after visiting the place."

🛠️ Tech Stack
Technology	Usage
React	Frontend UI
TypeScript	Static typing
Tailwind CSS	Styling
Google Maps API	Map rendering & markers
Vite	Fast development server

🚀 Getting Started
Clone the repository

-> git clone https://github.com/Lightzzz011/Hack01.git
-> cd Hack01/project

Install dependencies

-> npm install


Set up your .env file
Create a .env file at the root with your API key:

-> VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

Run the development server

-> npm run dev


📦 Folder Structure

project/
│
├── components/        # Map component
├── public/            # Public assets
├── App.tsx            # Main app entry
├── main.tsx           # React DOM mount
├── vite.config.ts     # Vite config
├── index.css          # Tailwind config
└── .env               # API key


💡 Future Ideas
Real-time parking availability

Billing integration

Admin dashboard for parking managers

