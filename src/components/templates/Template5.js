import React from 'react';
import {
  FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa';
import Parent from './Parent'; // Importing Parent component
import AppContent from './AppContent'; // Importing AppContent component
import AppContent2 from './AppContent2';
import AppContent3 from './AppContent3';

const Template5 = ({ data }) => {
  // Function to determine font size
  const getFontSize = () => {
    switch (data.size) {
      case 'small': return '12px';
      case 'medium': return '16px';
      case 'large': return '20px';
      default: return '16px';
    }
  };

  // Function to determine spacing
  const getSpacing = () => {
    return data.spacing === 'wide' ? '1.5em' : '1em';
  };

  // Container style
  // const containerStyle = {
  //   fontFamily: data.font || 'Arial, sans-serif',
  //   color: '#333',
  //   fontSize: getFontSize(),
  //   lineHeight: getSpacing(),
  //   maxWidth: '700px',
  //   margin: '20px auto',
  //   padding: '20px',
  //   border: `1px solid ${data.borderColor || '#ddd'}`,
  //   borderRadius: '10px',
  //   backgroundColor: data.backgroundColor || '#f9f9f9',
  //   textAlign: 'center', // Centering text
  // };

  // Image style
  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  // Content style
  const contentStyle = {
    display: 'block',
    margin: '0 auto',
  };

  // Contact style for stacking all the contact info
  const contactStyle = {
    display: 'block',
    marginTop: '10px',
  };

  // Social icons style
  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  };

  // Icon style
  const iconStyle = {
    color: data.fontColor || '#4A4A4A',
  };

  return (
    <Parent>
      {/* Container */}
      <div>
        {/* Image */}
        <img src={data.image || '/path/to/default/image.jpg'} alt="Profile" style={imageStyle} />

        {/* Name, Title, Company */}
        <div style={contentStyle}>
          <h2 style={{ color: data.fontColor || '#4A4A4A', marginBottom: '10px' }}>{data.name}</h2>
          <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>{data.title}</p>
          <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>{data.company}</p>
        </div>

        {/* Contact Information */}
        <div style={contactStyle}>
          <p style={{ margin: '10px 0' }}><FaPhoneAlt style={iconStyle} /> {data.phone}</p>
          <p style={{ margin: '10px 0' }}><FaGlobe style={iconStyle} /> <a href={`http://${data.website}`} style={{ color: data.fontColor, textDecoration: 'none' }}>{data.website}</a></p>
          <p style={{ margin: '10px 0' }}><FaEnvelope style={iconStyle} /> {data.email}</p>
          <p style={{ margin: '10px 0' }}><FaMapMarkerAlt style={iconStyle} /> {data.address}</p>
        </div>

        {/* Social Media Icons */}
        <div style={socialIconsStyle}>
          {data.socialLinks && data.socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: social.color }}>
                <Icon size={30} />
              </a>
            );
          })}
        </div>
        {/* Render Additional Fields */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
          }}
        >
          {data.additionalFields &&
            data.additionalFields.map((field, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0, fontSize: getFontSize(), color: data.fontColor }}>
                  {field.label} {field.value} |
                </p>
              </div>
            ))}
        </div>


        {/* Additional Content */}
        <AppContent />
        <AppContent2 />
        <AppContent3 />
      </div>
    </Parent>
  );
};

export default Template5;
