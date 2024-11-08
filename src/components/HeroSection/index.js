import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton, SubTitleContainer, SubtitleDescription, SubtitleItem, SubtitleTitle } from './HeroStyle'
import HeroImg from '../../images/HeroImage.png'
import { GitHubButton} from '../Navbar/NavbarStyledComponent'
import Typewriter from 'typewriter-effect';
import { Bio, subtitles } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>{Bio.name}</Title>
                        
                        <SubTitle>{Bio.description}</SubTitle>
                        
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>OUR VISION</Title>
                        
                        <SubTitle>To be a global leader in engineering solutions, transforming industries through sustainable practices, cutting-edge technology and talent to drive sustainable growth in all sectors we serve.</SubTitle>
                        
                    </HeroLeftContainer>

                    
                </HeroInnerContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>OUR MISSION</Title>
                        
                        <SubTitle>To deliver exceptional multidisciplinary engineering services high-quality engineering design 
                            (Feasibility, FEED and detailed), procurement, and construction solutions that meet the unique needs of 
                            our clients, fostering long-term relationships built on trust and drive sustainable development. 
                            We are committed to excellence in project execution, prioritizing safety and environmental stewardship 
                            while fostering long-term partnerships. Through collaboration, advanced technology, and a dedicated workforce, 
                            we strive to exceed expectations and contribute positively to the communities we serve."</SubTitle>
                        
                    </HeroLeftContainer>

                    
                </HeroInnerContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
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
                        
                        <ResumeButton href="#services" target='display'>Explore our Services</ResumeButton>
                    </HeroLeftContainer>

                    
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
