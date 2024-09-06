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
      fontFamily: data.font,
      color: 'inherit',
      fontSize: getFontSize(),
      lineHeight: getSpacing(),
      maxWidth: '600px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <img src={data.image} alt="Profile"
          style={{
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            marginRight: '20px'
          }} />
        <div>
          <h2 style={{ margin: 0, color: data.fontColor }}>{data.name}</h2>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#555' }}>{data.title}, {data.company}</p>
        </div>
      </div>
      <div>
        <p><FaPhone style={{ color: data.fontColor }} /> {data.phone}</p>
        <p><FaGlobe style={{ color: data.fontColor }} /> <a href={`http://${data.website}`} style={{ color: 'black', textDecoration: 'none' }}>{data.website}</a></p>
        <p><FaEnvelope style={{ color: data.fontColor }} /> {data.email}</p>
        <p><FaMapMarkerAlt style={{ color: data.fontColor }} /> {data.address}</p>
      </div>
      <div style={{
        marginTop: '20px',
        display: 'flex',
        gap: '10px'
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

export default Template1;
