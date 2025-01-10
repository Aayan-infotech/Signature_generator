import Modal from 'react-bootstrap/Modal'

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
  console.log(signature)

  return (
    <Modal show={show} size="xl">
      <Modal.Header className="border-0">
        <Modal.Title>Your Signature</Modal.Title>
        <button className="btn-close" onClick={handleClose}></button>
      </Modal.Header>
      <Modal.Body>
        {signature?.length !== 0 && (
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <div className="row gy-4 mh-300">
                {signature?.map((item, index) => (
                  <div className="col-lg-6" key={index}>
                    <img
                      src={item}
                      alt="signature"
                      className={`w-100 h-100 ${selectedImage === item ? 'selected border border-success' : ''}`}
                      onClick={() => handleSelect(item)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              {selectedImage && (
                <div className="selected-image text-center">
                  <h5 className="text-center">Your Selected Signature</h5>
                  <img src={selectedImage} alt="Selected" className="w-100 h-100" />
                  <button className="btn btn-primary mt-4" onClick={handleClose}>
                    Use This Signature
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}

export { SuccessShow, MySignature }
