import { Container, Row, Col } from 'react-bootstrap';
import { SNLightBulb } from '@icongo/sn';
import Aboutcard from './AboutCard';
import Github from './Github';
import laptopImg from '../../assets/about.svg';
import React from 'react';
import Skillsets from './Skillsets';

const About = () => (
  <Container fluid className="about-section">
    <Container>
      <Row
        style={{
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <Col
          md={7}
          style={{
            justifyContent: 'center',
            paddingTop: '30px',
            paddingBottom: '50px',
          }}
        >
          <h1
            style={{
              fontSize: '2.1em',
              paddingBottom: '20px',
            }}
          >
            About
            <strong className="purple"> Me</strong>
          </h1>
          <Aboutcard />
        </Col>
        <Col
          md={5}
          style={{
            paddingTop: '120px',
            paddingBottom: '50px',
          }}
          className="about-img"
        >
          <img src={laptopImg} alt="about" className="img-fluid" />
        </Col>
      </Row>

      <div className="project-heading mt-5">
        <SNLightBulb />
        <strong className="purple">Skillsets</strong>
      </div>

      <Skillsets />

      <div
        className="mb-5"
        style={{
          maxWidth: 700,
          textAlign: 'left',
          margin: '0 auto',
        }}
      >
        <p>
          For many aspects, such as Requirement Analysis, Architect Design, Database Modeling, Front-end/Back-end Coding
          and Maintenance, I support reliable and qualified service.
        </p>
        <ul>
          <li>Fast Progress, Best Quality and Constant Report</li>
          <li>Cooperative Idea Support and so on</li>
        </ul>
      </div>

      <Github />
    </Container>
  </Container>
);

export default About;
