import { Col, Row } from 'react-bootstrap';
import { Skillsets } from '../../infos/Skillsets';

const SkillSets = () => (
  <Row
    style={{
      justifyContent: 'center',
      paddingBottom: '50px',
    }}
  >
    {Skillsets.map(({ section, skills }, sIdx) => (
      <Col md={12} key={`tech-section-${sIdx}`}>
        <p className="h5 my-3">{section}</p>
        <ul className="tech-icons">
          {skills.map(({ className, icon: Icon, label }, tIdx) => (
            <li
              className={[className, 'title-tooltip'].filter(Boolean).join(' ')}
              data-tooltip-content={label}
              key={`tech-item-${sIdx}-${tIdx}`}
            >
              <Icon />
            </li>
          ))}
        </ul>
      </Col>
    ))}
  </Row>
);

export default SkillSets;
