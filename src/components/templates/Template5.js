import React from 'react';
import {
  FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt,
  FaInstagram, FaFacebook, FaLinkedin, FaAmazon, FaTwitter, FaWhatsapp
} from 'react-icons/fa';

const Template5 = ({ data, onSubmit }) => {
  // Function to determine font size
  const getFontSize = () => {
    switch (data.size) {
      case 'small': return '12px';
      case 'medium': return '16px';
      case 'large': return '20px';
      default: return '16px';
    }
  };

  // Function to determine spacing
  const getSpacing = () => {
    return data.spacing === 'wide' ? '1.5em' : '1em';
  };

  // Container style
  const containerStyle = {
    fontFamily: data.font || 'Arial, sans-serif',
    color: data.color || '#4A4A4A',
    fontSize: getFontSize(),
    lineHeight: getSpacing(),
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '900px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: data.backgroundColor || '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '100%', // Ensure it adapts to the container width
    boxSizing: 'border-box', // Includes padding and border in the element’s total width and height
  };

  // Image style
  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '10px', // Rounded corners
    marginBottom: '20px', // Adjust as needed
  };

  // Content style
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Static gap between content items
  };

  // Contact style for aligning phone and website in one row, and email and address in another
  const contactStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px', // Static gap between contact items
    marginTop: '10px',
    flexWrap: 'wrap', // Allow wrapping of items if necessary
  };

  // Social icons style
  const socialIconsStyle = {
    display: 'flex',
    gap: '10px', // Static gap between social icons
    marginTop: '20px',
  };

  // Icon style
  const iconStyle = {
    color: data.fontColor || '#4A4A4A',
  };

  return (
    <div style={containerStyle}>
      {/* Image */}
      <img src={data.image || '/path/to/default/image.jpg'} alt="Profile" style={imageStyle} />

      {/* Name, Title, Company */}
      <div style={contentStyle}>
        <h2 style={{ color: data.fontColor || '#4A4A4A', marginBottom: '10px' }}>{data.name}</h2>
        <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>{data.title}</p>
        <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>{data.company}</p>
      </div>

      {/* Contact Information */}
      <div style={contactStyle}>
        <p style={{ margin: '0' }}><FaPhone style={iconStyle} /> {data.phone}</p>
        <p style={{ margin: '0' }}><FaGlobe style={iconStyle} /> <a href={`http://${data.website}`} style={{ color: data.fontColor, textDecoration: 'none' }}>{data.website}</a></p>
      </div>

      <div style={contactStyle}>
        <p style={{ margin: '0' }}><FaEnvelope style={iconStyle} /> {data.email}</p>
        <p style={{ margin: '0' }}><FaMapMarkerAlt style={iconStyle} /> {data.address}</p>
      </div>

      {/* Social Media Icons */}
      <div style={socialIconsStyle}>
        {data.socialLinks && data.socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: social.color }}>
              <Icon size={30} />
            </a>
          );
        })}
      </div>

      {/* "OK, I'm done" Button */}
      <button onClick={() => onSubmit(data)} style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: getFontSize(), // Ensure button font size is adjustable
      }}>
        OK, I'm done
      </button>
    </div>
  );
};

export default Template5;
