import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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

function Terms (){

return (
    <SkillDetailContainer>
      <Title>Terms and Conditions</Title>
      <SubTitle>
        
        <p>Welcome to Mags Engineering Limited. 
          By accessing or using our website and services, you agree to be bound by these Terms and Conditions. 
          Please read them carefully.
        </p>
        <br />
        <p>
          1. Use of Services
        </p>
        <p>
          You must be at least 18 years old or have parental consent to register for any of our training programs.
          You agree to provide accurate and up-to-date information during registration.
          Course content is for personal educational use only and may not be copied, distributed, or resold.
        </p>
        <br />
        <p>
          2. Course Enrollment & Access
        </p>
        <p>
          Access to course materials is granted upon full payment confirmation.
          Online course access may be time-limited and will be stated clearly in the course description.
          We reserve the right to cancel or reschedule a course if necessary.
        </p>
        <br />
        <p>
          3. Certificates
        </p>
        <p>
          Certificates are awarded upon successful completion of a course and meeting all required assessments (if applicable).
        </p>
        <br />
        <p>
          4. Code of Conduct
        </p>
        <p>
          Students are expected to act respectfully and professionally during trainings.
          Any form of harassment, disruption, or cheating will lead to immediate termination without refund.
        </p>
        <br />
        <p>
          5. Intellectual Property
        </p>
        <p>
          All course materials, content, and branding are the property of Mags Engineering Limited.
          You may not reproduce or use any of our materials for commercial purposes without permission.
        </p>
        <br />
        <p>
          6. Limitation of Liability
        </p>
        <p>
          We are not liable for any loss, damage, or inconvenience arising from your use of our website or services.
          While we ensure high-quality training, we make no guarantees regarding career outcomes.
        </p>
        
      </SubTitle>
      
    </SkillDetailContainer>
  );
}

export default Terms