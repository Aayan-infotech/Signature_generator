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
import Modal from 'react-bootstrap/Modal'
import PremiumModal from '../../PremiumModal'

export const callLinks = ['/call/meet.png', '/call/skype.png', '/call/zoom.png']

export const templateNames21 = [
  // 'Online Payments',
  // 'Social buttons',
  'Custom buttons',
  'Upload my banner',
  'Sales event',
  'Video conferencing',
]

export const templateIcons21 = [
  <FaMoneyBill style={{ color: 'blue' }} />,
  <FaRegAddressCard style={{ color: '#4CAF50' }} />,
  <FaHandPointUp style={{ color: 'red' }} />,
  <FaVideo style={{ color: '#9C27B0' }} />,
  <FaBriefcase style={{ color: '#FFC107' }} />,
  <FaVideo style={{ color: '#4CAF50' }} />,
  <FaMicrosoft style={{ color: '#4CAF50' }} />,
]

const AppPageGroup21 = () => {
  // const [selectedContent, setSelectedContent] = useState({})
  // model controls
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [videoConfPlatform, setVideoConfPlatform] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
  const { setSelectedTemplate, selectedTemplate, handleModalSelect } = useAppContext()
  const [selectedCard, setSelectedCard] = useState(null)
  const [premiumModal, setPremiumModal] = useState(false)
  const [pricingModal, setPricingModal] = useState(false)

  const handlePremiumFeatureClick = () => {
    setSelectedTemplate()
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

  const handleTemplateClick = (templateName) => {
    console.log({ templateName })
    setModalOpen(true)
    setSelectedTemplate(templateName)
    setSelectedCard(templateName)
  }

  const handleBannerChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setUrl(url)
    }
  }

  const handleCancel = () => {
    setModalOpen(false)
    setDescription('')
    setUrl('')
    setVideoConfPlatform(0)
  }

  const handleSubmit = () => {
    let c = { description, url, platform: videoConfPlatform }
    handleModalSelect(c)
    // setSelectedContent((prevState) => ({
    //   ...prevState,
    //   [selectedTemplate]: { description, url, platform: videoConfPlatform || null },
    // }))
    handleCancel()
  }

  return (
    <>
      <div>
        <h3>Call to Action</h3>
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
                border: selectedCard === templateNames21 ? '1px solid blue' : '1px solid gray',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
              onClick={() => {
                if (!selectedCard || !selectedCard.includes(templateNames21)) {
                  handlePremiumFeatureClick(templateNames21)
                } else {
                  handleTemplateClick(templateNames21)
                }
              }}
              className={`position-relative template-item ${selectedCard === templateNames21 ? 'active' : ''}`}
            >
              {templateIcons21[index]}
              {template}
              <div className="position-absolute start-0 ps-2 pt-1 top-0">
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
            </button>
          ))}
        </div>

        {/* Modal for content submission */}
        {isModalOpen && (
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
                maxWidth: '400px',
                width: '100%',
              }}
            >
              <h4>{selectedTemplate}</h4>

              {selectedTemplate === 'Upload my banner' ? (
                <>
                  <input
                    type="file"
                    onChange={handleBannerChange}
                    accept="image/*"
                    className="form-control"
                  />
                </>
              ) : (
                <>
                  {selectedTemplate === 'Video conferencing' && (
                    <>
                      <label>Choose Platform:</label>
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        {callLinks.map((i, ind) => (
                          <img
                            src={i}
                            height={40}
                            alt=""
                            style={{
                              border: `1px solid ${videoConfPlatform === ind ? 'darkblue' : '#e7e7e7'}`,
                              padding: '5px',
                              borderRadius: '10px',
                            }}
                            onClick={() => setVideoConfPlatform(ind)}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  <>
                    <label>Description:</label>
                    <input
                      type="text"
                      value={description}
                      className="form-control"
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter button text"
                      style={{ width: '100%', marginBottom: '10px' }}
                    />
                    <label>URL:</label>
                    <input
                      type="text"
                      value={url}
                      className="form-control"
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Enter URL"
                      style={{ width: '100%', marginBottom: '10px' }}
                    />
                  </>
                </>
              )}
              <button
                onClick={handleSubmit}
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
                onClick={handleCancel}
                style={{
                  marginTop: '10px',
                  marginLeft: '5px',
                  backgroundColor: 'lightcoral',

                  border: '2px solid white',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '10px 18px',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
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
    </>
  )
}

export default AppPageGroup21
