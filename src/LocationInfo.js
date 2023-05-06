// LocationInfo.js

import React from 'react';

const LocationInfo = ({ location, onCloseClick }) => {
  return (
    <div>
      <h2>{location.name}</h2>
      <p>{location.address}</p>
      <button onClick={onCloseClick}>Close</button>
    </div>
  );
};

export default LocationInfo;
