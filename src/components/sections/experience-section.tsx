import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/ui/section-container';
import type { ExperienceItem } from '@/data/portfolio';
import { Briefcase, CalendarDays, MapPinIcon } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <SectionContainer
      title="Experience"
      id="experience"
      description="Role history across Shopify delivery, product engineering, and cloud-backed web platforms."
    >
      <div className="space-y-8">
        {experiences.map((experience) => (
          <Card
            key={`${experience.company}-${experience.role}`}
            className="overflow-hidden transition-colors duration-300 hover:border-primary/50"
          >
            <CardHeader className="border-b border-border/70 bg-muted/20 p-6 md:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-primary">
                    <Briefcase className="h-3.5 w-3.5" />
                    {experience.company}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-headline text-foreground">
                      {experience.role}
                    </CardTitle>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                      {experience.scope}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground lg:justify-end">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span>{experience.dates}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-2">
                    <MapPinIcon className="h-4 w-4 text-primary" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 md:p-7">
              <h3 className="mb-4 text-sm font-mono uppercase tracking-[0.24em] text-primary/80">
                Highlights
              </h3>
              <ul className="grid gap-3 text-sm leading-7 text-foreground/90 md:grid-cols-2 md:gap-x-6 md:text-base">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 rounded-2xl border border-border/60 bg-background/45 px-4 py-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
