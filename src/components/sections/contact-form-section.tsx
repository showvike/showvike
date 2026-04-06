import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/ui/section-container';
import type { ContactInfo } from '@/data/portfolio';
import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface ContactFormSectionProps {
  id?: string;
  contact: ContactInfo;
  availability: string;
}

const quickLinks = (contact: ContactInfo) => [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/showvike',
    href: contact.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/showvike',
    href: contact.github,
    icon: Github,
  },
  {
    label: 'Resume',
    value: 'Open current resume',
    href: contact.resumeUrl,
    icon: FileText,
  },
];

export function ContactFormSection({
  id,
  contact,
  availability,
}: ContactFormSectionProps) {
  return (
    <SectionContainer
      title="Contact"
      id={id}
      description="Direct, working contact options for recruiters, hiring teams, and collaborators."
    >
      <Card className="overflow-hidden border-border/80 bg-card/70 shadow-[0_20px_44px_rgba(2,6,23,0.18)] transition-colors duration-300 hover:border-primary/50">
        <CardContent className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.32em] text-primary/80">
                Let&apos;s Connect
              </p>
              <CardTitle className="text-3xl font-headline text-foreground">
                Open to thoughtful product and engineering conversations.
              </CardTitle>
              <CardDescription className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                {availability}
              </CardDescription>
            </div>

            <div className="inline-flex items-center gap-3 rounded-2xl border border-border/80 bg-background/70 px-4 py-3 text-sm text-foreground/90">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{contact.location}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="btn-bc-style-filled rounded-full px-6">
                <Link href={`mailto:${contact.email}`}>
                  Email Me
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-bc-style rounded-full px-6">
                <a href={contact.resumeUrl} target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickLinks(contact).map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group rounded-2xl border border-border/80 bg-background/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-mono uppercase tracking-[0.22em] text-primary/80">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground/90">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
