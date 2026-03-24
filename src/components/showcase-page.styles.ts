import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ShowcasePage = styled.main`
  --ink: #171717;
  --muted: #5a5a5a;
  --line: rgba(23, 23, 23, 0.1);
  --panel: rgba(255, 255, 255, 0.78);
  --soft: #f5f1e8;
  --accent: #f3d9a7;

  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(231, 199, 134, 0.22), transparent 28%),
    radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.06), transparent 24%),
    linear-gradient(180deg, #f8f4ec 0%, #f1ece2 100%);
  color: var(--ink);
  scroll-behavior: smooth;
`;

export const ShowcaseShell = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 72px 28px 120px;
  display: flex;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 959px) {
    display: block;
    padding: 56px 22px 96px;
  }
`;

export const ShowcaseSidebar = styled.aside`
  flex: 0 0 240px;
  position: sticky;
  top: 18px;
  align-self: flex-start;
  height: fit-content;
  margin-bottom: 24px;

  @media (max-width: 959px) {
    position: static;
    height: auto;
  }
`;

export const StickyNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);

  @media (max-width: 959px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const NavLabel = styled.p`
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
`;

export const NavLink = styled.a`
  font-size: 14px;
  line-height: 1.4;
  color: var(--ink);

  &:hover {
    opacity: 0.72;
  }
`;

export const ShowcaseContent = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Hero = styled.section`
  scroll-margin-top: 28px;
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 24px;
  padding: 40px;
  border-radius: 32px;
  border: 1px solid var(--line);
  background: var(--panel);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.07);

  @media (max-width: 599px) {
    padding: 28px 22px;
    border-radius: 24px;
  }
`;

export const Eyebrow = styled.p`
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
`;

export const Title = styled.h1`
  max-width: 840px;
  font-size: clamp(2.6rem, 5vw, 4.8rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
`;

export const Intro = styled.p`
  max-width: 780px;
  font-size: 18px;
  line-height: 1.65;
  color: var(--muted);
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const PrimaryAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 12px 18px;
  border-radius: 999px;
  background: #171717;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
`;

export const SecondaryAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.78);
  color: var(--ink);
  font-size: 15px;
  font-weight: 600;
`;

export const MetricsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.div`
  padding: 18px;
  border-radius: 20px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.72);
`;

export const MetricValue = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export const MetricLabel = styled.div`
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.4;
  color: var(--muted);
`;

export const Section = styled.section`
  scroll-margin-top: 28px;
  display: grid;
  gap: 18px;
  padding: 28px;
  border-radius: 28px;
  border: 1px solid var(--line);
  background: var(--panel);

  @media (max-width: 599px) {
    padding: 22px 18px;
    border-radius: 22px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  line-height: 1.1;
  letter-spacing: -0.03em;
`;

export const SectionCopy = styled.p`
  max-width: 860px;
  font-size: 16px;
  line-height: 1.7;
  color: var(--muted);
`;

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.div`
  display: grid;
  gap: 14px;
  padding: 22px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.8);
`;

export const PanelTitle = styled.h3`
  font-size: 20px;
  line-height: 1.2;
`;

export const BulletList = styled.ul`
  display: grid;
  gap: 10px;
  padding-left: 18px;
  color: var(--muted);
`;

export const BulletItem = styled.li`
  font-size: 15px;
  line-height: 1.55;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
  }
`;

export const VisualCard = styled.div`
  display: grid;
  gap: 12px;
`;

export const VisualFrame = styled.div`
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: #ffffff;
`;

export const Visual = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
`;

export const VisualCaption = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted);
`;

export const RoleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
  }
`;

export const RoleCard = styled.div`
  display: grid;
  gap: 10px;
  padding: 18px;
  border-radius: 20px;
  background: #f7f2e8;
  border: 1px solid rgba(23, 23, 23, 0.08);
`;

export const RoleHeading = styled.h3`
  font-size: 17px;
  line-height: 1.25;
`;

export const RoleCopy = styled.p`
  font-size: 14px;
  line-height: 1.55;
  color: var(--muted);
`;

export const FooterNote = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted);
`;

export const BackToTopLink = styled.a`
  position: fixed;
  right: clamp(20px, 4vw, 40px);
  bottom: clamp(20px, 4vw, 36px);
  z-index: 30;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #171717;
  background: #171717;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.18);

  &:hover {
    background: #0f0f0f;
  }
`;
