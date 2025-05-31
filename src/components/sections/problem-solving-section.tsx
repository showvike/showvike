import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SectionContainer } from '@/components/ui/section-container';

interface ProfileLink {
  name: string;
  url: string;
}

interface ProblemSolvingSectionProps {
  profiles: ProfileLink[];
}

export function ProblemSolvingSection({ profiles }: ProblemSolvingSectionProps) {
  return (
    <SectionContainer title="Problem Solving" id="problem-solving">
      <Card className="hover:border-primary transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-primary flex items-center">
            <Code2 className="mr-3 h-6 w-6" />
            Coding Profiles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            I enjoy sharpening my problem-solving skills on various competitive programming platforms. You can find my profiles here:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profiles.map((profile, index) => (
              <Button key={index} variant="outline" asChild className="justify-start text-left h-auto py-3 px-4 shadow-sm hover:bg-accent/10">
                <Link href={profile.url} target="_blank" className="flex items-center w-full">
                  <span className="flex-grow font-medium text-foreground">{profile.name}</span>
                  <ExternalLink className="ml-2 h-4 w-4 text-muted-foreground" />
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
