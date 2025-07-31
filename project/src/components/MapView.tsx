import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 17.385044,
  lng: 78.486671,
};

const generateRandomMarkers = () => {
  return Array.from({ length: 5 }, () => ({
    lat: center.lat + (Math.random() - 0.5) * 0.05,
    lng: center.lng + (Math.random() - 0.5) * 0.05,
  }));
};

const MapView: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDTiBunJw2_qVV3VZ7K7ycfmyqtiwlejd0', // You should move this to .env
  });

  const markers = generateRandomMarkers();

  if (loadError) return <div className="text-white">Error loading map</div>;
  if (!isLoaded) return <div className="text-white">Loading map...</div>;

  // ✅ Only access `window.google` after confirming `isLoaded`
  const customIcon = {
    url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    scaledSize: new window.google.maps.Size(40, 40),
  };

  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={13} center={center}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            icon={customIcon}
          />
        ))}
      </GoogleMap>

      <div className="text-white text-center mt-4 text-lg font-medium">
        Billing can be done after visiting the place.
      </div>
    </div>
  );
};

export default MapView;
