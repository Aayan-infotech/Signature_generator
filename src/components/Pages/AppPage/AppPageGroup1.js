// components/AppPageGroup1.js
import React, { useState, useEffect } from 'react'
import { MdDesignServices, MdUpload } from 'react-icons/md'
import { FaFileAlt, FaUser, FaBullhorn, FaVideo } from 'react-icons/fa'
import { useAppContext } from '../../../context/AppContext'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Modal from 'react-bootstrap/Modal'
import PremiumModal from '../../PremiumModal'
import axios from 'axios'

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
  <MdDesignServices style={{ color: 'blue' }} />,
  <FaFileAlt style={{ color: '#4CAF50' }} />,
  <FaUser style={{ color: 'red' }} />,
  <FaBullhorn style={{ color: '#9C27B0' }} />,
  <FaBullhorn style={{ color: '#FFC107' }} />,
  <FaVideo style={{ color: '#4CAF50' }} />,
  <MdUpload style={{ color: '#4CAF50' }} />,
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
  const [images, setImages] = useState(Array(5).fill(null)) // Initialize array for 5 images
  const [videoURL, setVideoURL] = useState('') // State for video URL
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSelect = () => {
    if (templateName === 'Image gallery') {
      onSelect(images.filter((image) => image)) // Pass the uploaded images back to parent
    } else if (templateName === 'Video') {
      onSelect(videoURL) // Pass video URL back to parent
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
        zIndex: '1',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '5px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '500px',
          overflowY: 'auto',
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
                      className="form-control"
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
              className="form-control"
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
        ) : (
          <form className="my-4">
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
                <label htmlFor={option} style={{ marginLeft: '10px' }}>
                  {option}
                </label>
              </div>
            ))}
          </form>
        )}
        <button
          onClick={handleSelect}
          style={{
            marginTop: '10px',
            backgroundColor: 'lightblue',
            border: '2px solid white',
            color: 'white',
            borderRadius: '8px',
            padding: '10px 18px',
          }}
        >
          Add
        </button>
        <button
          onClick={onClose}
          style={{
            padding: '10px 18px',
            marginTop: '10px',
            marginLeft: '5px',
            backgroundColor: 'lightcoral',
            border: '2px solid white',
            color: 'white',
            borderRadius: '8px',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

const AppPageGroup1 = ({ premiumPlans }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [premiumModal, setPremiumModal] = useState(false)
  const [pricingModal, setPricingModal] = useState(false)
  const token = localStorage.getItem('token2')
  // const [premiumPlans, setPremiumPlans] = useState('')
  // const [premiumEnd, setPremiumEnd] = useState('')
  // const [premiumStart, setPremiumStart] = useState('')
  const { selectedContent, handleModalSelect, setSelectedTemplate, selectedTemplate } =
    useAppContext()

  // const getCurrentUser = async () => {
  //   const response = await axios.get('http://44.196.64.110:9006/api/user', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   setPremiumPlans(response?.data?.data?.amount)
  //   // setPremiumPlans(10)
  //   setPremiumEnd(response?.data?.data?.subscriptionEnd)
  //   setPremiumStart(response?.data?.data?.subscriptionStarted)
  // }

  // useEffect(() => {
  //   getCurrentUser()
  // }, [premiumPlans])

  const handleTemplateClick = (templateName) => {
    setSelectedTemplate(templateName)
    setSelectedCard(templateName)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  const handlePremiumFeatureClick = (templateName) => {
    setSelectedTemplate(templateName)
    setPremiumModal(true)
  }

  const handlePremiumModalClose = () => {
    setPremiumModal(false)
  }

  const handlePremiumPricingModal = () => {
    setPremiumModal(false)
    setPricingModal(true)
  }
  const handlePricingModalClose = () => {
    setPricingModal(false)
  }

  return (
    <div>
      <h3>Enhance Signature Style</h3>
      <div
        className="mb-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {templateNames1.map((templateName, index) => (
          <button
            key={templateName}
            className={`position-relative template-item ${selectedCard === templateName ? 'active' : ''}`}
            style={{
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: selectedCard === templateName ? '1px solid blue' : '1px solid gray',
            }}
            onClick={() => {
              if (premiumPlans > 0) {
                handleTemplateClick(templateName)
              } else if (['Green footer', 'Video', 'Image gallery'].includes(templateName)) {
                handlePremiumFeatureClick(templateName)
              } else {
                handleTemplateClick(templateName)
              }
            }}
          >
            {templateIcons1[index]}
            <p className="mb-0">{templateName}</p>
            {premiumPlans === 0 ? (
              <>
                {['Green footer', 'Video', 'Image gallery'].includes(templateName) && (
                  <div
                    className="position-absolute start-0 ps-2 pt-1 top-0 w-100 h-100 d-flex "
                    onClick={() => handlePremiumFeatureClick(templateName)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#ffc107"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                )}
              </>
            ) : null}
          </button>
        ))}
      </div>

      {premiumModal && (
        <Modal show={premiumModal} onHide={handlePremiumModalClose} centered>
          <Modal.Header className="border-0" closeButton>
            <Modal.Title>{selectedTemplate}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <h3>Premium Feature is here</h3>
              <p>Please add subscription to avail this feature</p>
              <button className="btn btn-primary" onClick={handlePremiumPricingModal}>
                See Pricing
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {pricingModal && (
        <PremiumModal
          pricingModal={pricingModal}
          handlePricingModalClose={handlePricingModalClose}
        />
      )}

      <SelectionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSelect={handleModalSelect}
        templateName={selectedTemplate}
        contentOptions={contentOptionsByTemplate[selectedTemplate]}
      />
    </div>
  )
}

export default AppPageGroup1
