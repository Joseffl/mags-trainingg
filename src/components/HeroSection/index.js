import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  SubTitleContainer,
  SubtitleDescription,
  SubtitleItem,
  SubtitleTitle,
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.png';
import HeroBanner from '../../images/HeroBanner.jpg';
import { Bio, subtitles } from '../../data/constants';

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        {/* Background Animation */}
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        {/* Hero Content */}
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title
                style={{fontSize: '36px'}}
            >
                Mags Engineering Limited
            </Title>

            <SubTitle>{Bio.description}</SubTitle>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={HeroBanner} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>

        {/* Vision Section */}
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>OUR VISION</Title>
            <SubTitle>
              To be a global leader in engineering solutions, transforming industries through sustainable practices,
              cutting-edge technology, and talent to drive sustainable growth in all sectors we serve.
            </SubTitle>
          </HeroLeftContainer>
        </HeroInnerContainer>

        {/* Mission Section */}
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>OUR MISSION</Title>
            <SubTitle>
              To deliver exceptional multidisciplinary engineering services, high-quality engineering design
              (Feasibility, FEED, and detailed), procurement, and construction solutions that meet the unique needs of
              our clients. We foster long-term relationships built on trust and drive sustainable development. We are
              committed to excellence in project execution, prioritizing safety and environmental stewardship while
              fostering long-term partnerships. Through collaboration, advanced technology, and a dedicated workforce,
              we strive to exceed expectations and contribute positively to the communities we serve.
            </SubTitle>
          </HeroLeftContainer>
        </HeroInnerContainer>

        {/* Values Section */}
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>OUR VALUES</Title>
            <SubTitle>
              <SubTitleContainer>
                {subtitles.map((subtitle, index) => (
                  <SubtitleItem key={index}>
                    <SubtitleTitle>{subtitle.title}</SubtitleTitle>
                    <SubtitleDescription>{subtitle.description}</SubtitleDescription>
                  </SubtitleItem>
                ))}
              </SubTitleContainer>
            </SubTitle>
            <ResumeButton href="#services" target="display">
              Explore our Services
            </ResumeButton>
          </HeroLeftContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
