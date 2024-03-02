import React from 'react';
import Card from 'react-bootstrap/Card';

const AboutCard = () => (
  <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: 'left' }}>
          Hi, everyone, I'm James Gates. I'm full-stack developer and software development expert.
          <br />
          <br />I have 5+ years' experience for web development. During last years, I had earned many skills to develop
          and manage a website and it now helps for a new project to develop in a high quality, rapidly.
          <br />
          <br />I like to work with a simple communication, a clean and optimized code convention, a high quality
          development for collaboration and maintenance, and a keeping schedules for a project. I also love learning a
          new thing from analyzing, discussing and resolving variable claims.
        </p>
      </blockquote>
    </Card.Body>
  </Card>
);

export default AboutCard;
