import React, { useRef, useState , useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import axios from 'axios'
import Cookies from 'js-cookie' // Import Cookies
import Modal from 'react-bootstrap/Modal'
import html2canvas from 'html2canvas'

import { PDFExport } from '@progress/kendo-react-pdf' // Assuming using kendo-react-pdf or similar for PDF generation

const Options = {
  filename: 'signature.pdf',
  page: {
    margin: 20,
  },
}

const Parent = ({ children }) => {
  const { data, selectedContent } = useAppContext()
  const pdfExportComponent = useRef(null) // Reference for PDF component
  const token = localStorage.getItem('token') // Retrieve token from cookies
  const [userId, setUserId] = useState()
  const [imageData, setImageData] = useState(null)
  const [show, setShow] = useState(false)
  const [pdfStore, setPdfStore] = useState(null)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const token2 = localStorage.getItem('token2')
  const downloadPdf = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save()
      setPdfStore(pdfExportComponent.current)
      handleClose()
    } else {
      console.error('PDF component not found')
    }
  }

  const getCurrentUser = async () => {
    try {
      if (!token2) {
        console.error('No token found in localStorage')
        return
      }
      console.log(token2)

      // Make a POST request to the server to send the token and retrieve the user
      const response = await axios.get('http://localhost:9006/api/user', { token: token2 })

      // Handle successful response
      if (response.status === 200) {
        console.log('User retrieved:', response.data)
      } else {
        console.error('Failed to retrieve user:', response.data.message)
      }
    } catch (error) {
      console.error('An error occurred while fetching the user:', error)
    }
  }

  async function getUser() {
    console.log('token2', token2)

    try {
      // Sending POST request to the server with the token
      const response = await axios.post(
        'http://44.196.64.110:9006/api/user',
        {
          token: token2, // Pass token directly in the body
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      // Handling the response
      if (response.status === 200) {
        // User retrieved successfully
        console.log('User retrieved:', response.data)
        setUserId(response.data._id)
        return response.data
      } else {
        // Handling error responses
        console.error('Error:', response.data.message)
      }
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  useEffect(() => {
    getUser()
  }, [userId])

  console.log(pdfStore)

  const handlegmail = async () => {
    try {
      const response = await axios.post('http://localhost:9006/api/email/send-email', pdfStore)
      console.log(response)
    } catch (error) {
      console.warn(error)
    }
  }

  const ToCaptureRef = useRef()

  const captureScreenshot = () => {
    return new Promise((resolve, reject) => {
      html2canvas(ToCaptureRef.current, { useCORS: true })
        .then((canvas) => {
          const dataURL = canvas.toDataURL('image/png')
          sendImage(dataURL)
          var a = document.createElement('a')
          a.href = dataURL
          a.download = `screenshot_${new Date().getTime()}.png`
          a.click()
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

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

  const getSpacing = () => (data.spacing === 'wide' ? '1.5em' : '1em')

  const onSubmit = async () => {
    const data123 = { selectedContent, data }
    try {
      const response = await axios.post(
        'http://44.196.64.110:9006/api/user-data',
        { data: data123 },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Add token in the header
          },
        },
      )
      console.log({ response })
    } catch (error) {
      console.warn(error)
    }
  }

  const sendImage = async (dataURL) => {
    console.log(dataURL, 'abinash')
    if (!dataURL) {
      console.error('No image data available')
      return
    }

    try {
      const base64Data = dataURL.split(',')[1]
      const byteCharacters = atob(base64Data)
      const byteArrays = []

      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512)
        const byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        byteArrays.push(byteArray)
      }

      const blob = new Blob(byteArrays, { type: 'image/png' })

      const formData = new FormData()
      formData.append('images', blob, 'signature.png')

      const response = await axios.post(
        'http://44.196.64.110:9006/api/create/signature',
        formData,
        userId,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      console.log('Image sent successfully:', response)
    } catch (error) {
      console.error('Error sending image:', error)
    }
  }

  const doubleAction = () => {
    captureScreenshot()
    // .then(() => {
    // })
    // .catch((error) => {
    //   console.error('Error capturing screenshot:', error)
    // })
  }

  return (
    <>
      <button
        // onClick={() => handleShow()}
        onClick={doubleAction}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          alignSelf: 'flex-end',
        }}
      >
        OK, I'm done
      </button>
      {/* <PDFExport ref={pdfExportComponent} fileName={Options.filename}> */}
      <div
        className={`${data.font}` || 'Arimo'}
        // id="pdfsignature"
        ref={ToCaptureRef}
        style={{
          display: 'flex',
          color: 'inherit',
          fontSize: getFontSize(),
          lineHeight: getSpacing(),
          maxWidth: '50vw',
          flexWrap: 'wrap',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
          width: '100%',
        }}
      >
        {children}
      </div>
      {/* </PDFExport> */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>Do You want to add in email?</Modal.Title>
        </Modal.Header>

        <Modal.Footer className="border-0 justify-content-center">
          <button className="btn  btn-dark" onClick={downloadPdf}>
            Close
          </button>
          <button className=" btn btn-primary" onClick={doubleAction}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Parent
