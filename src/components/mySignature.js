import Modal from 'react-bootstrap/Modal'

function SuccessShow({ successShow, handleSuccessClose }) {
  return (
    <Modal show={successShow} onHide={handleSuccessClose} centered>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <h3>Signature Created Successfully</h3>
        <h6 className="mt-4">See All Your Signature</h6>
        <button className=" btn btn-primary mb-4" onClick={handleSuccessClose}>
          Click here
        </button>
      </Modal.Body>
    </Modal>
  )
}
function MySignature({ show, handleClose, signature, selectedImage, handleSelect }) {
    console.log(signature);
    
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
