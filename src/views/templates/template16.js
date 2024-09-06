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
    marginBottom: '20px',
  },
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
    padding: '20px',
    color: '#333',
    borderRadius: '5px',
    textAlign: 'center',
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
  // button: {
  //   backgroundColor: '#3EB2F0',
  //   color: 'white',
  //   border: 'none',
  //   borderRadius: '5px',
  //   padding: '10px 20px',
  //   fontSize: '1rem',
  //   cursor: 'pointer',
  //   fontWeight: 'bold',
  //   transition: 'background-color 0.3s, transform 0.3s',
  //   outline: 'none',
  //   marginTop: '20px',
  //   display: 'block',
  //   width: '100%',
  //   textAlign: 'center',
  // },
  buttonHover: {
    backgroundColor: '#2a8cc1',
    transform: 'scale(1.05)',
  },
};

const SignatureTemplate16 = ({ handleSubmit }) => {
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
        {/* <div style={styles.footer}>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaGithub />
          <FaWhatsapp />
          <FaInstagram />
        </div> */}
        <button
          style={styles.button}
          onClick={handleSubmit}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2a8cc1'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3EB2F0'}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Done
        </button>
      </CCardBody>
    </CCard>
  );
};

export default SignatureTemplate16;
