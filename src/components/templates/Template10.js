import React from 'react';
import { FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaAmazon, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import AppContent from './AppContent';
import Parent from './Parent';
import AppContent2 from './AppContent2'
import AppContent3 from './AppContent3'
import avatar from './avatar.jpg'


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
  // const containerStyle = {
  //   fontFamily: data.font,
  //   color: data.color,
  //   fontSize: getFontSize(),
  //   lineHeight: getSpacing(),
  //   maxWidth: '800px',
  //   padding: '20px',
  //   borderRadius: '10px',
  //   backgroundColor: '#fff',
  //   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  //   display: 'flex',
  //   alignItems: 'flex-start',
  // };

  // Left section style (40%)
  const leftSectionStyle = {
    flex: '0 0 40%',
    paddingRight: '20px',
    textAlign: 'right',
  };

  // Image style (circular) with right margin
  const imageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    paddingRight: '20px',
  };

  // Right section style (50%)
  const rightSectionStyle = {
    flex: '0 0 47%',
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
    <Parent>
      {/* <div style={containerStyle}> */}
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
        <img src={data.image || avatar} alt="Profile" style={imageStyle} />
      </div>

      {/* Right Section */}
      <div style={rightSectionStyle}>
        <p style={{ margin: '5px 0' }}><FaPhoneAlt style={{ color: socialIconColor }} /> {data.phone}</p>
        <p style={{ margin: '5px 0' }}><FaGlobe style={{ color: socialIconColor }} /> <a href={`http://${data.website}`} style={{ color: socialIconColor, textDecoration: 'none' }}>{data.website}</a></p>
        <p style={{ margin: '5px 0' }}><FaEnvelope style={{ color: socialIconColor }} /> {data.email}</p>
        <p style={{ margin: '5px 0' }}><FaMapMarkerAlt style={{ color: socialIconColor }} /> {data.address}</p>
      </div>

      {/* Submit Button */}
      <div className='flex-column' style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>

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
        <AppContent3 />
      </div>
      {/* </div> */}
    </Parent>
  );
};

export default Template10;
