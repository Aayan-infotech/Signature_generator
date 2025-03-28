// components/AppPageGroup1.js
import React, { useState } from 'react'
import { MdDesignServices, MdUpload } from 'react-icons/md'
import { FaFileAlt, FaUser, FaBullhorn, FaVideo } from 'react-icons/fa'
import { useAppContext } from '../../../context/AppContext'

// Group 1 templates and icons
export const templateNames1 = [
  'Styled Signoff',
  'Disclaimer',
  'Quote',
  'Green footer',
  'Video',
  'Image gallery',
]

export const templateIcons1 = [
  <MdDesignServices />,
  <FaFileAlt />,
  <FaUser />,
  <FaBullhorn />,
  <FaVideo />,
  <MdUpload />,
]

// Content options for each template
export const contentOptionsByTemplate = {
  'Styled Signoff': [
    'Regards',
    'Best Regards',
    'Kind Regards',
    'Sincerely',
    'Thanks',
    'Happy new year',
    'Merry Xmas',
    'Happy Holidays!',
  ],

  Disclaimer: [
    'Confidentiality',
    'No viruses',
    'Non-binding',
    'Personal options',
    'Correct recipient',
  ],
  Quote: [
    'Inspiration',
    'Motivation',
    'Funny Quote',
    'Wisdom',
    'Courage',
    'Success',
    'Happiness',
    'Creativity',
    'Change',
    'Peace',
    'Leadership',
    'Innovation',
    'Efficiency',
    'Determination',
    'Growth',
    'Excellence',
    'Integrity',
    'Vision',
    'Commitment',
  ],
  'Green footer': [
    'Environmental Responsibility',
    'Environmental Responsibility Short',
    'Printing kills trees',
    'Do you really need to print this email?',
    'Be carbon free',
    'Save ink cartridges',
  ],
  Video: ['Enter YouTube URL'],
  'Image gallery': ['Upload Images'],
}

// Disclaimer content
export const disclaimerContent = {
  Confidentiality: 'IMPORTANT: The contents of this email and any attachments are confidential...',
  'No viruses': 'Warning: Although taking reasonable precautions...',
  'Non-binding': 'No employee or agent is authorized...',
  'Personal options': 'All views and opinions expressed...',
  'Correct recipient': 'If you received this email in error, please notify us...',
}

// Quote content
export const quoteContent = {
  Inspiration: '“The best way to predict the future is to invent it.” – Alan Kay',
  Motivation:
    '“The only limit to our realization of tomorrow is our doubts of today.” – Franklin D. Roosevelt',
  'Funny Quote':
    '“I always wanted to be somebody. Now I realize I should have been more specific.” – Lily Tomlin',
  Wisdom: '“The journey of a thousand miles begins with one step.” – Lao Tzu',
  Courage: '“It takes courage to grow up and become who you really are.” – E.E. Cummings',
  Success:
    '“Success is not the key to happiness. Happiness is the key to success.” – Albert Schweitzer',
  Happiness:
    '“Happiness is not something ready-made. It comes from your own actions.” – Dalai Lama',
  Creativity: '“Creativity is intelligence having fun.” – Albert Einstein',
  Change: '“Be the change that you wish to see in the world.” – Mahatma Gandhi',
  Peace: '“Peace begins with a smile.” – Mother Teresa',
  Leadership:
    '“The greatest leader is not necessarily the one who does the greatest things.” – Ronald Reagan',
  Innovation: '“Innovation distinguishes between a leader and a follower.” – Steve Jobs',
  Efficiency: '“The way to get started is to quit talking and begin doing.” – Walt Disney',
  Determination: '“It does not matter how slowly you go as long as you do not stop.” – Confucius',
  Growth: '“Growth is the only evidence of life.” – John Henry Newman',
  Excellence: '“Excellence is not a skill. It is an attitude.” – Ralph Marston',
  Integrity: '“Integrity is doing the right thing, even when no one is watching.” – C.S. Lewis',
  Vision: '“The only thing worse than being blind is having sight but no vision.” – Helen Keller',
  Commitment: '“Commitment is what transforms a promise into reality.” – Abraham Lincoln',
}

// Green footer content
export const greenFooterContent = {
  'Environmental Responsibility': '🌿 Please consider your environmental responsibility...',
  'Environmental Responsibility Short': '🌿 Please consider the environment...',
  'Printing kills trees': '🌿 Do you really need to print this email?',
  'Do you really need to print this email?': '🌿 Do you really need to print this email?',
  'Be carbon free': '🌿 Be like me, be Carbon free...',
  'Save ink cartridges': '🌿 Save ink cartridges from going extinct...',
}

// Helper function to extract YouTube video ID from URL
export const extractVideoId = (url) => {
  const urlParams = new URLSearchParams(new URL(url).search)
  return urlParams.get('v')
}

// SelectionModal component
const SelectionModal = ({ isOpen, onClose, onSelect, templateName, contentOptions }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const [customText, setCustomText] = useState('') // State for custom text
  const [selectedFont, setSelectedFont] = useState('Arial') // State for selected font
  const [images, setImages] = useState(Array(5).fill(null)) // Initialize array for 5 images
  const [videoURL, setVideoURL] = useState('') // State for video URL

  const handleSelect = () => {
    if (templateName === 'Image gallery') {
      onSelect(images.filter((image) => image)) // Pass the uploaded images back to parent
    } else if (templateName === 'Video') {
      onSelect(videoURL) // Pass video URL back to parent
    } else if (templateName === 'Styled Signoff') {
      onSelect({ selectedOption, customText, selectedFont }) // Pass selected option, custom text, and font back to parent
    } else {
      onSelect(selectedOption) // Pass selected content back to parent
    }
    onClose() // Close the modal
  }

  const handleImageChange = (index) => (e) => {
    const file = e.target.files[0]
    const newImages = [...images]
    newImages[index] = file // Store the uploaded file in the array
    setImages(newImages)
  }

  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '5px',
          maxWidth: '400px',
          width: '50%',
        }}
      >
        <h3>Select Content for {templateName}</h3>
        {templateName === 'Image gallery' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                style={{
                  border: '1px dashed lightgray',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                {images[index] ? (
                  <img
                    src={URL.createObjectURL(images[index])}
                    alt={`upload-${index}`}
                    style={{ width: '50%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <label style={{ cursor: 'pointer' }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange(index)}
                      style={{ display: 'none' }}
                    />
                    <div style={{ fontSize: '24px' }}>+</div>
                  </label>
                )}
              </div>
            ))}
          </div>
        ) : templateName === 'Video' ? (
          <div>
            <label>Enter YouTube URL:</label>
            <input
              type="text"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              placeholder="Paste YouTube link here"
              style={{
                width: '100%',
                padding: '8px',
                marginTop: '10px',
                border: '1px solid lightgray',
                borderRadius: '4px',
              }}
            />
          </div>
        ) : templateName === 'Styled Signoff' ? (
          <div>
            <label>Select a predefined option:</label>
            <form>
              {contentOptions.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={option}
                    name="contentOption"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </form>
            <label>Enter Custom Text:</label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Enter your signoff"
              style={{ width: '100%', padding: '8px', marginTop: '10px' }}
            />
            <label style={{ marginTop: '10px' }}>Select Font:</label>
            <select
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '10px' }}
            >
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>
        ) : (
          <div>
            {contentOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={option}
                  name="contentOption"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        )}
        <button onClick={handleSelect}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

// AppPageGroup1 component
const AppPageGroup1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { selectedContent, handleModalSelect, setSelectedTemplate, selectedTemplate } = useAppContext()

  const handleTemplateClick = (templateName) => {
    setSelectedTemplate(templateName)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleModalContentSelect = (content) => { // Renamed function to avoid conflict
    if (selectedTemplate === 'Styled Signoff') {
      const signoff = `Styled Signoff: ${content.customText || content.selectedOption} (Font: ${content.selectedFont})`
      // Process or display the styled signoff as needed
      console.log(signoff)
    } else {
      // Handle other selections
      console.log(`Selected ${selectedTemplate}: ${content}`)
    }
    handleModalClose(); // Close modal after selection
  }

  return (
    <div>
      <h3>Enhance Signature Style</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
        {templateNames1.map((templateName, index) => (
          <button key={templateName} onClick={() => handleTemplateClick(templateName)}>
            {templateIcons1[index]}
            <p>{templateName}</p>
          </button>
        ))}
      </div>

      <SelectionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSelect={handleModalContentSelect} // Updated to new function name
        templateName={selectedTemplate}
        contentOptions={contentOptionsByTemplate[selectedTemplate]}
      />
    </div>
  )
}

export default AppPageGroup1
