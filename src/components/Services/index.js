import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants'; // Ensure this contains an array of skill names

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 50px 20px;
  background: linear-gradient(135deg, #f0fdf4 0%, #e6f9ef 100%);
  margin-bottom: 50px; /* Ensures a gap from the footer */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: #28ac30; /* Primary green color */
  background: linear-gradient(90deg, #28ac30, #85d67f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #666;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Skill = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(40, 172, 48, 0.2);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  transition: transform 0.2s, box-shadow 0.3s;

  
`;

const GradientBorder = styled.div`
  position: absolute;
  inset: -3px;
  background: linear-gradient(90deg, #28ac30, #85d67f);
  z-index: -1;
  border-radius: 18px;
`;

const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #28ac30;
  margin-bottom: 16px;
  text-align: center;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #444;
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:before {
    content: '•';
    color: #28ac30;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Skills = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of the projects we've worked on over the past years.</Desc>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <GradientBorder />
              <SkillTitle>{skill.title}</SkillTitle>
              {skill.name.map((name, idx) => (
                <SkillItem key={idx}>{name}</SkillItem>
              ))}
            </Skill>
          ))}
        </SkillsGrid>
      </Wrapper>
    </Container>
  );
};

export default Skills;
