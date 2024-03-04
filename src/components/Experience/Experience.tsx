import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import Experiences from '../../infos/Experiences';
import { SNMapMarker, SNStarAlt } from '@icongo/sn';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Meta from '../Meta';

const Experience = () => (
  <>
    <Meta
      title="Experience & Education"
      description="I can work full time, 8+ hours a day, 6 days a week. I hope to work with you in a long time."
    />
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
                <h2 className="h4 vertical-timeline-element-title">{title}</h2>
                <h3 className="h5 vertical-timeline-element-subtitle">
                  <a href={site} target="_blank" rel="noreferrer" aria-label={company}>
                    {company}
                  </a>
                </h3>
                <address className="d-flex flex-row column-gap-1 align-items-center">
                  <SNMapMarker /> <span>{address}</span>
                </address>
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
  </>
);

export default Experience;
