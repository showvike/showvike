// src/components/layout/footer.tsx
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

interface FooterProps {
  contact: ContactInfo;
  name: string;
}

export function Footer({ contact, name }: FooterProps) {
  return (
    <footer className="py-8 md:py-12 text-center">
      <div className="flex justify-center space-x-6 mb-6 md:hidden"> {/* Hidden on md and up, as social links are on side */}
        <Link href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={24} />
        </Link>
        <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={24} />
        </Link>
        <Link href={`mailto:${contact.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={24} />
        </Link>
      </div>
      <p className="text-xs text-muted-foreground font-mono">
        Designed & Built by {name}
      </p>
      <p className="text-xs text-muted-foreground font-mono mt-1">
        Inspired by Brittany Chiang's portfolio.
      </p>
    </footer>
  );
}
