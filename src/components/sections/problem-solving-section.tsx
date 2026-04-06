import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/ui/section-container';
import type { ProblemSolvingProfile } from '@/data/portfolio';
import { Code2, ExternalLink } from 'lucide-react';

interface ProblemSolvingSectionProps {
  profiles: ProblemSolvingProfile[];
}

export function ProblemSolvingSection({
  profiles,
}: ProblemSolvingSectionProps) {
  return (
    <SectionContainer
      title="Problem Solving"
      id="problem-solving"
      description="Competitive programming has helped sharpen my algorithmic thinking, debugging habits, and comfort with edge cases."
    >
      <Card className="border-border/80 bg-card/70 shadow-[0_16px_40px_rgba(2,6,23,0.14)] transition-colors duration-300 hover:border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-headline text-foreground">
            <Code2 className="h-6 w-6 text-primary" />
            Coding Profiles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((profile) => (
              <Button
                key={profile.name}
                variant="outline"
                asChild
                className="btn-bc-style h-auto justify-between rounded-2xl border-border/80 bg-background/70 px-4 py-4 text-left"
              >
                <Link href={profile.url} target="_blank" rel="noopener noreferrer">
                  <span className="font-medium text-foreground">{profile.name}</span>
                  <ExternalLink className="ml-4 h-4 w-4 shrink-0 text-muted-foreground" />
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
