import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Trophy, Users } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';

interface Education {
  degree: string;
  institution: string;
  years: string;
}

interface Achievements {
  programmingContests: string[];
  organizerAndJudge: string[];
}

interface EducationAchievementsSectionProps {
  education: Education;
  achievements: Achievements;
}

export function EducationAchievementsSection({ education, achievements }: EducationAchievementsSectionProps) {
  return (
    <SectionContainer title="Education & Achievements" id="education-achievements">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="hover:border-primary transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary flex items-center">
              <GraduationCap className="mr-3 h-6 w-6" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
            <p className="text-muted-foreground">{education.institution}</p>
            <p className="text-sm text-muted-foreground/80">{education.years}</p>
          </CardContent>
        </Card>

        <Card className="hover:border-primary transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary flex items-center">
              <Trophy className="mr-3 h-6 w-6" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-md font-semibold text-foreground mb-2">Programming Contests</h4>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-foreground/90">
                {achievements.programmingContests.map((contest, index) => (
                  <li key={index}>{contest}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-foreground mb-2 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Organizer & Judge
                </h4>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-foreground/90">
                {achievements.organizerAndJudge.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
}
