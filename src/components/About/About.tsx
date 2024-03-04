import { Container, Row, Col } from 'react-bootstrap';
import { SNLightBulb } from '@icongo/sn';
import Aboutcard from './AboutCard';
import Github from './Github';
import laptopImg from '../../assets/about.svg';
import Skillsets from './Skillsets';
import Meta from '../Meta';

const About = () => (
  <>
    <Meta
      title="I'm glad to meet you"
      description="With a simple communication, a clean and optimized code convention, a high quality development for collaboration and maintenance, and a keeping schedules for a project."
    />
    <Container fluid className="about-section">
      <Container>
        <Row
          style={{
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: 30,
              paddingBottom: 50,
            }}
          >
            <h1
              style={{
                fontSize: '2.1em',
                paddingBottom: 20,
              }}
            >
              I'm glad to meet
              <strong className="purple"> you</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: 120,
              paddingBottom: 50,
            }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="About"
              className="img-fluid"
              width="600"
              height="529"
              title="About"
              loading="lazy"
            />
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
            For many aspects, such as Requirement Analysis, Architect Design, Database Modeling, Front-end/Back-end
            Coding and Maintenance, I support reliable and qualified service.
          </p>
          <ul>
            <li>Fast Progress, Best Quality and Constant Report</li>
            <li>Cooperative Idea Support and so on</li>
          </ul>
        </div>

        <Github />
      </Container>
    </Container>
  </>
);

export default About;
