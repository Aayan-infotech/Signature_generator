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
import Offcanvas from 'react-bootstrap/Offcanvas'

function Header() {
  const [showSide, setShowSide] = useState(false)

  const handleSideClose = () => setShowSide(false)
  const handleSideShow = () => setShowSide(true)
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
    setUser(response?.data?.data?.email)
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

  const handleModalSignature = () => {
    handleSignature()
    handleShow()
  }

  const handleSignature = async () => {
    if (!token2) {
      alert('Token not found. Please log in again.')
      return
    }

    try {
      const response = await axios.get('http://44.196.64.110:9006/api/get/signature', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token2}`,
        },
      })
      setSignature(response?.data?.signature)
    } catch (error) {
      console.warn('Error fetching signature:', error)
      alert('Failed to fetch signature. Please try again.')
    }
  }

  console.log(signature);
  

  const handleLogout = async () => {
    await axios.post(
      'http://44.196.64.110:9006/api/user/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token2}`,
        },
      },
    )
    localStorage.removeItem('token2')
    window.location.replace(`http://44.196.64.110:2222/`)
  }

  const handleSelect = (image) => {
    setSelectedImage(image)
  }

  return (
    <>
      <Navbar className="py-0 d-none d-lg-block">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="w-100" style={{ maxWidth: '110px' }} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-between">
            <Nav.Link onClick={handleModalSignature}>My Signature</Nav.Link>
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
              <span className="fs-6">{user}</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="py-0 d-block d-lg-none navbar-unexpand">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="w-100" style={{ maxWidth: '110px' }} />
          </Navbar.Brand>
          <div className="d-flex justify-content-end flex-row gap-2 align-items-center">
            <Nav.Link onClick={handleModalSignature}>My Signature</Nav.Link>
            <Navbar.Toggle
              className="d-block border-0 ms-2"
              aria-controls="basic-navbar-nav"
              onClick={handleSideShow}
            />
            <Offcanvas show={showSide} onHide={handleSideClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>SignaTouch</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <span className="fs-6">
                  Logged in as <br />
                  {user}
                </span>
                <div className="position-relative h-25">
                  <div className="position-absolute bottom-0 left-0">
                    <button
                      onClick={handleLogout}
                      className="text-decoration-none ps-3 btn btn-danger"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
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
