import React, { useState } from 'react';
import axios from 'axios';
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react';
import './design.scss';
import '../dashboard/dashboard.scss';
import { FaFacebook, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaUserAlt } from 'react-icons/fa';
import avatar from './avatar.png';

const Design = () => {

  const [formData, setFormData] = useState({
    font: '',
    textcolor: '',
    spacing: '',
    scale: '',
    position: '',
    shape: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9006/api/signaturedesign/signature_design', formData);
      console.log('Signature design saved', response.data);

      setFormData({
        font: '',
        textcolor: '',
        spacing: '',
        scale: '',
        position: '',
        size: '',
        shape: ''
      })
    } catch (error) {
      console.error('Error saving signature design', error);
    }
  };

  return (
    <div className="details">
      <CRow className="page-content">
        <CCol className="left-section">
          <CCard className="info-card">
            <CCardHeader className="card-header">
              <p>Design</p>
            </CCardHeader>
            <CCardBody>
              <div className="info-form">
                <div className="field">
                  <label >Font</label>
                  <input type="text" name='font' placeholder="Font" 
                    value={formData.font}
                    onChange={handleChange} />
                </div>
                <div className="field">
                  <label>Text Color</label>
                  <input type="text" name='textcolor' placeholder="Color" value={formData.textcolor}
                    onChange={handleChange} />
                </div>
                <div className="field">
                  <label>Spacing</label>
                  <input type="text" name='spacing' placeholder="Spacing" value={formData.spacing}
                    onChange={handleChange} />
                </div>
                <div className="field">
                  <label >Scale</label>
                  <input type="tel" name='scale' placeholder="Scale" value={formData.scale}
                    onChange={handleChange} />
                </div>
                <div className="field">
                  <label>Size</label>
                  <input type="text" name='size' placeholder="Size" value={formData.size}
                    onChange={handleChange} />
                </div>
                <div className="field">
                  <label>Position</label>
                  <input type="tel" name='position' placeholder="Position" value={formData.position}
                    onChange={handleChange}/>
                </div>
                <div className="field">
                  <label>Shape</label>
                  <input type="text" name='shape' placeholder="Shape" value={formData.shape}
                    onChange={handleChange}/>
                </div>

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
              </div>
            </CCardBody>
          </CCard>
          <button className='done-button d-flex align-items-center justify-content-center'  onClick={handleSubmit}>Done</button>
        </CCol> */}
      </CRow>
    </div>
  );
}

export default Design;
