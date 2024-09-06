import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';
import './template4.scss'; // Import the SCSS file

const SignatureTemplate4 = ({ handleSubmit }) => {
  return (
    <div className="signature-container">
      <CCard className="signature-card">
        <CCardBody>
          <div className="image-container">
            <img src={avatar} alt="Profile" className="profile-image" />
          </div>
          <div className="content-container">
            <CRow>
              <CCol md="6" className="left-column">
                <p className='cname'><strong>John Doe</strong></p>
                <p className='crole'>Developer</p>
                <p className='caddress'>123 Main St, City, Country</p>
              </CCol>
              <CCol md="6" className="right-column">
                <div className='contact-info'>
                  <p><FaEnvelope /> user@example.com</p>
                  <p><FaPhone /> (123) 456-7890</p>
                  <p><FaGlobe /> www.example.com</p>
                </div>
                <div className='social-icons'>
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaGithub /></a>
                  <a href="#"><FaWhatsapp /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
      </CCard>
      <button className="done-button" onClick={handleSubmit}>Done</button>
    </div>
  );
};

export default SignatureTemplate4;
