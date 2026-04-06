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
    <footer className="border-t border-border/70 py-10 md:py-12">
      <div className="container mx-auto flex flex-col gap-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border/80 to-transparent" />
        <div className="flex flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground/90">{name}</p>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Software Engineer focused on full-stack web products, Shopify work, and scalable platform delivery.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground md:justify-end">
          <Link
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-border/70 bg-card/55 p-3 transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github size={20} />
          </Link>
          <Link
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-border/70 bg-card/55 p-3 transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="rounded-full border border-border/70 bg-card/55 p-3 transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail size={20} />
          </Link>
        </div>
        </div>
        <div className="space-y-1 text-center md:text-left">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
            Software Engineer • Mirpur, Dhaka, Bangladesh • {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
