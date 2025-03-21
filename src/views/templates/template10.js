import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaGlobe, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';

const SignatureTemplate10 = ({ handleSubmit }) => {
  return (
    <CCard>
      <CCardBody>
        <CRow>
          <CCol md="12" className="text-center">
            <img src={avatar} alt="Profile" />
            <p className='cname'><strong>John Doe</strong></p>
            <p className='crole'><strong>Developer</strong></p>
            <hr />
            <p className='caddress'>123 Main St, City, Country</p>
            <div className='contact-info'>
              <p><FaEnvelope /> user@example.com</p>
              <p><FaPhoneAlt /> (123) 456-7890</p>
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
        <button onClick={handleSubmit}>Done</button>
      </CCardBody>
    </CCard>
  );
};

export default SignatureTemplate10;
