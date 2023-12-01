import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header2() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="Dark" >
      <Container>
        <Navbar.Brand href="#home">Hotels & Resorts</Navbar.Brand>
        <Navbar.Brand href="#home">Offers</Navbar.Brand>
        <Navbar.Brand href="#home">Resturant & Bars</Navbar.Brand>
        <NavDropdown title="Experience" id="basic-nav-dropdown">
          <NavDropdown.Item href="#games">Games</NavDropdown.Item>
          <NavDropdown.Item href="#activities">Activities</NavDropdown.Item>
          <NavDropdown.Item href="#pool">Pool</NavDropdown.Item>
        </NavDropdown>

        <Navbar.Brand href="#home">Mount-Blue Circle</Navbar.Brand>
        <Navbar.Brand href="#home">Mount-Blue Boutique</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header2;
