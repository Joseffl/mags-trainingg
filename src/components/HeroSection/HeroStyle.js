import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, #28ac30 0%, #1d7a23 100%); 
  display: grid;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); /* Dynamic shape */

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  animation: fadeIn 1.5s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

// Updated Hero Image Style
export const Img = styled.img`
  width: 100%;
  max-width: 450px;
  border-radius: 15px;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 640px) {
    max-width: 250px;
  }
`;


export const Title = styled.div`
  font-weight: 800;
  font-size: 40px;
  color: ${({ theme }) => theme.text_tertiary};
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 1.5px;
  line-height: 68px;
  

  @media (max-width: 960px) {
    font-size: 36px;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 48px;
  }
`;



export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: rgba(255, 255, 255, 0.8); /* Increased contrast */
  text-align: left;

  @media (max-width: 960px) {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
  }
`;


export const SubTitleContainer = styled.div`
  width: 100%; /* Make the container take full width */
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack items vertically */
  padding: 20px; /* Optional: Add some padding */
  box-sizing: border-box; /* Ensure padding is included in width */
`;

export const SubtitleItem = styled.div`
  margin-bottom: 16px; /* Space between items */
`;

export const SubtitleTitle = styled.h3`
  margin: 0; /* Remove default margin */
  font-weight: bold; /* Make the title bold */
`;

export const SubtitleDescription = styled.p`
  margin: 0; /* Remove default margin */
`;


export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  font-size: 20px;
  font-weight: 600;
  border-radius: 25px;
  background: linear-gradient(135deg, #28ac30, #1d7a23);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: linear-gradient(135deg, #1d7a23, #28ac30);
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

