import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Navigate() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="ms-auto">
                    <Navbar.Brand href="/">LSM</Navbar.Brand>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="/cources">Courses</Nav.Link>
                        <Nav.Link href="/teachers">Teachers</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Login">
                            <NavDropdown.Item ><Link to="/user-login">User Login</Link></NavDropdown.Item>                            
                            <NavDropdown.Item> <Link to="/user-register">User Register</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item> <Link to="/dashboard">Dashboard</Link></NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/logout">Logout</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigate;