import React from 'react';
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTiktok } from 'react-icons/fa';

const Template9 = ({ data, onSubmit }) => {
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
    <div style={{ fontFamily: data.font, color: data.color, fontSize: getFontSize(), lineHeight: getSpacing(), maxWidth: '600px', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ backgroundColor: '#e8effc', padding: '10px 20px', borderRadius: '10px 10px 0 0' }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#007bff' }}>New Message</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>{data.name}</h2>
          <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{data.title}</p>
          <p style={{ margin: '5px 0' }}>{data.company}</p>
          <div style={{ marginTop: '10px' }}>
            <p style={{ margin: '5px 0' }}><FaPhone /> {data.phone}</p>
            <p style={{ margin: '5px 0' }}><FaGlobe /> <a href={`http://${data.website}`} style={{ color: data.color }}>{data.website}</a></p>
            <p style={{ margin: '5px 0' }}><FaEnvelope /> {data.email}</p>
            <p style={{ margin: '5px 0' }}><FaMapMarkerAlt /> {data.address}</p>
          </div>
        </div>
        <img src={data.image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '10px', objectFit: 'cover' }} />
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px', padding: '0 20px' }}>
        <FaFacebook size={24} />
        <FaInstagram size={24} />
        <FaLinkedin size={24} />
        <FaTimes size={24} />
        <FaTiktok size={24} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => onSubmit(data)} style={{ padding: '10px 20px', backgroundColor: '#d9dadb', color: '#333', border: 'none', borderRadius: '5px' }}>
          OK, I'm done
        </button>
      </div>
    </div>
  );
};

export default Template9;