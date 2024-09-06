import React, { useState } from 'react';
import axios from 'axios';
import { CCard, CCardBody, CCardHeader, CRow, CCol, CButton } from '@coreui/react';
import './details.scss';
import { FaPlus, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../dashboard/dashboard.scss';
import avatar from './avatar.png'; // Replace with the actual path to the profile picture
import { Link } from 'react-router-dom';

const Details = () => {

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    phone: '',
    mobile: '',
    email: '',
    website: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9006/api/signature/signature_details', formData);
      console.log('Signature details saved:', response.data);

      // Reset the form data
      setFormData({
        name: '',
        title: '',
        company: '',
        phone: '',
        mobile: '',
        email: '',
        website: '',
        address: ''
      });
    } catch (error) {
      console.error('Error saving signature details:', error);
    }
  };

  return (
    <div className="details">
      <CRow className="page-content">
        <CCol className="left-section">
          <CCard className="info-card">
            <CCardHeader className="card-header">
              <p>Signature Details</p>
            </CCardHeader>
            <CCardBody>
              <div className="info-form">
                <div className="field">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="field">
                  <input 
                    type="text" 
                    name="title"  
                    placeholder="Title" 
                    value={formData.title} 
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input 
                    type="text" 
                    name="company" 
                    placeholder="Company" 
                    value={formData.company} 
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input 
                    type="tel" 
                    name="mobile" 
                    placeholder="Mobile" 
                    value={formData.mobile} 
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input 
                    type="url" 
                    name="website" 
                    placeholder="Website" 
                    value={formData.website} 
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input 
                    type="text" 
                    name="address" 
                    placeholder="Address" 
                    value={formData.address} 
                    onChange={handleChange}
                  />
                </div>
                <p> Add another+</p>
                <Link to="/images" className="upload-image-link">
                  <CButton className="save-button">
                    Upload Image
                  </CButton>
                </Link>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        {/* <CCol className="right-section">
          <h3 className='right-h3 d-flex align-items-center justify-content-center'>
            My Signature
          </h3>
          <h5 className='right-h5'>Selected Template</h5>
          <CCard className="signature-card">
            <CCardBody>
              <div className="signature-section">
                <CRow>
                  <CCol className="right-section">
                    <div className="paragraphs">
                      <div className="signature-box">
                        <CRow>
                          <CCol className="profile-pic">
                            <img src={avatar} alt="Profile" />
                          </CCol>
                          <CCol className="user-info">
                            <p className='cname'>John Doe</p>
                            <p className='crole'>Developer</p>
                            <p className='csocial'>
                              <FaFacebook className="social-icon" />
                              <FaTwitter className="social-icon" />
                              <FaLinkedin className="social-icon" />
                              <FaGithub className="social-icon" />
                            </p>
                          </CCol>
                          <CCol md="5" className="contact-info">
                            <p><FaEnvelope />    user@example.com</p>
                            <p><FaPhone />  (123) 456-7890</p>
                            <p><FaGlobe />   www.example.com</p>
                            <p><FaMapMarkerAlt />  123 Main St, City, Country</p>
                          </CCol>
                        </CRow>
                      </div>
                    </div>
                  </CCol>
                </CRow>
              </div>
              <div className='button-container'>
                <button 
                  className='done-button d-flex align-items-center justify-content-center' 
                  onClick={handleSubmit}
                >
                  Done
                </button>
              </div>
            </CCardBody> 
          </CCard>
        </CCol> */}
      </CRow>
    </div>
  );
}

export default Details;
