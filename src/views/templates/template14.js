import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';

const styles = {
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  coloredStrip: {
    backgroundColor: '#3EB2F0',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  avatarImage: {
    maxWidth: '100%',
    borderRadius: '50%',
    border: '5px solid #333',
  },
  detailsSection: {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    color: '#333',
    borderRadius: '5px',
  },
};

const SignatureTemplate14 = ({ handleSubmit }) => {
  return (
    <CCard>
      <CCardBody>
        <div style={styles.header}>Contact Info</div>
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
              <div style={styles.coloredStrip}>
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
                <FaGithub />
                <FaWhatsapp />
                <FaInstagram />
              </div>
            </div>
          </CCol>
        </CRow>
        <button onClick={handleSubmit}>Done</button>
      </CCardBody>
    </CCard>
  );
};

export default SignatureTemplate14;
