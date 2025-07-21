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

function Refund () {
    return (
    <SkillDetailContainer>
      <Title>Refund Policy</Title>
      <SubTitle>
        
        <p>We strive to ensure customer satisfaction. However, due to the nature of training services, our refund policy is as follows:
        </p>
        <br />
        <p>1. Online Courses</p>
        <p>Refunds are only allowed if requested within 3 days of purchase and the course content has not been accessed.
        If course content has been accessed or downloaded, refunds will not be granted.</p>
        <br />

        <p>2. Offline (Physical) Training</p>
        <p>Refunds may be issued if cancellation is made at least 7 days before the training start date.
        Cancellations made less than 7 days before the start date are not eligible for a refund, but a slot may be transferred to another person or deferred to a future session (subject to availability).
        </p>
        <br />

        <p>
          3. Cancellation by Us
          
        </p>
        <p>
          If a course is canceled or rescheduled by Mags Engineering Limited, 
          participants will be offered a full refund or a seat in the rescheduled session.
          
        </p>
        <br />

        <p>
          To request a refund, please contact: <a href="mailto:contact@magsengineeringlimited.com">contact@magsengineeringlimited.com</a>.
        </p>
        
      </SubTitle>
      
    </SkillDetailContainer>
  );
}

export default Refund