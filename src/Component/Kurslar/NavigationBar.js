import React from 'react';
import AppCard from './AppCard'; // Adjust the path as necessary
import TeachersCard from './Teacher';

const NavigationBar = () => {
  return (
    <div>
      {/* Your navigation links here */}
      <AppCard />
      <TeachersCard/>
    </div>
  );
};

export default NavigationBar;
