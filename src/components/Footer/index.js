import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #28ac30 0%, #0c7c20 100%);
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.2); /* Adds depth */
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1.5rem;
  color: #ffffff; /* Use white for contrast on green */
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
  text-transform: uppercase; /* Adds a professional touch */
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  font-size: 1.8rem;
  color: #ffffff;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.2);
    color: #d4ffd8; /* Light green for hover */
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #d1f3d1;
  text-align: center;
`;


const ContactDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px; /* Limit width */
  gap: 2px; /* Increase spacing */
  margin-top: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #d4ffd8; /* Light green for hover effect */
  }
`;



function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>MAGS ENGINEERING LIMITED</Logo>

        {/* Contact Details */}
        <ContactDetails>
          <ContactItem href="tel:+2348156358138">
            <PhoneIcon /> +234 815 635 8138
          </ContactItem>
          <ContactItem href="mailto:contact@magsengineeringlimited.com">
            <EmailIcon /> contact@magsengineeringlimited.com
          </ContactItem>
        </ContactDetails>
        
        <SocialMediaIcons>
          {/* <SocialMediaIcon href="#" target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href="#" target="display"><LinkedInIcon /></SocialMediaIcon>  */}
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
          
        </SocialMediaIcons>
        <Copyright>
          &copy; 2022 Mags Engineering . All rights reserved.

        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
