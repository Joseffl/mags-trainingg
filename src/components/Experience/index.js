import React, { useState } from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 80px 20px;
  background: linear-gradient(135deg, #ffffff, #f4fcf4); /* Subtle green tint on white */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1350px;
  width: 100%;
  padding: 40px 20px;
  gap: 24px;
`;

const Title = styled.h1`
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

const Desc = styled.p`
  font-size: 17px;
  text-align: center;
  color: #333333;
  max-width: 800px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  & .MuiTimelineItem-root {
    animation: fadeInUp 0.8s ease-in-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledTimelineDot = styled(TimelineDot)`
  background: linear-gradient(135deg, #28ac30, #85d67f); /* Gradient green */
  border: 3px solid #ffffff;
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  background: #28ac30; /* Solid green for connection lines */
`;

const StyledExperienceCard = styled.div`
  background: #ffffff; /* White background for each box */
  border: 0.5px solid #28ac30; /* Green border for the boxes */
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  // &:hover {
  //   transform: translateY(-5px);
  //   box-shadow: 0 6px 12px rgba(40, 172, 48, 0.2);
  // }
`;

const ExploreButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(90deg, #28ac30, #85d67f);
  border: none;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(40, 172, 48, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #85d67f, #28ac30);
    box-shadow: 0 6px 12px rgba(40, 172, 48, 0.4);
    transform: translateY(-2px);
  }
`;



const Index = () => {
  const navigate = useNavigate(); // For React Router

  const handleNavigate = (id) => {
    navigate(`/services/${id}`); // Navigate to the skill detail page
  };

  return (
    <Container id="services">
      <Wrapper>
        <Title>Our Services</Title>
        <Desc>
          At Mags Engineering Limited, we provide cutting-edge engineering solutions tailored to meet the specific needs of our clients. 
          Mags Engineering Limited offers specialized engineering training and consultancy services across Nigeria and globally. Our programs include Process Engineering, Mechanical Engineering, Petroleum and Gas Engineering, Project Management, HAZOP/HAZID studies, and 3D Plant Modelling, helping professionals advance their skills and meet industry standards worldwide.
        </Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <StyledTimelineDot />
                  <StyledTimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <StyledExperienceCard onClick={() => handleNavigate(experience.id)}>
                    <ExperienceCard experience={experience} />
                  </StyledExperienceCard>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};


export default Index;