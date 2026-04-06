import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { EducationAchievementsSection } from '@/components/sections/education-achievements-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProblemSolvingSection } from '@/components/sections/problem-solving-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { portfolioData } from '@/data/portfolio';

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.16),transparent_48%)]" />
      <Header
        contact={portfolioData.contact}
        name={portfolioData.name}
        resumeUrl={portfolioData.contact.resumeUrl}
      />

      <main className="container mx-auto flex-grow px-4 pt-24 sm:px-8 md:px-16 md:pt-28 lg:px-24 xl:px-32">
        <HeroSection
          id="about"
          name={portfolioData.name}
          title={portfolioData.title}
          headline={portfolioData.headline}
          summary={portfolioData.summary}
          stats={portfolioData.stats}
          contact={portfolioData.contact}
        />
        <SkillsSection skills={portfolioData.skills} />
        <ExperienceSection experiences={portfolioData.experiences} />
        <ProjectsSection projects={portfolioData.featuredProjects} />
        <ProblemSolvingSection profiles={portfolioData.problemSolving} />
        <EducationAchievementsSection
          education={portfolioData.education}
          achievements={portfolioData.achievements}
        />
        <ContactFormSection
          id="contact"
          contact={portfolioData.contact}
          availability={portfolioData.availability}
        />
      </main>

      <Footer contact={portfolioData.contact} name={portfolioData.name} />
    </div>
  );
}
