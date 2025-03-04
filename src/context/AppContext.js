import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const initialsData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  fontColor: '#000000',
  fontSize: 14,
  backgroundColor: '#ffffff',
  borderRadius: 0,
  template: 'Template1',
  socialLinks: [],
  additionalFields: [],
};

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(initialsData);
  const [selectedContent, setSelectedContent] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token')); // Fetch token from localStorage

  const availableTemplates = [
    'Template1', 'Template2', 'Template3', 'Template4', 'Template5',
    'Template6', 'Template7', 'Template8', 'Template9', 'Template10',
    'Template11', 'Template12',
  ];

  const handleModalSelect = (content) => {
    console.log(content);
    console.log("i am here")
    setSelectedContent({ ...selectedContent, [selectedTemplate]: content });
  };

  const handleTamplate = (t) => {
    setData((prev) => ({ ...prev, template: t }));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;  // Ensure we only try to fetch if token exists

      try {
        const response = await axios.get('http://54.236.98.193:9006/api/user-data', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
       console.log("i am here")
        setData(response?.data?.data?.data || initialsData);
        setSelectedContent(response?.data?.data?.selectedContent);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Optionally, handle token expiry here
      }
    };

    if (token) {
      fetchData();  // Fetch only if token is available
    }
  }, [token]); // Trigger the effect when the token changes

  const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken); // Store token in localStorage
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        setToken: updateToken, // Use the updateToken function
        availableTemplates,
        selectedContent,
        handleModalSelect,
        setSelectedTemplate,
        selectedTemplate,
        handleTamplate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);