import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

function SuccessShow({ successShow, handleSuccessClose }) {
  return (
    <Modal show={successShow} onHide={handleSuccessClose} centered>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          className="bi bi-stars text-warning"
          viewBox="0 0 16 16"
        >
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </svg>
        <h4 className="text-success mt-4">Signature Created Successfully!</h4>
        <h6 className="fw-bold mb-2">Thank You For Using Our Service</h6>
        <h6 className="mt-4">See All Your Signature</h6>
        <button className=" btn btn-primary mb-4" onClick={handleSuccessClose}>
          Click here
        </button>
      </Modal.Body>
    </Modal>
  )
}

function MySignature({ show, handleClose, signature, selectedImage, handleSelect }) {
  const [searchParams] = useSearchParams()
  const state = searchParams.get('state')
  const code = searchParams.get('code')
  const [deleteshow, setDeleteShow] = useState(false)
  const [successAdded, setSuccessAdded] = useState(false)
  const location = useLocation()
  const token2 = localStorage.getItem('token2')
  const email = localStorage.getItem('userEmail')
  const handleDeleteClose = () => setDeleteShow(false)
  const handleSuccessAdded = () => setSuccessAdded(false)
  console.log(selectedImage)

  const deleteSignature = async (id) => {
    try {
      const response = await axios.delete(`http://3.223.253.106:9006/api/delete/signature/${id}`, {
        headers: {
          Authorization: `Bearer ${token2}`,
        },
      })

      if (response.status === 200) {
        console.log('Signature deleted successfully')
        handleClose()
        setDeleteShow(true) // Trigger the modal to show
      }
    } catch (error) {
      console.error('Error deleting signature:', error)
    }
  }

  const updateSignature = async (signatureText, imageUrl) => {
    try {
      const response = await axios.post(
        'http://3.223.253.106:9006/update-signature',
        {
          email, // Include email in the payload
          signature: signatureText,
          imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token2}`,
          },
        },
      )
      console.log(response)
      if (response.status === 200) {
        handleClose()
        window.location.replace(response.data)
      }
    } catch (error) {
      console.error('Error updating signature:', error)
    }
  }

  // useEffect(() => {
  //   if (location.pathname === '/sendData') {
  //     const sendDataToApi = async () => {
  //       const formData = new FormData();
  //       formData.append('email', email);
  //       formData.append('signature', ``);
  //       formData.append('image', selectedImage?.url);

  //       try {
  //         const response = await axios.post('http://3.223.253.106:9006/update-signature', formData, {
  //           headers: {
  //             'Content-Type': 'multipart/form-data',
  //             Authorization: `Bearer ${token2}`,
  //           },
  //         });

  //         if (response.status === 200) {
  //           window.location.replace('https://mail.google.com/mail/u/0/#inbox');
  //         }
  //       } catch (error) {
  //         console.error('Error sending data:', error);
  //       }
  //     };

  //     sendDataToApi();
  //   }
  // }, [location, email, selectedImage, token2]);

  return (
    <>
      <Modal show={show} size="xl">
        <Modal.Header className="border-0">
          <Modal.Title>Your Signature</Modal.Title>
          <button className="btn-close" onClick={handleClose}></button>
        </Modal.Header>
        <Modal.Body>
          {signature?.length !== 0 && (
            <div
              className={`row gy-4 ${signature?.length > 4 ? 'align-items-center' : 'align-items-start'}`}
            >
              <div className="col-lg-6">
                <div className="row gy-4 mh-300">
                  {signature?.map((item, index) => (
                    <div className="col-6 position-relative" key={index}>
                      <img
                        src={item?.url}
                        alt="signature"
                        className={`w-100 h-100 ${selectedImage === item ? 'selected border border-success' : ''}`}
                        onClick={() => handleSelect(item)}
                      />
                      <div className="position-absolute start-0 ps-4 pt-2 top-0">
                        <svg
                          onClick={() => deleteSignature(item?.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#dc3545"
                          className="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                {selectedImage && (
                  <div className="selected-image text-center">
                    <h5 className="text-center">Your Selected Signature</h5>
                    <img src={selectedImage?.url} alt="Selected" className="w-100 h-100" />
                    <button
                      className="btn btn-primary mt-4"
                      onClick={() => updateSignature('', selectedImage?.url)}
                    >
                      Use This Signature
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      <SuccessAdded show={successAdded} handleClose={handleSuccessAdded} />
      <DeleteShow show={deleteshow} handleClose={handleDeleteClose} />
    </>
  )
}

function SuccessAdded({ successAdded, handleSuccessAdded }) {
  return (
    <Modal show={successAdded} onHide={handleSuccessAdded} centered>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          className="bi bi-stars text-warning"
          viewBox="0 0 16 16"
        >
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </svg>
        <h4 className="text-success mt-4">Signature Created Successfully!</h4>
        <h6 className="fw-bold mb-2">Thank You For Using Our Service</h6>
        <h6 className="mt-4">See All Your Signature</h6>
        <button className=" btn btn-primary mb-4" onClick={handleSuccessAdded}>
          Click here
        </button>
      </Modal.Body>
    </Modal>
  )
}

function DeleteShow({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title>
          <h4 className="text-danger mb-0">Signature Deleted Successfully!</h4>
        </Modal.Title>
      </Modal.Header>
    </Modal>
  )
}

function PaymentSuccess({ paymentShow, handlePyamentClose }) {
  return (
    <Modal show={paymentShow} onHide={handlePyamentClose} centered>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          className="bi bi-stars text-warning"
          viewBox="0 0 16 16"
        >
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
        </svg>
        <h4 className="text-success mt-4">Payment Successfully</h4>
        <h6 className="fw-bold mb-2">Thank You For Using Our Service</h6>
        <h6 className="mt-4">See All Your Signature</h6>
        <button className=" btn btn-primary mb-4" onClick={handlePyamentClose}>
          Click here
        </button>
      </Modal.Body>
    </Modal>
  )
}

function PaymentCancel({ paymentCancelShow, handlePaymentCancelClose }) {
  return (
    <Modal show={paymentCancelShow} onHide={handlePaymentCancelClose} centered>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          class="bi bi-x-lg text-danger"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
        <h4 className="text-danger mt-4">Payment Unsuccessful</h4>
        <h6 className="fw-bold mb-2">Thank You For Using Our Service</h6>
        <h6 className="mt-4">See All Premium plans</h6>
        <button className=" btn btn-primary mb-4" onClick={handlePaymentCancelClose}>
          Click here
        </button>
      </Modal.Body>
    </Modal>
  )
}

export { SuccessShow, MySignature, PaymentSuccess, PaymentCancel }
