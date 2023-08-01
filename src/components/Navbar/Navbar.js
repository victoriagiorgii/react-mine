import './Navbar.css';
import { Navbar } from 'react-bootstrap';
import { CardWidget } from "../CartWidget/index";
import{ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

export const Navbar=()=>{
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">GIACCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Aros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Collares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pulseras</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget/> <h1 className="carrito">0</h1>
      <ItemDetailContainer/>
    </Navbar>
  );
}  