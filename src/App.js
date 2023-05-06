import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import LocationList from './LocationList';

const App = () => {
  // Define your API key as a constant
  const apiKey = "AIzaSyDp9MmbkIZXa2ExrzKPLIAY51CKB0EExQM";

  return (
    <div>
      {/* Other components */}
      {/* Pass the API key as a prop to the LoadScript component */}
      <LoadScript
        googleMapsApiKey={apiKey}
        // Additional props for the LoadScript component if needed
      >
        {/* Pass the API key as a prop to the LocationList component */}
        <LocationList apiKey={apiKey} />
      </LoadScript>
    </div>
  );
};

export default App;
