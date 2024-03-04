import GitHubCalendar from 'react-github-calendar';
import { Col, Row } from 'react-bootstrap';
import { SKGithubDark } from '@icongo/sk';

const Github = () => (
  <Row>
    <Col md={12}>
      <div className="project-heading mt-5 mb-3">
        <SKGithubDark />
        <strong className="purple">Contributions</strong>
      </div>
    </Col>
    <Col md={12}>
      <div
        className="mb-5"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <GitHubCalendar
          username="james-gates-0212"
          blockSize={15}
          blockMargin={5}
          showWeekdayLabels={true}
          fontSize={16}
          theme={{
            dark: [
              'rgba(255, 255, 255, 0.01)',
              'rgba(255, 255, 255, 0.10)',
              'rgba(255, 255, 255, 0.35)',
              'rgba(255, 255, 255, 0.60)',
              'rgba(255, 255, 255, 1.00)',
            ],
          }}
        />
      </div>
    </Col>
  </Row>
);

export default Github;
