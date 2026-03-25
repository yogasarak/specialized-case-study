"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { ProfileTone } from "@/data/profile";
import {
  ProfileNavButton,
  ProfileNavButtonLine,
  ProfileNavMenu,
  ProfileNavLink,
} from "./profile-page.styles";

type ProfileNavProps = {
  tone?: ProfileTone;
};

const NAV_ITEMS = [
  { href: "/", label: "Case Studies", match: ["/"] },
  { href: "/sarakeyser", label: "About", match: ["/sarakeyser", "/about"] },
  { href: "/resume", label: "Resume", match: ["/resume"] },
  { href: "/writing", label: "Writing", match: ["/writing"] },
] as const;

export function ProfileNav({ tone = "dark" }: ProfileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <>
      <ProfileNavButton
        type="button"
        aria-label={open ? "Close profile navigation" : "Open profile navigation"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        $tone={tone}
      >
        <ProfileNavButtonLine $open={open} />
        <ProfileNavButtonLine $open={open} />
        <ProfileNavButtonLine $open={open} />
      </ProfileNavButton>

        <ProfileNavMenu $tone={tone} $open={open}>
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : item.match.some(
                  (match) => pathname === match || pathname.startsWith(`${match}/`)
                );
          return (
            <ProfileNavLink
              key={item.href}
              href={item.href}
              $tone={tone}
              $active={active}
            >
              {item.label}
            </ProfileNavLink>
          );
        })}
      </ProfileNavMenu>
    </>
  );
}
