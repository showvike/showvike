"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import type { ContactInfo } from "@/data/portfolio";
import { Github, Linkedin, Menu, X as CloseIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  contact: ContactInfo;
  name: string;
  resumeUrl: string;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header({ contact, name, resumeUrl }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const brandName = name.split(" ")[0].toLowerCase();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const getSectionIdFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    };

    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    getSectionIdFromHash();
    window.addEventListener("hashchange", getSectionIdFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", getSectionIdFromHash);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/70 bg-background/80 shadow-[0_14px_40px_rgba(2,6,23,0.28)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-mono text-lg font-semibold tracking-[0.18em] text-primary transition-colors duration-300 hover:text-foreground"
            aria-label={`${name} home`}
          >
            {brandName}
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href.replace("#", ""))}
                className={`rounded-full px-3 py-2 text-sm font-mono transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/75 hover:bg-card/80 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-3 flex items-center gap-2 rounded-full border border-border/70 bg-card/55 px-2 py-1 shadow-[0_8px_24px_rgba(2,6,23,0.14)]">
              <ThemeToggle />
              <Link
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Github size={18} />
              </Link>
              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin size={18} />
              </Link>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="btn-bc-style rounded-full px-5 font-mono shadow-none"
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <CloseIcon className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 top-20 z-40 flex flex-col justify-between bg-background/95 p-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-2xl px-4 py-3 text-lg font-headline font-semibold transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-primary/10 text-primary"
                    : "bg-card/55 text-foreground hover:text-primary"
                }`}
                onClick={() => {
                  setActiveSection(link.href.replace("#", ""));
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-5 pb-8">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="btn-bc-style w-full rounded-full"
            >
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </Button>
            <div className="flex items-center gap-4 text-muted-foreground">
              <ThemeToggle />
              <Link
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-border/70 bg-card/55 p-3 transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github size={22} />
              </Link>
              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border/70 bg-card/55 p-3 transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Linkedin size={22} />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
