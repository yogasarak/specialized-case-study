"use client";

import type { ProfileTone } from "@/data/profile";
import {
  ActionRow,
  PrimaryLink,
  SecondaryLink,
  ThemeToggleLink,
} from "./profile-page.styles";

type ActionLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type ProfileActionLinksProps = {
  tone: ProfileTone;
  links: readonly ActionLink[];
  includeThemeToggle?: boolean;
  themeHref?: string;
  themeLabel?: string;
};

export function ProfileActionLinks({
  tone,
  links,
  includeThemeToggle = false,
  themeHref,
  themeLabel,
}: ProfileActionLinksProps) {
  return (
    <ActionRow>
      {links.map((link, index) =>
        link.variant === "secondary" || index > 0 ? (
          <SecondaryLink key={`${link.href}-${link.label}`} href={link.href} $tone={tone} $mobileCompact>
            {link.label}
          </SecondaryLink>
        ) : (
          <PrimaryLink key={`${link.href}-${link.label}`} href={link.href} $tone={tone} $mobileCompact>
            {link.label}
          </PrimaryLink>
        )
      )}
      {includeThemeToggle && themeHref && themeLabel ? (
        <ThemeToggleLink href={themeHref} $tone={tone} $mobileCompact>
          {themeLabel}
        </ThemeToggleLink>
      ) : null}
    </ActionRow>
  );
}
