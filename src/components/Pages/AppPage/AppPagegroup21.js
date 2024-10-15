import React, { useState } from 'react'
import {
  FaMoneyBill,
  FaRegAddressCard,
  FaHandPointUp,
  FaShoppingCart,
  FaBriefcase,
  FaSkype,
  FaMicrosoft,
  FaGoogle,
  FaVideo,
} from 'react-icons/fa'
import { useAppContext } from '../../../context/AppContext'

export const templateNames21 = [
  'Online Payments',
  'Social buttons',
  'Custom buttons',
  'Upload my banner',
  'Sales event',
  'Video conferencing',
]

export const templateIcons21 = [
  <FaMoneyBill />,
  <FaRegAddressCard />,
  <FaHandPointUp />,
  <FaShoppingCart />,
  <FaBriefcase />,
  <FaVideo />,
]

const AppPageGroup21 = () => {
  const [selectedContent, setSelectedContent] = useState({})
  const [isModalOpen, setModalOpen] = useState(false)

  // State for different functionalities
  const [paymentDescription, setPaymentDescription] = useState('')
  const [paymentUrl, setPaymentUrl] = useState('')

  const [socialButtonsDescription, setSocialButtonsDescription] = useState('')
  const [socialButtonsUrl, setSocialButtonsUrl] = useState('')

  const [customButtonText, setCustomButtonText] = useState('')
  const [customButtonsUrl, setCustomButtonsUrl] = useState('')

  const [bannerUrl, setBannerUrl] = useState(null) // For image banner

  const [salesDescription, setSalesDescription] = useState('')
  const [salesUrl, setSalesUrl] = useState('')

  // Video conferencing specific state
  const [videoConfPlatform, setVideoConfPlatform] = useState('')
  const [videoConfButtonText, setVideoConfButtonText] = useState('')
  const [videoConfUrl, setVideoConfUrl] = useState('')

  const { setSelectedTemplate, selectedTemplate, handleModalSelect } = useAppContext()

  const handleTemplateClick = (templateName) => {
    console.log({ templateName })
    setModalOpen(true)
    setSelectedTemplate(templateName)
  }

  const handleBannerChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setBannerUrl(url)
    }
  }

  const handleCancel = () => {
    setModalOpen(false)
    setVideoConfPlatform('')
    setPaymentDescription('')
    setPaymentUrl('')
    setSocialButtonsDescription('')
    setSocialButtonsUrl('')
    setCustomButtonText('')
    setCustomButtonsUrl('')
    setSalesDescription('')
    setSalesUrl('')
    setBannerUrl(null)
  }

  const handleSubmit = () => {
    let description = ''
    let url = ''

    switch (selectedTemplate) {
      case 'Online Payments':
        description = paymentDescription
        url = paymentUrl
        break
      case 'Social buttons':
        description = socialButtonsDescription
        url = socialButtonsUrl
        break
      case 'Custom buttons':
        description = customButtonText
        url = customButtonsUrl
        break
      case 'Sales event':
        description = salesDescription
        url = salesUrl
        break
      case 'Upload my banner': // Case to handle banner upload
        description = 'Uploaded Banner'
        url = bannerUrl
        break
      case 'Video conferencing':
        description = videoConfButtonText
        url = videoConfUrl
        break
      default:
        break
    }

    let c = { description, url, platform: videoConfPlatform || null }

    handleModalSelect(c)

    setSelectedContent((prevState) => ({
      ...prevState,
      [selectedTemplate]: { description, url, platform: videoConfPlatform || null },
    }))
    setModalOpen(false)
  }

  return (
    <div>
      <h3>Call to Action for Group 21</h3>
      {templateNames21.map((template, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <strong>{template}:</strong>
          {selectedContent[template] && selectedContent[template].url ? (
            <>
              {template === 'Upload my banner' ? (
                <img
                  src={selectedContent[template].url}
                  alt="Banner"
                  style={{ maxWidth: '100%', height: 'auto', margin: '10px 0' }}
                />
              ) : template === 'Video conferencing' ? (
                <button
                  style={{
                    padding: '10px',
                    margin: '10px 5px',
                    backgroundColor: 'rgb(27, 162, 235)',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => window.open(selectedContent[template].url, '_blank')}
                >
                  {selectedContent[template].platform === 'Zoom' && (
                    <FaVideo style={{ color: 'purple', margin: '15px', marginRight: '10px' }} />
                  )}
                  {selectedContent[template].platform === 'Google Meet' && (
                    <FaGoogle style={{ color: 'green', padding: '15px', marginRight: '10px' }} />
                  )}
                  {selectedContent[template].platform === 'Skype' && (
                    <FaSkype style={{ color: 'blue', padding: '15px', marginRight: '10px' }} />
                  )}
                  {selectedContent[template].platform === 'Microsoft Teams' && (
                    <FaMicrosoft
                      style={{ color: 'orange', padding: '15px', marginRight: '10px' }}
                    />
                  )}
                  {selectedContent[template].description || 'Click here'}
                </button>
              ) : (
                <button
                  style={{
                    padding: '10px',
                    margin: '10px 5px',
                    backgroundColor: 'rgb(27, 162, 235)',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open(selectedContent[template].url, '_blank')}
                >
                  {selectedContent[template].description || 'Click here'}
                </button>
              )}
            </>
          ) : (
            <span> </span>
          )}
        </div>
      ))}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {templateNames21.map((template, index) => (
          <button
            key={index}
            style={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              border: '1px solid gray',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: 'transparent',
            }}
            onClick={() => handleTemplateClick(template)}
          >
            {templateIcons21[index]}
            {template}
          </button>
        ))}
      </div>

      {/* Modal for content submission */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid gray',
            borderRadius: '8px',
            width: '400px',
          }}
        >
          <h4>{selectedTemplate}</h4>

          {selectedTemplate === 'Upload my banner' ? (
            <>
              <input type="file" onChange={handleBannerChange} accept="image/*" />
            </>
          ) : selectedTemplate === 'Video conferencing' ? (
            <>
              <label>Choose Platform:</label>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <FaVideo
                  style={{
                    fontSize: '30px',
                    color: 'purple',
                    cursor: 'pointer',
                    border: videoConfPlatform === 'Zoom' ? '2px solid black' : 'none',
                  }}
                  onClick={() => setVideoConfPlatform('Zoom')}
                />
                <FaGoogle
                  style={{
                    fontSize: '30px',
                    color: 'green',
                    cursor: 'pointer',
                    border: videoConfPlatform === 'Google Meet' ? '2px solid black' : 'none',
                  }}
                  onClick={() => setVideoConfPlatform('Google Meet')}
                />
                <FaSkype
                  style={{
                    fontSize: '30px',
                    color: 'blue',
                    cursor: 'pointer',
                    border: videoConfPlatform === 'Skype' ? '2px solid black' : 'none',
                  }}
                  onClick={() => setVideoConfPlatform('Skype')}
                />
                <FaMicrosoft
                  style={{
                    fontSize: '30px',
                    color: 'orange',
                    cursor: 'pointer',
                    border: videoConfPlatform === 'Microsoft Teams' ? '2px solid black' : 'none',
                  }}
                  onClick={() => setVideoConfPlatform('Microsoft Teams')}
                />
              </div>

              <label>Button Text:</label>
              <input
                type="text"
                value={videoConfButtonText}
                onChange={(e) => setVideoConfButtonText(e.target.value)}
                placeholder="Enter meeting button text"
                style={{ width: '100%', marginBottom: '10px' }}
              />
              <label>Meeting URL:</label>
              <input
                type="text"
                value={videoConfUrl}
                onChange={(e) => setVideoConfUrl(e.target.value)}
                placeholder="Enter meeting URL"
                style={{ width: '100%', marginBottom: '10px' }}
              />
            </>
          ) : (
            <>
              <label>Description:</label>
              <input
                type="text"
                value={customButtonText}
                onChange={(e) => setCustomButtonText(e.target.value)}
                placeholder="Enter button text"
                style={{ width: '100%', marginBottom: '10px' }}
              />
              <label>URL:</label>
              <input
                type="text"
                value={customButtonsUrl}
                onChange={(e) => setCustomButtonsUrl(e.target.value)}
                placeholder="Enter URL"
                style={{ width: '100%', marginBottom: '10px' }}
              />
            </>
          )}

          <button
            onClick={handleSubmit}
            style={{
              padding: '10px',
              backgroundColor: 'green',
              color: 'white',
              borderRadius: '5px',
              marginRight: '10px',
            }}
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            style={{
              padding: '10px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '5px',
              marginRight: '10px',
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}

export default AppPageGroup21
