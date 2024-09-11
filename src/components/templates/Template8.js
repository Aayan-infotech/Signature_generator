import React from 'react';
import {
  FaPhone, FaMobileAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaAmazon, FaWhatsapp
} from 'react-icons/fa';

const Template8 = ({ data, onSubmit }) => {
  const getFontSize = () => {
    switch (data.size) {
      case 'small': return '12px';
      case 'medium': return '16px';
      case 'large': return '20px';
      default: return '16px';
    }
  };

  const getSpacing = () => {
    return data.spacing === 'wide' ? '1.5em' : '1em';
  };

  const containerStyle = {
    display: 'flex',
    fontFamily: data.font,
    color: data.color || '#000', // default to black if no color
    fontSize: getFontSize(),
    lineHeight: getSpacing(),
    maxWidth: '900px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    margin: '0 auto',
  };

  const leftSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '10px',
  };

  const rightSectionStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const imageStyle = {
    width: '110px',
    height: '133px',
    borderRadius: '2px',
    objectFit: 'cover',
    marginBottom: '20px'
  };

  // Strip color now dynamic
  const headerStyle = {
    backgroundColor: data.fontColor || '#2c3e50',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px'
  };

  const iconStyle = (color) => ({
    color: color || data.iconColor || data.fontColor || '#000',
    padding: '5px',
    borderRadius: '50%'
  });

  const socialMediaStyle = {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-start',
    alignItems: 'center'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    float: 'right'
  };

  const websiteLinkStyle = {
    color: data.iconColor || data.color || '#000', // match icon color or default
    textDecoration: 'none' // remove underline
  };

  return (
    <div style={containerStyle}>
      {/* Left section for square image */}
      <div style={leftSectionStyle}>
        <img src={data.image || 'avatar.jpg'} alt="Profile" style={imageStyle} />
      </div>

      {/* Right section for content */}
      <div style={rightSectionStyle}>
        <div style={headerStyle}>
          <h3>{data.name}</h3>
          <p>{data.title}</p>
          <p>{data.company}</p>
        </div>
        <div>
          {/* Dynamic icon color for each */}
          <p><FaPhone style={iconStyle(data.iconColor)} /> {data.phone}</p>
          <p><FaGlobe style={iconStyle(data.iconColor)} /> <a href={`http://${data.website}`} style={websiteLinkStyle}>{data.website}</a></p>
          <p><FaEnvelope style={iconStyle(data.iconColor)} /> {data.email}</p>
          <p><FaMapMarkerAlt style={iconStyle(data.iconColor)} /> {data.address}</p>
        </div>

        {/* Social media icons, render only if URL is provided */}
        <div style={socialMediaStyle}>
          {data.socialLinks && data.socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: social.color }}>
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <button onClick={() => onSubmit(data)} style={buttonStyle}>
          OK, I'm done
        </button>
      </div>
    </div>
  );
};

export default Template8;
