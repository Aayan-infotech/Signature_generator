import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/images/logo.png'
import { RxAvatar } from 'react-icons/rx'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { MySignature } from '../mySignature'

function Header() {
  const [show, setShow] = useState(false)
  const [signature, setSignature] = useState([])
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const handleShow = () => setShow(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const token2 = localStorage.getItem('token2')
  const location = useLocation()
  const handleCurrentUser = async () => {
    const response = await axios.get('http://44.196.64.110:9006/api/user/', {
      headers: {
        Authorization: `Bearer ${token2}`,
      },
    })
    setUser(response?.data)
  }

  useEffect(() => {
    handleCurrentUser()
  }, [])

  const handleClose = () => {
    setShow(false)
    navigate('/')
  }

  useEffect(() => {
    if (location.pathname === '/signature') {
      handleSignature()
      handleShow()
    }
  }, [location])

  const handleSignature = async () => {
    if (!token2) {
      alert('Token not found. Please log in again.')
      return
    }

    try {
      const response = await axios.get('http://44.196.64.110:9006/api/get/signature', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token2}`, // Ensure proper format
        },
      })
      setSignature(response?.data?.signature)
      // handleShow()
      // handleClose()
    } catch (error) {
      console.warn('Error fetching signature:', error)
      alert('Failed to fetch signature. Please try again.')
    }
  }

  const handleLogout = async () => {
    const response = await axios.post(
      'http://44.196.64.110:9006/api/user/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token2}`,
        },
      },
      localStorage.removeItem('token2'),
      window.location.replace(`http://44.196.64.110:2222/`),
    )
  }

  const handleSelect = (image) => {
    setSelectedImage(image) // Set the selected image in state
  }

  return (
    <>
      <Navbar className="py-0">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="w-100" style={{ maxWidth: '110px' }} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-between">
            <Nav.Link onClick={handleSignature}>My Signature</Nav.Link>
            <Navbar.Text className="d-flex flex-row align-items-center">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="border-0 text-dark"
                  style={{ background: 'none' }}
                >
                  <RxAvatar className="fs-2" />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ left: '-50px' }}>
                  <a onClick={handleLogout} className="text-decoration-none ps-3">
                    Logout
                  </a>
                </Dropdown.Menu>
              </Dropdown>
              <span>Hello User</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MySignature
        show={show}
        handleClose={handleClose}
        signature={signature}
        selectedImage={selectedImage}
        handleSelect={handleSelect}
      />
    </>
  )
}

export default Header
