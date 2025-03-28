import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaGlobe, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';

const SignatureTemplate7 = ({ handleSubmit }) => {
  return (
    <CCard>
      <CCardBody>
        <CRow>
          <CCol md="4">
            <img src={avatar} alt="Profile" />
          </CCol>
          <CCol md="4">
            <div className='contact-info'>
              <p><FaEnvelope /> user@example.com</p>
              <p><FaPhoneAlt /> (123) 456-7890</p>
              <p><FaGlobe /> www.example.com</p>
              <p><FaMapMarkerAlt /> 123 Main St, City, Country</p>
            </div>
          </CCol>
          <CCol md="4">
            <p className='cname'><strong>John Doe</strong></p>
            <p className='crole'><strong>Developer</strong></p>
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
        <button onClick={handleSubmit}>Done</button>
      </CCardBody>
    </CCard>
  );
};

export default SignatureTemplate7;
