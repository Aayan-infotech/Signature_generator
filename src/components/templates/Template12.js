import React from 'react';
import {
  FaPhone,
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

const Template12 = ({ data, onSubmit }) => {
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
    <div style={{ fontFamily: data.font, color: data.color, fontSize: getFontSize(), lineHeight: getSpacing(), maxWidth: '800px', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        {/* Name, Title, and Company */}
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: fontColor }}>{data.name}</h2>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{data.title}</p>
        <p style={{ margin: '5px 0' }}>{data.company}</p>

        {/* Circular Image */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img src={data.image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>

        {/* Contact Info Strip */}
        <div style={stripStyle} >
          {/* Phone and Website in one line */}
          <p style={{ margin: '5px 0' }}>
            <FaPhone style={{ color: iconColor }} /> <span style={{ color: iconColor }}>{data.phone}</span> &nbsp;&nbsp;   &nbsp;&nbsp;
            <FaGlobe style={{ color: iconColor }} /> <a href={`http://${data.website}`} style={{ textDecoration: 'none', color: iconColor }}>{data.website}</a>
          </p>

          {/* Email and Address in one line */}
          <p style={{ margin: '5px 0' }}>
            <FaEnvelope style={{ color: iconColor }} /> <span style={{ color: iconColor }}>{data.email}</span> &nbsp;&nbsp;  &nbsp;&nbsp;
            <FaMapMarkerAlt style={{ color: iconColor }} /> <span style={{ color: iconColor }}>{data.address}</span>
          </p>

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
      </div>

      {/* Submit Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => onSubmit(data)} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
          OK, I'm done
        </button>
      </div>
    </div>
  );
};

export default Template12;
