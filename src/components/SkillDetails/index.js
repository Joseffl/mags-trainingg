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

const Description = styled.p`
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

const SkillDetail = () => {
  const { id } = useParams(); // Get the id from the URL params
  const experience = experiences.find((exp) => exp.id === Number(id)); // Find the experience by id

  if (!experience) {
    return <p style={{ textAlign: 'center', fontSize: '18px', color: '#888' }}>No details found</p>;
  }

  return (
    <SkillDetailContainer>
      <Title>{experience.role}</Title>
      <Description>{experience.desc}</Description>
      {experience.skills && experience.skills.length > 0 ? (
        <ServicesList>
          {experience.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ServicesList>
      ) : (
        <p style={{ color: '#888', textAlign: 'left' }}>No details available yet</p>
      )}
    </SkillDetailContainer>
  );
};

export default SkillDetail;
