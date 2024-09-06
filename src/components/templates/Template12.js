import React from 'react';
import { FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin,  FaAmazon, FaWhatsapp, FaTiktok } from 'react-icons/fa';

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
    <div style={{ fontFamily: data.font, color: data.color, fontSize: getFontSize(), lineHeight: getSpacing(), maxWidth: '800px', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ backgroundColor: '#e8effc', padding: '10px 20px', borderRadius: '10px 10px 0 0' }}>
      </div>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>{data.name}</h2>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{data.title}</p>
        <p style={{ margin: '5px 0' }}>{data.company}</p>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img src={data.image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '10px', objectFit: 'cover' }} />
        </div>
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: data.color, color: 'grey', borderRadius: '10px' }}>
          <p style={{ margin: '5px 0' }}><FaPhone />  {data.phone} </p>
          <p style={{ margin: '5px 0' }}><FaGlobe />  {data.website} <FaEnvelope />  {data.email}</p>
          <p style={{ margin: '5px 0' }}><FaMapMarkerAlt /> A {data.address}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px', color: data.color }}>
          <FaInstagram /> <FaFacebook /> <FaLinkedin /> <FaAmazon />  <FaWhatsapp /> <FaTiktok />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => onSubmit(data)} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
          OK, I'm done
        </button>
      </div>
    </div>
  );
};

export default Template1;
