import React from 'react';
import styled from 'styled-components';



const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
`;


const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;


const Skills = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2; /* Initially show 2 lines */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  transition: all 0.3s ease-in-out;

  &:hover {
    -webkit-line-clamp: unset; /* Expand on hover */
    overflow: visible;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ExperienceCard = ({ experience, isExpanded }) => {
  return (
    <Card>
      <Top>
        <Body>
          <Role>{experience.role}</Role>
        </Body>
      </Top>
      <Description>
        <Span>
          {experience?.desc && (isExpanded ? experience.desc : `${experience.desc.substring(0, 100)}...`)}
        </Span>
        {isExpanded && experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Services:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <div key={index}>• {skill}</div>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      
    </Card>
  );
};

export default ExperienceCard;

