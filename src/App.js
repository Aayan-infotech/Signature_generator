// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import DetailPage from './components/Pages/DetailPage';
import ImageUploadPage from './components/Pages/ImageUploadPage';
import SocialPage from './components/Pages/SocialPage';
import DesignPage from './components/Pages/DesignPage';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<DetailPage />} />  
            <Route path="details" element={<DetailPage />} />
            <Route path="images" element={<ImageUploadPage />} />
            <Route path="social" element={<SocialPage />} />
            <Route path="design" element={<DesignPage />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;