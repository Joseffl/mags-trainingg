

import React from "react";
import styled from "styled-components";

const TestimonialsContainer = styled.section`
  padding: 80px 20px;
  // background: linear-gradient(135deg, #f8f9fa 0%, #eaf7ec 100%);
background-color: #f8f9fa;  
text-align: center;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 50px;
  background: linear-gradient(90deg, #28ac30, #85d67f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 15px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 30px 25px;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.08);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: start;
  min-width: 300px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.12);
  }
`;

const Quote = styled.div`
  font-style: normal;
  color: #444;
  margin-bottom: 20px;
  line-height: 1.6;

  p {
    margin-bottom: 12px;
  }

  &:before {
    content: "“";
    font-size: 2rem;
    color: #28ac30;
    vertical-align: top;
    margin-right: 5px;
  }

  &:after {
    content: "”";
    font-size: 2rem;
    color: #28ac30;
    vertical-align: bottom;
    margin-left: 5px;
  }
`;

const AuthorBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #d4ffd8;
  color: #1b6d21;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Author = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #111;
`;

const Role = styled.span`
  font-size: 0.85rem;
  color: #777;
  margin-top: 2px;
`;

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "I recently had the privilege of completing a comprehensive training program with Mags Engineering Limited on AutoCAD P&ID Drafting, 3D PDMS Modeling, and Aspen HYSYS Simulation. This program has been a game-changer for me, offering an exceptional blend of theory, practical application, and industry-aligned project work that significantly strengthened my expertise in process engineering.",
      author: "Uchechukwu Bright",
      role: "Mechanical Engineering Student",
    },
    {
      quote:
        "Mags Engineering Limited training greatly supported my process engineering journey. Thanks to his lessons in AutoCAD drafting and HYSYS simulation, I recently secured a job in an oil and gas firm.",
      author: "Musa Kingsley (Sterling Global)",
      role: "Process Engineering Trainee",
    },
    {
      quote:
        "I had the privilege of undergoing HYSYS simulation training with Mr. Abiodun Adeyemi of Mags Engineering Services, and it was truly full of learning. The program was well-structured, highly practical, and delivered with clarity. Mr. Abiodun took time to explain complex concepts in a simple and engaging way, making the sessions both insightful and impactful. I strongly recommend Mags Engineering Limited's Trainings to anyone seeking quality, professional, and impactful training in process simulation.",
      author: "Usman Ismail (Lab Engineer, King Fahd University of Petroleum and Minerals)",
      role: "Petroleum & Gas Engineering Participant",
    },
    {
      quote: [
        "I remember in 2022, I reached out to the CEO of Mags Engineering to discuss about my career aspirations and my interest.",
        "He guided me and we drafted a training plan. I started with AutoCAD and drafting, learnt Aspen Hysys and also PDMS. I also went ahead to get certified in these skills.",
        "Today, I am currently a process engineer with a leading global LNG company.",
        "My training with Mags Engineering was both instrumental in my application, my interview and also in delivering my day to day tasks. The investment was well worth it."
      ],
      author: "Nicholas",
      role: "Petroleum & Gas Engineering Participant",
    },
    {
      quote: [
        "I really want to appreciate MAGS Engineering and Engr. Adeyemi Majid for the way they’ve guided me in my learning journey.",
        // "I started with AutoCAD where, through their teaching and support, I was able to get certified. After that, I also trained on PDMS and got certified again through the company. Right now, I’ve been learning HYSYS and I’m about to start line sizing.",
        "What I like most is how practical and patient the teaching has been. Everything is explained clearly and with real examples, so I didn’t just pass through the training — I actually understood it. That has made me more confident in applying these tools.",
        "For anyone serious about learning engineering design software the right way, I honestly recommend MAGS Engineering. Engr. Adeyemi Majid is an excellent teacher, and I’m grateful for all I’ve learned so far."
      ],
      author: "David Israel",
      role: "Petroleum & Gas Engineering Participant",
    },
    {
      quote:
        "The trainings at Mags Engineering was really worthwhile. I loved the detailed explanations and inclusivity. It was always a great learning experience.",
      author: "NOSAKHARE KINA-OMORAGBON",
      role: "Petroleum & Gas Engineering Participant",
    }
  ];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <TestimonialsContainer id="testimonials">
      <Heading>What Our Trainees Say</Heading>
      <TestimonialGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Quote>
              {Array.isArray(testimonial.quote)
                ? testimonial.quote.map((q, i) => <p key={i}>{q}</p>)
                : <p>{testimonial.quote}</p>}
            </Quote>
            <AuthorBlock>
              {/* <Avatar>{getInitials(testimonial.author)}</Avatar> */}
              <AuthorInfo>
                <Author>{testimonial.author}</Author>
                {/* <Role>{testimonial.role}</Role> */}
              </AuthorInfo>
            </AuthorBlock>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;
