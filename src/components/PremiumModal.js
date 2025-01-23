import React from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
// import {ReactStripe} from "@stripe/react-stripe-js"

export default function PremiumModal({
  pricingModal,
  handlePricingModalClose,
  premiumPlans,
  handlePremiumClose,
}) {
  const token = localStorage.getItem('token2')
  const publishableKey =
    'pk_test_51QjFfdBgZZyeFEqTuo1HPMhCZQA0ykwEm9y9iFhBLbHtPgFNnsRPsFb38IywwbstwAg4U9K9wBUcnpvTaSwLYKvI00KYTL1C2p'

  const handlePayment = async (price, subscriptionEnd) => {
    if (!Number.isInteger(price)) {
      console.error('Invalid price:', price)
      return
    }
    try {
      const response = await axios.post(
        'http://44.196.64.110:9006/api/user/makePayment',
        {
          publishableKey,
          price,
          subscriptionEnd,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Add token in the header
          },
        },
      )

      window.location.href = response?.data?.session?.url
    } catch (error) {
      console.error('Error creating payment session:', error)
    }
  }
  return (
    <>
      <Modal show={pricingModal} onHide={handlePricingModalClose} size="xl" centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Subscription Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row gy-4 mb-4">
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex text-center gap-4 flex-column">
                      <h3 className="mb-0">Free</h3>
                      <h6>You can avail this feature for free</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-4 text-center">
                      <h3 className="mb-0">
                        <span className="fs-1">$10/</span>month
                      </h3>
                      <h6>You can avail this premium feature</h6>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handlePayment(10, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
                        }
                      >
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-4 text-center">
                      <h3 className="mb-0">
                        <span className="fs-1">$20/</span>month
                      </h3>
                      <h6>You can avail this premium feature</h6>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handlePayment(20, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
                        }
                      >
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-4 text-center">
                      <h3 className="mb-0">
                        <span className="fs-1">$60/</span>Yearly
                      </h3>
                      <h6>You can avail this premium feature</h6>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handlePayment(60, new Date(Date.now() + 365 * 24 * 60 * 60 * 1000))
                        }
                      >
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-4 text-center">
                      <h3 className="mb-0">
                        <span className="fs-1">$100/</span>yearly
                      </h3>
                      <h6>You can avail this premium feature</h6>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handlePayment(100, new Date(Date.now() + 365 * 24 * 60 * 60 * 1000))
                        }
                      >
                        Payment
                      </button>
                    </div>
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

      <Modal show={premiumPlans} onHide={handlePremiumClose} size="lg" centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Subscription Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row gy-4 mb-4">
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex text-center gap-4 flex-column">
                      <h3 className="mb-0">Free</h3>
                      <h6>You can avail this feature for free</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-4 text-center">
                      <h3 className="mb-0">
                        <span className="fs-1">$10/</span>month
                      </h3>
                      <h6>You can avail this premium feature</h6>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handlePayment(10, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
                        }
                      >
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-4 text-center">
                      <h3 className="mb-0">
                        <span className="fs-1">$20/</span>month
                      </h3>
                      <h6>You can avail this premium feature</h6>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handlePayment(20, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
                        }
                      >
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-4 text-center">
                      <h3 className="mb-0">
                        <span className="fs-1">$60/</span>Yearly
                      </h3>
                      <h6>You can avail this premium feature</h6>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handlePayment(60, new Date(Date.now() + 365 * 24 * 60 * 60 * 1000))
                        }
                      >
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg rounded-4 h-100">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-4 text-center">
                      <h3 className="mb-0">
                        <span className="fs-1">$100/</span>yearly
                      </h3>
                      <h6>You can avail this premium feature</h6>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handlePayment(100, new Date(Date.now() + 365 * 24 * 60 * 60 * 1000))
                        }
                      >
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center align-items-center">
          <button className="btn btn-secondary" onClick={handlePremiumClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
