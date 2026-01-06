import React from "react";
import {
  Nav,
  NavLink,
  StyledHashLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  Title,
  DropdownMenu,
  DropdownLink,
  Dropdown,
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";
import LogoImg from "../../images/LogoImg.png";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#28ac30",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <img
              src={LogoImg}
              style={{ height: "4rem", width: "4rem" }}
              alt="Logo"
            />
            <Title style={{ textDecoration: "none" }}>MAGS</Title>
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
          <NavLink as={Link} to="/projects">
            Projects
          </NavLink>
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
          <Dropdown>
            <NavLink as={Link} to="/training" style={{ marginBottom: 0 }}>
              Training{" "}
              <span style={{ fontSize: "10px", marginLeft: "4px" }}>▼</span>
            </NavLink>
            <DropdownMenu>
              <DropdownLink to="/training">All Courses </DropdownLink>
              <DropdownLink to="/training-schedule">2026 Schedule</DropdownLink>
            </DropdownMenu>
          </Dropdown>
          <NavLink>
            <HashLink
              smooth
              to="/#testimonials"
              style={{
                color: "inherit",
                fontWeight: "500",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Testimonials
            </HashLink>
          </NavLink>
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
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </MobileLink>

            <MobileLink
              as={Link}
              to="/projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </MobileLink>

            <MobileLink
              as={HashLink}
              smooth
              to="/#services"
              onClick={() => setIsOpen(false)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Services
            </MobileLink>

            <MobileLink
              as={Link}
              to="/training"
              onClick={() => setIsOpen(false)}
            >
              Training
            </MobileLink>
            <MobileLink
              as={Link}
              to="/training-schedule"
              onClick={() => setIsOpen(false)}
            >
              2026 Training Schedule
            </MobileLink>

            <MobileLink
              as={HashLink}
              smooth
              to="/#testimonials"
              onClick={() => setIsOpen(false)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Testimonials
            </MobileLink>

            <GitHubButton
              as={HashLink}
              smooth
              to="/#contact"
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
                textDecoration: "none",
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
