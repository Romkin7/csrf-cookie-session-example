import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import {
    resetFlashMessage,
    setFlashMessage,
} from '../store/actions/flashMessageActions';
import request from './api/request';
import HttpMethods from '../@types/httpMethods';
import { AppState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface ISignUpBody {
    email: string;
    password: string;
    name: string;
}

/**
 * resetLoginPageState function, is used to reset Login form state.
 * @returns {ILoginBody}
 */
function resetSignUpPageState(): ISignUpBody {
    return {
        email: '',
        password: '',
        name: '',
    };
}

const SignUpPage: FC = () => {
    const [loginPageState, setLoginPageState] = useState<ISignUpBody>(() =>
        resetSignUpPageState(),
    );
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state: AppState) => state.loggedInUser);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setLoginPageState({
            ...loginPageState,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(resetFlashMessage());
        const formData = new FormData(event.target as HTMLFormElement);
        request({
            url: (event.target as HTMLFormElement).action,
            method: (event.target as HTMLFormElement).method as HttpMethods,
            body: {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
                name: formData.get('name') as string,
            },
        })
            .then((data) => {
                dispatch(
                    setFlashMessage({
                        variant: 'success',
                        text: data.message,
                        isVisible: true,
                    }),
                );
            })
            .catch((error) => {
                dispatch(
                    setFlashMessage({
                        variant: 'danger',
                        text: error.message,
                        isVisible: true,
                    }),
                );
            });
    };
    return (
        <section>
            {loggedInUser.isAuthenticated && <Navigate to="/" />}
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col className="col-md-4">
                        <Form
                            onSubmit={handleSubmit}
                            action="http://127.0.0.1:8080/auth/signup"
                            method="POST"
                            className="mt-5 py-5"
                        >
                            <Container fluid={true}>
                                <Row className="justify-content-md-center">
                                    <Col className="col-md-12">
                                        <h2>Login</h2>
                                    </Col>
                                </Row>
                                <Row className="flex-column justify-content-md-center">
                                    <Col className="col-md-12">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="email-field">
                                                @email
                                            </InputGroup.Text>
                                            <Form.Control
                                                onChange={handleChange}
                                                placeholder="Email"
                                                aria-label="Email"
                                                name="email"
                                                aria-describedby="email-field"
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="password-field">
                                                Password
                                            </InputGroup.Text>
                                            <Form.Control
                                                onChange={handleChange}
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                aria-label="Password"
                                                aria-describedby="password-field"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col className="col-md-12">
                                        <Button
                                            type="submit"
                                            className="btn-success"
                                        >
                                            Login
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SignUpPage;
