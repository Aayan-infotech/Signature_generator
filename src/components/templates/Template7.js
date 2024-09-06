import React from 'react';
import { FaPhone, FaMobileAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTiktok, FaAmazon, FaWhatsapp } from 'react-icons/fa';

const Template7 = ({ data, onSubmit }) => {
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
    fontFamily: data.font,
    color: data.color,
    fontSize: getFontSize(),
    lineHeight: getSpacing(),
    maxWidth: '600px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  };

  const headerStyle = {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px'
  };

  const iconStyle = (color) => ({
    color: color,
    backgroundColor: '#f9f9f9',
    padding: '5px',
    borderRadius: '50%'
  });

  const socialMediaStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
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

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <p>{data.title}</p>
        <h3>{data.name}</h3>
        <p>{data.company}</p>
      </div>
      <div>
        <p><FaPhone /> {data.phone}</p>
        <p><FaMobileAlt /> {data.mobile}</p>
        <p><FaGlobe /> <a href={`http://${data.website}`} style={{ color: data.color }}>{data.website}</a></p>
        <p><FaEnvelope /> {data.email}</p>
        <p><FaMapMarkerAlt /> {data.address}</p>
      </div>
      <div style={socialMediaStyle}>
        <FaInstagram size={24} style={iconStyle('#E4405F')} />
        <FaFacebook size={24} style={iconStyle('#1877F2')} />
        <FaLinkedin size={24} style={iconStyle('#0A66C2')} />
        <FaAmazon size={24} style={iconStyle('#FF9900')} />
        <FaWhatsapp size={24} style={iconStyle('#25D366')} />
        <FaTiktok size={24} style={iconStyle('#000000')} />
        <FaTimes size={24} style={iconStyle('#000000')} />
      </div>
      <button onClick={() => onSubmit(data)} style={buttonStyle}>
        OK, I'm done
      </button>
    </div>
  );
};

export default Template7;
