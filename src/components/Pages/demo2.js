import React, { useState } from 'react';
import {
  FaBriefcase, FaUser, FaBullhorn, FaFileAlt, FaShoppingCart, FaCalendarAlt,
  FaBlogger, FaBuilding, FaRegAddressCard, FaVideo, FaImage, FaMoneyBill,
  FaThumbsUp, FaDownload, FaLaptop, FaHandPointUp, FaEnvelope
} from 'react-icons/fa';
import { MdDesignServices, MdWeb, MdUpload } from 'react-icons/md';

const SelectionModal = ({ isOpen, onClose, onSelect, templateName, contentOptions }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = () => {
    onSelect(selectedOption); // Pass selected content back to parent
    onClose(); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white', padding: '20px', borderRadius: '5px',
        maxWidth: '400px', width: '50%'
      }}>
        <h3>Select Content for {templateName}</h3>
        <form>
          {contentOptions.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={option}
                name="contentOption"
                value={option}
                onChange={() => setSelectedOption(option)}
                checked={selectedOption === option}
              />
              <label htmlFor={option} style={{ marginLeft: '10px' }}>{option}</label>
            </div>
          ))}
        </form>
        <button onClick={handleSelect} style={{ padding: '10px', marginTop: '10px', backgroundColor: 'lightblue', borderRadius:'2px', border:'2px soild white' }}>
          Add
        </button>
        <button onClick={onClose} style={{ padding: '10px', marginTop: '10px', marginLeft: '10px' }}>
          Close
        </button>
      </div>
    </div>
  );
};

const AppPage = () => {
  const [selectedContent, setSelectedContent] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('');
  const [contentOptions, setContentOptions] = useState([]);

  const contentOptionsByTemplate = {
    'Styled Signoff': ['Option A', 'Option B', 'Option C'],
    'Disclaimer': ['Confidentiality', 'No viruses', 'Non-binding', 'Personal options', 'Correct recipient'],
    'Quote': ['Inspiration', 'Motivation', 'Funny Quote', 'Wisdom', 'Courage', 'Success', 'Happiness', 'Creativity', 'Change', 'Peace', 'Leadership', 'Innovation', 'Efficiency', 'Determination', 'Growth', 'Excellence', 'Integrity', 'Vision', 'Commitment'],
    'Green footer': ['Envirnomental Responsiblity', 'Envirnomental Responsiblity Short', 'Printing kills tree','Do you really need to print this email ?', 'Be carbon free', 'Save ink cartridges'],
    'Video': ['Video A', 'Video B', 'Video C'],
    'Image gallery': ['Gallery 1', 'Gallery 2', 'Gallery 3'],
  };

  const disclaimerContent = {
    'Confidentiality': 'IMPORTANT: The contents of this email and any attachments are confidential. They are intended for the named recipient(s) only...',
    'No viruses': 'Warning: Although taking reasonable precautions...',
    'Non-binding': 'No employee or agent is authorized...',
    'Personal options': 'All views and opinions expressed...',
    'Correct recipient': 'If you received this email in error, please notify us...'
  };

  const quoteContent = {
    'Inspiration': '“The best way to predict the future is to invent it.” – Alan Kay',
    'Motivation': '“The only limit to our realization of tomorrow is our doubts of today.” – Franklin D. Roosevelt',
    'Funny Quote': '“I always wanted to be somebody. Now I realize I should have been more specific.” – Lily Tomlin',
    'Wisdom': '“The journey of a thousand miles begins with one step.” – Lao Tzu',
    'Courage': '“It takes courage to grow up and become who you really are.” – E.E. Cummings',
    'Success': '“Success is not the key to happiness. Happiness is the key to success.” – Albert Schweitzer',
    'Happiness': '“Happiness is not something ready-made. It comes from your own actions.” – Dalai Lama',
    'Creativity': '“Creativity is intelligence having fun.” – Albert Einstein',
    'Change': '“Be the change that you wish to see in the world.” – Mahatma Gandhi',
    'Peace': '“Peace begins with a smile.” – Mother Teresa',
    'Leadership': '“The greatest leader is not necessarily the one who does the greatest things.” – Ronald Reagan',
    'Innovation': '“Innovation distinguishes between a leader and a follower.” – Steve Jobs',
    'Efficiency': '“The way to get started is to quit talking and begin doing.” – Walt Disney',
    'Determination': '“It does not matter how slowly you go as long as you do not stop.” – Confucius',
    'Growth': '“Growth is the only evidence of life.” – John Henry Newman',
    'Excellence': '“Excellence is not a skill. It is an attitude.” – Ralph Marston',
    'Integrity': '“Integrity is doing the right thing, even when no one is watching.” – C.S. Lewis',
    'Vision': '“The only thing worse than being blind is having sight but no vision.” – Helen Keller',
    'Commitment': '“Commitment is what transforms a promise into reality.” – Abraham Lincoln'
  };
  

  const greenFooterContent = {
    'Envirnomental responsiblity': '🌿 Please consider your environmental responsibility...',
    'Envirnomental responsibilty short': '🌿 Please consider the environment...',
    'Printing kills tree': '🌿 Do you really need to print this email?',
    'Do you really need to print this email ?': '🌿 Do you really need to print this email ?',
    'Be carbon free': '🌿 Be like me, be Carbon free...',
    'Save ink cartridges': '🌿 Save ink cartridges from going extinct!...'
  };

  const templateNames = [
    'Styled Signoff', 'Disclaimer', 'Quote', 'Green footer', 'Video',
    'Image gallery', 'Online Payments', 'Social buttons', 'Custom buttons',
    'Blog Template', 'Upload my banner', 'Sales event', 'Video conferencing',
    'Give feedback', 'Join a webinar', 'Join newsletter', 'Download app',
    'Post a job offer'
  ];

  const templateIcons = [
    <MdDesignServices />, <FaFileAlt />, <FaUser />, <FaBullhorn />,
    <FaVideo />, <FaImage />, <FaMoneyBill />, <FaRegAddressCard />,
    <FaHandPointUp />, <FaBlogger />, <MdUpload />, <FaShoppingCart />,
    <FaLaptop />, <FaThumbsUp />, <FaCalendarAlt />, <FaEnvelope />,
    <FaDownload />, <FaBriefcase />
  ];

  const handleOpenModal = (templateName) => {
    setActiveTemplate(templateName);
    setContentOptions(contentOptionsByTemplate[templateName] || []);
    setModalOpen(true);
  };

  const handleSelectContent = (content) => {
    setSelectedContent((prevContent) => ({
      ...prevContent,
      [activeTemplate]: (
        (activeTemplate === 'Disclaimer' && disclaimerContent[content]) ||
        (activeTemplate === 'Quote' && quoteContent[content]) ||
        (activeTemplate === 'Green footer' && greenFooterContent[content])
      ),
    }));
  };

  return (
    <div>
      {/* Render the selected content in the template */}
      <div style={{ padding: '20px', border: '1px solid gray', marginBottom: '20px' }}>
        <h3>Your Template Content</h3>
        {templateNames.map((template, index) => (
          <div key={index}>
            <strong>{template}:</strong>
            <span
              style={{
                color: template === 'Green footer' ? 'green' : 'black', 
              }}

            >
              {selectedContent[template]}
            </span>
          </div>
        ))}
      </div>

      {/* Content at the start */}
      <div style={{ gridColumn: 'span 2', padding: '2px' }}>
        <h3>Enhance your Signature</h3>
      </div>

      {/* Modal for selecting content */}
      <SelectionModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleSelectContent}
        templateName={activeTemplate}
        contentOptions={contentOptions}
      />

      {/* Buttons for selecting templates */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          maxWidth: '600px',
          margin: '0 auto',
          height: 'calc(100vh - 100px)',
          overflowY: 'auto',
        }}
      >
        {templateNames.map((template, index) => (
          <React.Fragment key={index}>
            <button
              style={{
                padding: '20px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexDirection: 'column', border: '1px solid gray',
                borderRadius: '8px', cursor: 'pointer', fontSize: '16px'
              }}
              onClick={() => handleOpenModal(template)}
            >
              {templateIcons[index]}
              {template}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AppPage;
