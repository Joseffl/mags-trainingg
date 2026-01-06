import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../../data/constants';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import EnrollmentForm from './EnrollmentForm'; // Import the reusable form

const Wrapper = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 8px 0;

  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 8px 0;
  @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 30px 0;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};

  @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const SideBySideSections = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Section = styled.div`
  width: 48%;
  background-color: ${({ theme }) => theme.bgLight};
  padding: 20px;
  border-radius: 10px;

   @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
`;

const Button = styled.button`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${theme.bg + 99};
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

const LinkButton = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
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

const CoursePage = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);

  if (!course) return <h2>Course not found</h2>;

  const pageUrl = `https://magsengineeringlimited.com/courses/${slug}`; 

  return (
    <>
      <Helmet>
        <title>{course.title} | Mags Engineering</title>
        <meta name="description" content={course.description} />
        <meta property="og:title" content={course.title} />
        <meta property="og:description" content={course.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mags Engineering" />
      </Helmet>

      <Wrapper>
        <Image src={course.image} alt={course.title} />
        <Title>{course.title}</Title>

        <Tags>
          {course.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>

        <Desc><strong>About this course:</strong></Desc>
        <Desc>
          {Array.isArray(course.description)
            ? course.description.map((desc, i) => <p key={i}>{desc}</p>)
            : <p>{course.description}</p>}
        </Desc>

        <Desc><strong>Duration:</strong> {course.duration}</Desc>
        <Desc><strong>Methodology:</strong> {course.methodology}</Desc>

        <Desc>
          <strong>Prerequisites:</strong>
          <ul>
            {course.prerequisite?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </Desc>

        <SideBySideSections>
          <Section>
            <h3>Learning Outcomes</h3>
            <ul>
              {course.objectives?.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </Section>
          <Section>
            <h3>Course Outline</h3>
            <ul>
              {course.outline?.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </Section>
        </SideBySideSections>

        <Desc><strong>Assessment:</strong> {course.assessment}</Desc>

        <Desc>
          <strong>Course Delivery Formats:</strong>
          <ul>
            {course.cdf?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </Desc>

        <Desc><strong>Cost:</strong> {course.cost}</Desc>

        <ButtonGroup>
          <Button onClick={() => setEnrollmentOpen(true)}>
            Enroll Now
          </Button>
          <LinkButton as={HashLink} smooth to="/#contact">
            Make Enquiry
          </LinkButton>
        </ButtonGroup>
      </Wrapper>

      <EnrollmentForm 
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        course={course}
      />
    </>
  );
};

export default CoursePage;