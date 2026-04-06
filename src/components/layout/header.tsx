"use client";

import { Button } from "@/components/ui/button";
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/70 bg-background/85 shadow-[0_10px_40px_rgba(2,6,23,0.25)] backdrop-blur-xl"
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

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-mono text-foreground/80 transition-colors duration-300 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <Link
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github size={18} />
              </Link>
              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin size={18} />
              </Link>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="btn-bc-style rounded-full px-5 font-mono"
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
          <nav className="flex flex-col gap-5 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-headline font-semibold text-foreground transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
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
            <div className="flex items-center gap-5 text-muted-foreground">
              <Link
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-primary"
              >
                <Github size={22} />
              </Link>
              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-primary"
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
