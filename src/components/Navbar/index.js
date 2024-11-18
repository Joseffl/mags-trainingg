import React from 'react';
import { Nav, NavLink, StyledHashLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import LogoImg from '../../images/LogoImg.png';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link to="/" style={{ display: "flex", alignItems: "center", color: "#28ac30", cursor: 'pointer' }}>
            <img src={LogoImg} style={{ height: "4rem", width: "4rem" }} alt="Logo" /> <Span>MAGS</Span>
          </Link>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
        <NavLink>
            <HashLink
              smooth
              to="/#about"
              style={{
                color: "inherit",
                fontWeight: "500",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              About
            </HashLink>
          </NavLink>
          <NavLink as={Link} to="/projects">Projects</NavLink>
          <NavLink>
            <HashLink
              smooth
              to="/#services"
              style={{
                color: "inherit",
                fontWeight: "500",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Services
            </HashLink>
          </NavLink>
          <NavLink as={Link} to="/training">Training</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href="/#contact">Contact Us</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="/#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink as={Link} to="/projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href="/#services" onClick={() => setIsOpen(false)}>Services</MobileLink>
            <MobileLink as={Link} to="/training" onClick={() => setIsOpen(false)}>Training</MobileLink>
            <GitHubButton
              style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }}
              href="/#contact"
            >
              Contact Us
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
