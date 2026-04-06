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
        <Card className="border-border/80 bg-card/70 shadow-[0_16px_40px_rgba(2,6,23,0.14)] transition-colors duration-300 hover:border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-headline text-foreground">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              {education.degree}
            </h3>
            <p className="text-muted-foreground">{education.institution}</p>
            <p className="text-sm text-muted-foreground/80">{education.years}</p>
          </CardContent>
        </Card>

        <Card className="border-border/80 bg-card/70 shadow-[0_16px_40px_rgba(2,6,23,0.14)] transition-colors duration-300 hover:border-primary/50 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-headline text-foreground">
              <Trophy className="h-6 w-6 text-primary" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div>
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
            <div>
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
