import React, { useState } from 'react'
import {
  FaBriefcase, FaUser, FaBullhorn, FaFileAlt, FaShoppingCart, FaCalendarAlt,
  FaBlogger, FaBuilding, FaRegAddressCard, FaVideo, FaImage, FaMoneyBill,
  FaThumbsUp, FaDownload, FaLaptop, FaHandPointUp, FaEnvelope
} from 'react-icons/fa'
import { MdDesignServices, MdWeb, MdUpload } from 'react-icons/md'

const AppPage = () => {
  // Define an array of custom names for the template boxes
  const templateNames = [
    'Styled Signoff',
    'Disclaimer',
    'Quote',
    'Green footer',
    'Video',
    'Image gallery',
    'Online Payments',
    'Social buttons',
    'Custom buttons',
    'Blog Template',
    'Upload my banner',
    'Sales event',
    'Video conferencing',
    'Give feedback',
    'Join a webinar',
    'Join newsletter',
    'Download app',
    'Post a job offer',
  ]

  // Define an array of corresponding icons for each template
  const templateIcons = [
    <MdDesignServices />,
    <FaFileAlt />,
    <FaUser />,
    <FaBullhorn />,
    <FaVideo />,
    <FaImage />,
    <FaMoneyBill />,
    <FaRegAddressCard />,
    <FaHandPointUp />,
    <FaBlogger />,
    <MdUpload />,
    <FaShoppingCart />,
    <FaLaptop />,
    <FaThumbsUp />,
    <FaCalendarAlt />,
    <FaEnvelope />,
    <FaDownload />,
    <FaBriefcase />
  ]

  // State to track selected items
  const [selectedItems, setSelectedItems] = useState([])

  // Handler to add selected item into the array
  const handleOptionClick = (index) => {
    const newItem = {
      name: templateNames[index],
      icon: templateIcons[index],
    }

    // Add the selected item to the list
    setSelectedItems([...selectedItems, newItem])
  }

  return (
    <div>
      {/* Content at the start */}
      <div style={{ gridColumn: 'span 2', padding: '2px' }}>
        <h3>Enhance your Signature</h3>
      </div>

      {/* Template Buttons Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns layout
          gap: '20px', // Space between the buttons
          maxWidth: '600px', // Optional: max-width to control overall width
          margin: '0 auto', // Center the grid container
          height: "calc(100vh - 100px)",
          overflowY: "auto",
        }}
      >
        {templateNames.map((template, index) => (
          <React.Fragment key={index}>
            <button
              style={{
                padding: '15px',
                border: '1px solid gray',
                backgroundColor: 'white',
                cursor: 'pointer',
                width: '100%', // Ensure buttons take full width
                boxSizing: 'border-box', // Ensure padding doesn't affect width
                display: 'flex', // To align the icon and text side by side
                alignItems: 'center', // Vertically center the icon and text
                gap: '10px', // Space between icon and text
                borderRadius: '5px',
              }}
              onClick={() => handleOptionClick(index)} // Add click handler
            >
              {templateIcons[index]} {/* Icon before the template name */}
              {template} {/* Display custom template name */}
            </button>

            {/* Check if this is after the 6th box and insert the text */}
            {index === 5 && (
              <div style={{ gridColumn: 'span 2', padding: '2px' }}>
                <h3>Call to Action</h3>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Display Selected Templates */}
      <div style={{ marginTop: '30px', maxWidth: '600px', margin: '0 auto' }}>
        <h3>Selected Templates:</h3>
        {selectedItems.length > 0 ? (
          selectedItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px',
                border: '1px solid lightgray',
                borderRadius: '5px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              {item.icon} {/* Display Icon */}
              <span>{item.name}</span> {/* Display Template Name */}
            </div>
          ))
        ) : (
          <p>No templates selected yet.</p>
        )}
      </div>
    </div>
  )
}

export default AppPage
