// components/AppPage.js
import React, { useState, useEffect } from 'react'
import AppPageGroup1 from './AppPageGroup1'
import AppPageGroup2 from './AppPageGroup2'
import AppPagegroup21 from './AppPagegroup21'
import axios from 'axios'

const AppPages = () => {
  const [premiumPlans, setPremiumPlans] = useState('')
  const [premiumEnd, setPremiumEnd] = useState('')
  const [premiumStart, setPremiumStart] = useState('')
  const [allPlan, setAllPlan] = useState([])
  const [allPlanMonthy, setAllPlanMonthy] = useState([])
  const [allPlanYearly, setAllPlanYearly] = useState([])
  const [isMonthy, setIsMonthly] = useState(false)
  const [isYearly, setIsYearly] = useState(false)
  const [planMonth, setPlanMonth] = useState('')
  const [planYear, setPlanYear] = useState('')
  const [planType, setPlanType] = useState('')
  const token = localStorage.getItem('token2')

  const getCurrentUser = async () => {
    const response = await axios.get('http://54.236.98.193:9006/api/plan/getUserPlan', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    setPremiumPlans(response?.data?.user?.amount)
    // setPremiumPlans(0)
    console.log('PlanFeature', response?.data)
    setPremiumEnd(response?.data?.user?.subscriptionEnd)
    setPremiumStart(response?.data?.user?.subscriptionStarted)
    setIsMonthly(response?.data?.user?.Plan?.isMonthly)
    setIsYearly(response?.data?.user?.Plan?.isYearly)
    setPlanType(response?.data?.user?.Plan?.PlanFeature)
  }

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
  }, [])

  useEffect(() => {
    if (isMonthy === true) {
      setPlanMonth(premiumPlans)
    } else if (isYearly === true) {
      setPlanYear(premiumPlans)
    }
  }, [isMonthy, isYearly])

  console.log('allPlanMonthy', allPlanMonthy)
  console.log('allPlanYearly', allPlanYearly)
  return (
    <div>
      <AppPageGroup1
        premiumPlans={premiumPlans}
        isMonthly={isMonthy}
        isYearly={isYearly}
        allPlan={allPlan}
        planMonth={planMonth}
        planYear={planYear}
        allPlanMonthy={allPlanMonthy}
        allPlanYearly={allPlanYearly}
        planType={planType}
      />
      <AppPagegroup21
        premiumPlans={premiumPlans}
        isMonthly={isMonthy}
        isYearly={isYearly}
        allPlan={allPlan}
        planMonth={planMonth}
        planYear={planYear}
        allPlanMonthy={allPlanMonthy}
        allPlanYearly={allPlanYearly}
        planType={planType}
      />
      <AppPageGroup2
        premiumPlans={premiumPlans}
        isMonthly={isMonthy}
        isYearly={isYearly}
        allPlan={allPlan}
        planMonth={planMonth}
        planYear={planYear}
        allPlanMonthy={allPlanMonthy}
        allPlanYearly={allPlanYearly}
        planType={planType}
      />
    </div>
  )
}

export default AppPages
