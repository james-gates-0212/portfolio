import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import { Experiences } from '../../infos/Experiences';
import { SNStarAlt } from '@icongo/sn';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const Experience = () => (
  <Container fluid className="project-section">
    <Container>
      <h1 className="project-heading">
        <strong className="purple">Experience</strong>
        <small> &amp; </small>
        <strong className="purple">Education</strong>
      </h1>
      <div style={{ textAlign: 'left' }}>
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.5)">
          {Experiences.map(({ type, elementProps, title, company, address, site, details }, idx) => (
            <VerticalTimelineElement
              key={`vertical-timeline-element-${idx}`}
              className={`vertical-timeline-element--${type}`}
              {...elementProps}
            >
              <h4 className="vertical-timeline-element-title">{title}</h4>
              <h5 className="vertical-timeline-element-subtitle">
                <a href={site} target="_blank" rel="noreferrer">
                  {company}
                </a>
              </h5>
              <address>{address}</address>
              {details && (
                <ul>
                  {details.map((detail, dIdx) => (
                    <li key={`detail-${idx}-${dIdx}`}>{detail}</li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{
              background: '#2d1950',
              color: '#fff',
            }}
            icon={<SNStarAlt />}
          />
        </VerticalTimeline>
      </div>
    </Container>
  </Container>
);

export default Experience;
