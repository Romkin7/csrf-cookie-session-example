import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MainNavbar: FC = () => {
    return (
        <Navbar expand="lg" className="bg-primary-subtle">
            <Container>
                <Nav>
                    <Navbar.Brand href="#home">
                        CSRF - Cookie - Session
                    </Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;
