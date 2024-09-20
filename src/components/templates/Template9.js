import React, { useState } from 'react';
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Template9 = ({ data, onSubmit }) => {
  // State to manage active social media icon
  const [activeIcon, setActiveIcon] = useState(null);

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

  // Main container style
  const containerStyle = {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  };

  // Left section style (image and content)
  const leftSectionStyle = {
    flex: '0 0 70%',
    marginRight: getSpacing(),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  // Image style (circular)
  const imageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: getSpacing(),
  };

  // Content style
  const contentStyle = {
    fontSize: getFontSize(),
  };

  // Social media icons container (positioned to the right from 30%)
  const socialIconsContainerStyle = {
    position: 'absolute',
    right: '200px',
    top: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  // Social media icon style
  const iconStyle = {
    color: data.fontColor || '#000000',
    cursor: 'pointer',
  };

  // Media query for social icons visibility and positioning
  const mediaQueryStyle = {
    '@media (min-width: 605px)': {
      visibility: 'visible',
    },
  };

  return (
    <div style={containerStyle}>
      {/* Left Section for image and content */}
      <div style={leftSectionStyle}>
        <img src={data.image} alt="Profile" style={imageStyle} />
        <div style={contentStyle}>
          <h2 style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold', color: data.fontColor }}>{data.name}</h2>
          <p style={{ margin: `5px 0 ${getSpacing()}`, fontWeight: 'bold' }}>{data.title}</p>
          <p style={{ margin: `5px 0 ${getSpacing()}` }}>{data.company}</p>
          <p style={{ margin: `5px 0 ${getSpacing()}` }}><FaPhone style={{ color: data.fontColor }} /> {data.phone}</p>
          <p style={{ margin: `5px 0 ${getSpacing()}` }}>
            <FaGlobe style={{ color: data.fontColor }} />
            <a href={`http://${data.website}`}
              style={{ color: data.fontColor || 'inherit', textDecoration: 'none' }}>
              {data.website}
            </a>
          </p>
          <p style={{ margin: `5px 0 ${getSpacing()}` }}><FaEnvelope style={{ color: data.fontColor }} /> {data.email}</p>
          <p style={{ margin: `5px 0 ${getSpacing()}` }}><FaMapMarkerAlt style={{ color: data.fontColor }} /> {data.address}</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div style={{ ...socialIconsContainerStyle, ...mediaQueryStyle }}>
        {data.socialLinks && data.socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <div
              key={social.name}
              onClick={() => setActiveIcon(social.name)}
              style={{ ...iconStyle, color: activeIcon === social.name ? '#007bff' : iconStyle.color }}
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <Icon size={24} />
              </a>
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
        <button onClick={() => onSubmit(data)} style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: getFontSize(),
        }}>
          OK, I'm done
        </button>
      </div>
    </div>
  );
};

export default Template9;
 