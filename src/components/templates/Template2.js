import React from 'react'
import { FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import AppContent from './AppContent'
import Parent from './Parent'
import AppContent2 from './AppContent2'
import AppContent3 from './AppContent3'
import avatar from './avatar.jpg'


const Template2 = ({ data, onSubmit }) => {
  // Function to get font size based on the provided data
  const getFontSize = () => {
    switch (data.size) {
      case 'small':
        return '12px'
      case 'medium':
        return '16px'
      case 'large':
        return '20px'
      default:
        return '16px'
    }
  }

  // Function to get line height (spacing) based on the provided data
  const getSpacing = () => {
    return data.spacing === 'wide' ? '1.5em' : '1em'
  }

  // Styling with updated font size and line height
  const containerStyle = {
    display: 'flex',
    fontFamily: data.font || 'Arial, sans-serif',
    color: '#333',
    fontSize: getFontSize(),
    lineHeight: getSpacing(),
    maxWidth: '700px',
    margin: '20px auto',
    padding: '20px',
    border: `1px solid ${data.borderColor || '#ddd'}`,
    borderRadius: '10px',
    backgroundColor: data.backgroundColor || '#f9f9f9',
  }

  const leftColumnStyle = {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
  }

  const rightColumnStyle = {
    width: '80%',
  }

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '20px',
  }

  const separatorStyle = {
    margin: '0 5px',
  }

  return (
    <Parent>
      <div style={leftColumnStyle}>
        <img src={data.image || avatar} alt="Profile" style={imageStyle} />
      </div>

      {/* Right Side: 80% containing name, title, company, and contact details */}
      <div style={rightColumnStyle}>
        <div>
          {/* Name, Title, Company */}
          <h2 style={{ margin: '0 0 10px', color: data.fontColor }}>{data.name}</h2>
          <p style={{ margin: '0 0 10px' }}>{data.title}</p>
          <p style={{ margin: '0 0 10px' }}>{data.company}</p>
        </div>

        {/* Horizontal Line */}
        <hr style={{ margin: '20px 0', borderColor: data.borderColor }} />

        {/* Contact Information with Icons and Separators */}
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          {/* Phone */}
          <p style={{ margin: 0 }}>
            <FaPhoneAlt style={{ color: data.fontColor }} /> {data.phone}
          </p>
          <span style={separatorStyle}>|</span>

          {/* Website */}
          <p style={{ margin: 0 }}>
            <FaGlobe style={{ color: data.fontColor }} />
            <a href={`http://${data.website}`} style={{ color: 'black', textDecoration: 'none' }}>
              {data.website}
            </a>
          </p>
          <span style={separatorStyle}>|</span>

          {/* Email */}
          <p style={{ margin: 0 }}>
            <FaEnvelope style={{ color: data.fontColor }} /> {data.email}
          </p>
          <span style={separatorStyle}>|</span>

          {/* Address */}
          <p style={{ margin: 0 }}>
            <FaMapMarkerAlt style={{ color: data.fontColor }} /> {data.address}
          </p>
        </div>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          {data.socialLinks &&
            data.socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: social.color || data.fontColor }}
                >
                  <Icon size={24} />
                </a>
              )
            })}
        </div>

        {/* Render Additional Fields */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
          }}
        >
          {data.additionalFields &&
            data.additionalFields.map((field, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0, fontSize: getFontSize(), color: data.fontColor }}>
                  {field.label} {field.value} |
                </p>
              </div>
            ))}
        </div>
        <AppContent />

        {/* Submit Button */}
        {/* rtemove because it isa in parent  */}
        {/* <button
          onClick={() => onSubmit(data)}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: data.buttonColor || '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          OK, I'm done
        </button> */}
        <AppContent2 />
        <AppContent3 />
      </div>
    </Parent>
  )
}

export default Template2
