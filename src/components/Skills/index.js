import React, { useRef } from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants'; // Ensure this contains an array of skill names

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.background};
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 2;
  ${({ left }) => left && `left: 0;`}
  ${({ right }) => right && `right: 0;`}

  &:focus {
    outline: none;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 30px;
  overflow-x: auto;
  scroll-behavior: smooth;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    height: 6px; /* Adjust the scrollbar height */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Track color */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.text_secondary + 80}; /* Scrollbar color */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.text_secondary}; /* Color on hover */
  }
`;


const Skill = styled.div`
  flex: 0 0 auto;
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const Skills = () => {
  const skillsContainerRef = useRef(null);

  const scrollLeft = () => {
    if (skillsContainerRef.current) {
      skillsContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (skillsContainerRef.current) {
      skillsContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of the projects we've worked on over the past years.</Desc>
        <ScrollWrapper>
          <ScrollButton left onClick={scrollLeft}>←</ScrollButton>
          <SkillsContainer ref={skillsContainerRef}>
            {skills.map((skill, index) => (
              <Skill key={index}>
                <SkillTitle>{skill.title}</SkillTitle>
                {skill.name.map((name, idx) => (
                  <SkillItem key={idx}>{name}</SkillItem>
                ))}
              </Skill>
            ))}
          </SkillsContainer>
          <ScrollButton right onClick={scrollRight}>→</ScrollButton>
        </ScrollWrapper>
      </Wrapper>
    </Container>
  );
};

export default Skills;
