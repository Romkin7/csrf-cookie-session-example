import { FC } from 'react';
import { Container, Row , Col} from 'react-bootstrap';

const MainFooter: FC = () => {
  return (
      <footer className="bg-light-subtle">
          <Container>
              <Row>
                  <Col className="col-md-12">
                      <h3>CSRF, Cookie & Session Example</h3>
                      <p>All rights reserved, Roman Tuomisto 2024</p>
                  </Col>
              </Row>
          </Container>
      </footer>
  );
}

export default MainFooter;
