import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/ui/section-container';
import type { FeaturedProject } from '@/data/portfolio';
import { Layers3 } from 'lucide-react';

interface ProjectsSectionProps {
  projects: FeaturedProject[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionContainer
      title="Selected Projects"
      id="projects"
      description="Proof-driven snapshots from production work across Shopify, hiring, migration, and ticketing products."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={`${project.company}-${project.name}`}
            className="group flex h-full flex-col overflow-hidden border-border/80 bg-card/72 shadow-[0_20px_44px_rgba(2,6,23,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
          >
            <CardHeader className="space-y-5 p-6 pb-4 md:p-7 md:pb-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] text-primary">
                  <Layers3 className="h-3.5 w-3.5" />
                  {project.category}
                </div>
                <p className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                  {project.company}
                </p>
              </div>
              <div className="space-y-3">
                <CardTitle className="text-2xl font-headline tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {project.name}
                </CardTitle>
                <Badge className="w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-primary hover:bg-primary/10">
                  {project.impact}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col p-6 pt-0 md:p-7 md:pt-0">
              <div className="rounded-[1.2rem] border border-border/70 bg-background/55 p-4">
                <p className="text-sm font-medium leading-7 text-foreground/90 md:text-[15px]">
                  {project.summary}
                </p>
              </div>
              <ul className="mt-5 space-y-3.5 text-sm leading-7 text-muted-foreground">
                {project.proofPoints.map((point) => (
                  <li
                    key={`${project.name}-${point.label}`}
                    className="flex gap-3 rounded-[1.1rem] border border-border/60 bg-background/35 p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
                        {point.label}
                      </span>
                      <p className="mt-1">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-full border border-border/80 bg-background/80 px-2.5 py-1 text-xs text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
