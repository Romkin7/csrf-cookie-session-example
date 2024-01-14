import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainNavbar.scss';

const MainNavbar: FC = () => {
    return (
        <Navbar expand="lg" className="bg-indigo color-light">
            <Container>
                <Nav>
                    <Navbar.Brand>
                        <Link to="/">CSRF - Cookie - Session</Link>
                    </Navbar.Brand>
                    <NavLink>
                        <Link to="/login">Login</Link>
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;
