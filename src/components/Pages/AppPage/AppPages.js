// components/AppPage.js
import React from 'react';
import AppPageGroup1 from './AppPageGroup1';
import AppPageGroup2 from './AppPageGroup2';

const AppPages = () => {
  return (
    <div>
      <h1>Manage Your Templates</h1>
      
      {/* Group 1 Templates */}
      <AppPageGroup1 />

      <hr />

      {/* Group 2 Templates */}
      <AppPageGroup2 />
    </div>
  );
};

export default AppPages;
