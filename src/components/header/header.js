import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/images/logo.png'
import { RxAvatar } from 'react-icons/rx'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function Header() {
  const [show, setShow] = useState(false)
  const [signature, setSignature] = useState(null)
  const [user, setUser] = useState(null)
  const location = useLocation()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const token = params.get('token')
    if (token) {
      localStorage.setItem('token2', token)
    }
  }, [location])

  const handleSignature = async () => {
    const token2 = localStorage.getItem('token2');
    
    if (!token2) {
      alert('Token not found. Please log in again.');
      return;
    }
  
    try {
      const response = await axios.get('http://localhost:9006/api/get/signature', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token2}`, // Ensure proper format
        },
      });
      setSignature(response.data);
      handleShow();
    } catch (error) {
      console.warn('Error fetching signature:', error);
      alert('Failed to fetch signature. Please try again.');
    }
  };
  
  

  const handleCurrentUser = async () => {
    const token2 = localStorage.getItem('token2')
    console.log(token2)
    const response = await axios.get('http://localhost:9006/api/user/', {
      headers: {
        Authorization: `Bearer ${token2}`,
      },
    })
    setUser(response?.data)
  }

  useEffect(() => {
    handleCurrentUser()
  }, [])

  const handleLogout = async () => {
    const token2 = localStorage.getItem('token2')
    const response = await axios.post(
      'http://localhost:9006/api/user/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token2}`,
        },
      },
      localStorage.removeItem('token2'),
      window.location.replace(`http://localhost:5173/`),
    )
  }

  console.log(signature)

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

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Your Signature</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {signature ? (
            <div className="row">
              <div className="col-lg-3">
                <img
                  src={signature.signature} // Accessing the `signature` property from the object
                  alt="User Signature"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          ) : (
            'Loading...'
          )}
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-center">
          <button className="btn btn-primary" onClick={handleClose}>
            Use This Signature
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Header
