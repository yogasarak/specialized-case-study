"use client";

import { useEffect, useState } from "react";
import {
  ShowcasePage,
  ShowcaseShell,
  ShowcaseSidebar,
  StickyNav,
  NavLabel,
  NavLink,
  ShowcaseContent,
  Hero,
  Eyebrow,
  Title,
  Intro,
  ActionRow,
  PrimaryAction,
  SecondaryAction,
  MetricsRow,
  MetricCard,
  MetricValue,
  MetricLabel,
  Section,
  SectionTitle,
  SectionCopy,
  TwoColumn,
  Panel,
  PanelTitle,
  BulletList,
  BulletItem,
  ImageGrid,
  VisualCard,
  VisualFrame,
  Visual,
  VisualCaption,
  RoleGrid,
  RoleCard,
  RoleHeading,
  RoleCopy,
  FooterNote,
  BackToTopLink,
} from "./showcase-page.styles";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "why-systems", label: "How It Translates" },
  { id: "primary-case", label: "Primary Case" },
  { id: "process", label: "Process" },
  { id: "stakeholders", label: "Stakeholders" },
  { id: "supporting", label: "Supporting Work" },
  { id: "outcomes", label: "Outcomes" },
] as const;

export function ShowcasePortfolioPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom =
        window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      setShowBackToTop(pageHeight - scrollBottom < 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ShowcasePage>
      <ShowcaseShell>
        <ShowcaseSidebar>
          <StickyNav aria-label="Showcase sections">
            <NavLabel>Showcase</NavLabel>
            {navItems.map((item) => (
              <NavLink key={item.id} href={`#${item.id}`}>
                {item.label}
              </NavLink>
            ))}
          </StickyNav>
        </ShowcaseSidebar>

        <ShowcaseContent>
          <Hero id="overview">
            <Eyebrow>Selected Product Systems Showcase</Eyebrow>
            <Title>Using product design to create clarity across complex systems.</Title>
            <Intro>
              This page is a focused walkthrough of how I approach product work
              that spans user needs, stakeholder alignment, reusable UI patterns,
              operational constraints, and implementation quality. The examples
              come from ecommerce, but the design thinking is directly relevant
              to SaaS and enterprise workflows: ambiguous requirements, multiple
              user groups, data dependencies, scaling constraints, and a need for
              systems that hold up through delivery.
            </Intro>
            <ActionRow>
              <PrimaryAction href="/case-studies/complete-your-ride">
                Open Complete Your Ride
              </PrimaryAction>
              <SecondaryAction href="/case-studies/continue-shopping">
                Open Continue Shopping
              </SecondaryAction>
              <SecondaryAction href="/case-studies/discovery-wayfinding">
                Open Discovery Wayfinding
              </SecondaryAction>
            </ActionRow>
            <MetricsRow>
              <MetricCard>
                <MetricValue>50+</MetricValue>
                <MetricLabel>Discovery surfaces influenced across global PLPs</MetricLabel>
              </MetricCard>
              <MetricCard>
                <MetricValue>24%</MetricValue>
                <MetricLabel>Conversion lift on scaled wayfinding work</MetricLabel>
              </MetricCard>
              <MetricCard>
                <MetricValue>12%</MetricValue>
                <MetricLabel>Revenue lift tied to improved decision support</MetricLabel>
              </MetricCard>
              <MetricCard>
                <MetricValue>35%</MetricValue>
                <MetricLabel>Component-library adoption across product teams</MetricLabel>
              </MetricCard>
            </MetricsRow>
          </Hero>

          <Section id="why-systems">
            <SectionTitle>
              What makes this product systems design relevant beyond ecommerce
            </SectionTitle>
            <SectionCopy>
              Although the shipped work lived in ecommerce, the core design
              challenge was not “consumer UI.” It was product systems design:
              helping different users make better decisions inside complex
              workflows, while coordinating business logic, content, inventory,
              localization, engineering constraints, and reusable platform
              patterns.
            </SectionCopy>
            <TwoColumn>
              <Panel>
                <PanelTitle>Shared design problems with SaaS</PanelTitle>
                <BulletList>
                  <BulletItem>Multiple user groups with different goals and mental models</BulletItem>
                  <BulletItem>High-dependency data and operational constraints behind every UI decision</BulletItem>
                  <BulletItem>Need for reusable components and scalable interaction patterns</BulletItem>
                  <BulletItem>Ambiguity that has to be resolved through facilitation, not just visual design</BulletItem>
                </BulletList>
              </Panel>
              <Panel>
                <PanelTitle>Why the examples are useful</PanelTitle>
                <BulletList>
                  <BulletItem>They show how I frame the real problem before moving into solution mode</BulletItem>
                  <BulletItem>They make stakeholder and delivery complexity visible, not just final screens</BulletItem>
                  <BulletItem>They show how UX decisions connect to business outcomes and implementation quality</BulletItem>
                  <BulletItem>They demonstrate systems thinking, not just page-level design</BulletItem>
                </BulletList>
              </Panel>
            </TwoColumn>
          </Section>

          <Section id="primary-case">
            <SectionTitle>Primary case: discovery wayfinding as a decision-support system</SectionTitle>
            <SectionCopy>
              The discovery-wayfinding work is the clearest example of turning an
              interface request into a broader product-systems solution. The user
              problem was not just browseability. Riders were entering a large,
              technical catalog without enough orientation to decide where to
              start. Solving that meant balancing user comprehension,
              merchandising needs, global taxonomy, engineering reuse, and rollout
              across many surfaces.
            </SectionCopy>
            <ImageGrid>
              <VisualCard>
                <VisualFrame>
                  <Visual
                    src="/images/PLP_Carousel_Destop.png"
                    alt="Discovery wayfinding carousel on the Specialized product listing page."
                    width={1200}
                    height={760}
                  />
                </VisualFrame>
                <VisualCaption>
                  A reusable discovery pattern that reframed the PLP from a passive
                  product grid into an earlier decision-support surface.
                </VisualCaption>
              </VisualCard>
              <VisualCard>
                <VisualFrame>
                  <Visual
                    src="/images/navigation.png"
                    alt="Specialized navigation system showing category and resource discovery."
                    width={2142}
                    height={1760}
                  />
                </VisualFrame>
                <VisualCaption>
                  The same thinking extended beyond one feature into larger
                  navigation and platform wayfinding patterns.
                </VisualCaption>
              </VisualCard>
            </ImageGrid>
            <RoleGrid>
              <RoleCard>
                <RoleHeading>Problem framing</RoleHeading>
                <RoleCopy>
                  I reframed the request from “add a carousel” to “help riders
                  decide what kind of bike fits their needs before filtering.”
                </RoleCopy>
              </RoleCard>
              <RoleCard>
                <RoleHeading>Triad delivery</RoleHeading>
                <RoleCopy>
                  I partnered across product, design, and engineering to define
                  success criteria, component behavior, and rollout strategy.
                </RoleCopy>
              </RoleCard>
              <RoleCard>
                <RoleHeading>Scaled outcome</RoleHeading>
                <RoleCopy>
                  The solution expanded from a single surface to the homepage and
                  nearly 50 product listing pages because it solved a reusable
                  problem.
                </RoleCopy>
              </RoleCard>
            </RoleGrid>
          </Section>

          <Section id="process">
            <SectionTitle>Process and strategic thinking</SectionTitle>
            <TwoColumn>
              <Panel>
                <PanelTitle>How I understand an initiative</PanelTitle>
                <BulletList>
                  <BulletItem>Clarify the real user problem versus the requested UI</BulletItem>
                  <BulletItem>Identify dependencies across content, taxonomy, data, and operations</BulletItem>
                  <BulletItem>Align stakeholders on what success means before designing details</BulletItem>
                  <BulletItem>Make assumptions explicit so the team can test and iterate intentionally</BulletItem>
                </BulletList>
              </Panel>
              <Panel>
                <PanelTitle>How I collaborate through delivery</PanelTitle>
                <BulletList>
                  <BulletItem>Define behavior, hierarchy, and constraints clearly enough for engineering to implement well</BulletItem>
                  <BulletItem>Use process artifacts and flows to reduce ambiguity early</BulletItem>
                  <BulletItem>Work closely with PMs, engineers, and business partners instead of treating design as a handoff</BulletItem>
                  <BulletItem>Stay involved through QA and refinement so the shipped experience matches intent</BulletItem>
                </BulletList>
              </Panel>
            </TwoColumn>
            <ImageGrid>
              <VisualCard>
                <VisualFrame>
                  <Visual
                    src="/images/complete-your-ride-concept-intro.png"
                    alt="Concept intro and problem statements for the Complete Your Ride feature."
                    width={692}
                    height={1568}
                  />
                </VisualFrame>
                <VisualCaption>
                  Early problem framing and concept definition before committing to UI.
                </VisualCaption>
              </VisualCard>
              <VisualCard>
                <VisualFrame>
                  <Visual
                    src="/images/complete-your-ride-business-goals.png"
                    alt="Business goals and KPI frame for the Complete Your Ride feature."
                    width={656}
                    height={652}
                  />
                </VisualFrame>
                <VisualCaption>
                  KPI alignment used to connect user value, business value, and
                  design direction.
                </VisualCaption>
              </VisualCard>
            </ImageGrid>
          </Section>

          <Section id="stakeholders">
            <SectionTitle>Stakeholder and systems complexity</SectionTitle>
            <SectionCopy>
              One reason this work is relevant beyond ecommerce is the number of
              moving parts that had to align. These were not isolated marketing
              pages. They relied on cross-functional coordination similar to
              enterprise product environments.
            </SectionCopy>
            <TwoColumn>
              <Panel>
                <PanelTitle>Who had to align</PanelTitle>
                <BulletList>
                  <BulletItem>End users making high-consideration purchase decisions</BulletItem>
                  <BulletItem>Merchandising and marketing teams shaping content and story</BulletItem>
                  <BulletItem>Global teams handling translation and regional variation</BulletItem>
                  <BulletItem>Engineers building reusable components and data behavior</BulletItem>
                  <BulletItem>Internal teams connected to inventory, stock, shipping, and fulfillment</BulletItem>
                </BulletList>
              </Panel>
              <Panel>
                <PanelTitle>Why that matters</PanelTitle>
                <BulletList>
                  <BulletItem>The UI had to reflect real availability and content constraints</BulletItem>
                  <BulletItem>Patterns had to scale across locales and product categories</BulletItem>
                  <BulletItem>Design decisions had downstream operational implications</BulletItem>
                  <BulletItem>The work needed to be maintainable as part of a larger platform system</BulletItem>
                </BulletList>
              </Panel>
            </TwoColumn>
          </Section>

          <Section id="supporting">
            <SectionTitle>Supporting examples that reinforce the same strengths</SectionTitle>
            <SectionCopy>
              The same portfolio also includes supporting work that makes
              persistence, platform delivery, and upstream process thinking more
              visible. Together these examples show both shipped scale and the
              design rigor behind it.
            </SectionCopy>
            <ImageGrid>
              <VisualCard>
                <VisualFrame>
                  <Visual
                    src="/images/CYR desktop.png"
                    alt="Complete Your Ride desktop mockup."
                    width={1146}
                    height={1422}
                  />
                </VisualFrame>
                <VisualCaption>
                  <strong>Complete Your Ride:</strong> stronger evidence of process,
                  KPI framing, concept definition, and implementation detail.
                </VisualCaption>
              </VisualCard>
              <VisualCard>
                <VisualFrame>
                  <Visual
                    src="/images/delivery.png"
                    alt="Specialized delivery experience screenshot."
                    width={1986}
                    height={1796}
                  />
                </VisualFrame>
                <VisualCaption>
                  <strong>Platform highlights:</strong> evidence of broader systems
                  work across Next.js, GraphQL, component delivery, and responsive
                  commerce.
                </VisualCaption>
              </VisualCard>
            </ImageGrid>
            <RoleGrid>
              <RoleCard>
                <RoleHeading>Complete Your Ride</RoleHeading>
                <RoleCopy>
                  Strongest supporting example for concept framing, KPI
                  alignment, competitor analysis, flow definition, and responsive
                  implementation planning.
                </RoleCopy>
              </RoleCard>
              <RoleCard>
                <RoleHeading>Continue Shopping</RoleHeading>
                <RoleCopy>
                  Shows behavior design and session-state thinking: remembered
                  context, entry-point rules, modal timing, and how a small UX
                  pattern can reduce rediscovery friction.
                </RoleCopy>
              </RoleCard>
              <RoleCard>
                <RoleHeading>Platform Highlights</RoleHeading>
                <RoleCopy>
                  Broadens the story beyond one feature into Next.js delivery,
                  GraphQL and Apollo data flows, component systems, and global
                  product collaboration.
                </RoleCopy>
              </RoleCard>
            </RoleGrid>
          </Section>

          <Section id="outcomes">
            <SectionTitle>What this work demonstrates</SectionTitle>
            <TwoColumn>
              <Panel>
                <PanelTitle>How I work</PanelTitle>
                <BulletList>
                  <BulletItem>I use design to create clarity in ambiguous environments</BulletItem>
                  <BulletItem>I am strongest where strategy, UX, and implementation intersect</BulletItem>
                  <BulletItem>I think in systems and workflows, not just screens</BulletItem>
                  <BulletItem>I stay accountable through delivery, not just concepting</BulletItem>
                </BulletList>
              </Panel>
              <Panel>
                <PanelTitle>Why it matters</PanelTitle>
                <BulletList>
                  <BulletItem>The result is better user understanding, cleaner requirements, and stronger shipped quality</BulletItem>
                  <BulletItem>The same approach adapts well to SaaS, enterprise, workflow, and decision-support products</BulletItem>
                  <BulletItem>It helps teams move from ambiguity to a scalable, testable solution faster</BulletItem>
                </BulletList>
              </Panel>
            </TwoColumn>
            <FooterNote>
              This page is designed as a focused walkthrough artifact for portfolio
              reviews, project walkthroughs, and deeper product-design
              conversations. It is intentionally narrower than the broader site
              and centers the work most relevant to strategy, systems thinking,
              and cross-functional delivery.
            </FooterNote>
          </Section>
        </ShowcaseContent>
      </ShowcaseShell>
      {showBackToTop ? (
        <BackToTopLink href="#overview" aria-label="Back to top">
          ↑
        </BackToTopLink>
      ) : null}
    </ShowcasePage>
  );
}
