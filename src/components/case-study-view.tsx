"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import type { CaseStudyContent, ToggleOption } from "@/data/case-studies"
import { DEFAULT_CASE_STUDY_SLUG, getCaseStudyPath } from "@/data/case-studies"
import {
  FloatingArrowRight,
  FloatingArrowLeft,
  ArrowGlyph,
  ArrowGlyphLeft,
  PageWrapper,
  CaseStudyContainer,
  HeroSection,
  HeroHeaderRow,
  AuthorLabel,
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
  StatsSection,
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
  ProcessSection,
  ProcessIntro,
  ProcessGrid,
  ProcessCard,
  ProcessImageButton,
  ProcessImageFrame,
  ProcessTextBlock,
  ProcessCardTitle,
  ProcessCardCopy,
  ProcessCardAction,
  FlowCarouselSection,
  FlowCarouselIntro,
  FlowCarouselFrame,
  FlowNavButton,
  FlowSlideCard,
  FlowImageButton,
  FlowImageFrame,
  FlowSlideMeta,
  FlowSlideLabel,
  FlowSlideCopy,
  FlowDots,
  FlowDotButton,
  SessionDemoSection,
  SessionDemoIntro,
  SessionDemoControls,
  SessionDemoInstructionList,
  SessionDemoInstructionItem,
  SessionDemoToggle,
  SessionDemoAction,
  SessionDemoCanvas,
  SessionDemoSurface,
  SessionDemoSurfaceEyebrow,
  SessionDemoSurfaceTitle,
  SessionDemoSurfaceCopy,
  SessionDemoNote,
  SessionDemoStatus,
  SessionDemoModalShell,
  SessionDemoModalTimer,
  SessionDemoModalHeader,
  SessionDemoModalHeadline,
  SessionDemoModalClose,
  SessionDemoModalProduct,
  SessionDemoModalThumb,
  SessionDemoModalImage,
  SessionDemoModalMeta,
  SessionDemoModalName,
  SessionDemoModalDetails,
  SessionDemoModalPrice,
  SessionDemoModalCta,
  ResultsSection,
  ResultsParagraph,
  ResultsColumns,
  ResultsColumn,
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalVideo,
  ModalImage,
} from "./case-study-view.styles"

type CaseStudyViewProps = {
  content: CaseStudyContent
}

const AUTHOR_NAME = "Sara Keyser"
const COPYRIGHT_YEAR = 2026

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
    processSection,
    flowCarousel,
    sessionDemo,
    categoryHeading,
    categoryLabels,
    filterLabels,
    financingText,
    productCards,
    featureCards,
    resultsParagraph,
    resultsMetrics,
    resultsFeedback,
    navigation,
  } = content

  const watchDemo = ctas.watchDemo
  const conceptStorefrontLayout = content.slug === "concept-storefront"
  const continueShoppingLayout = content.slug === "continue-shopping"
  const completeYourRideLayout = content.slug === "complete-your-ride"
  const defaultView = viewOptions[0]

  const [activeView, setActiveView] = useState<ToggleOption>(defaultView)
  const [activeFlowIndex, setActiveFlowIndex] = useState(0)
  const [sessionEntryPoint, setSessionEntryPoint] = useState<"landing" | "pdp">(
    "landing"
  )
  const [isSessionDemoVisible, setIsSessionDemoVisible] = useState(false)
  const [sessionDemoStatus, setSessionDemoStatus] = useState("")
  const [sessionDemoCycle, setSessionDemoCycle] = useState(0)
  const [modalState, setModalState] = useState<
    | { kind: "video" }
    | {
        kind: "image"
        src: string
        alt: string
        width: number
        height: number
      }
    | null
  >(null)

  const closeModal = useCallback(() => setModalState(null), [])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  }, [closeModal])

  useEffect(() => {
    document.body.style.overflow = modalState ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [modalState])

  useEffect(() => {
    if (!sessionDemo || !isSessionDemoVisible || sessionEntryPoint !== "landing") {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setIsSessionDemoVisible(false)
    }, sessionDemo.durationMs)

    return () => window.clearTimeout(timeoutId)
  }, [sessionDemo, isSessionDemoVisible, sessionEntryPoint, sessionDemoCycle])

  const activeImage = images[activeView]
  const nextHref = getCaseStudyPath(navigation.nextSlug)
  const previousHref = getCaseStudyPath(navigation.previousSlug)
  const showPrevious = content.slug !== DEFAULT_CASE_STUDY_SLUG

  const renderStatsGrid = () => (
    <StatsGrid role="list">
      {stats.map((stat) => (
        <StatCard key={stat.label} role="listitem">
          <StatValue>{stat.value}</StatValue>
          <StatLabel>{stat.label}</StatLabel>
        </StatCard>
      ))}
    </StatsGrid>
  )

  const renderHeroSupplementalActions = () => {
    if (!sessionDemo?.liveSteps?.length) {
      return null
    }

    return sessionDemo.liveSteps
      .filter((step) => step.href !== ctas.viewLive.href)
      .map((step) => (
        <PrimaryButton
          key={step.label}
          href={step.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {step.label}
        </PrimaryButton>
      ))
  }

  const renderDualSection = () => (
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
  )

  const renderResponsiveSection = () => (
    <ResponsiveSection aria-labelledby="responsive-top-heading">
      <SectionHeading id="responsive-top-heading">
        Responsive Design
      </SectionHeading>
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
          priority={activeView === defaultView}
        />
      </ToggleImageArea>
    </ResponsiveSection>
  )

  const renderCategorySection = () => (
    <CategorySection aria-labelledby="category-heading">
      <SectionHeading id="category-heading">
        {categoryHeading ?? "Bikes"}
      </SectionHeading>
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
  )

  const renderFeatureSection = () => (
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
  )

  const renderResultsSection = () => (
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
  )

  const openImageModal = (image: {
    src: string
    alt: string
    width: number
    height: number
  }) => {
    setModalState({
      kind: "image",
      src: image.src,
      alt: image.alt,
      width: image.width,
      height: image.height,
    })
  }

  const renderProcessSection = () => {
    if (!processSection) {
      return null
    }

    const renderArtifactCard = (artifact: (typeof processSection.artifacts)[number]) => {
      const hasModal = Boolean(artifact.modalImage)
      const media = hasModal ? (
        <ProcessImageButton
          type="button"
          onClick={() => openImageModal(artifact.modalImage!)}
          aria-label={artifact.ctaLabel ?? `Open ${artifact.title}`}
        >
          <ProcessImageFrame>
            <Image
              src={artifact.image.src}
              alt={artifact.image.alt}
              width={artifact.image.width}
              height={artifact.image.height}
              style={{ width: "100%", height: "auto" }}
            />
          </ProcessImageFrame>
        </ProcessImageButton>
      ) : (
        <ProcessImageFrame>
          <Image
            src={artifact.image.src}
            alt={artifact.image.alt}
            width={artifact.image.width}
            height={artifact.image.height}
            style={{ width: "100%", height: "auto" }}
          />
        </ProcessImageFrame>
      )

      const text = (
        <ProcessTextBlock>
          <ProcessCardTitle>{artifact.title}</ProcessCardTitle>
          <ProcessCardCopy>{artifact.copy}</ProcessCardCopy>
          {hasModal ? (
            <ProcessCardAction
              type="button"
              onClick={() => openImageModal(artifact.modalImage!)}
            >
              {artifact.ctaLabel ?? "Open"}
            </ProcessCardAction>
          ) : null}
        </ProcessTextBlock>
      )

      return (
        <ProcessCard key={artifact.title}>
          {artifact.textFirst ? text : media}
          {artifact.textFirst ? media : text}
        </ProcessCard>
      )
    }

    if (content.slug === "complete-your-ride") {
      const conceptArtifact = processSection.artifacts.find(
        (artifact) => artifact.title === "Concept Intro and Problem Statements"
      )
      const competitorArtifact = processSection.artifacts.find(
        (artifact) => artifact.title === "Competitor Analysis"
      )
      const kpiArtifact = processSection.artifacts.find(
        (artifact) => artifact.title === "Business Goals and KPIs"
      )
      const flowArtifact = processSection.artifacts.find(
        (artifact) => artifact.title === "Complete Your Ride Flow"
      )

      return (
        <ProcessSection aria-labelledby="process-heading">
          <SectionHeading id="process-heading">{processSection.title}</SectionHeading>
          <ProcessIntro>{processSection.intro}</ProcessIntro>
          <ProcessGrid>
            {conceptArtifact ? renderArtifactCard(conceptArtifact) : null}
            {competitorArtifact ? renderArtifactCard(competitorArtifact) : null}
            {kpiArtifact ? renderArtifactCard(kpiArtifact) : null}
            {flowArtifact ? renderArtifactCard(flowArtifact) : null}
          </ProcessGrid>
        </ProcessSection>
      )
    }

    return (
      <ProcessSection aria-labelledby="process-heading">
        <SectionHeading id="process-heading">{processSection.title}</SectionHeading>
        <ProcessIntro>{processSection.intro}</ProcessIntro>
        <ProcessGrid>
          {processSection.artifacts.map((artifact) => {
            return renderArtifactCard(artifact)
          })}
        </ProcessGrid>
      </ProcessSection>
    )
  }

  const renderFlowCarousel = () => {
    if (!flowCarousel || flowCarousel.slides.length === 0) {
      return null
    }

    const slideCount = flowCarousel.slides.length
    const activeSlide = flowCarousel.slides[activeFlowIndex]

    const goToPrevious = () =>
      setActiveFlowIndex((current) => (current - 1 + slideCount) % slideCount)
    const goToNext = () =>
      setActiveFlowIndex((current) => (current + 1) % slideCount)

    return (
      <FlowCarouselSection aria-labelledby="flow-carousel-heading">
        <SectionHeading id="flow-carousel-heading">{flowCarousel.title}</SectionHeading>
        <FlowCarouselIntro>{flowCarousel.intro}</FlowCarouselIntro>
        <FlowCarouselFrame>
          <FlowNavButton
            type="button"
            aria-label="Previous flow screen"
            onClick={goToPrevious}
          >
            ‹
          </FlowNavButton>
          <FlowSlideCard>
            <FlowImageButton
              type="button"
              onClick={() => openImageModal(activeSlide.modalImage ?? activeSlide.image)}
              aria-label={`Open ${activeSlide.label} in fullscreen`}
            >
              <FlowImageFrame>
                <Image
                  src={activeSlide.image.src}
                  alt={activeSlide.image.alt}
                  width={activeSlide.image.width}
                  height={activeSlide.image.height}
                  style={{ width: "100%", height: "auto" }}
                />
              </FlowImageFrame>
            </FlowImageButton>
            <FlowSlideMeta>
              <FlowSlideLabel>{activeSlide.label}</FlowSlideLabel>
              <FlowSlideCopy>{activeSlide.copy}</FlowSlideCopy>
              <ProcessCardAction
                type="button"
                onClick={() => openImageModal(activeSlide.modalImage ?? activeSlide.image)}
              >
                Open Current Screen
              </ProcessCardAction>
            </FlowSlideMeta>
          </FlowSlideCard>
          <FlowNavButton
            type="button"
            aria-label="Next flow screen"
            onClick={goToNext}
          >
            ›
          </FlowNavButton>
        </FlowCarouselFrame>
        <FlowDots>
          {flowCarousel.slides.map((slide, index) => (
            <FlowDotButton
              key={slide.label}
              type="button"
              $active={index === activeFlowIndex}
              aria-label={`Go to ${slide.label}`}
              aria-pressed={index === activeFlowIndex}
              onClick={() => setActiveFlowIndex(index)}
            />
          ))}
        </FlowDots>
      </FlowCarouselSection>
    )
  }

  const renderSessionDemo = () => {
    if (!sessionDemo) {
      return null
    }

    const triggerSessionDemo = () => {
      setSessionDemoStatus(
        sessionEntryPoint === "landing"
          ? "Replaying homepage entry. The modal should slide in from the right."
          : "Replaying PDP entry. The modal is intentionally suppressed."
      )
      setSessionDemoCycle((current) => current + 1)
      setIsSessionDemoVisible(sessionEntryPoint === "landing")
    }

    return (
      <SessionDemoSection aria-labelledby="session-demo-heading">
        <SectionHeading id="session-demo-heading">{sessionDemo.title}</SectionHeading>
        <SessionDemoIntro>{sessionDemo.intro}</SessionDemoIntro>
        {sessionDemo.instructions?.length ? (
          <SessionDemoInstructionList>
            {sessionDemo.instructions.map((instruction) => (
              <SessionDemoInstructionItem key={instruction}>
                {instruction}
              </SessionDemoInstructionItem>
            ))}
          </SessionDemoInstructionList>
        ) : null}
        <SessionDemoControls>
          <SessionDemoToggle
            type="button"
            $active={sessionEntryPoint === "landing"}
            onClick={() => {
              setSessionEntryPoint("landing")
              setIsSessionDemoVisible(false)
              setSessionDemoStatus("")
            }}
          >
            Homepage Entry Shows Modal
          </SessionDemoToggle>
          <SessionDemoAction type="button" onClick={triggerSessionDemo}>
            Simulate Next Session
          </SessionDemoAction>
          <SessionDemoToggle
            type="button"
            $active={sessionEntryPoint === "pdp"}
            onClick={() => {
              setSessionEntryPoint("pdp")
              setIsSessionDemoVisible(false)
              setSessionDemoStatus("")
            }}
          >
            PDP Entry Hides Modal
          </SessionDemoToggle>
        </SessionDemoControls>
        {sessionDemoStatus ? (
          <SessionDemoStatus>{sessionDemoStatus}</SessionDemoStatus>
        ) : null}
        <SessionDemoCanvas>
          <SessionDemoSurface>
            <SessionDemoSurfaceEyebrow>
              {sessionEntryPoint === "landing" ? "Landing page" : "Product detail page"}
            </SessionDemoSurfaceEyebrow>
            <SessionDemoSurfaceTitle>
              {sessionEntryPoint === "landing"
                ? "User returns to the homepage in a new session"
                : "User lands directly on a PDP in a new session"}
            </SessionDemoSurfaceTitle>
            <SessionDemoSurfaceCopy>
              {sessionEntryPoint === "landing"
                ? "The remembered-product modal is eligible to appear because the user is not entering on a product detail page."
                : "The remembered-product modal is suppressed because the user entered on a PDP, matching the intended rule."}
            </SessionDemoSurfaceCopy>
            <SessionDemoNote>
              The pattern should not compete with any other popup, and the timer bar represents the 12-second on-screen duration.
            </SessionDemoNote>
          </SessionDemoSurface>

          {isSessionDemoVisible && sessionEntryPoint === "landing" ? (
            <SessionDemoModalShell key={sessionDemoCycle}>
              <SessionDemoModalTimer $durationMs={sessionDemo.durationMs} />
              <SessionDemoModalHeader>
                <SessionDemoModalHeadline>
                  {sessionDemo.modalTitle ?? "Pick up where you left off"}
                </SessionDemoModalHeadline>
                <SessionDemoModalClose aria-hidden="true">×</SessionDemoModalClose>
              </SessionDemoModalHeader>
              <SessionDemoModalProduct>
                <SessionDemoModalMeta>
                  <SessionDemoModalName>{sessionDemo.productName}</SessionDemoModalName>
                  <SessionDemoModalDetails>{sessionDemo.productMeta}</SessionDemoModalDetails>
                  {sessionDemo.productPrice ? (
                    <SessionDemoModalPrice>{sessionDemo.productPrice}</SessionDemoModalPrice>
                  ) : null}
                </SessionDemoModalMeta>
                {sessionDemo.productImage ? (
                  <SessionDemoModalImage
                    src={sessionDemo.productImage.src}
                    alt={sessionDemo.productImage.alt}
                    width={sessionDemo.productImage.width}
                    height={sessionDemo.productImage.height}
                  />
                ) : (
                  <SessionDemoModalThumb aria-hidden="true" />
                )}
              </SessionDemoModalProduct>
              <SessionDemoModalCta type="button">
                {sessionDemo.ctaLabel}
              </SessionDemoModalCta>
            </SessionDemoModalShell>
          ) : null}
        </SessionDemoCanvas>
      </SessionDemoSection>
    )
  }

  return (
    <>
      {showPrevious ? (
        <FloatingArrowLeft
          href={previousHref}
          aria-label={navigation.previousLabel}
        >
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
            <HeroHeaderRow>
              <TagsWrapper>
                {tags.map((tag) => (
                  <Tag key={tag.label} $variant={tag.variant}>
                    {tag.label}
                  </Tag>
                ))}
              </TagsWrapper>
            </HeroHeaderRow>
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
              {renderHeroSupplementalActions()}
              {watchDemo ? (
                <SecondaryButton
                  type="button"
                  onClick={() => setModalState({ kind: "video" })}
                >
                  {watchDemo.label}
                </SecondaryButton>
              ) : null}
            </ActionsWrapper>
            {conceptStorefrontLayout ||
            continueShoppingLayout ||
            completeYourRideLayout
              ? null
              : renderStatsGrid()}
          </HeroSection>

          {conceptStorefrontLayout ? (
            <>
              {renderResponsiveSection()}
              <StatsSection>{renderStatsGrid()}</StatsSection>
              {renderDualSection()}
            </>
          ) : continueShoppingLayout ? (
            <>
              {renderSessionDemo()}
              {renderResponsiveSection()}
              <StatsSection>{renderStatsGrid()}</StatsSection>
              {renderDualSection()}
            </>
          ) : completeYourRideLayout ? (
            <>
              {renderProcessSection()}
              {renderFlowCarousel()}
              {renderResponsiveSection()}
              {renderCategorySection()}
              {renderFeatureSection()}
              <StatsSection>{renderStatsGrid()}</StatsSection>
              {renderDualSection()}
            </>
          ) : (
            <>
              {renderDualSection()}
              {renderResponsiveSection()}
            </>
          )}

          {!completeYourRideLayout ? renderProcessSection() : null}
          {!completeYourRideLayout ? renderFlowCarousel() : null}
          {!continueShoppingLayout && !completeYourRideLayout
            ? renderSessionDemo()
            : null}
          {!completeYourRideLayout ? renderCategorySection() : null}
          {!completeYourRideLayout ? renderFeatureSection() : null}
          {renderResultsSection()}
          <HeroHeaderRow>
            <AuthorLabel></AuthorLabel>
            <AuthorLabel>© {COPYRIGHT_YEAR} {AUTHOR_NAME}</AuthorLabel>
          </HeroHeaderRow>
        </CaseStudyContainer>
      </PageWrapper>

      {modalState ? (
        <ModalOverlay role="presentation" onClick={closeModal}>
          <ModalContent
            role="dialog"
            aria-modal="true"
            aria-label={
              modalState.kind === "video"
                ? watchDemo?.ariaLabel
                : modalState.alt
            }
            onClick={(event) => event.stopPropagation()}
          >
            <ModalClose type="button" aria-label="Close" onClick={closeModal}>
              &times;
            </ModalClose>
            {modalState.kind === "video" && watchDemo ? (
              <ModalVideo controls preload="metadata" playsInline>
                <source src={watchDemo.src} />
                Your browser does not support the video tag.
              </ModalVideo>
            ) : null}
            {modalState.kind === "image" ? (
              <ModalImage
                src={modalState.src}
                alt={modalState.alt}
                width={modalState.width}
                height={modalState.height}
              />
            ) : null}
          </ModalContent>
        </ModalOverlay>
      ) : null}
    </>
  )
}
