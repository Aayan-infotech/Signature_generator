import React from 'react';
import {
  FaPhone,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
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

  return (
    <div style={{
      fontFamily: data.font,
      color: 'inherit',
      fontSize: getFontSize(),
      lineHeight: getSpacing(),
      maxWidth: '100%',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Container Split */}
      <div style={{ display: 'flex' }}>
        {/* Left Side (Image - 20%) */}
        <div style={{
          width: '20%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <img src={data.image} alt="Profile"
            style={{
              borderRadius: '5px',
              width: '100px',  // Square size
              height: '100px',  // Square size
              objectFit: 'cover',
            }} />
        </div>

        {/* Right Side (Content - 80%) */}
        <div style={{ width: '80%', paddingLeft: '20px' }}>
          {/* Name, Title, Company and Social Icons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ margin: 0, color: data.fontColor }}>{data.name}</h2>
              <p style={{ margin: 0, fontStyle: 'italic', color: '#555' }}>
                {data.title}, {data.company}
              </p>
            </div>
            {/* Social Media Icons Next to Title and Company */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {data.socialLinks && data.socialLinks.map(social => {
                const Icon = social.icon;
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: social.color }}>
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Horizontal Line after Name, Title, Company */}
          <hr style={{ margin: '20px 0', borderColor: data.fontColor || '#ddd', borderWidth: '2px' }} />

          {/* Contact Information */}
          <div>
            <p><FaPhone style={{ color: data.fontColor }} /> {data.phone}</p>
            <p><FaGlobe style={{ color: data.fontColor }} /> <a href={`http://${data.website}`} style={{ color: 'black', textDecoration: 'none' }}>{data.website}</a></p>
            <p><FaEnvelope style={{ color: data.fontColor }} /> {data.email}</p>
            <p><FaMapMarkerAlt style={{ color: data.fontColor }} /> {data.address}</p>
          </div>

          {/* Horizontal Line after Contact Information */}
          <hr style={{ margin: '20px 0', borderColor: data.fontColor || '#ddd', borderWidth: '2px' }} />
        </div>
      </div>

      {/* "OK, I'm done" Button */}
      <button onClick={() => onSubmit(data)} style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        alignSelf: 'center'
      }}>
        OK, I'm done
      </button>
    </div>
  );
};

export default Template3;
