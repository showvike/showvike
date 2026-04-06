import { Badge } from '@/components/ui/badge';
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
      description="Progression from full-stack internship work into production engineering across Shopify, web platforms, and cloud-backed products."
    >
      <div className="space-y-8">
        {experiences.map((experience) => (
          <Card
            key={`${experience.company}-${experience.role}`}
            className="overflow-hidden border-border/80 bg-card/70 shadow-[0_18px_40px_rgba(2,6,23,0.16)] transition-colors duration-300 hover:border-primary/50"
          >
            <CardHeader className="border-b border-border/70 bg-muted/20 p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
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
                      {experience.summary}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span>{experience.dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4 text-primary" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="grid gap-8 p-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <h3 className="mb-4 text-sm font-mono uppercase tracking-[0.24em] text-primary/80">
                  Responsibilities
                </h3>
                <ul className="space-y-3 text-sm leading-7 text-foreground/90 md:text-base">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-mono uppercase tracking-[0.24em] text-primary/80">
                  Key Projects
                </h3>
                <div className="space-y-4">
                  {experience.keyProjects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-2xl border border-border/80 bg-background/70 p-4"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h4 className="text-lg font-headline font-semibold text-foreground">
                              {project.name}
                            </h4>
                            <p className="mt-2 text-sm leading-7 text-muted-foreground">
                              {project.description}
                            </p>
                          </div>
                          {project.impact ? (
                            <Badge className="w-fit rounded-full bg-primary/10 px-3 py-1 text-primary hover:bg-primary/10">
                              {project.impact}
                            </Badge>
                          ) : null}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="rounded-full border border-border/80 bg-card px-2.5 py-1 text-xs text-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
