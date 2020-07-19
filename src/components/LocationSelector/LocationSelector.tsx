import React, { FunctionComponent, ChangeEventHandler } from 'react';
import './LocationSelector.scss';

interface LocationSelectorProps {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value: string;
}

const LocationSelector: FunctionComponent<LocationSelectorProps> = ({ onChange, value }) => (
  <select
    className="location-selector"
    onChange={onChange}
    value={value}
  >
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
