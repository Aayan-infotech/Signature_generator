import React from 'react';
import {
  FaPhone, FaMobileAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt,
  FaGithub, FaInstagram, FaLinkedin, FaAmazon, FaWhatsapp, FaTwitter
} from 'react-icons/fa';

const Template2 = ({ data, onSubmit }) => {
  const containerStyle = {
    fontFamily: data.font || 'Arial, sans-serif',
    color: '#333',  
    fontSize: '16px',
    lineHeight: '1.5em',
    maxWidth: '700px',
    margin: '20px auto',
    padding: '20px',
    border: `1px solid ${data.borderColor || '#ddd'}`,
    borderRadius: '10px',
    backgroundColor: data.backgroundColor || '#f9f9f9',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  };

  const iconStyle = (color) => ({
    color: color || '#333',
    fontSize: '24px',
  });

  const imageStyle = {
    width: '100px',
    height: '100px',
    // borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    marginRight: '5%',
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={data.image || 'default-image.jpg'} alt="Profile" style={imageStyle} />
        <div>
          <h2 style={{ margin: '0 0 10px', color: data.fontColor }}>{data.name}</h2>
          <p style={{ margin: '0 0 10px' }}>{data.title}</p>
          <p style={{ margin: '0 0 20px' }}>{data.company}</p>
        </div>
      </div>

      <hr style={{ margin: '20px 0', borderColor: data.borderColor }} />

      <div style={iconContainerStyle}>
        {data.socialLinks && data.socialLinks.map(social => {
          const Icon = social.icon;
          return (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={iconStyle(social.color || data.fontColor)}>
              <Icon size={24} />
            </a>
          );
        })}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 45%', marginBottom: '15px' }}>
          <p style={{ margin: '0 0 10px' }}><FaPhone style={iconStyle(data.fontColor)} /> {data.phone}</p>
          <p style={{ margin: '10px 0' }}><FaEnvelope style={iconStyle()} /> {data.email}</p>
          <p style={{ margin: '10px 0' }}><FaMapMarkerAlt style={iconStyle()} /> {data.address}</p>
          <p style={{ margin: '0 0 10px' }}><FaGlobe style={iconStyle(data.fontColor)} /> <a href={`http://${data.website}`} style={{ color: 'black', textDecoration: 'none' }}>{data.website}</a></p>
          <p style={{ margin: '0 0 10px' }}>{data.additional}</p>
        </div>
      </div>

      <button onClick={() => onSubmit(data)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: data.buttonColor || '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
        OK, I'm done
      </button>
    </div>
  );
};

export default Template2;
