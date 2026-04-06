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
      description="A concise view of the most relevant production work from Shopify, multi-role platform, migration, and ticketing projects."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={`${project.company}-${project.name}`}
            className="group flex h-full flex-col border-border/80 bg-card/70 shadow-[0_18px_40px_rgba(2,6,23,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
          >
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-primary">
                  <Layers3 className="h-3.5 w-3.5" />
                  {project.category}
                </div>
                <p className="text-xs text-muted-foreground">{project.company}</p>
              </div>
              <div className="space-y-3">
                <CardTitle className="text-2xl font-headline text-foreground transition-colors group-hover:text-primary">
                  {project.name}
                </CardTitle>
                <Badge className="w-fit rounded-full bg-primary/10 px-3 py-1 text-primary hover:bg-primary/10">
                  {project.impact}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="text-sm leading-7 text-muted-foreground md:text-[15px]">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
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
