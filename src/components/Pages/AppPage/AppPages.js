// components/AppPage.js
import React from 'react';
import AppPageGroup1 from './AppPageGroup1';
import AppPageGroup2 from './AppPageGroup2';
import AppPagegroup21 from './AppPagegroup21';

const AppPages = () => {
  return (
    <div>
      <AppPageGroup1 />
      <AppPagegroup21 />
      <AppPageGroup2 />
    </div>
  );
};

export default AppPages;
