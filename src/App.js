// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import DetailPage from './components/Pages/DetailPage';
import ImageUploadPage from './components/Pages/ImageUploadPage';
import SocialPage from './components/Pages/SocialPage';
import DesignPage from './components/Pages/DesignPage';
import { AppProvider } from './context/AppContext';
import AppPage from './components/Pages/AppPage';
import Tamplate from './components/Pages/Tamplate';
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
            <Route path="template" element={<Tamplate />} />

            <Route path="app" element={<AppPage />} />
            {/* <Route path="AppPages" element={<AppPages />} /> */}
            {/* <Route path="template" element={<TamplatesPreview />} /> */}
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;