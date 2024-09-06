import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';

const styles = {
  header: {
    backgroundColor: '#3EB2F0',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '5px',
    marginBottom: '15px',
  },
  detailsSection: {
    backgroundColor: '#eeeeee',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    color: '#333',
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
    gap: '10px',
    marginTop: '15px',
    color: '#3EB2F0',
  },
};

const SignatureTemplate13 = ({ handleSubmit }) => {
  return (
    <CCard>
      <CCardBody>
        <div style={styles.header}>Contact Details</div>
        <CRow>
          <CCol md="12" style={styles.detailsSection}>
            <img src={avatar} alt="Profile" style={styles.avatarImage} />
            <div>
              <p className='cname'><strong>John Doe</strong></p>
              <p className='crole'><strong>Developer</strong></p>
              <p className='caddress'>123 Main St, City, Country</p>
              <p>
                <FaEnvelope /> user@example.com<br />
                <FaPhone /> (123) 456-7890<br />
                <FaGlobe /> www.example.com<br />
                <FaMapMarkerAlt /> 123 Main St, City, Country
              </p>
              <div style={styles.socialStrip}>
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

export default SignatureTemplate13;
