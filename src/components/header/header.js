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
import { MySignature, PaymentSuccess, PaymentCancel } from '../mySignature'
import Offcanvas from 'react-bootstrap/Offcanvas'
import PremiumModal from '../PremiumModal'





function Header() {
  const [showSide, setShowSide] = useState(false)
  const [successAdded, setSuccessAdded] = useState(false)
  const handleSideClose = () => setShowSide(false)
  const handleSideShow = () => setShowSide(true)
  const [show, setShow] = useState(false)
  const [paymentShow, setPaymentShow] = useState(false)
  const [premiumPlans, setPremiumPlans] = useState(false)
  const [paymentCancelShow, setPaymentCancelShow] = useState(false)
  const [signature, setSignature] = useState([])
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const handleShow = () => setShow(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const token2 = localStorage.getItem('token2')
  const location = useLocation()
  const handleSuccessAdded = () => {
    navigate('/signature')
    setSuccessAdded(false)
  }

  const handlePlanChecker = async () => {
    try {
      if (!token2) {
        console.error("Token is missing");
        return;
      }
  
      const response = await axios.get(
        'http://3.223.253.106:9006/api/user/planChecker',
        {
          headers: {
            Authorization: `Bearer ${token2}`,
          },
        }
      );
  
      if (response.data.success) {
        console.log("Plan checked successfully:", response?.data?.user);
      } else {
        console.error("Plan check failed:", response?.data?.message);
      }
    } catch (error) {
      console.error("Error checking plan:", error?.message);
    }
  };
  
  useEffect(() => {
    handlePlanChecker();
  }, []);
  

  const handleCurrentUser = async () => {
    const response = await axios.get('http://3.223.253.106:9006/api/user/', {
      headers: {
        Authorization: `Bearer ${token2}`,
      },
    })
    setUser(response?.data?.data?.email)
    localStorage.setItem('userEmail', response?.data?.data?.email)
  }

  useEffect(() => {
    handleCurrentUser()
  }, [])

  const handleClose = () => {
    setShow(false)
    navigate('/')
  }

  const handlePyamentClose = () => {
    setPaymentShow(false)
    setShow(true)
  }

  const handlePyamentShow = () => {
    setPaymentShow(true)
  }

  const handlePyamentCancelShow = () => {
    setPaymentCancelShow(true)
  }

  const handlePaymentCancelClose = () => {
    setPaymentCancelShow(false)
    setPremiumPlans(true)
  }

  useEffect(() => {
    if (location.pathname === '/signature') {
      handleSignature()
      handleShow()
    }
  }, [location])

  useEffect(() => {
    if (location.pathname === '/success') {
      handlePyamentShow()
      handleSignature()
    }
  }, [location])

  useEffect(() => {
    if (location.pathname === '/declined') {
      handlePyamentCancelShow()
    }
  }, [location])

  const handlePremiumClose = () => {
    setPremiumPlans(false)
    navigate('/')
  }

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
      const response = await axios.get('http://3.223.253.106:9006/api/get/signature', {
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

  console.log(signature)

  const handleLogout = async () => {
    await axios.post(
      'http://3.223.253.106:9006/api/user/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token2}`,
        },
      },
    )
    localStorage.removeItem('token2')
    window.location.replace(`http://3.223.253.106:2222/`)
  }

  const handleSelect = (image) => {
    setSelectedImage(image)
  }

  useEffect(() => {
    console.log(location)
    if (location.pathname === '/signature-added') {
      setSuccessAdded(true)
    }
    console.log(successAdded)
  }, [location])

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

      <Modal show={successAdded} onHide={handleSuccessAdded} centered>
        <Modal.Header className="border-0" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-stars text-warning"
            viewBox="0 0 16 16"
          >
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
          </svg>
          <h4 className="text-success mt-4">Signature Added Successfully!</h4>
          <h6 className="fw-bold mb-2">Thank You For Using Our Service</h6>
          <h6 className="mt-4">See All Your Signature</h6>
          <button className=" btn btn-primary mb-4" onClick={handleSuccessAdded}>
            Click here
          </button>
        </Modal.Body>
      </Modal>
      <MySignature
        show={show}
        handleClose={handleClose}
        signature={signature}
        selectedImage={selectedImage}
        handleSelect={handleSelect}
      />
      <PaymentSuccess paymentShow={paymentShow} handlePyamentClose={handlePyamentClose} />

      <PaymentCancel
        paymentCancelShow={paymentCancelShow}
        handlePaymentCancelClose={handlePaymentCancelClose}
      />

      <PremiumModal premiumPlans={premiumPlans} handlePremiumClose={handlePremiumClose} />
    </>
  )
}

export default Header
