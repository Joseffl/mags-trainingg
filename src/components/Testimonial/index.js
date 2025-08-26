import React from "react";
import styled from "styled-components";

const TestimonialsContainer = styled.section`
  padding: 50px 20px;
  background-color: #f8f9fa;
  text-align: center;
`;

// const Heading = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 30px;
//   color: #333;
// `;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const Quote = styled.p`
  font-style: italic;
  color: #555;
  margin-bottom: 15px;
`;

const Author = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: #111;
`;

const Role = styled.span`
  font-size: 0.9rem;
  color: #777;
`;

const Heading = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: #28ac30; 
  padding: 30px 0;
  background: linear-gradient(90deg, #28ac30, #85d67f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "The training exceeded my expectations. The instructors were knowledgeable, and I learned so much!",
      author: "John Doe",
      role: "Mechanical Engineering Student",
    },
    {
      quote:
        "The live classes were engaging, and the materials provided were very helpful.",
      author: "Sarah Johnson",
      role: "Process Engineering Trainee",
    },
    {
      quote:
        "I was impressed with how practical the sessions were. I could apply the knowledge immediately.",
      author: "Michael Brown",
      role: "Petroleum & Gas Engineering Participant",
    },
    {
      quote:
        "I was impressed with how practical the sessions were. I could apply the knowledge immediately.",
      author: "Michael Brown",
      role: "Petroleum & Gas Engineering Participant",
    },
    {
      quote:
        "I was impressed with how practical the sessions were. I could apply the knowledge immediately.",
      author: "Michael Brown",
      role: "Petroleum & Gas Engineering Participant",
    },
  ];

  return (
    <TestimonialsContainer id="testimonials">
      <Heading>What Our Trainees Say</Heading>
      <TestimonialGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Quote>"{testimonial.quote}"</Quote>
            <Author>{testimonial.author}</Author>
            <Role>{testimonial.role}</Role>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;

