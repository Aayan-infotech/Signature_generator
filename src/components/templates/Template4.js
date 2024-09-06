import React from 'react';
import {
  FaPhone, FaMobileAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt,
  FaGithub, FaInstagram, FaLinkedin, FaAmazon, FaTwitter, FaWhatsapp, FaTiktok
} from 'react-icons/fa';

const Template4 = ({ data, onSubmit }) => {
  const containerStyle = {
    fontFamily: data.font || 'Arial, sans-serif',
    color: data.color || '#4A4A4A',
    fontSize: '16px',
    lineHeight: '1.5em',
    display: 'flex',
    maxWidth: '900px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: data.backgroundColor || '#FFFFFF',
    borderRadius: '10px',
  };

  const leftSectionStyle = {
    flex: '0 0 20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `2px solid ${data.borderColor || '#ddd'}`,
    paddingRight: '20px',
    height: '100%',
  };

  const rightSectionStyle = {
    flex: '1',
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '20px',
  };

  const iconStyle = {
    color: '#4A4A4A',
    marginRight: '8px',
  };

  const socialIconsContainerStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-start',
    marginTop: '20px',
    flexWrap: 'wrap',
  };

  return (
    <div style={containerStyle}>
      <div style={leftSectionStyle}>
        <img src={data.image || 'avatar.jpg'} alt="Profile" style={imageStyle} />
      </div>
      <div style={rightSectionStyle}>
        <div>
          <h2 style={{ color: data.fontColor || '#4A4A4A', marginBottom: '10px' }}>{data.name}</h2>
          <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>{data.title}</p>
          <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>{data.company}</p>
          <p style={{ margin: '0 0 20px', fontWeight: 'bold' }}>{data.department}</p>
          <p style={{ margin: '10px 0' }}><FaMobileAlt style={iconStyle} /> {data.phone}</p>
          <p style={{ margin: '10px 0' }}><FaGlobe style={iconStyle} /> {data.website}</p>
          <p style={{ margin: '10px 0' }}><FaEnvelope style={iconStyle} /> {data.email}</p>
          <p style={{ margin: '10px 0' }}><FaMapMarkerAlt style={iconStyle} /> {data.address}</p>
        </div>
        <div style={socialIconsContainerStyle}>
          <FaInstagram size={30} color={data.iconColors?.instagram || "#E4405F"} />
          <FaLinkedin size={30} color={data.iconColors?.linkedin || "#0077B5"} />
          <FaAmazon size={30} color={data.iconColors?.amazon || "#FF9900"} />
          <FaGithub size={30} color={data.iconColors?.github || "#000000"} />
          <FaWhatsapp size={30} color={data.iconColors?.whatsapp || "#25D366"} />
          <FaTwitter size={30} color={data.iconColors?.twitter || "#1DA1F2"} />
        </div>
        <button onClick={() => onSubmit(data)} style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
        }}>
          OK, I'm done
        </button>
      </div>
    </div>
  );
};

export default Template4;
