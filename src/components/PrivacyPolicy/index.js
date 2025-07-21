import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { experiences } from '../../data/constants'; // Import the experiences data

const SkillDetailContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #28ac30;
  margin-bottom: 30px;  // Added more spacing between the title and the content
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 17px;
  color: #333;
  margin-bottom: 20px;  // Added margin to give space between description and skills list
  text-align: left;
`;

const ServicesList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;  // Adds spacing for bullet points
  font-size: 16px;
  color: #555;
  text-align: left;  // Aligns the list to the left
`;

function Privacy () {
    return (
    <SkillDetailContainer>
      <Title>Privacy Policy</Title>
      <SubTitle>
        
        <p>Mags Engineering Limited is committed to protecting your privacy. 
          This policy outlines how we collect, use, and protect your personal information.
        </p>
        <br />
        <p>1. Information We Collect</p>
        <p>Name, email address, phone number</p>
        <p>Payment and billing details (handled securely by our payment processor)</p>
        <p>Course preferences and progress data</p>
        <br />

        <p>2. How We Use Your Information</p>
        <p>To process your registration and payments</p>
        <p>To communicate course updates or changes</p>
        <p>To issue certificates and track learning progress</p>
        <p>For internal analysis to improve our services</p>
        <br />

        <p>
          3. Data Protection
        </p>
        <p>
          We implement industry-standard security measures to protect your data.
          We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>
        <br />

        <p>
          4. Cookies
        </p>
        <p>
          Our website may use cookies to improve user experience and track usage data.
          You can choose to disable cookies in your browser settings.
        </p>
        <br />

        <p>
          5. Third-Party Services
        </p>
        <p>
          We may use third-party platforms for email communication, course delivery, and analytics, all of which comply with data protection standards.
        </p>
        <br />

        <p>
          6. Your Rights
          </p>
          <p>
            You can request access, correction, or deletion of your personal data at any time by contacting us at <a href="mailto:contact@magsengineeringlimited.com">contact@magsengineeringlimited.com</a>.
          </p>
        
        
      </SubTitle>
      
    </SkillDetailContainer>
  );
}


export default Privacy