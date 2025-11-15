'use client';

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

type ToggleOption = "Desktop" | "Mobile";
type TagVariant = "dark" | "light";

const TAGS: ReadonlyArray<{ label: string; variant: TagVariant }> = [
  { label: "E-Commerce", variant: "dark" },
  { label: "UX/UI Design", variant: "light" },
  { label: "Responsive Design", variant: "light" },
];

const HERO_TITLE = "Specialized Bikes: Redesigning the E-Commerce Experience";
const HERO_INTRO =
  "A comprehensive redesign of Specialized's product listing page to improve user engagement, streamline bike discovery, and increase conversion rates through enhanced filtering, responsive design, and intuitive navigation.";

const STATS = [
  { value: "32%", label: "Increase in Engagement" },
  { value: "24%", label: "Higher Conversion Rate" },
  { value: "45%", label: "Faster Product Discovery" },
  { value: "4.8/5", label: "User Satisfaction Score" },
] as const;

const CHALLENGE_PARAGRAPH =
  "Specialized's existing product listing page was overwhelming users with too many options and lacked clear categorization. Users struggled to find the right bike type, and the mobile experience was particularly challenging.";

const CHALLENGE_POINTS = [
  "Poor mobile experience with cramped layouts",
  "Unclear product categorization and filtering",
  "Low engagement with category hero images",
  "Inconsistent design system across breakpoints",
] as const;

const SOLUTION_PARAGRAPH =
  "I redesigned the product listing page with a focus on visual hierarchy, improved categorization, and responsive design. The new design features large hero images for each bike category, streamlined filtering, and a mobile-first approach.";

const SOLUTION_POINTS = [
  "Introduced engaging category cards with lifestyle imagery",
  "Redesigned filtering system with clear visual hierarchy",
  "Created fully responsive layouts for mobile and desktop",
  "Implemented consistent design system and components",
] as const;

const RESPONSIVE_DESCRIPTION =
  "The design seamlessly adapts from desktop to mobile, maintaining visual consistency and usability across all devices.";

const CATEGORY_LABELS = [
  "Electric Bikes",
  "Mountain Bikes",
  "Road Bikes",
  "Gravel Bikes",
  "Active Bikes",
] as const;

const PRODUCT_CARDS = [
  { name: "Turbo Vado SL 5.0", price: "$5,250" },
  { name: "Turbo Vado SL 5.0", price: "$5,000" },
  { name: "Turbo Vado SL 5.0", price: "$6,000" },
  { name: "Turbo Como 4.0", price: "$3,250" },
  { name: "Turbo Como 5.0", price: "$3,250" },
  { name: "Turbo Como 4.0", price: "$4,250" },
] as const;

const FILTER_LABELS = [
  "Relevance",
  "In Stock",
  "Clear All",
  "Compare",
  "All Filters",
] as const;

const FINANCING_TEXT = "Financing Available with Klarna. Learn More";

const FEATURE_CARDS = [
  {
    title: "Visual Categorization",
    copy:
      "Large, engaging hero images for each bike category (Electric, Mountain, Road, Gravel, Active) help users quickly identify and navigate to their interest area.",
  },
  {
    title: "Enhanced Filtering",
    copy:
      "Streamlined filter system with clear visual hierarchy, active filter tags, and a dedicated \"All Filters\" panel for advanced product discovery.",
  },
  {
    title: "Mobile Optimization",
    copy:
      "Redesigned mobile experience with touch-friendly controls, optimized spacing, and a bottom-sheet filter interface for seamless on-the-go browsing.",
  },
] as const;

const RESULTS_PARAGRAPH =
  "The redesigned product listing page significantly improved user engagement and conversion rates. User testing showed a dramatic increase in task completion rates and overall satisfaction.";

const RESULTS_METRICS = [
  "32% increase in category engagement",
  "24% improvement in conversion rate",
  "45% reduction in time to find products",
  "58% decrease in bounce rate on mobile",
] as const;

const RESULTS_FEEDBACK = [
  "Users praised the visual category system",
  "Improved brand perception and trust",
  "Higher mobile user satisfaction scores",
  "Positive feedback on filtering experience",
] as const;

const IMAGE_SOURCES: Record<ToggleOption, { src: string; alt: string }> = {
  Desktop: {
    src: "/images/desktop.jpg",
    alt: "Desktop layout showcasing the Specialized bikes product listing page.",
  },
  Mobile: {
    src: "/images/mobile.jpg",
    alt: "Mobile layout showcasing the Specialized bikes product listing page.",
  },
};

export default function CaseStudyPage() {
  const [activeView, setActiveView] = useState<ToggleOption>("Desktop");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const activeImage = IMAGE_SOURCES[activeView];

  return (
    <>
      <PageWrapper>
        <CaseStudyContainer>
          <HeroSection>
            <TagsWrapper>
              {TAGS.map((tag) => (
                <Tag key={tag.label} $variant={tag.variant}>
                  {tag.label}
                </Tag>
              ))}
            </TagsWrapper>
            <HeroTitle>{HERO_TITLE}</HeroTitle>
            <HeroParagraph>{HERO_INTRO}</HeroParagraph>
            <ActionsWrapper>
              <PrimaryButton
                href="https://www.specialized.com/us/en/shop/bikes/electric-bikes"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Site
              </PrimaryButton>
              <SecondaryButton type="button" onClick={() => setIsModalOpen(true)}>
                Watch Demo
              </SecondaryButton>
            </ActionsWrapper>
            <StatsGrid role="list">
              {STATS.map((stat) => (
                <StatCard key={stat.label} role="listitem">
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </HeroSection>

          <DualSection aria-labelledby="challenge-heading solution-heading">
            <TextBlock>
              <SectionHeading id="challenge-heading">The Challenge</SectionHeading>
              <SectionParagraph>{CHALLENGE_PARAGRAPH}</SectionParagraph>
              <BulletList>
                {CHALLENGE_POINTS.map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </BulletList>
            </TextBlock>
            <TextBlock>
              <SectionHeading id="solution-heading">The Solution</SectionHeading>
              <SectionParagraph>{SOLUTION_PARAGRAPH}</SectionParagraph>
              <BulletList>
                {SOLUTION_POINTS.map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </BulletList>
            </TextBlock>
          </DualSection>

          <ResponsiveSection aria-labelledby="responsive-top-heading">
            <SectionHeading id="responsive-top-heading">Responsive Design</SectionHeading>
            <SectionParagraph>{RESPONSIVE_DESCRIPTION}</SectionParagraph>
            <ToggleBar role="tablist" aria-label="Interface view toggle">
              {(["Desktop", "Mobile"] as ToggleOption[]).map((option) => (
                <ToggleTab
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={activeView === option}
                  $active={activeView === option}
                  onClick={() => setActiveView(option)}
                >
                  {option}
                </ToggleTab>
              ))}
            </ToggleBar>
            <ToggleImageArea>
              <InterfaceImage
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeView === "Desktop" ? 1200 : 375}
                height={activeView === "Desktop" ? 760 : 1352}
                priority
              />
            </ToggleImageArea>
          </ResponsiveSection>

          <CategorySection aria-labelledby="category-heading">
            <SectionHeading id="category-heading">Bikes</SectionHeading>
            <CategoriesRow>
              {CATEGORY_LABELS.map((label) => (
                <CategoryPill key={label}>{label}</CategoryPill>
              ))}
            </CategoriesRow>
            <FilterToolbar>
              {FILTER_LABELS.map((label) => (
                <FilterAction key={label}>{label}</FilterAction>
              ))}
            </FilterToolbar>
            <FinancingBanner>{FINANCING_TEXT}</FinancingBanner>
            <ProductGrid>
              {PRODUCT_CARDS.map((product) => (
                <ProductCard key={`${product.name}-${product.price}`}>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductCard>
              ))}
            </ProductGrid>
          </CategorySection>

          <ResponsiveSection aria-labelledby="responsive-bottom-heading">
            <SectionHeading id="responsive-bottom-heading">Responsive Design</SectionHeading>
            <SectionParagraph>{RESPONSIVE_DESCRIPTION}</SectionParagraph>
            <ToggleBar role="tablist" aria-label="Interface view toggle duplicate">
              {(["Desktop", "Mobile"] as ToggleOption[]).map((option) => (
                <ToggleTab
                  key={`bottom-${option}`}
                  type="button"
                  role="tab"
                  aria-selected={activeView === option}
                  $active={activeView === option}
                  onClick={() => setActiveView(option)}
                >
                  {option}
                </ToggleTab>
              ))}
            </ToggleBar>
            <ToggleImageArea>
              <InterfaceImage
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeView === "Desktop" ? 1200 : 375}
                height={activeView === "Desktop" ? 760 : 1352}
                priority
              />
            </ToggleImageArea>
          </ResponsiveSection>

          <FeatureSection aria-labelledby="features-heading">
            <SectionHeading id="features-heading">Key Design Features</SectionHeading>
            <FeatureGrid>
              {FEATURE_CARDS.map((feature) => (
                <FeatureCard key={feature.title}>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureCopy>{feature.copy}</FeatureCopy>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </FeatureSection>

          <ResultsSection aria-labelledby="results-heading">
            <SectionHeading id="results-heading">Results</SectionHeading>
            <ResultsParagraph>{RESULTS_PARAGRAPH}</ResultsParagraph>
            <ResultsColumns>
              <ResultsColumn>
                <BulletList>
                  {RESULTS_METRICS.map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </BulletList>
              </ResultsColumn>
              <ResultsColumn>
                <BulletList>
                  {RESULTS_FEEDBACK.map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </BulletList>
              </ResultsColumn>
            </ResultsColumns>
          </ResultsSection>
        </CaseStudyContainer>
      </PageWrapper>

      {isModalOpen ? (
        <ModalOverlay role="presentation" onClick={closeModal}>
          <ModalContent
            role="dialog"
            aria-modal="true"
            aria-label="Specialized bikes demo video"
            onClick={(event) => event.stopPropagation()}
          >
            <ModalClose type="button" aria-label="Close" onClick={closeModal}>
              &times;
            </ModalClose>
            <ModalVideo controls preload="metadata" playsInline>
              <source src="/videos/movie.mov" />
              Your browser does not support the video tag.
            </ModalVideo>
          </ModalContent>
        </ModalOverlay>
      ) : null}
    </>
  );
}

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

const PageWrapper = styled.main`
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

const CaseStudyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 32px 160px;
  display: flex;
  flex-direction: column;
  gap: 96px;

  @media (max-width: 899px) {
    padding: 72px 28px 120px;
  }

  @media (max-width: 599px) {
    padding: 64px 24px 120px;
    gap: 64px;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Tag = styled.span<{ $variant: TagVariant }>`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background: ${({ $variant }) =>
    $variant === "dark" ? "var(--black)" : "var(--gray-100)"};
  color: ${({ $variant }) => ($variant === "dark" ? "var(--white)" : "var(--dark-gray)")};
`;

const HeroTitle = styled.h1`
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

const HeroParagraph = styled.p`
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

const ActionsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 32px;

  @media (max-width: 599px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.a`
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

const SecondaryButton = styled.button`
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
  margin-top: 64px;
  width: 100%;

  @media (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatCard = styled.div`
  background: var(--white);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--gray-200);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatValue = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--black);
`;

const StatLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--gray-600);
`;

const DualSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextBlock = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SectionHeading = styled.h2`
  margin: 0 0 24px;
  font-size: 22px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--black);

  @media (max-width: 599px) {
    text-align: center;
    width: 100%;
  }
`;

const SectionParagraph = styled.p`
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--gray-700);
  max-width: 760px;

  @media (max-width: 599px) {
    text-align: center;
    width: 100%;
  }
`;

const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 20px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: var(--dark-gray);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--black);
  }

  @media (max-width: 599px) {
    font-size: 14.4px;
    padding-left: 18px;
  }
`;

const ResponsiveSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ToggleBar = styled.div`
  display: inline-flex;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  padding: 4px;
  margin-top: 24px;
  gap: 8px;
`;

const ToggleTab = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "var(--black)" : "var(--white)")};
  color: ${({ $active }) => ($active ? "var(--white)" : "var(--black)")};
  transition: background 0.2s ease, color 0.2s ease;

  &:focus-visible {
    outline: 2px solid var(--gray-500);
    outline-offset: 2px;
  }

  @media (max-width: 599px) {
    font-size: 14.4px;
    padding: 6px 14px;
  }
`;

const ToggleImageArea = styled.div`
  margin-top: 32px;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  background: var(--white);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InterfaceImage = styled(Image)`
  display: block;
  height: auto;
  max-width: 100%;
  margin: 0 auto;
`;

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const CategoriesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const CategoryPill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 20px;
  background: var(--gray-100);
  color: var(--dark-gray);
  font-size: 15px;
  font-weight: 500;
`;

const FilterToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const FilterAction = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-600);
  padding: 8px 14px;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  background: var(--white);
`;

const FinancingBanner = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-600);
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  width: 100%;

  @media (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProductCard = styled.div`
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--black);
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-700);
`;

const FeatureSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  width: 100%;

  @media (max-width: 899px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FeatureTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--black);
`;

const FeatureCopy = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--gray-700);
`;

const ResultsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const ResultsParagraph = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--gray-700);
  max-width: 760px;

  @media (max-width: 599px) {
    text-align: center;
    width: 100%;
  }
`;

const ResultsColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  width: 100%;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ResultsColumn = styled.div`
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 24px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  animation: ${fadeIn} 200ms ease forwards;
  z-index: 999;

  @media (max-width: 599px) {
    padding: 16px;
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 900px;
  background: var(--white);
  border-radius: 12px;
  padding: 24px;
  animation: ${riseUp} 220ms ease forwards;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: transparent;
  font-size: 28px;
  font-weight: 600;
  color: var(--black);
  cursor: pointer;
`;

const ModalVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  background: var(--black);
`;
