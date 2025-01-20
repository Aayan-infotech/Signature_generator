import React from 'react'
import Modal from 'react-bootstrap/Modal'

export default function PremiumModal({ pricingModal, handlePricingModalClose }) {
  return (
    <>
      <Modal show={pricingModal} onHide={handlePricingModalClose} size="lg" centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Subscription Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body">
                  <div className="d-flex text-center gap-4 flex-column">
                    <h3 className="mb-0">Free</h3>
                    <h6>You can avail this feature for free</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body">
                  <div className="d-flex flex-column gap-4 text-center">
                    <h3 className="mb-0">$10</h3>
                    <h6>You can avail this premium feature</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body">
                  <div className="d-flex flex-column gap-4 text-center">
                    <h3 className="mb-0">$20</h3>
                    <h6>You can avail this premium feature</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center align-items-center">
          <button className="btn btn-secondary" onClick={handlePricingModalClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
