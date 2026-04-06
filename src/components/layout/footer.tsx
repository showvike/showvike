import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { ContactInfo } from '@/data/portfolio';

interface FooterProps {
  contact: ContactInfo;
  name: string;
}

export function Footer({ contact, name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 py-8 md:py-10">
      <div className="container mx-auto flex flex-col gap-6 px-4 text-center sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex items-center justify-center gap-5 text-muted-foreground">
          <Link
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <Github size={20} />
          </Link>
          <Link
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="transition-colors hover:text-primary"
          >
            <Mail size={20} />
          </Link>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-foreground/90">{name}</p>
          <p className="text-xs font-mono text-muted-foreground">
            Software Engineer • Mirpur, Dhaka, Bangladesh • {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
