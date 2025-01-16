import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import TableWithData from './TableData';
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SideBySideSections = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column; /* Stack the sections vertically */
    gap: 20px;
`;

const Section = styled.div`
  width: 48%; /* Adjust width to fit two sections side by side */
  background-color: ${({ theme }) => theme.bgLight};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

   @media only screen and (max-width: 768px) {
    width: 100%; /* Full width when stacked */
    font-size: 14px;
    // margin: 6px 6px;
  }

  // p {
  //   font-size: 14px; /* Smaller font size for paragraph text */
  // }
`;


const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;


const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;




const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <Desc><h3>About this Course</h3></Desc>

          {/* <div>
            {project?.description.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div> */}
          <div>
            {Array.isArray(project?.description) ? (
              project.description.map((desc, index) => (
                <p key={index} style={{ marginBottom: "1rem" }}>{desc}</p>
              ))
            ) : (
              <p style={{ marginBottom: "1rem" }}>{project?.description || "No description available"}</p>
            )}
          </div>
          
          
          <Desc>
            <h3> Duration </h3> {project?.duration}
          </Desc>

          <Desc>
            <h3>Methodology </h3>
             {project?.methodology}
          </Desc>
          
          <Desc>
          <h3>Prerequisite</h3>
          <p>
            {project?.prerequisite.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </p>
          </Desc>


          {/* Add Side-by-Side Sections */}
          <SideBySideSections>
            <Section>
              <h3>Learning outcomes</h3>
              
              <p>
            {project?.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </p>
            </Section>
            <Section>
              <h3>Course outline</h3>
              <p>
            {project?.outline.map((outline, index) => (
              <p key={index}>{outline}</p>
            ))}
          </p>
            </Section>
          </SideBySideSections>

          <br />
          
            

          <Desc>
            <h3>Assessment </h3>
          <p>{project?.assessment}</p>
          </Desc>

          
          <Desc>
          <h3>Course Delivery Formats</h3>
          <p>
            {project?.cdf.map((cdf, index) => (
              <li key={index}>{cdf}</li>
            ))}
          </p>
          </Desc>

        
          <Desc>
            <h3>Cost </h3>
          <p>{project?.cost}</p>
          </Desc>

          <ButtonGroup>
            <Button dull href={project?.paymentLink} target='new'>Enroll Now</Button>
            <Button 
            as={HashLink}
            smooth
            to="/#contact"
            >
              Make Enquiry
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
}

export default index;
