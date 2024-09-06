import React from 'react';
import { FaPhone, FaMobileAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTiktok } from 'react-icons/fa';

const Template6 = ({ data, onSubmit }) => {
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
    <div style={{ fontFamily: data.font, color: data.color, fontSize: getFontSize(), lineHeight: getSpacing(), maxWidth: '600px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={data.image} alt="Profile" style={{ borderBottom: '10px', borderRadius: '50%', width: '80px', height: '80px', marginRight: '20px' }} />
        <div>
          <h2 style={{ margin: 0, fontWeight: 'bold' }}>{data.name}</h2>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#555' }}>{data.title}, {data.company}</p>
        </div>
      </div>
      <div>
        <p><FaPhone /> {data.phone}</p>
        <p><FaMobileAlt /> {data.mobile}</p>
        <p><FaGlobe /> <a href={`http://${data.website}`} style={{ color: data.color }}>{data.website}</a></p>
        <p><FaEnvelope /> {data.email}</p>
        <p><FaMapMarkerAlt /> {data.address}</p>
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px', backgroundColor: '#2c3e50', padding: '10px', borderRadius: '5px' }}>
        <FaInstagram size={24} style={{ color: '#fff', backgroundColor: '#2c3e50', padding: '10px', borderRadius: '50%' }} />
        <FaFacebook size={24} style={{ color: '#fff', backgroundColor: '#2c3e50', padding: '10px', borderRadius: '50%' }} />
        <FaLinkedin size={24} style={{ color: '#fff', backgroundColor: '#2c3e50', padding: '10px', borderRadius: '50%' }} />
        <FaTimes size={24} style={{ color: '#fff', backgroundColor: '#2c3e50', padding: '10px', borderRadius: '50%' }} />
        <FaTiktok size={24} style={{ color: '#fff', backgroundColor: '#2c3e50', padding: '10px', borderRadius: '50%' }} />
      </div>
      <button onClick={() => onSubmit(data)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', float: 'right' }}>
        OK, I'm done
      </button>
    </div>
  );
};

export default Template6;
