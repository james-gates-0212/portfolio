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
            <div className="h1 heading" style={{ paddingBottom: 15 }}>
              Hi There!{' '}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </div>

            <h1 className="heading-name">
              My name is
              <strong className="main-name"> James Gates</strong>
            </h1>

            <div style={{ padding: 50 }}>
              <Type />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="Home"
              className="img-fluid"
              width="505"
              height="529"
              style={{ maxHeight: 450 }}
              title="Home"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    <Introduce />
  </section>
);

export default Home;
