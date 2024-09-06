import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';
import './template3.scss'; // Import the SCSS file

const SignatureTemplate3 = ({ handleSubmit }) => {
  return (
    <CCard className="signature-template">
      <CCardBody>
        <CRow>
          <CCol xs="12" className="text-center">
            <img src={avatar} alt="Profile" className="profile-img" />
          </CCol>
          <CCol xs="12" className="text-center">
            <p className='cname'><strong>John Doe</strong></p>
            <p className='crole'><strong>Developer</strong></p>
            <hr />
            <p className='caddress'>123 Main St, City, Country</p>
          </CCol>
          <CCol xs="12" className="contact-section text-center">
            <div className='contact-info'>
              <p><FaEnvelope /> user@example.com</p>
              <p><FaPhone /> (123) 456-7890</p>
              <p><FaGlobe /> www.example.com</p>
            </div>
            <div className='csocial'>
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaGithub />
              <FaWhatsapp />
              <FaInstagram />
            </div>
          </CCol>
        </CRow>
        <button onClick={handleSubmit} className="done-button">Done</button>
      </CCardBody>
    </CCard>
  );
};

export default SignatureTemplate3;
