import React from 'react';
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';

const Template7 = ({ data, onSubmit }) => {
  const getFontSize = () => {
    switch (data.size) {
      case 'small': return '14px';
      case 'medium': return '18px';
      case 'large': return '22px';
      default: return '18px';
    }
  };

  const getSpacing = () => {
    return data.spacing === 'wide' ? '1.6em' : '1.2em';
  };

  const containerStyle = {
    fontFamily: data.font,
    color: data.color,
    fontSize: getFontSize(),
    lineHeight: getSpacing(),
    maxWidth: '800px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px'
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    border: `2px solid ${data.color}`
  };

  const contentStyle = {
    flex: 1
  };

  const socialMediaStyle = {
    marginTop: '20px',
    display: 'flex',
    gap: '10px', 
    padding: '20px 0',
    borderTop: '1px solid #ddd',
    borderBottom: '1px solid #ddd'
  };

  const socialIconStyle = {
    color: data.color,
    fontSize: '24px',
    padding: '10px',
    border: `2px solid ${data.color}`,
    borderRadius: '50%'
  };

  // Updated icon style to use the same color as the name
  const iconStyle = {
    color: data.fontColor, // Use fontColor for both name and icons
    marginRight: '8px',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block',
    width: '100%',
    textAlign: 'center',
  };

  return (
    <>
      <div style={containerStyle}>
        {/* Content on the Left */}
        <div style={contentStyle}>
          <h2 style={{ margin: 0, fontWeight: 'bold', color: data.fontColor }}>{data.name}</h2>
          <p style={{ margin: 0, color: data.color }}>{data.title}</p>
          <p style={{ margin: 0, color: data.color }}>{data.company}</p>
          <div style={{ marginTop: '10px' }}>
            <p><FaPhone style={iconStyle} /> {data.phone}</p>
            <p><FaGlobe style={iconStyle} /> 
              <a 
                href={`http://${data.website}`} 
                style={{ 
                  color: data.fontColor, // Use fontColor for the link as well
                  textDecoration: 'none' 
                }}
              >
                {data.website}
              </a>
            </p>
            <p><FaEnvelope style={iconStyle} /> {data.email}</p>
            <p><FaMapMarkerAlt style={iconStyle} /> {data.address}</p>
          </div>

          {/* Social Media Links */}
          {data.socialLinks && data.socialLinks.length > 0 && (
            <div style={socialMediaStyle}>
              {data.socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: social.color }}>
                    <Icon style={socialIconStyle} />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Image on the Right */}
        <img src={data.image} alt="Profile" style={imageStyle} />
      </div>

      {/* Button below the template */}
      <button onClick={() => onSubmit(data)} style={buttonStyle}>
        OK, I'm done
      </button>
    </>
  );
};

export default Template7;
