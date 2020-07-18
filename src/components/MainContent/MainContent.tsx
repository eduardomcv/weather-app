import React, { FunctionComponent } from 'react';
import './MainContent.scss';
import LocationSelector from '../LocationSelector';

const MainContent: FunctionComponent = () => (
  <main className="main-content">
    <LocationSelector />
  </main>
);

export default MainContent;
