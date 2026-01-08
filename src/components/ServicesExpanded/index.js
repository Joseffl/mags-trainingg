import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { experiences } from '../../data/constants'; 
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: #f4fcf4; /* Light background */
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #28ac30;
`;

const Description = styled.p`
  font-size: 18px;
  color: #333333;
  max-width: 800px;
  margin: 20px 0;
`;

const SkillsList = styled.div`
  font-size: 16px;
  color: #333333;
  margin-top: 20px;
`;

const ServicesExpanded = () => {
  const { id } = useParams(); // Get the role ID from the URL
  const experience = experiences[parseInt(id)]; // Find the role by ID
  const navigate = useNavigate();

  if (!experience) {
    return <h1>Service not found</h1>;
  }

  return (
    <Container>
      <Title>{experience.role}</Title>
      <Description>{experience.desc}</Description>
      {experience.skills && (
        <SkillsList>
          <h3>Services:</h3>
          <ul>
            {experience.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </SkillsList>
      )}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </Container>
  );
};

export default ServicesExpanded;
