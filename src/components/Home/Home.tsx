import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../assets/home-main.svg';
import Introduce from './Introduce';
import React from 'react';
import Type from './Type';

const Home = () => (
  <section>
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{' '}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> James Gates</strong>
            </h1>

            <div style={{ padding: 50 }}>
              <Type />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: 450 }} />
          </Col>
        </Row>
      </Container>
    </Container>
    <Introduce />
  </section>
);

export default Home;
