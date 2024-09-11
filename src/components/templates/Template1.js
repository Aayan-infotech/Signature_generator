import React from 'react';
import {
  FaPhone,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Template1 = ({ data, onSubmit }) => {
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
      display: 'flex',
      fontFamily: data.font,
      color: 'inherit',
      fontSize: getFontSize(),
      lineHeight: getSpacing(),
      maxWidth: '100%',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
    }}>
      
      {/* Left side: Image (20% of the width) */}
      <div style={{
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <div style={{
          width: '80%',       // Adjust width to fit within the container
          paddingTop: '80%', // This maintains a square aspect ratio
          position: 'relative',
          marginBottom: '20px' // Space below the image
        }}>
          <img src={data.image} alt="Profile"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensure the image covers the square area
              borderRadius: '5px',
            }} />
        </div>
      </div>

      {/* Vertical Line Separator */}
      <div style={{
        width: '1px',
        backgroundColor: 'black',
        margin: '0 20px',
      }} />

      {/* Right side: Details (80% of the width) */}
      <div style={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        
        {/* Top part: Name, Title, Company */}
        <div style={{
          marginBottom: '20px',
        }}>
          <h2 style={{ margin: 0, color: data.fontColor }}>{data.name}</h2>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#555' }}>{data.title}, {data.company}</p>
        </div>

        {/* Bottom part: Contact details (icon-text, left-to-right with "|" separator, wrapping if necessary) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
          fontSize: getFontSize()
        }}>
          {/* Phone */}
          <p style={{ margin: 0 }}>
            <FaPhone style={{ color: data.fontColor }} /> {data.phone}
          </p>
          <span style={{ margin: '0 5px' }}>|</span>

          {/* Website */}
          <p style={{ margin: 0 }}>
            <FaGlobe style={{ color: data.fontColor }} /> 
            <a href={`http://${data.website}`} style={{ color: 'black', textDecoration: 'none' }}>
              {data.website}
            </a>
          </p>
          <span style={{ margin: '0 5px' }}>|</span>

          {/* Email */}
          <p style={{ margin: 0 }}>
            <FaEnvelope style={{ color: data.fontColor }} /> {data.email}
          </p>
          <span style={{ margin: '0 5px' }}>|</span>

          {/* Address */}
          <p style={{ margin: 0 }}>
            <FaMapMarkerAlt style={{ color: data.fontColor }} /> {data.address}
          </p>
        </div>

        {/* Social Media Links */}
        <div style={{
          marginTop: '20px',
          display: 'flex',
          gap: '10px',
        }}>
          {data.socialLinks && data.socialLinks.map(social => {
            const Icon = social.icon;
            return (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: social.color }}>
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        {/* Submit Button */}
        <button onClick={() => onSubmit(data)} style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          alignSelf: 'flex-end'
        }}>
          OK, I'm done
        </button>
      </div>
    </div>
  );
};

export default Template1;
