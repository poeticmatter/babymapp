import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import LocationInfo from './LocationInfo'; // Import the separate component for location info
import { firebaseConfig } from './firebaseConfig'; // Import your Firebase configuration


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const LocationList = ({ apiKey }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [locations, setLocations] = useState([]); // State variable for locations data

  useEffect(() => {
    // Load the Google Maps JavaScript library
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);

    // Fetch location data from Firebase Firestore
    const fetchLocations = async () => {
      try {
        const querySnapshot = await db.collection('locations').get();
        const locationsData = querySnapshot.docs.map(doc => doc.data());
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  // Map options and style
  const mapOptions = {
    zoom: 14,
    center: { lat: 51.505, lng: -0.09 },
  };

  const mapStyle = {
    width: '100%',
    height: '400px',
  };

  return (
    <div>
      {!mapLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Locations</h1>
          <GoogleMap mapContainerStyle={mapStyle} options={mapOptions}>
            {locations.map(location => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => setSelectedLocation(location)}
              />
            ))}
          </GoogleMap>

          {selectedLocation && (
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'white' }}>
              <LocationInfo location={selectedLocation} onCloseClick={() => setSelectedLocation(null)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationList;
