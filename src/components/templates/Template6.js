import React from 'react';
import {
  FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaInstagram, FaLinkedin, FaTiktok
} from 'react-icons/fa';

const Template6 = ({ data, onSubmit }) => {
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
    color: data.color || '#000000',
    fontSize: getFontSize(),
    lineHeight: getSpacing(),
    maxWidth: '600px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  };

  // Image style (square)
  const imageStyle = {
    borderRadius: '10px', // Slightly rounded square
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '20px',
  };

  // Icon style with dynamic color handling
  const iconStyle = {
    color: data.fontColor || '#000000', // Apply data color to icons
    marginRight: '8px',
  };

  // Social media icons container with white color
  const socialIconsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    padding: '10px',
    backgroundColor: data.fontColor || '#2c3e50', 
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={data.image || 'default.jpg'} alt="Profile" style={imageStyle} />
        <div>
          <h2 style={{ margin: 0, fontWeight: 'bold', color: data.fontColor || '#000000' }}>{data.name}</h2>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#555' }}>{data.title}, {data.company}</p>
        </div>
      </div>
      
      {/* Contact Info */}
      <div>
        <p><FaPhone style={iconStyle} /> {data.phone}</p>
        <p><FaGlobe style={iconStyle} /> 
          <a 
            href={`http://${data.website}`} 
            style={{ 
              color: data.color || '#000000', 
              textDecoration: 'none' 
            }}
          >
            {data.website}
          </a>
        </p>
        <p><FaEnvelope style={iconStyle} /> {data.email}</p>
        <p><FaMapMarkerAlt style={iconStyle} /> {data.address}</p>
      </div>

      {/* Social Media Icons */}
      <div style={socialIconsContainerStyle}>
        {data.socialLinks && data.socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <Icon size={24} />
            </a>
          );
        })}
      </div>

      {/* Submit Button */}
      <button onClick={() => onSubmit(data)} style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        float: 'right',
      }}>
        OK, I'm done
      </button>
    </div>
  );
};

export default Template6;
