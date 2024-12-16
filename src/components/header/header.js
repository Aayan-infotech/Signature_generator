import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/images/logo.png'
import { RxAvatar } from 'react-icons/rx'
import Dropdown from 'react-bootstrap/Dropdown'

function Header() {
  return (
    <>
      <Navbar className="py-0">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="w-100" style={{ maxWidth: '110px' }} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='d-flex flex-row align-items-center'>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='border-0 text-dark' style={{background: 'none'}}>
                  <RxAvatar className="fs-2" />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{left:"-50px"}}>
                  <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                 
                </Dropdown.Menu>
              </Dropdown>
                <span>Hello User</span>
             
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
