'use client';

import { useCallback, useEffect, useState } from "react";
import type { CaseStudyContent, ToggleOption } from "@/data/case-studies";
import {
  DEFAULT_CASE_STUDY_SLUG,
  getCaseStudyPath,
} from "@/data/case-studies";
import {
  FloatingArrowRight,
  FloatingArrowLeft,
  ArrowGlyph,
  ArrowGlyphLeft,
  PageWrapper,
  CaseStudyContainer,
  HeroSection,
  TagsWrapper,
  Tag,
  HeroTitle,
  HeroParagraph,
  ActionsWrapper,
  PrimaryButton,
  SecondaryButton,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  DualSection,
  TextBlock,
  SectionHeading,
  SectionParagraph,
  BulletList,
  BulletItem,
  ResponsiveSection,
  ToggleBar,
  ToggleTab,
  ToggleImageArea,
  InterfaceImage,
  CategorySection,
  CategoriesRow,
  CategoryPill,
  FilterToolbar,
  FilterAction,
  FinancingBanner,
  ProductGrid,
  ProductCard,
  ProductName,
  ProductPrice,
  FeatureSection,
  FeatureGrid,
  FeatureCard,
  FeatureTitle,
  FeatureCopy,
  ResultsSection,
  ResultsParagraph,
  ResultsColumns,
  ResultsColumn,
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalVideo,
} from "./case-study-view.styles";

type CaseStudyViewProps = {
  content: CaseStudyContent;
};

export function CaseStudyView({ content }: CaseStudyViewProps) {
  const {
    tags,
    heroTitle,
    heroIntro,
    ctas,
    stats,
    challengeParagraph,
    challengePoints,
    solutionParagraph,
    solutionPoints,
    responsiveDescription,
    viewOptions,
    images,
    categoryLabels,
    filterLabels,
    financingText,
    productCards,
    featureCards,
    resultsParagraph,
    resultsMetrics,
    resultsFeedback,
    navigation,
  } = content;

  const watchDemo = ctas.watchDemo;

  const [activeView, setActiveView] = useState<ToggleOption>(viewOptions[0]);
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

  const activeImage = images[activeView];
  const nextHref = getCaseStudyPath(navigation.nextSlug);
  const previousHref = getCaseStudyPath(navigation.previousSlug);
  const showPrevious = content.slug !== DEFAULT_CASE_STUDY_SLUG;

  return (
    <>
      {showPrevious ? (
        <FloatingArrowLeft href={previousHref} aria-label={navigation.previousLabel}>
          {/* <ArrowLabel>{navigation.previousLabel}</ArrowLabel> */}
          <ArrowGlyphLeft aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 3.5L10.5 8L5.5 12.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ArrowGlyphLeft>
        </FloatingArrowLeft>
      ) : null}

      <FloatingArrowRight href={nextHref} aria-label={navigation.nextLabel}>
        {/* <ArrowLabel>{navigation.nextLabel}</ArrowLabel> */}
        <ArrowGlyph aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 3.5L10.5 8L5.5 12.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArrowGlyph>
      </FloatingArrowRight>

      <PageWrapper>
        <CaseStudyContainer>
          <HeroSection>
            <TagsWrapper>
              {tags.map((tag) => (
                <Tag key={tag.label} $variant={tag.variant}>
                  {tag.label}
                </Tag>
              ))}
            </TagsWrapper>
            <HeroTitle>{heroTitle}</HeroTitle>
            <HeroParagraph>{heroIntro}</HeroParagraph>
            <ActionsWrapper>
              <PrimaryButton
                href={ctas.viewLive.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctas.viewLive.label}
              </PrimaryButton>
              {watchDemo ? (
                <SecondaryButton
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                >
                  {watchDemo.label}
                </SecondaryButton>
              ) : null}
            </ActionsWrapper>
            <StatsGrid role="list">
              {stats.map((stat) => (
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
              <SectionParagraph>{challengeParagraph}</SectionParagraph>
              <BulletList>
                {challengePoints.map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </BulletList>
            </TextBlock>
            <TextBlock>
              <SectionHeading id="solution-heading">The Solution</SectionHeading>
              <SectionParagraph>{solutionParagraph}</SectionParagraph>
              <BulletList>
                {solutionPoints.map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </BulletList>
            </TextBlock>
          </DualSection>

          <ResponsiveSection aria-labelledby="responsive-top-heading">
            <SectionHeading id="responsive-top-heading">Responsive Design</SectionHeading>
            <SectionParagraph>{responsiveDescription}</SectionParagraph>
            <ToggleBar role="tablist" aria-label="Interface view toggle">
              {viewOptions.map((option) => (
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
                width={activeImage.width}
                height={activeImage.height}
                $view={activeView}
                priority={activeView === "Desktop"}
              />
            </ToggleImageArea>
          </ResponsiveSection>

          <CategorySection aria-labelledby="category-heading">
            <SectionHeading id="category-heading">Bikes</SectionHeading>
            <CategoriesRow>
              {categoryLabels.map((label) => (
                <CategoryPill key={label}>{label}</CategoryPill>
              ))}
            </CategoriesRow>
            <FilterToolbar>
              {filterLabels.map((label) => (
                <FilterAction key={label}>{label}</FilterAction>
              ))}
            </FilterToolbar>
            <FinancingBanner>{financingText}</FinancingBanner>
            <ProductGrid>
              {productCards.map((product) => (
                <ProductCard key={`${product.name}-${product.price}`}>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductCard>
              ))}
            </ProductGrid>
          </CategorySection>

          <FeatureSection aria-labelledby="features-heading">
            <SectionHeading id="features-heading">Key Design Features</SectionHeading>
            <FeatureGrid>
              {featureCards.map((feature) => (
                <FeatureCard key={feature.title}>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureCopy>{feature.copy}</FeatureCopy>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </FeatureSection>

          <ResultsSection aria-labelledby="results-heading">
            <SectionHeading id="results-heading">Results</SectionHeading>
            <ResultsParagraph>{resultsParagraph}</ResultsParagraph>
            <ResultsColumns>
              <ResultsColumn>
                <BulletList>
                  {resultsMetrics.map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </BulletList>
              </ResultsColumn>
              <ResultsColumn>
                <BulletList>
                  {resultsFeedback.map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </BulletList>
              </ResultsColumn>
            </ResultsColumns>
          </ResultsSection>
        </CaseStudyContainer>
      </PageWrapper>

      {watchDemo && isModalOpen ? (
        <ModalOverlay role="presentation" onClick={closeModal}>
          <ModalContent
            role="dialog"
            aria-modal="true"
            aria-label={watchDemo.ariaLabel}
            onClick={(event) => event.stopPropagation()}
          >
            <ModalClose type="button" aria-label="Close" onClick={closeModal}>
              &times;
            </ModalClose>
            <ModalVideo controls preload="metadata" playsInline>
              <source src={watchDemo.src} />
              Your browser does not support the video tag.
            </ModalVideo>
          </ModalContent>
        </ModalOverlay>
      ) : null}
    </>
  );
}
