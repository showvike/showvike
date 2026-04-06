import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionContainer } from '@/components/ui/section-container';
import type { AchievementsData, EducationData } from '@/data/portfolio';
import { GraduationCap, Trophy, Users } from 'lucide-react';

interface EducationAchievementsSectionProps {
  education: EducationData;
  achievements: AchievementsData;
}

export function EducationAchievementsSection({
  education,
  achievements,
}: EducationAchievementsSectionProps) {
  return (
    <SectionContainer
      title="Education & Achievements"
      id="education-achievements"
      description="Academic foundation, contest participation, and community involvement that shaped my engineering discipline."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-border/80 bg-card/72 shadow-[0_18px_42px_rgba(2,6,23,0.14)] transition-colors duration-300 hover:border-primary/50">
          <CardHeader className="p-6 pb-4 md:p-7 md:pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl font-headline tracking-tight text-foreground">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-6 pt-0 md:p-7 md:pt-0">
            <h3 className="text-lg font-semibold leading-7 text-foreground">
              {education.degree}
            </h3>
            <p className="text-base text-muted-foreground">{education.institution}</p>
            <p className="inline-flex w-fit rounded-full border border-border/70 bg-background/70 px-3 py-1 text-sm text-muted-foreground/90">
              {education.years}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/80 bg-card/72 shadow-[0_18px_42px_rgba(2,6,23,0.14)] transition-colors duration-300 hover:border-primary/50 lg:col-span-2">
          <CardHeader className="p-6 pb-4 md:p-7 md:pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl font-headline tracking-tight text-foreground">
              <Trophy className="h-6 w-6 text-primary" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5 p-6 pt-0 md:grid-cols-2 md:p-7 md:pt-0">
            <div className="rounded-[1.2rem] border border-border/60 bg-background/45 p-5">
              <h4 className="mb-3 text-sm font-mono uppercase tracking-[0.24em] text-primary/80">
                Programming Contests
              </h4>
              <ul className="space-y-3 text-sm leading-7 text-foreground/90">
                {achievements.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.2rem] border border-border/60 bg-background/45 p-5">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-mono uppercase tracking-[0.24em] text-primary/80">
                <Users className="h-4 w-4" />
                Community Contribution
              </h4>
              <ul className="space-y-3 text-sm leading-7 text-foreground/90">
                {achievements.leadership.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
}
