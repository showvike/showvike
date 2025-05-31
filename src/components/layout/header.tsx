// src/components/layout/header.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Menu, X as CloseIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

interface ContactInfo {
  linkedin: string;
  github: string;
}

interface HeaderProps {
  contact: ContactInfo;
  name: string;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' }, // Assuming projects section has id="projects"
  { name: 'Contact', href: '#contact' },
];

export function Header({ contact, name }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // For active link highlighting if needed on separate pages

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled ? 'bg-background/80 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-primary font-mono group">
            <span className="group-hover:text-foreground transition-colors duration-300">{initials}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-mono text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-primary mr-1">0{index + 1}.</span>
                {link.name}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild className="btn-bc-style font-mono">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"> {/* Replace with actual resume link */}
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <CloseIcon className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-xl z-40 p-6 flex flex-col items-center justify-center space-y-6">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-mono text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-primary mr-1">0{index + 1}.</span>
                {link.name}
              </Link>
            ))}
            <Button variant="outline" size="lg" asChild className="btn-bc-style font-mono w-full max-w-xs">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}> {/* Replace */}
                Resume
              </a>
            </Button>
          </nav>
          <div className="flex space-x-6 mt-8">
            <Link href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </Link>
            <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
