// components/AppPageGroup1.js
import React, { useState } from 'react';
import { MdDesignServices, MdUpload } from 'react-icons/md';
import { FaFileAlt, FaUser, FaBullhorn, FaVideo } from 'react-icons/fa';

// Group 1 templates and icons
export const templateNames1 = [
  'Styled Signoff', 'Disclaimer', 'Quote', 'Green footer', 'Video', 'Image gallery'
];

export const templateIcons1 = [
  <MdDesignServices />, <FaFileAlt />, <FaUser />, <FaBullhorn />, <FaVideo />, <MdUpload />
];

// Content options for each template
const contentOptionsByTemplate = {
  'Styled Signoff': ['Option A', 'Option B', 'Option C'],
  'Disclaimer': ['Confidentiality', 'No viruses', 'Non-binding', 'Personal options', 'Correct recipient'],
  'Quote': ['Inspiration', 'Motivation', 'Funny Quote', 'Wisdom', 'Courage', 'Success', 'Happiness', 'Creativity', 'Change', 'Peace', 'Leadership', 'Innovation', 'Efficiency', 'Determination', 'Growth', 'Excellence', 'Integrity', 'Vision', 'Commitment'],
  'Green footer': ['Environmental Responsibility', 'Environmental Responsibility Short', 'Printing kills trees', 'Do you really need to print this email?', 'Be carbon free', 'Save ink cartridges'],
  'Video': ['Video A', 'Video B', 'Video C'],
  'Image gallery': ['Upload Images'], // Changed to include upload option
};

// Disclaimer content
const disclaimerContent = {
  'Confidentiality': 'IMPORTANT: The contents of this email and any attachments are confidential...',
  'No viruses': 'Warning: Although taking reasonable precautions...',
  'Non-binding': 'No employee or agent is authorized...',
  'Personal options': 'All views and opinions expressed...',
  'Correct recipient': 'If you received this email in error, please notify us...'
};

// Quote content
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

// Green footer content
const greenFooterContent = {
  'Environmental Responsibility': '🌿 Please consider your environmental responsibility...',
  'Environmental Responsibility Short': '🌿 Please consider the environment...',
  'Printing kills trees': '🌿 Do you really need to print this email?',
  'Do you really need to print this email?': '🌿 Do you really need to print this email?',
  'Be carbon free': '🌿 Be like me, be Carbon free...',
  'Save ink cartridges': '🌿 Save ink cartridges from going extinct...'
};

// SelectionModal component
const SelectionModal = ({ isOpen, onClose, onSelect, templateName, contentOptions }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [images, setImages] = useState(Array(5).fill(null)); // Initialize array for 5 images

  const handleSelect = () => {
    if (templateName === 'Image gallery') {
      onSelect(images.filter(image => image)); // Pass the uploaded images back to parent
    } else {
      onSelect(selectedOption); // Pass selected content back to parent
    }
    onClose(); // Close the modal
  };

  const handleImageChange = (index) => (e) => {
    const file = e.target.files[0];
    const newImages = [...images];
    newImages[index] = file; // Store the uploaded file in the array
    setImages(newImages);
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
        {templateName === 'Image gallery' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} style={{
                border: '1px dashed lightgray', height: '60px',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                cursor: 'pointer', position: 'relative'
              }}>
                {images[index] ? (
                  <img src={URL.createObjectURL(images[index])} alt={`upload-${index}`} style={{ width: '50%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <label style={{ cursor: 'pointer' }}>
                    <input type="file" accept="image/*" onChange={handleImageChange(index)} style={{ display: 'none' }} />
                    <div style={{ fontSize: '24px' }}>+</div>
                  </label>
                )}
              </div>
            ))}
          </div>
        ) : (
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
        )}
        <button onClick={handleSelect} style={{ padding: '10px', marginTop: '10px', backgroundColor: 'lightblue', borderRadius: '2px', border: '2px solid white' }}>
          Add
        </button>
        <button onClick={onClose} style={{ padding: '10px', marginTop: '10px', marginLeft: '10px' }}>
          Close
        </button>
      </div>
    </div>
  );
};

// Main component for handling templates and modal for Group 1
const AppPageGroup1 = () => {
  const [selectedContent, setSelectedContent] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('');
  const [contentOptions, setContentOptions] = useState([]);

  const handleOpenModal = (templateName) => {
    setActiveTemplate(templateName);
    setContentOptions(contentOptionsByTemplate[templateName] || []);
    setModalOpen(true);
  };

  const handleSelectContent = (content) => {
    if (activeTemplate === 'Image gallery') {
      setSelectedContent((prevState) => ({
        ...prevState,
        [activeTemplate]: content, // Store the uploaded images
      }));
    } else {
      setSelectedContent((prevState) => ({
        ...prevState,
        [activeTemplate]: (
          (activeTemplate === 'Disclaimer' && disclaimerContent[content]) ||
          (activeTemplate === 'Quote' && quoteContent[content]) ||
          (activeTemplate === 'Green footer' && greenFooterContent[content]) ||
          content // Default case
        ),
      }));
    }
  };

  return (
    <div>
      <h2>Templates</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {templateNames1.map((name, index) => (
          <div key={index} onClick={() => handleOpenModal(name)} style={{
            border: '1px solid lightgray', padding: '20px', cursor: 'pointer'
          }}>
            <div>{templateIcons1[index]}</div>
            <div>{name}</div>
          </div>
        ))}
      </div>
      <SelectionModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleSelectContent}
        templateName={activeTemplate}
        contentOptions={contentOptions}
      />
      <div>
        <h3>Selected Content</h3>
        {Object.entries(selectedContent).map(([templateName, content]) => (
          <div key={templateName}>
            <h4>{templateName}</h4>
            <div>{Array.isArray(content) ? content.map((img, idx) => (
              <img key={idx} src={URL.createObjectURL(img)} alt={`selected-${idx}`} style={{ width: '100px', margin: '5px' }} />
            )) : content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppPageGroup1;
