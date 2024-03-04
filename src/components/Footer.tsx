import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkInfos } from '../infos/Links';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copyright">
          <div className="h3">Copyright &copy; {year} James Gates</div>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            {LinkInfos.map(({ href, icon: { light: LightIcon }, label }, idx) => (
              <li className="social-icons" key={`foot-social-icon-${idx}`}>
                <a
                  className="title-tooltip"
                  data-tooltip-content={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <LightIcon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
