import React from 'react';
import {
  FaPhone, FaMobileAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt,
  FaGithub, FaInstagram, FaLinkedin, FaAmazon, FaTwitter, FaWhatsapp
} from 'react-icons/fa';
import AppContent from './AppContent';
import AppContent2 from './AppContent2'
import AppContent3 from './AppContent3'
import Parent from './Parent';


const Template4 = ({ data, onSubmit }) => {
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
    color: data.color || '#4A4A4A',
    fontSize: getFontSize(),
    lineHeight: getSpacing(),
    display: 'flex',
    maxWidth: '900px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: data.backgroundColor || '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const leftSectionStyle = {
    flex: '0 0 20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: '20px',
  };

  const rightSectionStyle = {
    flex: '1',
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  const iconStyle = {
    color: data.fontColor || '#4A4A4A',
    marginRight: '8px',
  };

  const socialIconsContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  };

  return (
    <Parent>
      <div style={leftSectionStyle}>
        <img src={data.image || 'avatar.jpg'} alt="Profile" style={imageStyle} />
      </div>
      <div style={rightSectionStyle}>
        <div>
          <h2 style={{ color: data.fontColor || '#4A4A4A', marginBottom: '10px' }}>{data.name}</h2>
          <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>{data.title}</p>
          <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>{data.company}</p>
          <p style={{ margin: '10px 0' }}>
            <FaMobileAlt style={{ ...iconStyle, color: data.fontColor || '#4A4A4A' }} /> {data.phone}
          </p>
          <p style={{ margin: '10px 0' }}>
            <FaGlobe style={{ ...iconStyle, color: data.fontColor || '#4A4A4A' }} /> {data.website}
          </p>
          <p style={{ margin: '10px 0' }}>
            <FaEnvelope style={{ ...iconStyle, color: data.fontColor || '#4A4A4A' }} /> {data.email}
          </p>
          <p style={{ margin: '10px 0' }}>
            <FaMapMarkerAlt style={{ ...iconStyle, color: data.fontColor || '#4A4A4A' }} /> {data.address}
          </p>
        </div>
        <div style={socialIconsContainerStyle}>
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

        <AppContent />
        <AppContent2 />
        {/* <AppContent3 /> */}
      </div>
    </Parent>
  );
};

export default Template4;
