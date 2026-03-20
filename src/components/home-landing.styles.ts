import Link from "next/link";
import styled, { keyframes } from "styled-components";

const fadePulse = keyframes`
  0% {
    opacity: 0.64;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.18);
  }
  100% {
    opacity: 0.64;
    transform: scale(0.9);
  }
`;

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LandingPage = styled.main`
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(0, 0, 0, 0.06), transparent 32%),
    radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.05), transparent 28%),
    linear-gradient(180deg, #f7f4ed 0%, #f2eee6 100%);
  color: #171717;
`;

export const LandingShell = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 88px 32px 120px;
  display: grid;
  gap: 56px;

  @media (max-width: 899px) {
    padding: 72px 28px 112px;
  }

  @media (max-width: 599px) {
    padding: 56px 22px 96px;
    gap: 40px;
  }
`;

export const LandingHero = styled.section`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(23, 23, 23, 0.08);
  border-radius: 32px;
  padding: 72px 56px;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.08);
  animation: ${riseIn} 0.55s ease both;

  @media (max-width: 899px) {
    padding: 56px 32px;
  }

  @media (max-width: 599px) {
    padding: 40px 24px;
    border-radius: 24px;
  }
`;

export const LogoGlow = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  background:
    radial-gradient(circle, rgba(0, 0, 0, 0.18), transparent 42%),
    radial-gradient(circle, rgba(0, 0, 0, 0.06), transparent 72%);
  display: grid;
  place-items: center;
  pointer-events: none;
  filter: saturate(1.15);

  img {
    width: 92px;
    height: 92px;
    object-fit: contain;
    animation: ${fadePulse} 3.1s ease-in-out infinite;
    filter: contrast(1.08) saturate(1.04);
  }

  @media (max-width: 599px) {
    width: 96px;
    height: 96px;
    top: 88px;
    right: 18px;
    opacity: 0.92;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Eyebrow = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #555555;
`;

export const LandingTitle = styled.h1`
  margin: 20px 0 0;
  max-width: 760px;
  font-size: clamp(2.5rem, 4.7vw, 4.2rem);
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.04em;

  @media (max-width: 599px) {
    max-width: 250px;
    font-size: 1.92rem;
    line-height: 1.02;
  }
`;

export const LandingCopy = styled.p`
  margin: 24px 0 0;
  max-width: 700px;
  font-size: 18px;
  line-height: 1.6;
  color: #3d3d3d;
`;

export const LandingActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
`;

export const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border-radius: 12px;
  background: #171717;
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    background: #262626;
  }
`;

export const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border-radius: 12px;
  border: 1px solid rgba(23, 23, 23, 0.14);
  background: rgba(255, 255, 255, 0.75);
  color: #171717;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.95);
  }
`;

export const CaseStudyGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
  }
`;

export const CaseStudyCard = styled(Link)`
  display: grid;
  gap: 14px;
  padding: 28px;
  border-radius: 24px;
  border: 1px solid rgba(23, 23, 23, 0.08);
  background: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  color: inherit;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.06);
  animation: ${riseIn} 0.55s ease both;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CaseStudyIndex = styled.span`
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #696969;
`;

export const CaseStudyTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

export const CaseStudyDescription = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: #4a4a4a;
`;

export const CaseStudyMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CaseStudyTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  background: #f1ede4;
  color: #333333;
  font-size: 13px;
  font-weight: 600;
`;

export const LandingNextArrow = styled(Link)`
  position: fixed;
  right: clamp(24px, 4vw, 56px);
  top: 50%;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 999px;
  background: #171717;
  border: 1px solid #171717;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);
  transform: translateY(-50%);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: #0f0f0f;
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.26);
    transform: translateY(-50%) translateX(2px);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
  }

  @media (max-width: 899px) {
    right: 18px;
    top: auto;
    bottom: 22px;
    transform: none;

    &:hover {
      transform: translateX(2px);
    }
  }

  @media (max-width: 599px) {
    width: 40px;
    height: 40px;
    right: 14px;
    bottom: 18px;
  }
`;
