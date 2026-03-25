import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

export type AboutTone = "light" | "dark";

type ToneProps = {
  $tone?: AboutTone;
};

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shellStyles = {
  light: css`
    background:
      radial-gradient(circle at top left, rgba(0, 0, 0, 0.06), transparent 30%),
      radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.05), transparent 28%),
      linear-gradient(180deg, #f7f4ed 0%, #f2eee6 100%);
    color: #171717;
  `,
  dark: css`
    background:
      radial-gradient(circle at top left, rgba(233, 216, 166, 0.14), transparent 28%),
      radial-gradient(circle at bottom right, rgba(119, 141, 169, 0.14), transparent 26%),
      linear-gradient(180deg, #0d0d0d 0%, #171717 100%);
    color: #f3efe5;
  `,
};

const surfaceStyles = {
  light: css`
    border: 1px solid rgba(23, 23, 23, 0.08);
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.05);
  `,
  dark: css`
    border: 1px solid rgba(243, 239, 229, 0.09);
    background: rgba(30, 30, 30, 0.92);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.22);
  `,
};

export const AboutPageShell = styled.main<ToneProps>`
  min-height: 100vh;
  ${({ $tone = "light" }) => shellStyles[$tone]};
`;

export const AboutBackArrow = styled(Link)<ToneProps>`
  position: fixed;
  left: clamp(24px, 4vw, 56px);
  top: 50%;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);
  transform: translateY(-50%);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease,
    border-color 0.2s ease;

  ${({ $tone = "light" }) =>
    $tone === "light"
      ? css`
          background: #171717;
          border: 1px solid #171717;
          color: #ffffff;
        `
      : css`
          background: #f3efe5;
          border: 1px solid #f3efe5;
          color: #111111;
        `};

  &:hover {
    ${({ $tone = "light" }) =>
      $tone === "light"
        ? css`
            background: #0f0f0f;
            box-shadow: 0 18px 30px rgba(0, 0, 0, 0.26);
            transform: translateY(-50%) translateX(-2px);
          `
        : css`
            background: #ffffff;
            box-shadow: 0 18px 30px rgba(0, 0, 0, 0.28);
            transform: translateY(-50%) translateX(-2px);
          `};
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
  }

  @media (max-width: 899px) {
    left: 18px;
    top: auto;
    bottom: 22px;
    transform: none;

    &:hover {
      transform: translateX(-2px);
    }
  }

  @media (max-width: 599px) {
    width: 40px;
    height: 40px;
    left: 14px;
    bottom: 18px;
  }
`;

export const AboutPageInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 88px 32px 120px;
  display: grid;
  gap: 28px;

  @media (max-width: 899px) {
    padding: 72px 28px 112px;
  }

  @media (max-width: 599px) {
    padding: 56px 22px 96px;
    gap: 22px;
  }
`;

export const AboutHero = styled.section<ToneProps>`
  display: grid;
  gap: 18px;
  padding: 64px 56px;
  border-radius: 32px;
  animation: ${riseIn} 0.5s ease both;
  ${({ $tone = "light" }) =>
    $tone === "light"
      ? css`
          border: 1px solid rgba(23, 23, 23, 0.08);
          background: rgba(255, 255, 255, 0.76);
          box-shadow: 0 28px 72px rgba(0, 0, 0, 0.08);
        `
      : css`
          border: 1px solid rgba(243, 239, 229, 0.09);
          background: rgba(28, 28, 28, 0.94);
          box-shadow: 0 28px 72px rgba(0, 0, 0, 0.3);
        `};

  @media (max-width: 899px) {
    padding: 52px 34px;
  }

  @media (max-width: 599px) {
    padding: 40px 24px;
    border-radius: 24px;
  }
`;

export const Eyebrow = styled.p<ToneProps>`
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#5d5d5d" : "#cfc6b4")};
`;

export const AboutTitle = styled.h1<ToneProps>`
  margin: 0;
  max-width: 760px;
  font-size: clamp(2.6rem, 4.8vw, 4.5rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
  font-weight: 700;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const AboutIntro = styled.p<ToneProps>`
  margin: 0;
  max-width: 760px;
  font-size: 18px;
  line-height: 1.7;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#3f3f3f" : "#d1c9bc")};
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 8px;
`;

export const PrimaryLink = styled(Link)<ToneProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  ${({ $tone = "light" }) =>
    $tone === "light"
      ? css`
          background: #171717;
          color: #ffffff;
        `
      : css`
          background: #f3efe5;
          color: #111111;
        `};

  &:hover {
    ${({ $tone = "light" }) =>
      $tone === "light"
        ? css`
            background: #282828;
            transform: translateY(-1px);
          `
        : css`
            background: #ffffff;
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);
            transform: translateY(-1px);
          `};
  }
`;

export const SecondaryLink = styled(Link)<ToneProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  ${({ $tone = "light" }) =>
    $tone === "light"
      ? css`
          border: 1px solid rgba(23, 23, 23, 0.14);
          background: rgba(255, 255, 255, 0.74);
          color: #171717;
        `
      : css`
          border: 1px solid rgba(243, 239, 229, 0.14);
          background: rgba(38, 38, 38, 0.94);
          color: #f3efe5;
        `};

  &:hover {
    ${({ $tone = "light" }) =>
      $tone === "light"
        ? css`
            background: rgba(255, 255, 255, 0.94);
            transform: translateY(-1px);
          `
        : css`
            background: rgba(58, 58, 58, 0.98);
            border-color: rgba(243, 239, 229, 0.24);
            transform: translateY(-1px);
          `};
  }
`;

export const SnapshotGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

export const SnapshotCard = styled.article<ToneProps>`
  display: grid;
  gap: 8px;
  padding: 22px;
  border-radius: 22px;
  animation: ${riseIn} 0.55s ease both;
  ${({ $tone = "light" }) => surfaceStyles[$tone]};
`;

export const SnapshotValue = styled.h2<ToneProps>`
  margin: 0;
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const SnapshotLabel = styled.p<ToneProps>`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#6a6a6a" : "#bfb5a4")};
`;

export const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 22px;

  @media (max-width: 959px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionCard = styled.article<ToneProps>`
  display: grid;
  gap: 16px;
  padding: 30px;
  border-radius: 28px;
  animation: ${riseIn} 0.55s ease both;
  ${({ $tone = "light" }) =>
    $tone === "light"
      ? css`
          border: 1px solid rgba(23, 23, 23, 0.08);
          background: rgba(255, 255, 255, 0.82);
          box-shadow: 0 22px 52px rgba(0, 0, 0, 0.06);
        `
      : css`
          border: 1px solid rgba(243, 239, 229, 0.09);
          background: rgba(30, 30, 30, 0.92);
          box-shadow: 0 22px 52px rgba(0, 0, 0, 0.22);
        `};

  @media (max-width: 599px) {
    padding: 24px;
  }
`;

export const SectionEyebrow = styled.p<ToneProps>`
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#6a6a6a" : "#b8ae9d")};
`;

export const SectionTitle = styled.h2<ToneProps>`
  margin: 0;
  font-size: clamp(1.8rem, 2.6vw, 2.45rem);
  line-height: 1.06;
  letter-spacing: -0.04em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const SectionCopy = styled.p<ToneProps>`
  margin: 0;
  font-size: 16px;
  line-height: 1.72;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#404040" : "#d4ccbf")};
`;

export const BulletList = styled.ul<ToneProps>`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 12px;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#353535" : "#d9d1c4")};

  li {
    font-size: 15px;
    line-height: 1.65;
  }
`;

export const ExperienceStack = styled.div`
  display: grid;
  gap: 18px;
`;

export const ExperienceCard = styled.article<ToneProps>`
  display: grid;
  gap: 10px;
  padding: 24px;
  border-radius: 24px;
  animation: ${riseIn} 0.55s ease both;
  ${({ $tone = "light" }) => surfaceStyles[$tone]};
`;

export const ExperienceHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

export const ExperienceTitle = styled.h3<ToneProps>`
  margin: 0;
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const ExperienceMeta = styled.span<ToneProps>`
  font-size: 13px;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#6a6a6a" : "#bfb5a4")};
`;

export const ExperienceCopy = styled.p<ToneProps>`
  margin: 0;
  font-size: 15px;
  line-height: 1.68;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#414141" : "#d6cec2")};
`;

export const CapabilityGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 959px) {
    grid-template-columns: 1fr;
  }
`;

export const CapabilityCard = styled.article<ToneProps>`
  display: grid;
  gap: 12px;
  padding: 26px;
  border-radius: 24px;
  animation: ${riseIn} 0.55s ease both;
  ${({ $tone = "light" }) => surfaceStyles[$tone]};
`;

export const CapabilityTitle = styled.h3<ToneProps>`
  margin: 0;
  font-size: 20px;
  line-height: 1.16;
  letter-spacing: -0.03em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const CapabilityCopy = styled.p<ToneProps>`
  margin: 0;
  font-size: 15px;
  line-height: 1.68;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#444444" : "#d6cec2")};
`;

export const ClosingCard = styled.section<ToneProps>`
  display: grid;
  gap: 18px;
  padding: 34px 30px;
  border-radius: 28px;
  animation: ${riseIn} 0.55s ease both;
  ${({ $tone = "light" }) =>
    $tone === "light"
      ? css`
          border: 1px solid rgba(23, 23, 23, 0.08);
          background: #171717;
          color: #f7f4ed;
          box-shadow: 0 24px 54px rgba(0, 0, 0, 0.14);
        `
      : css`
          border: 1px solid rgba(243, 239, 229, 0.09);
          background: linear-gradient(180deg, #f0e8d8 0%, #e7dcc8 100%);
          color: #151515;
          box-shadow: 0 24px 54px rgba(0, 0, 0, 0.18);
        `};

  p {
    margin: 0;
    max-width: 760px;
    font-size: 17px;
    line-height: 1.72;
    color: ${({ $tone = "light" }) =>
      $tone === "light" ? "rgba(247, 244, 237, 0.88)" : "#2a2a2a"};
  }
`;

export const ClosingTitle = styled.h2<ToneProps>`
  margin: 0;
  font-size: clamp(1.9rem, 2.8vw, 2.8rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#f7f4ed" : "#111111")};
`;
