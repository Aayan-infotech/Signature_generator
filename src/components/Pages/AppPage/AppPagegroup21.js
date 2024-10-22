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
  <FaMoneyBill />,
  <FaRegAddressCard />,
  <FaHandPointUp />,
  <FaShoppingCart />,
  <FaBriefcase />,
  <FaVideo />,
  <FaMicrosoft />,
]

const AppPageGroup21 = () => {
  // const [selectedContent, setSelectedContent] = useState({})
  // model controls
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [videoConfPlatform, setVideoConfPlatform] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
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
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter button text"
                  style={{ width: '100%', marginBottom: '10px' }}
                />
                <label>URL:</label>
                <input
                  type="text"
                  value={url}
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
              padding: '10px',
              marginTop: '10px',
              backgroundColor: 'lightblue',
              borderRadius: '2px',
              border: '2px solid white',
            }}
          >
            Add
          </button>
          <button
            onClick={handleCancel}
            style={{
              padding: '10px',
              marginTop: '10px',
              marginLeft: '5px',
              backgroundColor: 'lightcoral',
              borderRadius: '2px',
              border: '2px solid white',
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
