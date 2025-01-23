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
  const token = localStorage.getItem('token2')

  const getCurrentUser = async () => {
    const response = await axios.get('http://44.196.64.110:9006/api/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    setPremiumPlans(response?.data?.data?.amount)
    // setPremiumPlans(0)
    setPremiumEnd(response?.data?.data?.subscriptionEnd)
    setPremiumStart(response?.data?.data?.subscriptionStarted)
  }

  console.log("premiumPlans", premiumPlans)

  useEffect(() => {
    getCurrentUser()
  }, [])
  return (
    <div>
      <AppPageGroup1 premiumPlans={premiumPlans} />
      <AppPagegroup21 premiumPlans={premiumPlans} />
      <AppPageGroup2 premiumPlans={premiumPlans} />
    </div>
  )
}

export default AppPages
