import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Header() {
    const cart = useSelector(state=> state.cart.cart2)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Nav.Link as={Link} to={'home'}>Home</Nav.Link>
            
            
            
            
            <Nav.Link as={Link} to={'cart'}><FaShoppingCart /> ({cart.length})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;