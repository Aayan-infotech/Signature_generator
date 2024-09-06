import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';

const styles = {
  footer: {
    backgroundColor: '#3EB2F0',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '5px',
    marginTop: '20px',
  },
  detailsSection: {
    backgroundColor: '#ffffff',
    padding: '15px',
    color: '#333',
    borderRadius: '5px',
  },
  avatarImage: {
    maxWidth: '100%',
    borderRadius: '50%',
    border: '4px solid #3EB2F0',
  },
  socialStrip: {
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',  // Gap between icons
    marginTop: '15px',
    backgroundColor: '#3EB2F0',
    color: 'white',
    padding:'10px 550px',
  },
  socialIconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  }
};

const SignatureTemplate15 = ({ handleSubmit }) => {
  return (
    <CCard>
      <CCardBody>
        <CRow>
          <CCol md="4">
            <img src={avatar} alt="Profile" style={styles.avatarImage} />
          </CCol>
          <CCol md="8">
            <div style={styles.detailsSection}>
              <p className='cname'><strong>John Doe</strong></p>
              <p className='crole'><strong>Developer</strong></p>
              <p className='caddress'>123 Main St, City, Country</p>
              <p>
                <FaEnvelope /> user@example.com<br />
                <FaPhone /> (123) 456-7890<br />
                <FaGlobe /> www.example.com<br />
                <FaMapMarkerAlt /> 123 Main St, City, Country
              </p>
            </div>
          </CCol>
        </CRow>
        <div style={styles.socialIconsContainer}>
          <div style={styles.socialStrip}>
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaGithub />
            <FaWhatsapp />
            <FaInstagram />
          </div>
        </div>
        <button onClick={handleSubmit}>Done</button>
      </CCardBody>
    </CCard>
  );
};

export default SignatureTemplate15;
