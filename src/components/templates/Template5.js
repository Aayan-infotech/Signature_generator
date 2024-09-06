import React from 'react';
import {
  FaPhone, FaMobileAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt,
  FaInstagram, FaFacebook, FaLinkedin, FaAmazon, FaTwitter, FaWhatsapp, FaTiktok, FaGithub
} from 'react-icons/fa';

const Template5 = ({ data, onSubmit }) => {
  const containerStyle = {
    fontFamily: data.font || 'Arial, sans-serif',
    color: data.color || '#4A4A4A',
    fontSize: '16px',
    lineHeight: '1.5em',
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: data.backgroundColor || '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  };

  const iconStyle = {
    color: '#4A4A4A',
    marginRight: '8px',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
  };

  const detailsStyle = {
    marginLeft: '20px',
  };

  const contactStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '10px',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  };

  const iconBackgroundStyle = (color) => ({
    backgroundColor: color,
    padding: '5px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <img src={data.imageUrl || '/path/to/default/image.jpg'} alt="Profile" style={imageStyle} />
        <div style={detailsStyle}>
          <h2 style={{ color: '#4A4A4A', marginBottom: '10px' }}>{data.name}</h2>
          <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>{data.title}</p>
          <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>{data.company}</p>
          <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>{data.department}</p>
        </div>
      </div>

      <div style={contactStyle}>
        <p style={{ margin: '0' }}><FaPhone style={iconStyle} /> {data.phone}</p>
        {/* <p style={{ margin: '0' }}><FaMobileAlt style={iconStyle} /> {data.mobile}</p> */}
        <p style={{ margin: '0' }}><FaGlobe style={iconStyle} /> {data.website}</p>
        <p style={{ margin: '0' }}><FaEnvelope style={iconStyle} /> {data.email}</p>
        <p style={{ margin: '0' }}><FaMapMarkerAlt style={iconStyle} /> {data.address}</p>
      </div>

      <div style={socialIconsStyle}>
        <div style={iconBackgroundStyle(data.iconColors?.instagram || "#E4405F")}>
          <FaInstagram size={30} color="#FFF" />
        </div>
        <div style={iconBackgroundStyle(data.iconColors?.linkedin || "#0077B5")}>
          <FaLinkedin size={30} color="#FFF" />
        </div>
        <div style={iconBackgroundStyle(data.iconColors?.amazon || "#FF9900")}>
          <FaAmazon size={30} color="#FFF" />
        </div>
        <div style={iconBackgroundStyle(data.iconColors?.github || "#000000")}>
          <FaGithub size={30} color="#FFF" />
        </div>
        <div style={iconBackgroundStyle(data.iconColors?.whatsapp || "#25D366")}>
          <FaWhatsapp size={30} color="#FFF" />
        </div>
        <div style={iconBackgroundStyle(data.iconColors?.twitter || "#1DA1F2")}>
          <FaTwitter size={30} color="#FFF" />
        </div>
      </div>

      <button onClick={() => onSubmit(data)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
        OK, I'm done
      </button>
    </div>
  );
};

export default Template5;
