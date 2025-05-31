import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { SectionContainer } from '@/components/ui/section-container';
import Image from 'next/image';

interface Project {
  name: string;
  description: string;
  stack: string[];
  company?: string; // Company where project was developed
  githubUrl?: string;
  liveUrl?: string;
  imageHint?: string; // For data-ai-hint
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionContainer title="Project Portfolio" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col hover:border-primary transition-colors duration-300">
            <CardHeader>
              <Image 
                src={`https://placehold.co/600x400.png`}
                alt={`${project.name} placeholder image`}
                width={600}
                height={400}
                className="rounded-t-lg object-cover aspect-[3/2]"
                data-ai-hint={project.imageHint || "technology software"}
              />
              <CardTitle className="mt-4 text-xl font-headline text-primary">{project.name}</CardTitle>
              {project.company && <CardDescription className="text-sm text-muted-foreground">Developed at {project.company}</CardDescription>}
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/90 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="px-2 py-0.5 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto pt-0 pb-4 px-6">
              <div className="flex space-x-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
