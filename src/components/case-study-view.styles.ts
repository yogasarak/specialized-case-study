import Link from "next/link";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import type { TagVariant, ToggleOption } from "@/data/case-studies";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const riseUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(28px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const drainBar = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const FloatingArrowBase = styled(Link)`
  position: fixed;
  top: 50%;
  z-index: 50;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #000000;
  border: 1px solid #000000;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: #0f0f0f;
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.26);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
  }

  @media (max-width: 899px) {
    top: auto;
    bottom: clamp(16px, 6vw, 32px);
    width: 36px;
    height: 36px;
    transform: none;
  }
`;

export const FloatingArrowRight = styled(FloatingArrowBase)`
  right: clamp(24px, 3vw, 48px);
  transform: translateY(-50%);

  &:hover {
    transform: translateY(-50%) translateX(3px);
  }

  @media (max-width: 899px) {
    right: clamp(18px, 8vw, 32px);
    transform: none;

    &:hover {
      transform: translateX(2px);
    }
  }
`;

export const FloatingArrowLeft = styled(FloatingArrowBase)`
  left: clamp(24px, 3vw, 48px);
  transform: translateY(-50%);

  &:hover {
    transform: translateY(-50%) translateX(-3px);
  }

  @media (max-width: 899px) {
    left: clamp(18px, 8vw, 32px);
    transform: none;

    &:hover {
      transform: translateX(-2px);
    }
  }
`;

export const ArrowGlyph = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: currentColor;
`;

export const ArrowGlyphLeft = styled(ArrowGlyph)`
  transform: scaleX(-1);
`;

export const PageWrapper = styled.main`
  --black: #000000;
  --dark-gray: #111111;
  --gray-700: #333333;
  --gray-600: #666666;
  --gray-500: #777777;
  --gray-300: #d9d9d9;
  --gray-200: #e5e5e5;
  --gray-100: #f5f5f5;
  --gray-50: #fafafa;
  --white: #ffffff;

  min-height: 100vh;
  background: var(--white);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--dark-gray);
`;

export const CaseStudyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 32px 140px;
  display: flex;
  flex-direction: column;
  gap: 72px;

  @media (max-width: 899px) {
    padding: 64px 28px 120px;
  }

  @media (max-width: 599px) {
    padding: 56px 24px 100px;
    gap: 52px;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeroHeaderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const AuthorLabel = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: var(--dark-gray);
  letter-spacing: 0.02em;
`;

export const DesktopAuthorLabel = styled(AuthorLabel)`
  @media (max-width: 899px) {
    display: none;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Tag = styled.span<{ $variant: TagVariant }>`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background: ${({ $variant }) =>
    $variant === "dark" ? "var(--black)" : "var(--gray-100)"};
  color: ${({ $variant }) => ($variant === "dark" ? "var(--white)" : "var(--dark-gray)")};
`;

export const HeroTitle = styled.h1`
  margin: 24px 0 0;
  font-size: 36px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--black);

  @media (max-width: 599px) {
    text-align: center;
    font-size: 32.4px;
    width: 100%;
  }
`;

export const HeroParagraph = styled.p`
  margin: 24px 0 0;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  max-width: 780px;
  color: var(--gray-700);

  @media (max-width: 599px) {
    text-align: center;
    font-size: 14.4px;
    width: 100%;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 28px;

  @media (max-width: 599px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 8px;
  background: var(--black);
  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: var(--dark-gray);
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 8px;
  border: 1px solid var(--gray-300);
  background: var(--white);
  color: var(--dark-gray);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--gray-100);
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
  margin-top: 48px;
  width: 100%;

  @media (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const StatsSection = styled.section`
  width: 100%;

  ${StatsGrid} {
    margin-top: 0;
  }
`;

export const StatCard = styled.div`
  background: var(--white);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--gray-200);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StatValue = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--black);
`;

export const StatLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--gray-600);
`;

export const DualSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: var(--white);
  padding: 32px;
  border-radius: 20px;
  border: 1px solid var(--gray-200);
  box-shadow: 0 12px 40px rgba(17, 17, 17, 0.08);
  animation: ${riseUp} 0.45s ease both;

  @media (max-width: 599px) {
    padding: 24px;
  }
`;

export const SectionHeading = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--black);
`;

export const SectionParagraph = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  color: var(--gray-700);
`;

export const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BulletItem = styled.li`
  position: relative;
  padding-left: 18px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--gray-700);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--black);
  }
`;

export const ResponsiveSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const ToggleBar = styled.div`
  display: inline-flex;
  padding: 6px;
  border-radius: 16px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
`;

export const ToggleTab = styled.button<{ $active: boolean }>`
  min-width: 120px;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  background: ${({ $active }) => ($active ? "var(--black)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--white)" : "var(--gray-600)")};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const ToggleImageArea = styled.div`
  width: 100%;
  background: var(--gray-50);
  border-radius: 28px;
  padding: 30px;
  border: 1px solid var(--gray-200);
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.4s ease both;
  display: flex;
  justify-content: center;

  @media (max-width: 599px) {
    padding: 20px;
  }
`;

export const InterfaceImage = styled(Image)<{ $view: ToggleOption }>`
  width: 100%;
  height: auto;
  max-width: ${({ $view }) => ($view === "Mobile" ? "320px" : "100%")};
  border-radius: 18px;
  border: 1px solid rgba(17, 17, 17, 0.08);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.14);
`;

export const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CategoriesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const CategoryPill = styled.span`
  padding: 10px 18px;
  border-radius: 20px;
  background: var(--gray-100);
  color: var(--dark-gray);
  font-size: 15px;
  font-weight: 500;
`;

export const FilterToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const FilterAction = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-600);
  padding: 8px 14px;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  background: var(--white);
`;

export const FinancingBanner = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-600);
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ProductCard = styled.div`
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductName = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--black);
`;

export const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-700);
`;

export const FeatureSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 899px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FeatureTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--black);
`;

export const FeatureCopy = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--gray-700);
`;

export const ProcessSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProcessIntro = styled.p`
  margin: 0;
  max-width: 860px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-700);
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: start;
  width: 100%;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: start;
  width: 100%;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProcessCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid var(--gray-200);
  border-radius: 20px;
  background: var(--white);
  padding: 18px;
  box-shadow: 0 12px 40px rgba(17, 17, 17, 0.06);
`;

export const ProcessImageButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  cursor: zoom-in;
  text-align: left;
`;

export const ProcessImageFrame = styled.div`
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--gray-200);
  background: var(--gray-50);

  img {
    display: block;
  }
`;

export const ProcessTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProcessCardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 1.35;
  font-weight: 600;
  color: var(--black);
`;

export const ProcessCardCopy = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--gray-700);
`;

export const ProcessCardAction = styled.button`
  display: inline-flex;
  align-self: flex-start;
  padding: 8px 12px;
  border-radius: 999px;
  border: none;
  background: var(--gray-100);
  color: var(--dark-gray);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--gray-200);
  }
`;

export const FlowCarouselSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FlowCarouselIntro = styled.p`
  margin: 0;
  max-width: 860px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-700);
`;

export const FlowCarouselFrame = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 18px;
  align-items: center;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
  }
`;

export const FlowNavButton = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid var(--gray-200);
  border-radius: 999px;
  background: var(--white);
  color: var(--dark-gray);
  font-size: 22px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    background: var(--gray-100);
  }

  @media (max-width: 899px) {
    display: none;
  }
`;

export const FlowSlideCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 980px;
  justify-self: center;
  padding: 20px;
  border: 1px solid var(--gray-200);
  border-radius: 24px;
  background: var(--white);
  box-shadow: 0 12px 40px rgba(17, 17, 17, 0.06);
`;

export const FlowImageButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  cursor: zoom-in;
  text-align: left;
`;

export const FlowImageFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid var(--gray-200);
  background: var(--gray-50);
  padding: 16px;
  min-height: 520px;

  img {
    display: block;
    width: auto !important;
    height: auto !important;
    max-width: 100%;
    max-height: min(68vh, 760px);
    margin: 0 auto;
    object-fit: contain;
  }

  @media (max-width: 899px) {
    min-height: 320px;
    padding: 12px;
  }
`;

export const FlowSlideMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FlowSlideLabel = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--gray-100);
  color: var(--dark-gray);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const FlowSlideCopy = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--gray-700);
`;

export const FlowDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const FlowDotButton = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "34px" : "10px")};
  height: 10px;
  border: none;
  border-radius: 999px;
  background: ${({ $active }) =>
    $active ? "var(--black)" : "var(--gray-300)"};
  cursor: pointer;
  transition: width 0.2s ease, background 0.2s ease;
`;

export const SessionDemoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SessionDemoIntro = styled.p`
  margin: 0;
  max-width: 900px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-700);
`;

export const SessionDemoControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SessionDemoInstructionList = styled.ol`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--gray-700);
`;

export const SessionDemoInstructionItem = styled.li`
  font-size: 15px;
  line-height: 1.6;
`;

export const SessionDemoLiveLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SessionDemoLiveLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--black);
  border: 1px solid var(--black);
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background: var(--dark-gray);
  }
`;

export const SessionDemoToggle = styled.button<{ $active: boolean }>`
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) =>
    $active ? "var(--black)" : "var(--gray-200)"};
  background: ${({ $active }) =>
    $active ? "var(--black)" : "var(--white)"};
  color: ${({ $active }) =>
    $active ? "var(--white)" : "var(--dark-gray)"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const SessionDemoAction = styled.button`
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid var(--gray-200);
  background: var(--white);
  color: var(--dark-gray);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--gray-100);
  }
`;

export const SessionDemoCanvas = styled.div`
  position: relative;
  min-height: 320px;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid var(--gray-200);
  background:
    radial-gradient(circle at top right, rgba(33, 64, 154, 0.1), transparent 30%),
    linear-gradient(180deg, #fbfbfc 0%, #f1f3f7 100%);
  padding: 32px;

  @media (max-width: 599px) {
    padding: 20px;
    min-height: 360px;
  }
`;

export const SessionDemoSurface = styled.div`
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SessionDemoSurfaceEyebrow = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #21409a;
`;

export const SessionDemoSurfaceTitle = styled.h3`
  margin: 0;
  font-size: 28px;
  line-height: 1.2;
  color: var(--black);
`;

export const SessionDemoSurfaceCopy = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-700);
`;

export const SessionDemoNote = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--gray-600);
`;

export const SessionDemoStatus = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: #21409a;
`;

export const SessionDemoModalShell = styled.div`
  position: absolute;
  top: 28px;
  right: 28px;
  width: min(492px, calc(100% - 40px));
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 22px;
  background: #ffffff;
  color: #252525;
  padding: 14px 18px 18px;
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.18);
  animation: ${slideInRight} 0.35s ease both;

  @media (max-width: 599px) {
    right: 20px;
    left: 20px;
    top: auto;
    bottom: 20px;
    width: auto;
  }
`;

export const SessionDemoModalTimer = styled.div<{ $durationMs: number }>`
  position: relative;
  height: 4px;
  width: 100%;
  border-radius: 999px;
  background: #e5e5e5;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #9d9d9d;
    transform-origin: left center;
    animation: ${drainBar} ${({ $durationMs }) => `${$durationMs}ms`} linear forwards;
  }
`;

export const SessionDemoModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const SessionDemoModalHeadline = styled.h4`
  margin: 0;
  max-width: 320px;
  font-family: "DIN Pro", "DIN Alternate", "Arial Narrow", sans-serif;
  font-size: 24px;
  line-height: 1.12;
  font-weight: 700;
  color: #252525;
  white-space: nowrap;
`;

export const SessionDemoModalClose = styled.div`
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  border-radius: 10px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #252525;
  font-size: 22px;
  line-height: 1;

  @media (max-width: 599px) {
    display: none;
  }
`;

export const SessionDemoModalProduct = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 140px;
  gap: 16px;
  align-items: center;
  border-radius: 14px;
  background: #f1f1f1;
  padding: 18px;

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

export const SessionDemoModalThumb = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 16px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04)),
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.12), transparent 40%),
    #2b2b2b;

  @media (max-width: 599px) {
    width: 72px;
    height: 72px;
  }
`;

export const SessionDemoModalImage = styled(Image)`
  width: 140px;
  height: auto;
  object-fit: contain;
  justify-self: end;

  @media (max-width: 599px) {
    width: 120px;
    justify-self: start;
  }
`;

export const SessionDemoModalMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SessionDemoModalName = styled.h4`
  margin: 0;
  font-size: 20px;
  line-height: 1.3;
  color: #252525;
`;

export const SessionDemoModalDetails = styled.p`
  margin: 0;
  font-size: 16px;
  text-decoration: underline;
  line-height: 1.5;
  color: #252525;
`;

export const SessionDemoModalPrice = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: #252525;
`;

export const SessionDemoModalCta = styled.button`
  display: none;
`;

export const ResultsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`;

export const ResultsParagraph = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  color: var(--gray-700);
`;

export const ResultsColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultsColumn = styled.div`
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 24px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  z-index: 100;
  animation: ${fadeIn} 0.2s ease both;
`;

export const ModalContent = styled.div`
  position: relative;
  width: min(1200px, 92vw);
  max-height: 90vh;
  background: var(--black);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: transparent;
  color: var(--white);
  font-size: 28px;
  cursor: pointer;
`;

export const ModalVideo = styled.video`
  width: 100%;
  border-radius: 12px;
  background: #000000;
`;

export const ModalImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;
