import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/ui/section-container';
import { Briefcase, CalendarDays, MapPinIcon } from 'lucide-react';

interface KeyProject {
  name: string;
  description: string;
  stack: string[];
}

interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
  keyProjects: KeyProject[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <SectionContainer title="Work Experience" id="experience">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden hover:border-primary transition-colors duration-300">
            <CardHeader className="bg-muted/50 p-6">
              <CardTitle className="text-2xl font-headline text-primary flex items-center">
                <Briefcase className="mr-3 h-6 w-6" />
                {exp.role}
              </CardTitle>
              <CardDescription className="text-lg text-secondary-foreground">{exp.company}</CardDescription>
              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground space-y-1 sm:space-y-0 sm:space-x-4 mt-1">
                <div className="flex items-center">
                  <CalendarDays className="mr-1.5 h-4 w-4" />
                  {exp.dates}
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-1.5 h-4 w-4" />
                  {exp.location}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h4 className="text-md font-semibold mb-2 text-foreground">Responsibilities:</h4>
              <ul className="list-disc list-outside ml-5 space-y-1 text-foreground/90 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              
              {exp.keyProjects && exp.keyProjects.length > 0 && (
                <>
                  <h4 className="text-md font-semibold mb-3 text-foreground">Key Projects at {exp.company}:</h4>
                  <div className="space-y-4">
                    {exp.keyProjects.map((project, projIdx) => (
                      <div key={projIdx} className="pl-5 border-l-2 border-primary/50">
                        <h5 className="font-semibold text-primary">{project.name}</h5>
                        <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
