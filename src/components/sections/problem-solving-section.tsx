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
      <Card className="border-border/80 bg-card/72 shadow-[0_18px_42px_rgba(2,6,23,0.14)] transition-colors duration-300 hover:border-primary/50">
        <CardHeader className="p-6 pb-4 md:p-7 md:pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl font-headline tracking-tight text-foreground">
            <Code2 className="h-6 w-6 text-primary" />
            Coding Profiles
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 md:p-7 md:pt-0">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((profile) => (
              <Button
                key={profile.name}
                variant="outline"
                asChild
                className="btn-bc-style h-auto justify-between rounded-[1.3rem] border-border/80 bg-background/72 px-4 py-4 text-left hover:shadow-[0_14px_28px_rgba(2,6,23,0.12)]"
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
