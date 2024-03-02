import { Container, Row, Col } from 'react-bootstrap';
import { LinkInfos } from '../../infos/Links';
import myImg from '../../assets/avatar.svg';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const Introduce = () => (
  <Container fluid className="home-about-section" id="about">
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: '2.6em' }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            A Passionate Full Stack Developer with 5+ years of experience in blending the art of design with skill of
            programming to maintain and optimize for performance of website.
            <br />
            <br />
            I was very interested in Web Application during my university period and the Library &amp; Information
            Science made me as a Full Stack Developer. Web Application Development is not only my job, but also my life.
            <br />
            <br />I can work full time, 8+ hours a day, 6 days a week. I hope to work with you in a long time.
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            {LinkInfos.map(({ href, icon: { dark: DarkIcon }, label }, idx) => (
              <li className="social-icons" key={`intro-social-icon-${idx}`}>
                <a
                  className="icon-colour home-social-icons title-tooltip"
                  data-tooltip-content={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <DarkIcon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Introduce;
