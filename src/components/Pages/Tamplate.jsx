import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import './Tamplate.css'
import PremiumModal from '../PremiumModal'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'

const TamplatesPreview = () => {
  const { handleTamplate, selectedTamplate } = useAppContext()
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [premiumModal, setPremiumModal] = useState(false)
  const [pricingModal, setPricingModal] = useState(false)
  const [premiumPlans, setPremiumPlans] = useState('')
  const [premiumEnd, setPremiumEnd] = useState('')
  const [allPlan, setAllPlan] = useState([])
  const [allPlanMonthy, setAllPlanMonthy] = useState([])
  const [allPlanYearly, setAllPlanYearly] = useState([])
  const [isMonthy, setIsMonthly] = useState(false)
  const [isYearly, setIsYearly] = useState(false)
  const [planMonth, setPlanMonth] = useState('')
  const [planYear, setPlanYear] = useState('')
  const [planType, setPlanType] = useState('')
  const [loading, setLoading] = useState(true) // New state to track API loading
  const [premiumStart, setPremiumStart] = useState('')
  const token = localStorage.getItem('token2')

  const getCurrentUser = async () => {
    setLoading(true) // Set loading to true before API call
    try {
      const response = await axios.get('http://54.236.98.193:9006/api/plan/getUserPlan', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response?.data)
      setPremiumPlans(response?.data?.user?.amount || 0)
      setPremiumEnd(response?.data?.user?.subscriptionEnd)
      setPremiumStart(response?.data?.user?.subscriptionStarted)
      setIsYearly(response?.data?.user?.Plan?.isYearly)
      setPlanType(response?.data?.user?.Plan?.PlanFeature)
      setIsMonthly(response?.data?.user?.Plan?.isMonthly)
    } catch (error) {
      console.error('Failed to fetch user data:', error)
      setPremiumPlans(0) // Default to 0 if the API call fails
    } finally {
      setLoading(false) // Set loading to false after API call finishes
    }
  }
  // Array of 12 template names
  const templates = Array.from({ length: 12 }, (_, index) => `Template${index + 1}`)
  console.log('premiumPlans template', premiumPlans)

  const handleAllPlan = async () => {
    try {
      // Fetch plans from the API
      const response = await axios.get('http://54.236.98.193:9006/api/plan/getAllPlans')
      const plans = response?.data

      // Filter and set plans
      const monthlyPlans = plans?.filter((plan) => plan.isMonthly)
      const yearlyPlans = plans?.filter((plan) => plan.isYearly)

      // Update state with filtered plans
      setAllPlan(plans)
      setAllPlanMonthy(monthlyPlans)
      setAllPlanYearly(yearlyPlans)
    } catch (error) {
      console.error('Error fetching premium plans:', error)
    }
  }

  useEffect(() => {
    getCurrentUser()
    handleAllPlan()
  }, [premiumPlans])

  useEffect(() => {
    if (isMonthy === true) {
      setPlanMonth(premiumPlans)
    } else if (isYearly === true) {
      setPlanYear(premiumPlans)
    }
  }, [isMonthy, isYearly])

  console.log('allPlanMonthy', allPlanMonthy)
  console.log('allPlanYearly', allPlanYearly)
  console.log('planType', planType)
  console.log('isYearly', isYearly)
  console.log('isMonthy', isMonthy)

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template) // Set the clicked template as active
    handleTamplate(template)
  }

  const handlePremiumFeatureClick = (templateName) => {
    setSelectedTemplate(templateName)
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

  const isPremiumExpired = new Date(premiumEnd) < new Date()

  const shouldShowStar = (index) => {
    if (index === 0 || index === 1) return false;

    if (planType === 'full' ) {
        return false; // No star for full plan
    } else if (planType === 'basic') {
        return index >= 6; // Show star from index 6 for basic plan
    } else {
        return index >= 2; // Default: show star from index 2
    }
};

  return (
    <>
      <div>
        <h3>Templates</h3>
        <div
          className="pe-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // 2-column layout
            gap: '20px', // Space between items
            margin: '0 auto', // Center grid
            height: 'calc(100vh - 100px)',
            overflowY: 'auto',
          }}
        >
          {templates.map((template, index) => (
            <div key={index} className="position-relative">
              <img
                src={`/preview/${template}.jpg`}
                alt={template}
                className={`template-item ${selectedTemplate === template ? 'active' : ''}`}
                style={{
                  padding: '15px',
                  border: selectedTemplate === template ? '2px solid blue' : '1px solid gray',
                  cursor: 'pointer',
                  width: '100%',
                  objectFit: 'contain',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                }}
                height={100}
                onClick={() => {
                  if (loading) return

                  const isBasicPlan = planType === 'basic'
                  const isFullPlan = planType === 'full'
                  const hasMatchingMonthlyPlan = allPlanMonthy.some(
                    (plan) => plan.price === premiumPlans,
                  )
                  const hasMatchingYearlyPlan = allPlanYearly.some(
                    (plan) => plan.price === premiumPlans,
                  )

                  if (
                    index >= 2 &&
                    isBasicPlan &&
                    isFullPlan &&
                    (hasMatchingMonthlyPlan || hasMatchingYearlyPlan)
                  ) {
                    handleTemplateClick(template)
                  } else if (index >= 2 && !isBasicPlan && !isFullPlan) {
                    handlePremiumFeatureClick(template)
                  } else if (
                    index >= 6 &&
                    isFullPlan &&
                    (hasMatchingMonthlyPlan || hasMatchingYearlyPlan)
                  ) {
                    handleTemplateClick(template)
                  } else if (index >= 6 && !isFullPlan) {
                    handlePremiumFeatureClick(template)
                  } else if (index >= 2 && premiumPlans === 0) {
                    handlePremiumFeatureClick(template)
                  } else {
                    handleTemplateClick(template)
                  }
                }}
              />
              {shouldShowStar(index) && ( // Conditionally render the star
                <div
                  className="position-absolute start-0 ps-2 pt-1 top-0 w-100 h-100 z-1"
                  onClick={() => handlePremiumFeatureClick(template)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffc107"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {premiumModal && (
        <Modal show={premiumModal} onHide={handlePremiumModalClose} centered>
          <Modal.Header className="border-0" closeButton>
            <Modal.Title>Template</Modal.Title>
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

export default TamplatesPreview
