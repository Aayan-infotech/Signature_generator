// components/AppPageGroup2.js
import React, { useState } from 'react';
import { FaMoneyBill, FaRegAddressCard, FaHandPointUp, FaBlogger, FaShoppingCart } from 'react-icons/fa';
import { FaLaptop, FaThumbsUp, FaCalendarAlt, FaEnvelope, FaDownload, FaBriefcase } from 'react-icons/fa';

// Group 2 templates and icons
export const templateNames2 = [
  'Online Payments', 'Social buttons', 'Custom buttons', 'Blog Template', 'Upload my banner',
  'Sales event', 'Video conferencing', 'Give feedback', 'Join a webinar', 'Join newsletter', 'Download app', 'Post a job offer'
];

export const templateIcons2 = [
  <FaMoneyBill />, <FaRegAddressCard />, <FaHandPointUp />, <FaBlogger />, <FaShoppingCart />,
  <FaLaptop />, <FaThumbsUp />, <FaCalendarAlt />, <FaEnvelope />, <FaLaptop />, <FaDownload />, <FaBriefcase />
];

// Main component for handling templates and modal for Group 2
const AppPageGroup2 = () => {
  const [selectedContent, setSelectedContent] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('');
  const [contentOptions, setContentOptions] = useState([]);

  const handleOpenModal = (templateName) => {
    setActiveTemplate(templateName);
    setContentOptions([]); // Add specific content options for each template if needed
    setModalOpen(true);
  };

  const handleSelectContent = (content) => {
    setSelectedContent((prevState) => ({
      ...prevState,
      [activeTemplate]: content
    }));
    setModalOpen(false);
  };

  return (
    <div>
      <h3>Template Group 2: Your Template Content</h3>
      {templateNames2.map((template, index) => (
        <div key={index}>
          <strong>{template}:</strong>
          <span>{selectedContent[template]}</span>
        </div>
      ))}

      {/* Render buttons for Group 2 templates */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
        {templateNames2.map((template, index) => (
          <button
            key={index}
            style={{
              padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', border: '1px solid gray', borderRadius: '8px', cursor: 'pointer'
            }}
            onClick={() => handleOpenModal(template)}
          >
            {templateIcons2[index]}
            {template}
          </button>
        ))}
      </div>

      {/* Modal for selecting content */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', backgroundColor: 'white', border: '1px solid gray' }}>
          <h4>Select content for {activeTemplate}</h4>
          <input
            type="text"
            placeholder="Enter content"
            onChange={(e) => handleSelectContent(e.target.value)}
          />
          <button onClick={() => setModalOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AppPageGroup2;
