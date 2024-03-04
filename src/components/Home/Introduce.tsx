import { Container, Row, Col } from 'react-bootstrap';
import LinkInfos from '../../infos/Links';
import myImg from '../../assets/avatar.svg';
import Tilt from 'react-parallax-tilt';

const Introduce = () => (
  <Container fluid className="home-about-section" id="about">
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <div className="h1" style={{ fontSize: '2.6em' }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </div>
          <p className="home-about-body">
            As an accomplished Senior Full Stack Developer specializing in SEO and MERN Stack development, I offer a
            proven track record of crafting resilient and intuitive web applications. Proficient in front-end and
            back-end technologies, I specialize in delivering scalable solutions that elevate user experiences and boost
            organic traffic through strategic SEO tactics. Leveraging my expertise in the MERN Stack, I create dynamic,
            responsive applications tailored to meet the evolving demands of contemporary businesses. Committed to
            continuous learning and staying abreast of cutting-edge technologies, I am adept at delivering pioneering
            solutions that surpass client expectations.
            <br />
            <br />
            Web Application Development is not only my job, but also my life.
            <br />
            <br />I can work full time, 8+ hours a day, 6 days a week. I hope to work with you in a long time.
          </p>
        </Col>
        <Col md={4} className="myAvatar">
          <Tilt>
            <img
              src={myImg}
              className="img-fluid"
              alt="Avatar"
              width="645"
              height="500"
              title="Avatar"
              loading="lazy"
            />
          </Tilt>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <div className="h1">FIND ME ON</div>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            {LinkInfos.map(({ href, icon: { dark: DarkIcon }, label }, idx) => (
              <li className="social-icons" key={`intro-social-icon-${idx}`}>
                <a
                  className="icon-color home-social-icons title-tooltip"
                  data-tooltip-content={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
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
