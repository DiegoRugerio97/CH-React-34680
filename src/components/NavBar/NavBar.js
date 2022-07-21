// Componente NavBar
// Estilos
// Propios y modificaciones de BS
import './NavBar.css';
// Se importa el logo desde dir de imagenes
import logo from '../../img/Mafty.png';
// Cart
import CartWidget from '../CartWidget/CartWidget.js';

// Componentes del react BS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



const NavBar = () => {
    // react-BS navbar
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top navLogo"
                    />
                    <Navbar.Brand href="#home">Mafty Shop</Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">¿Quiénes somos?</Nav.Link>
                        <Nav.Link href="#link">Figuras</Nav.Link>
                        <Nav.Link href="#link">Gundam</Nav.Link>
                        <Nav.Link href="#link">Manga</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <InputGroup className='d-flex'>
                            <InputGroup.Text id="btnGroupAddon2"><i className="fa-solid fa-magnifying-glass" /></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Buscar"
                            />
                        </InputGroup>
                    </Form>
                    {/* Se implementa el componente CartWidget */}
                    <CartWidget cantidadProductos={10} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavBar;