import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import "../../styles/Menu.css"

function Menu() {

    return (
    <Navbar id="navbarMenu" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        {/* <img src="../src/img/logo.png" class="rounded float-left" width={90} height={50} alt="Responsive image"></img> */}
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand class="logo">Shar'k Tech</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contato">
                        <Nav.Link>FaQ Resolução</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Menu;

