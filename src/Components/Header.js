import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/logo.jpg";
import '../Styles/Header.css';
import BoyIcon from '@mui/icons-material/Boy';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Header() {
  return (
    <>
      <Navbar bg="White" data-bs-theme="White">
        <Container>
          <Navbar.Brand href="#home" className='logo'>
            <img src={logo} className='logo-img'/>
            Mount-Blue
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">| <BoyIcon/>Sign in</Nav.Link>
            <Nav.Link href="#home">| Join Now</Nav.Link>
            <Nav.Link href="#home">| Find Reservations</Nav.Link>
            <Nav.Link href="#home">| <LanguageIcon/>English</Nav.Link>
            <Nav.Link href="#home">| AUD</Nav.Link>
            <Nav.Link href="#home">| Find Reservations</Nav.Link>
            <Nav.Link href="#home">| <PhoneAndroidIcon/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
    </>
  );
}

export default Header;