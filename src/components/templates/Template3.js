import React from 'react';
import {
  FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaInstagram, FaLinkedin, FaAmazon,
  FaGithub, FaWhatsapp, FaTwitter, FaTiktok
} from 'react-icons/fa';

const Template3 = ({ data, onSubmit }) => {
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
    fontFamily: data.font || 'Arial, sans-serif',
    color: 'inherit',
    fontSize: getFontSize(),
    lineHeight: getSpacing(),
    maxWidth: '700px',
    margin: '20px auto',
    padding: '20px',
    border: `1px solid ${data.borderColor || '#ddd'}`,
    borderRadius: '10px',
    backgroundColor: data.backgroundColor || '#f9f9f9',
  };

  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    border: `2px solid ${data.borderColor || '#ddd'}`,
    borderRadius: '8px',
    overflow: 'hidden',
    width: '100px', // Size of the image frame
    height: '100px', // Size of the image frame
    marginRight: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const horizontalLineStyle = {
    margin: '20px 0',
    borderColor: data.borderColor || '#ddd',
  };

  const iconContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  };

  const iconStyle = (color) => ({
    color: color || data.fontColor,
    fontSize: '24px',
  });

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={imageContainerStyle}>
          <img src={data.image} alt="Profile" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <h2 style={{ margin: 0, color: data.fontColor }}>{data.name}</h2>
          <p style={{ marginBottom: '10px', fontStyle: 'italic', color: '#555' }}>{data.title}, {data.company}</p>
          <p style={{ margin: '0 0 10px' }}><FaPhone style={iconStyle(data.fontColor)} /> {data.phone}</p>
          <p style={{ margin: '0 0 10px' }}><FaGlobe style={iconStyle(data.fontColor)} /> <a href={`http://${data.website}`} style={{ color: 'black', textDecoration: 'none' }}>{data.website}</a></p>
          <p style={{ margin: '0 0 10px' }}><FaEnvelope style={iconStyle(data.fontColor)} /> {data.email}</p>
          <p style={{ margin: '0 0 10px' }}>          <FaMapMarkerAlt style={iconStyle(data.fontColor)} /> {data.address}</p>
        </div>
      </div>
      <hr style={horizontalLineStyle} />
      <div style={iconContainerStyle}>
        {data.socialLinks && data.socialLinks.map(social => {
          const Icon = social.icon;
          return (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={iconStyle(social.color)}>
              <Icon size={24} />
            </a>
          );
        })}
      </div>
      <button onClick={() => onSubmit(data)} style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px'
      }}>
        OK, I'm done
      </button>
    </div>
  );
};

export default Template3;

