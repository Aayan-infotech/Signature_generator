import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';
import './template2.scss'; // Import the SCSS file

const SignatureTemplate2 = ({ handleSubmit }) => {
  return (
    <CCard className="signature-card">
      <CCardBody>
        <CRow>
          <CCol md="4" className="contact-section">
            <div className='contact-info'>
              <p><FaEnvelope className="icon" /> user@example.com</p>
              <p><FaPhone className="icon" /> (123) 456-7890</p>
              <p><FaGlobe className="icon" /> www.example.com</p>
            </div>
            <div className='social-icons'>
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaLinkedin className="icon" />
              <FaGithub className="icon" />
              <FaWhatsapp className="icon" />
              <FaInstagram className="icon" />
            </div>
          </CCol>
          <CCol md="4" className="details-section">
            <p className='signature-name'><strong>John Doe</strong></p>
            <p className='signature-role'><strong>Developer</strong></p>
            <hr />
            <p className='signature-address'>123 Main St, City, Country</p>
          </CCol>
          <CCol md="4" className="image-section">
            <img src={avatar} alt="Profile" className="profile-image" />
          </CCol>
        </CRow>
        <button className="done-button" onClick={handleSubmit}>Done</button>
      </CCardBody>
    </CCard>
  );
};

export default SignatureTemplate2;
