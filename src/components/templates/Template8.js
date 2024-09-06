import React from 'react';
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTiktok, FaAmazon, FaMobileAlt, FaWhatsapp } from 'react-icons/fa';

const Template8 = ({ data, onSubmit }) => {
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
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    border: `2px solid ${data.color}`
  };

  const contentStyle = {
    flex: 1
  };

  const socialMediaStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderTop: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    paddingTop: '20px',
    paddingBottom: '20px'
  };

  const socialIconStyle = {
    color: data.color,
    fontSize: '24px',
    padding: '10px',
    border: `2px solid ${data.color}`,
    borderRadius: '50%'
  };

  return (
    <div style={containerStyle}>
      <img src={data.image} alt="Profile" style={imageStyle} />
      <div style={contentStyle}>
        <h2 style={{ margin: 0, fontWeight: 'bold' }}>{data.name}</h2>
        <p style={{ margin: 0 }}>{data.title}</p>
        <p style={{ margin: 0 }}>{data.company}</p>
        <div style={{ marginTop: '10px' }}>
          <p><FaPhone /> {data.phone}</p>
          <p><FaMobileAlt /> {data.mobile}</p>
          <p><FaGlobe /> <a href={`http://${data.website}`} style={{ color: data.color }}>{data.website}</a></p>
          <p><FaEnvelope /> {data.email}</p>
          <p><FaMapMarkerAlt /> {data.address}</p>
        </div>
        <div style={socialMediaStyle}>
          <FaFacebook style={socialIconStyle} />
          <FaInstagram style={socialIconStyle} />
          <FaLinkedin style={socialIconStyle} />
          <FaTimes style={socialIconStyle} />
          <FaTiktok style={socialIconStyle} />
          <FaAmazon style={socialIconStyle} />
          <FaWhatsapp style={socialIconStyle} />
        </div>
      </div>
      <button onClick={() => onSubmit(data)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', alignSelf: 'flex-start' }}>
        OK, I'm done
      </button>
    </div>
  );
};

export default Template8;
