import { FC } from 'react';
import './App.css';
import MainNavbar from './components/MainNavbar/MainNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import MainFooter from './components/MainFooter/MainFooter';

const App: FC = () => {

    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <main>
                <Container fluid={true}>
                    <Row className="justify-content-md-center">
                        <Col className="col-md-4">
                            
                        </Col>
                    </Row>
                </Container>
            </main>
            <MainFooter />
        </>
    );
};

export default App;
