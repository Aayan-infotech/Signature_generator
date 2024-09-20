import React from 'react';
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaAmazon, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Template10 = ({ data, onSubmit }) => {
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

  // Main container style with color, font, and font size
  const containerStyle = {
    fontFamily: data.font,
    color: data.color,
    fontSize: getFontSize(),
    lineHeight: getSpacing(),
    maxWidth: '800px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'flex-start',
  };

  // Left section style (40%)
  const leftSectionStyle = {
    flex: '0 0 40%',
    marginRight: '20px',
    textAlign: 'right',
  };

  // Image style (circular) with right margin
  const imageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '20px',
  };

  // Right section style (50%)
  const rightSectionStyle = {
    flex: '0 0 50%',
  };

  // Social media icons container
  const socialIconsContainerStyle = {
    display: 'flex',
    flexDirection: 'row-reverse', 
    gap: '10px',
    marginBottom: '20px',
    justifyContent: 'flex-start', 
  };

  // Icon style with dynamic color handling
  const iconStyle = {
    color: data.fontColor || '#000000',
    marginRight: '8px',
  };

  // Social media icon color
  const socialIconColor = data.fontColor || '#000000';

  return (
    <div style={containerStyle}>
      {/* Left Section */}
      <div style={leftSectionStyle}>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: socialIconColor }}>{data.name}</h2>
        <p style={{ margin: '5px 0' }}>{data.title}</p>
        <p style={{ margin: '5px 0' }}>{data.company}</p>
        <div style={socialIconsContainerStyle}>
          {data.socialLinks && data.socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: socialIconColor }}>
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Middle Section (Circular Image) */}
      <div style={{ flex: '0 0 10%', textAlign: 'center' }}>
        <img src={data.image} alt="Profile" style={imageStyle} />
      </div>

      {/* Right Section */}
      <div style={rightSectionStyle}>
        <p style={{ margin: '5px 0' }}><FaPhone style={{ color: socialIconColor }} /> {data.phone}</p>
        <p style={{ margin: '5px 0' }}><FaGlobe style={{ color: socialIconColor }} /> <a href={`http://${data.website}`} style={{ color: socialIconColor, textDecoration: 'none' }}>{data.website}</a></p>
        <p style={{ margin: '5px 0' }}><FaEnvelope style={{ color: socialIconColor }} /> {data.email}</p>
        <p style={{ margin: '5px 0' }}><FaMapMarkerAlt style={{ color: socialIconColor }} /> {data.address}</p>
      </div>

      {/* Submit Button */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
        <button onClick={() => onSubmit(data)} style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}>
          OK, I'm done
        </button>
      </div>
    </div>
  );
};

export default Template10;
