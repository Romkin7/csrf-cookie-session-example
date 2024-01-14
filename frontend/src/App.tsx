import { FC } from 'react';
import './App.scss';
import MainNavbar from './components/MainNavbar/MainNavbar';
import MainFooter from './components/MainFooter/MainFooter';
import { Col, Container, Row } from 'react-bootstrap';
import { AppState } from './store/store';
import { useSelector } from 'react-redux';
import FlashMessage from './components/FlashMessage/FlashMessage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import LoggedOutRoute from './LoggedOutRoute';
import ProtectedRoute from './ProtectedRoute';
import ProfilePage from './pages/profile';
import SignUpPage from './pages/signup';

const App: FC = () => {
    const flashMessage = useSelector((state: AppState) => state.flashMessage);
    const loggedInUser = useSelector((state: AppState) => state.loggedInUser);
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <main>
                <aside className="py-4">
                    <Container>
                        <Row className="justify-content-center">
                            <Col className="col-6">
                                {flashMessage.isVisible && (
                                    <FlashMessage
                                        variant={flashMessage.variant}
                                    >
                                        {flashMessage.text}
                                    </FlashMessage>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </aside>
                <Routes>
                    <Route path="/" index={true} element={<HomePage />} />
                    <Route
                        element={
                            <LoggedOutRoute
                                userId={loggedInUser?.user?._id as string}
                                isAuthenticated={loggedInUser.isAuthenticated}
                            />
                        }
                    >
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                    <Route
                        element={
                            <LoggedOutRoute
                                userId={loggedInUser?.user?._id as string}
                                isAuthenticated={loggedInUser.isAuthenticated}
                            />
                        }
                    >
                        <Route path="/signup" element={<SignUpPage />} />
                    </Route>
                    <Route
                        element={
                            <ProtectedRoute
                                isAuthenticated={loggedInUser.isAuthenticated}
                            />
                        }
                    >
                        <Route path="/profile/:id" element={<ProfilePage />} />
                    </Route>
                </Routes>
            </main>
            <MainFooter />
        </>
    );
};

export default App;
