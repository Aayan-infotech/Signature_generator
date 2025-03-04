import React, { useState, useEffect } from 'react'
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
  const [plan, setPlan] = useState([])
  const handlePayment = async (price, subscriptionEnd, id) => {
    if (!Number.isInteger(price)) {
      console.error('Invalid price:', price)
      return
    }
    try {
      const response = await axios.post(
        `http://54.236.98.193:9006/api/user/makePayment/${id}`,
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

  useEffect(() => {
    const handlePremiumPlan = async () => {
      try {
        const response = await axios.get('http://54.236.98.193:9006/api/plan/getAllPlans')
        setPlan(response?.data)
      } catch (error) {
        console.error('Error fetching premium plan:', error)
      }
    }
    handlePremiumPlan()
  }, [])
  console.log(plan)
  return (
    <>
      <Modal show={pricingModal} onHide={handlePricingModalClose} size="xl" centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Subscription Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row gy-4 mb-4 justify-content-center">
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
              {plan.map((item) => (
                <div className="col-lg-4" key={item._id}>
                  <div className="card border-0 shadow-lg rounded-4 h-100">
                    <div className="card-body">
                      <div className="d-flex text-center gap-2 flex-column">
                        <span className="fs-1">
                          ${item.price}/ {item.isMonthly === true ? 'monthly' : 'year'}
                        </span>
                        <h6>
                          Plan type: {'  '}
                          {item.PlanFeature}
                        </h6>

                        <h4>{item?.name}</h4>
                        <div dangerouslySetInnerHTML={{ __html: item?.description }} />
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handlePayment(
                              item.price,
                              new Date(
                                Date.now() + (item.isMonthly ? 30 : 365) * 24 * 60 * 60 * 1000,
                              ),
                              item._id,
                            )
                          }
                        >
                          Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
            <div className="row gy-4 mb-4 justify-content-center">
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
              {plan.map((item) => (
                <div className="col-lg-4" key={item._id}>
                  <div className="card border-0 shadow-lg rounded-4 h-100">
                    <div className="card-body">
                      <div className="d-flex text-center gap-2 flex-column">
                        <span className="fs-1">
                          ${item.price}/ {item.isMonthly === true ? 'monthly' : 'year'}
                        </span>

                        <h4>{item?.name}</h4>
                        <div dangerouslySetInnerHTML={{ __html: item?.description }} />
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handlePayment(
                              item.price,
                              new Date(
                                Date.now() + (item.isMonthly ? 30 : 365) * 24 * 60 * 60 * 1000,
                              ),
                              item._id,
                            )
                          }
                        >
                          Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
