import React from 'react';
import { Nav, NavLink, StyledHashLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, Title } from './NavbarStyledComponent';
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
          <Link to="/" style={{ display: "flex", alignItems: "center", color: "#28ac30", cursor: 'pointer', textDecoration: 'none' }}>
            <img src={LogoImg} style={{ height: "4rem", width: "4rem" }} alt="Logo" /> 
            <Title style={{ textDecoration: 'none' }}>MAGS</Title> 
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
        <GitHubButton>
        <HashLink
              smooth
              to="/#contact"
              style={{
                color: "inherit",
                fontWeight: "500",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Contact Us
            </HashLink>
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink 
              as={HashLink} 
              smooth 
              to="/#about" 
              onClick={() => setIsOpen(false)} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              About
            </MobileLink>

            <MobileLink as={Link} to="/projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>

            <MobileLink 
              as={HashLink} 
              smooth 
              to="/#services" 
              onClick={() => setIsOpen(false)} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Services
            </MobileLink>
            
            <MobileLink as={Link} to="/training" onClick={() => setIsOpen(false)}>Training</MobileLink>

            <GitHubButton
              as={HashLink}
              smooth
              to="/#contact"

              style={{
                padding: '10px 16px',
                background: `${theme.primary}`,
                color: 'white',
                width: 'max-content',
                textDecoration: 'none',
              }}
              
              
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
