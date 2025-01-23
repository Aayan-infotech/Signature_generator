import React from 'react';
import {
  FaPhoneAlt,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaAmazon,
  FaWhatsapp,
  FaTiktok
} from 'react-icons/fa';
import AppContent from './AppContent';
import Parent from './Parent';
import AppContent2 from './AppContent2'
import AppContent3 from './AppContent3'
import avatar from './avatar.jpg'


const Template11 = ({ data, onSubmit }) => {
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

  const stripStyle = {
    backgroundColor: data.fontColor || 'black',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
    color: data.stripTextColor || 'white'
  };

  const iconColor = data.stripTextColor || 'white';
  const fontColor = data.fontColor || 'black';

  return (
    // <div style={{ fontFamily: data.font, color: data.color, fontSize: getFontSize(), lineHeight: getSpacing(), maxWidth: '800px', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'left' }}>
    <Parent>
      <div className='w-100' style={{ textAlign: 'left', padding: '20px', }}>
        {/* Circular Image */}
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <img src={data.image || avatar} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>

        {/* Name, Title, and Company */}
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: fontColor }}>{data.name}</h2>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{data.title}</p>
        <p style={{ margin: '5px 0' }}>{data.company}</p>

        {/* Contact Info Strip */}
        <div style={stripStyle}>
          {/* Phone, Email, Website, and Address in a column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
              <FaPhoneAlt style={{ color: iconColor, marginRight: '5px' }} /> <span style={{ color: iconColor }}>{data.phone}</span>
            </p>
            <p style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
              <FaEnvelope style={{ color: iconColor, marginRight: '5px' }} /> <span style={{ color: iconColor }}>{data.email}</span>
            </p>
            <p style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
              <FaGlobe style={{ color: iconColor, marginRight: '5px' }} /> <a href={`http://${data.website}`} style={{ textDecoration: 'none', color: iconColor }}>{data.website}</a>
            </p>
            <p style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
              <FaMapMarkerAlt style={{ color: iconColor, marginRight: '5px' }} /> <span style={{ color: iconColor }}>{data.address}</span>
            </p>
          </div>

          {/* Social Media Icons inside the strip (Only render if socialLinks exist) */}
          {data.socialLinks && data.socialLinks.length > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px', color: iconColor }}>
              {data.socialLinks.map(social => {
                const Icon = social.icon;
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: iconColor }}>
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          )}

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
        <AppContent3 />
      </div>

      {/* Submit Button
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => onSubmit(data)} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
          OK, I'm done
        </button>
      </div> */}
    </Parent>
    // </div>
  );
};

export default Template11;
