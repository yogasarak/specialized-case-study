import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import type { ProfileTone } from "@/data/profile";

type ToneProps = {
  $tone?: ProfileTone;
  $compact?: boolean;
  $featured?: boolean;
  $toolbox?: boolean;
  $mobileCompact?: boolean;
};

type NavToneProps = {
  $tone?: ProfileTone;
  $open?: boolean;
  $active?: boolean;
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

export const ProfilePageShell = styled.main<ToneProps>`
  min-height: 100vh;
  ${({ $tone = "light" }) => shellStyles[$tone]};
`;

export const ProfileBackArrow = styled(Link)<ToneProps>`
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

export const ProfileNavButton = styled.button<NavToneProps>`
  position: fixed;
  top: 28px;
  right: clamp(24px, 4vw, 56px);
  z-index: 60;
  width: 48px;
  height: 48px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

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
    transform: translateY(-1px);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.26);
    ${({ $tone = "light" }) =>
      $tone === "light"
        ? css`
            background: #0f0f0f;
          `
        : css`
            background: #ffffff;
          `};
  }

  @media (max-width: 899px) {
    top: 18px;
    right: 18px;
    width: 42px;
    height: 42px;
  }
`;

export const ProfileNavButtonLine = styled.span<{ $open?: boolean }>`
  width: 18px;
  height: 1.6px;
  border-radius: 999px;
  background: currentColor;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:nth-child(1) {
    transform: ${({ $open }) => ($open ? "translateY(6px) rotate(45deg)" : "none")};
  }

  &:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ $open }) => ($open ? "translateY(-6px) rotate(-45deg)" : "none")};
  }
`;

export const ProfileNavMenu = styled.nav<NavToneProps>`
  position: fixed;
  top: 86px;
  right: clamp(24px, 4vw, 56px);
  z-index: 55;
  min-width: 220px;
  display: grid;
  gap: 8px;
  padding: 14px;
  border-radius: 20px;
  transform-origin: top right;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transform: ${({ $open }) => ($open ? "scale(1)" : "scale(0.96)")};
  transition: opacity 0.18s ease, transform 0.18s ease;
  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.18);

  ${({ $tone = "light" }) =>
    $tone === "light"
      ? css`
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(23, 23, 23, 0.08);
        `
      : css`
          background: rgba(28, 28, 28, 0.98);
          border: 1px solid rgba(243, 239, 229, 0.09);
        `};

  @media (max-width: 899px) {
    top: 70px;
    right: 18px;
    min-width: 198px;
  }
`;

export const ProfileNavLink = styled(Link)<NavToneProps>`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 10px 12px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.18s ease, color 0.18s ease;

  ${({ $tone = "light", $active }) =>
    $tone === "light"
      ? css`
          color: ${$active ? "#111111" : "#2f2f2f"};
          background: ${$active ? "rgba(23, 23, 23, 0.08)" : "transparent"};
        `
      : css`
          color: ${$active ? "#ffffff" : "#e7dfd2"};
          background: ${$active ? "rgba(243, 239, 229, 0.08)" : "transparent"};
        `};

  &:hover {
    ${({ $tone = "light" }) =>
      $tone === "light"
        ? css`
            background: rgba(23, 23, 23, 0.06);
          `
        : css`
            background: rgba(243, 239, 229, 0.08);
          `};
  }
`;

export const ProfilePageInner = styled.div`
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

export const HeroCard = styled.section<ToneProps>`
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

export const PageEyebrow = styled.p<ToneProps>`
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#5d5d5d" : "#cfc6b4")};
`;

export const PageTitle = styled.h1<ToneProps>`
  margin: 0;
  max-width: 820px;
  font-size: clamp(2.7rem, 5vw, 4.7rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  font-weight: 700;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const PageIntro = styled.p<ToneProps>`
  margin: 0;
  max-width: 780px;
  font-size: 18px;
  line-height: 1.72;
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

  @media (max-width: 599px) {
    ${({ $mobileCompact }) =>
      $mobileCompact
        ? css`
            padding: 11px 15px;
            border-radius: 10px;
            font-size: 13px;
          `
        : ""};
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

  @media (max-width: 599px) {
    ${({ $mobileCompact }) =>
      $mobileCompact
        ? css`
            padding: 11px 15px;
            border-radius: 10px;
            font-size: 13px;
          `
        : ""};
  }
`;

const themeGlow = keyframes`
  0% {
    transform: translateX(-120%);
    opacity: 0;
  }
  18% {
    opacity: 0.9;
  }
  42% {
    opacity: 1;
  }
  100% {
    transform: translateX(140%);
    opacity: 0;
  }
`;

export const ThemeToggleLink = styled(SecondaryLink)<ToneProps>`
  position: relative;
  overflow: hidden;
  padding-inline: 22px;

  @media (max-width: 599px) {
    ${({ $mobileCompact }) =>
      $mobileCompact
        ? css`
            padding-inline: 16px;
          `
        : ""};
  }

  &::before {
    content: "";
    position: absolute;
    inset: -28% auto -28% -14%;
    width: 72px;
    background: linear-gradient(
      110deg,
      transparent 0%,
      ${({ $tone = "light" }) =>
        $tone === "light"
          ? "rgba(242, 203, 5, 0.18)"
          : "rgba(234, 242, 5, 0.16)"} 28%,
      ${({ $tone = "light" }) =>
        $tone === "light"
          ? "rgba(242, 203, 5, 0.52)"
          : "rgba(234, 242, 5, 0.42)"} 48%,
      ${({ $tone = "light" }) =>
        $tone === "light"
          ? "rgba(255, 248, 186, 0.36)"
          : "rgba(246, 250, 146, 0.22)"} 58%,
      transparent 100%
    );
    filter: blur(0.2px);
    transform: translateX(-120%);
    animation: ${themeGlow} 4.1s ease-in-out infinite;
    pointer-events: none;
  }
`;

export const MetricGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.article<ToneProps>`
  display: grid;
  gap: 8px;
  padding: ${({ $featured }) => ($featured ? "26px 24px 24px" : "22px")};
  border-radius: ${({ $featured }) => ($featured ? "24px" : "22px")};
  animation: ${riseIn} 0.55s ease both;
  position: relative;
  overflow: hidden;
  ${({ $tone = "light", $featured }) => css`
    ${surfaceStyles[$tone]};
    ${$featured
      ? $tone === "light"
        ? css`
            box-shadow: 0 26px 56px rgba(0, 0, 0, 0.07);
          `
        : css`
            box-shadow: 0 24px 56px rgba(0, 0, 0, 0.28);
          `
      : ""}
  `};

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: ${({ $featured }) => ($featured ? "4px" : "0")};
    background: ${({ $tone = "light" }) => ($tone === "light" ? "#F2CB05" : "#EAF205")};
    opacity: ${({ $featured }) => ($featured ? 0.95 : 0)};
  }
`;

export const MetricValue = styled.h2<ToneProps>`
  margin: 0;
  font-size: ${({ $featured }) => ($featured ? "28px" : "24px")};
  line-height: 1.1;
  letter-spacing: ${({ $featured }) => ($featured ? "-0.04em" : "-0.03em")};
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const MetricLabel = styled.p<ToneProps>`
  margin: 0;
  font-size: ${({ $featured }) => ($featured ? "14px" : "15px")};
  line-height: ${({ $featured }) => ($featured ? "1.56" : "1.62")};
  letter-spacing: 0.01em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#6a6a6a" : "#bfb5a4")};
`;

export const StrengthRow = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const StrengthPill = styled.span<ToneProps>`
  display: inline-flex;
  align-items: center;
  padding: 9px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;

  ${({ $tone = "light" }) =>
    $tone === "light"
      ? css`
          background: #f1ede4;
          color: #333333;
        `
      : css`
          background: rgba(243, 239, 229, 0.08);
          color: #efe7d9;
          border: 1px solid rgba(243, 239, 229, 0.12);
        `};
`;

export const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 26px;
  align-items: start;

  @media (max-width: 959px) {
    grid-template-columns: 1fr;
  }
`;

export const StoryCard = styled.article<ToneProps>`
  display: grid;
  gap: ${({ $compact }) => ($compact ? "14px" : "16px")};
  align-content: start;
  align-self: start;
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

export const StoryEyebrow = styled.p<ToneProps>`
  margin: 0;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#6a6a6a" : "#b8ae9d")};
`;

export const StoryTitle = styled.h2<ToneProps>`
  margin: 0;
  font-size: clamp(1.8rem, 2.6vw, 2.5rem);
  line-height: 1.06;
  letter-spacing: -0.04em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const StoryCopy = styled.p<ToneProps>`
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

export const ExperienceStack = styled.section`
  display: grid;
  gap: 24px;
`;

export const ExperienceCard = styled.article<ToneProps>`
  display: grid;
  gap: ${({ $featured }) => ($featured ? "14px" : "12px")};
  padding: ${({ $featured }) => ($featured ? "32px 30px" : "26px")};
  border-radius: ${({ $featured }) => ($featured ? "28px" : "24px")};
  animation: ${riseIn} 0.55s ease both;
  ${({ $tone = "light", $featured }) => css`
    ${surfaceStyles[$tone]};
    ${$featured
      ? $tone === "light"
        ? css`
            background: rgba(255, 255, 255, 0.88);
            box-shadow: 0 30px 66px rgba(0, 0, 0, 0.08);
            border-color: rgba(23, 23, 23, 0.1);
          `
        : css`
            background: rgba(24, 24, 24, 0.96);
            box-shadow: 0 30px 66px rgba(0, 0, 0, 0.3);
            border-color: rgba(243, 239, 229, 0.12);
          `
      : ""}
  `};
`;

export const ExperienceHeader = styled.div`
  display: grid;
  gap: 8px;
`;

export const ExperienceTitle = styled.h3<ToneProps>`
  margin: 0;
  font-size: 25px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const ExperienceMeta = styled.span<ToneProps>`
  font-size: 13px;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#5b5b5b" : "#d4c5a3")};
`;

export const ExperienceSubhead = styled.p<ToneProps>`
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#2d2d2d" : "#efe7d9")};
`;

export const ExperienceCopy = styled.p<ToneProps>`
  margin: 0;
  font-size: 15px;
  line-height: 1.68;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#414141" : "#d6cec2")};
`;

export const CapabilityGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 959px) {
    grid-template-columns: 1fr;
  }
`;

export const CapabilityCard = styled.article<ToneProps>`
  display: grid;
  gap: ${({ $toolbox }) => ($toolbox ? "10px" : "12px")};
  padding: ${({ $toolbox }) => ($toolbox ? "22px 22px 20px" : "26px")};
  border-radius: ${({ $toolbox }) => ($toolbox ? "22px" : "24px")};
  animation: ${riseIn} 0.55s ease both;
  position: relative;
  ${({ $tone = "light", $toolbox }) => css`
    ${surfaceStyles[$tone]};
    ${$toolbox
      ? $tone === "light"
        ? css`
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.05);
          `
        : css`
            background: rgba(26, 26, 26, 0.95);
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22);
          `
      : ""}
  `};

  &::before {
    content: "";
    width: ${({ $toolbox }) => ($toolbox ? "34px" : "0")};
    height: 2px;
    border-radius: 999px;
    background: ${({ $tone = "light" }) => ($tone === "light" ? "#F2CB05" : "#EAF205")};
    opacity: ${({ $toolbox }) => ($toolbox ? 1 : 0)};
  }
`;

export const CapabilityTitle = styled.h3<ToneProps>`
  margin: 0;
  font-size: ${({ $toolbox }) => ($toolbox ? "18px" : "20px")};
  line-height: 1.16;
  letter-spacing: ${({ $toolbox }) => ($toolbox ? "-0.02em" : "-0.03em")};
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const CapabilityCopy = styled.p<ToneProps>`
  margin: 0;
  font-size: ${({ $toolbox }) => ($toolbox ? "14px" : "15px")};
  line-height: ${({ $toolbox }) => ($toolbox ? "1.58" : "1.68")};
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#444444" : "#d6cec2")};
`;

export const ResumeGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
  gap: 22px;

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
  }
`;

export const SidebarStack = styled.div`
  display: grid;
  gap: 18px;
`;

export const SkillGroupCard = styled.article<ToneProps>`
  display: grid;
  gap: 14px;
  padding: 24px;
  border-radius: 24px;
  animation: ${riseIn} 0.55s ease both;
  ${({ $tone = "light" }) => surfaceStyles[$tone]};
`;

export const SkillGroupTitle = styled.h3<ToneProps>`
  margin: 0;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SkillPill = styled.span<ToneProps>`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;

  ${({ $tone = "light" }) =>
    $tone === "light"
      ? css`
          background: #f1ede4;
          color: #333333;
        `
      : css`
          background: rgba(243, 239, 229, 0.08);
          color: #efe7d9;
          border: 1px solid rgba(243, 239, 229, 0.12);
        `};
`;

export const EducationCard = styled.article<ToneProps>`
  display: grid;
  gap: 16px;
  padding: 24px;
  border-radius: 24px;
  animation: ${riseIn} 0.55s ease both;
  ${({ $tone = "light" }) => surfaceStyles[$tone]};
`;

export const EducationEntry = styled.div`
  display: grid;
  gap: 6px;
`;

export const EducationSchool = styled.h4<ToneProps>`
  margin: 0;
  font-size: 17px;
  line-height: 1.2;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#171717" : "#f7f3ea")};
`;

export const EducationProgram = styled.p<ToneProps>`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#2d2d2d" : "#efe7d9")};
`;

export const EducationDetail = styled.p<ToneProps>`
  margin: 0;
  font-size: 14px;
  line-height: 1.58;
  color: ${({ $tone = "light" }) => ($tone === "light" ? "#575757" : "#cfc6b8")};
`;

export const ClosingCard = styled.section<ToneProps>`
  display: grid;
  gap: ${({ $featured }) => ($featured ? "22px" : "18px")};
  padding: ${({ $featured }) => ($featured ? "44px 34px 40px" : "34px 30px")};
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

  margin-top: ${({ $featured }) => ($featured ? "14px" : "0")};

  p {
    margin: 0;
    max-width: 780px;
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
