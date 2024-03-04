import { Link, useLocation } from 'react-router-dom';
import { MainRoutes } from '../infos/MainRoutes';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  const [expand, updateExpanded] = useState<boolean>(false);
  const [navColour, updateNavbar] = useState<boolean>(false);

  const { pathname } = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Brand as={Link} to={'/'} className="d-flex white">
          James Gates
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {MainRoutes.map(({ className, href, icon: Icon, label, route, target }, idx) => (
              <Nav.Item key={`nav-item-${idx}`} className={route === pathname ? 'active' : className && 'fork-btn'}>
                {className ? (
                  <Button className={className} href={href} target={target} aria-label={label}>
                    <Icon />
                  </Button>
                ) : (
                  <Nav.Link
                    as={Link}
                    href={href}
                    onClick={() => route && updateExpanded(false)}
                    target={target}
                    to={route}
                  >
                    {Icon && <Icon />} {label}
                  </Nav.Link>
                )}
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
