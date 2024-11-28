import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import axios from 'axios';

const Parent = ({ children }) => {
  const { data, selectedContent } = useAppContext();
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  // Get the token from local storage
  const token = localStorage.getItem('token2'); 

  const getFontSize = () => {
    switch (data.size) {
      case 'small':
        return '12px';
      case 'medium':
        return '16px';
      case 'large':
        return '20px';
      default:
        return '16px';
    }
  };

  const getSpacing = () => {
    return data.spacing === 'wide' ? '1.5em' : '1em';
  };

  const onSubmit = async () => {
    const data123 = { selectedContent, data };

    try {
      const response = await axios.post(
        'http://44.196.64.110:9006/api/user-data',
        { data: data123 },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage('Data submitted successfully!');
        setErrorMessage(''); 
      }
    } catch (error) {
      console.warn(error);
      setSuccessMessage(''); 
      setErrorMessage('Failed to submit data. Please try again.');
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          fontFamily: data.font,
          color: 'inherit',
          fontSize: getFontSize(),
          lineHeight: getSpacing(),
          maxWidth: '700px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {children}
      </div>

      {/* Success and Error Messages */}
      {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}

      {/* Submit Button */}
      <button
        onClick={() => onSubmit()}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          alignSelf: 'flex-end',
        }}
      >
        OK, I'm done
      </button>
    </>
  );
};

export default Parent;
