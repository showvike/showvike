import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ProblemSolvingSection } from '@/components/sections/problem-solving-section';
import { EducationAchievementsSection } from '@/components/sections/education-achievements-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { Separator } from '@/components/ui/separator'; // Keep if sections need it, or remove if BC style doesn't use

const resumeData = {
  name: "SHOWVIKE MONDAL OVI",
  title: "Software Engineer",
  contact: {
    phone: "+8801947490157",
    location: "Mirpur, Dhaka, Bangladesh",
    email: "showvike@gmail.com",
    linkedin: "https://linkedin.com/in/showvike",
    github: "https://github.com/showvike",
  },
  summary: "Full-Stack Software Engineer with 2 years of professional experience and production-level experience in building scalable web platforms using ReactJS, NextJS, NodeJS, ExpressJS and AWS Services including Cognito, AppSync, Amplify, Lambda and S3. Comfortable in database design (MySQL, MongoDB), API architecture, and cloud-native development. Passionate about clean code, performance, and leading development of robust, user-centered systems.",
  skills: {
    expertise: ["JavaScript", "TypeScript", "ReactJS", "NextJS", "TailwindCSS", "Redux Toolkit", "RTK Query", "REST API", "Git", "GitHub"],
    comfortable: [
      "NodeJS", 
      "ExpressJS", 
      "MongoDB", 
      "MySQL", 
      "AWS Cognito",
      "AWS AppSync",
      "AWS Amplify",
      "AWS Lambda",
      "AWS S3",
      "AWS DynamoDB",
      "AWS SES",
      "Mongoose", 
      "JWT", 
      "TanStack Query", 
      "Material UI", 
      "Bootstrap", 
      "Ant Design"
    ],
    familiar: ["GraphQL", "Firebase", "Socket.IO", "Redux", "Axios", "Golang", "Python", "C", "C++", "PHP"],
    tools: ["Chrome DevTools", "Postman", "Vercel", "Netlify", "Figma", "Jira", "Hostinger"],
  },
  experiences: [
    {
      role: "Jr. Software Engineer",
      company: "Doodle Inc.",
      location: "Mirpur DOHS, Dhaka",
      dates: "November 2023 – Present",
      responsibilities: [
        "Developed and maintained interactive, responsive user interfaces using ReactJS, NextJS, and AWS Services.",
        "Built scalable server-side applications with NodeJS and integrated seamlessly with front-end components.",
        "Utilized GitHub for version control, conducted code reviews, and collaborated in an Agile development environment.",
        "Deployed and monitored applications on cloud infrastructure, ensuring stability and performance.",
      ],
      keyProjects: [
        {
          name: "Global Job Portal (5 Types of Users)",
          description: "Developed a global job platform with an admin panel for customer support and operations. Enabled advanced job search, candidate-agency tagging, and employer job invite functionality. Implemented real-time notifications and email updates via subscriptions. Built secure role-based access for admins, employers, agencies, and job seekers. Amazon Payfort integration for built-in package payment.",
          stack: ["NextJS", "ReactJS", "NodeJS", "Redux Toolkit", "GraphQL", "TypeScript", "Material UI", "TailwindCSS", "JavaScript", "AWS Cognito", "AWS AppSync", "AWS Lambda", "AWS SES", "AWS Amplify", "AWS S3", "AWS DynamoDB"],
        },
        {
          name: "Social Media Platform Migration (7M+ Users)",
          description: "Contributed to the migration of a high-traffic social platform from ReactJS to NextJS to improve SEO and performance. Developed an investor data room to track daily and monthly active users.",
          stack: ["ReactJS", "NextJS", "JavaScript", "Bootstrap", "TailwindCSS", "Material UI", "AWS Cognito", "AWS AppSync", "AWS Lambda", "AWS Amplify", "AWS S3", "AWS DynamoDB", "Redux", "GraphQL"],
        },
        {
          name: "Concert Event Organizer Platform (৳4 Crore+ Ticket Sales)",
          description: "Contributed to a high-scale event management system by developing the coupon management module across the frontend, backend, and admin panel. Implemented features for creating, editing, validating, and tracking coupons used in large-scale concert ticket sales.",
          stack: ["ReactJS", "NextJS", "Bootstrap", "Redux Toolkit", "NodeJS", "Material UI", "AWS Cognito", "AWS AppSync", "AWS Lambda", "AWS Amplify", "AWS S3", "AWS DynamoDB", "GraphQL"],
        },
      ],
    },
    {
      role: "Intern Web Developer",
      company: "Tiggzy IT",
      location: "Kawran Bazar, Dhaka",
      dates: "July 2023 – October 2023",
      responsibilities: [
        "Developed both front-end and back-end components for web applications using ReactJS, Node.js, Express.js, and MongoDB and MySQL.",
        "Deployed applications to live servers, maintained uptime, and ensured functionality through ongoing maintenance.",
        "Collaborated in a team environment using Git and GitHub for version control and code reviews.",
      ],
      keyProjects: [
        {
          name: "Company Portfolio Sites",
          description: "Built custom portfolio websites with dynamic admin panels. Enabled clients to manage site content (add/edit/delete) for various sections.",
          stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Mongoose", "JWT", "TailwindCSS", "MySQL"],
        },
        {
          name: "E-commerce Platform",
          description: "Developed a functional e-commerce site with product listings, cart system, and order processing. Designed with a simple and clean UI for smooth user experience.",
          stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Mongoose", "TailwindCSS", "NextJS", "JWT", "Ant Design"],
        },
        {
          name: "HRM System",
          description: "Designed and deployed a Human Resource Management system with complex relational data structures for employee management. Implemented role-based access and hosted it on a live server.",
          stack: ["ReactJS", "Node.js", "Express.js", "JWT", "Bootstrap", "MySQL"],
        },
      ],
    },
  ],
  problemSolving: [
    { name: "HackerRank", url: "https://hackerrank.com/showvike" },
    { name: "Codeforces", url: "https://codeforces.com/profile/showvike" },
    { name: "LeetCode", url: "https://leetcode.com/showvike" },
  ],
  education: {
    degree: "BSc (Hons) in Computer Science and Engineering",
    institution: "Dhaka City College, National University",
    years: "2017 – 2021",
  },
  achievements: {
    programmingContests: [
      "Participated in ICPC (International Collegiate Programming Contest) 2019",
      "Competed in Dhaka City College Programming Contest 2019",
      "Finalist at Dhaka City College Programming Weekly Contest 2018",
      "Participated in Islamic University of Technology ICT Fest 2018",
    ],
    organizerAndJudge: [
      "DCC CSE WEEK – Served as Organizer & Judge in: 2020, 2021, 2022",
    ],
  },
};

export default function LandingPage() {
  const allProjects = resumeData.experiences.flatMap(exp => 
    exp.keyProjects.map(p => {
      // Also update key project stacks
      const updatedStack = p.stack.flatMap(skill => {
        if (skill === "AWS (Cognito, AppSync, Amplify, Lambda, S3, DynamoDB, SES)") {
          return ["AWS Cognito", "AWS AppSync", "AWS Amplify", "AWS Lambda", "AWS S3", "AWS DynamoDB", "AWS SES"];
        }
        if (skill === "AWS (Cognito, AppSync, Lambda, SES, Amplify, S3, DynamoDB)") { // Order variant in first project
          return ["AWS Cognito", "AWS AppSync", "AWS Lambda", "AWS SES", "AWS Amplify", "AWS S3", "AWS DynamoDB"];
        }
        if (skill === "AWS (Cognito, AppSync, Lambda, Amplify, S3, DynamoDB)") { // Order variant in second and third project
            return ["AWS Cognito", "AWS AppSync", "AWS Lambda", "AWS Amplify", "AWS S3", "AWS DynamoDB"];
        }
        return skill;
      });
      return {...p, company: exp.company, stack: updatedStack};
    })
  );
  

  // Section IDs for navigation
  const heroSectionId = "about"; // Hero section serves as "About"

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header contact={resumeData.contact} name={resumeData.name} />
      
      {/* Fixed social links sidebar (Brittany Chiang style) - Placeholder, implement later */}
      {/* <div className="hidden md:block fixed bottom-0 left-8 z-10">
        <div className="flex flex-col items-center space-y-4">
          <Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></Link>
          <Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
          <div className="w-px h-24 bg-muted-foreground/50"></div>
        </div>
      </div>
      <div className="hidden md:block fixed bottom-0 right-8 z-10">
        <div className="flex flex-col items-center space-y-4">
          <Link href={`mailto:${resumeData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs [writing-mode:vertical-rl]">
            {resumeData.contact.email}
          </Link>
          <div className="w-px h-24 bg-muted-foreground/50"></div>
        </div>
      </div> */}


      <main className="flex-grow container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-24 md:pt-32 space-y-16 md:space-y-24">
        {/* Hero section should be first and fill more viewport height in BC's style */}
        <HeroSection 
          id={heroSectionId}
          name={resumeData.name}
          title={resumeData.title}
          summary={resumeData.summary}
          contact={resumeData.contact} // Still pass for internal use if any, but header handles main display
        />
        {/* Separators might be removed or styled differently in BC style */}
        {/* <Separator /> */} 
        <SkillsSection skills={resumeData.skills} />
        {/* <Separator /> */}
        <ExperienceSection experiences={resumeData.experiences} />
        {/* <Separator /> */}
        <ProjectsSection projects={allProjects} />
        {/* <Separator /> */}
        <ProblemSolvingSection profiles={resumeData.problemSolving} />
        {/* <Separator /> */}
        <EducationAchievementsSection education={resumeData.education} achievements={resumeData.achievements} />
        {/* <Separator /> */}
        <ContactFormSection id="contact" /> {/* This section needs id="contact" */}
      </main>
      <Footer contact={resumeData.contact} name={resumeData.name} />
    </div>
  );
}
