import React, { FunctionComponent } from 'react';
import './LocationSelector.scss';

const LocationSelector: FunctionComponent = () => (
  <select className="location-selector">
    <option value="london">
      London
    </option>
    <option value="newyork">
      New York
    </option>
    <option value="lisbon">
      Lisbon
    </option>
  </select>
);

export default LocationSelector;
