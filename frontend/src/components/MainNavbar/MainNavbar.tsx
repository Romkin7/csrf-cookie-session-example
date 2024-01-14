import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainNavbar.scss';
import Logo from '../../assets/food.svg';

const MainNavbar: FC = () => {
    return (
        <Navbar expand="lg" className="bg-indigo color-light">
            <Container>
                <Nav>
                    <Link to="/" className='navbar-brand'>
                        <picture>
                            <img src={Logo} alt="Food" />
                        </picture>
                        CSRF, Cookie & Session Example
                    </Link>
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                    <Link className="nav-link" to="/signup">
                        Sign Up
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;
