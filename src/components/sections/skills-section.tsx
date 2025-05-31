import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionContainer } from '@/components/ui/section-container';
import { 
  Cpu, Database, Cloud, Settings, Cog, Palette, Type, Code, GitMerge, Github,
  Server, Route, Users, CloudCog, CloudUpload, FunctionSquare, Archive, Table, Mail,
  KeyRound, RefreshCw, Component, Share, CloudLightning, PlugZap, Store, Network,
  FileCode, Inspect, Send, Triangle, Bolt, Figma, ClipboardList, Globe, Settings2, 
  Layers, Webhook, Briefcase // Added Layers, Webhook, Briefcase
} from 'lucide-react';

interface SkillsData {
  expertise: string[];
  comfortable: string[];
  familiar: string[];
  tools: string[];
}

interface SkillsSectionProps {
  skills: SkillsData;
}

// Helper function to get an icon for a skill
const getSkillIcon = (skillName: string): React.ReactNode => {
  const iconSize = 16; // Consistent icon size
  const lowerSkillName = skillName.toLowerCase();

  switch (lowerSkillName) {
    // Expertise
    case 'javascript': return <FileCode size={iconSize} aria-label="JavaScript icon" />;
    case 'typescript': return <Type size={iconSize} aria-label="TypeScript icon" />; // Using Type for TypeScript
    case 'reactjs': return <Cog size={iconSize} aria-label="ReactJS icon" />; // Generic cog for libraries/frameworks
    case 'nextjs': return <Layers size={iconSize} aria-label="NextJS icon" />;
    case 'tailwindcss': return <Palette size={iconSize} aria-label="TailwindCSS icon" />;
    case 'redux toolkit': return <Store size={iconSize} aria-label="Redux Toolkit icon" />;
    case 'rtk query': return <Network size={iconSize} aria-label="RTK Query icon" />;
    case 'rest api': return <Webhook size={iconSize} aria-label="REST API icon" />;
    case 'git': return <GitMerge size={iconSize} aria-label="Git icon" />;
    case 'github': return <Github size={iconSize} aria-label="GitHub icon" />;

    // Comfortable
    case 'nodejs': return <Server size={iconSize} aria-label="NodeJS icon" />;
    case 'expressjs': return <Route size={iconSize} aria-label="ExpressJS icon" />;
    case 'mongodb': return <Database size={iconSize} aria-label="MongoDB icon" />;
    case 'mysql': return <Database size={iconSize} aria-label="MySQL icon" />; // Using Database for MySQL as well
    case 'aws cognito': return <Users size={iconSize} aria-label="AWS Cognito icon" />;
    case 'aws appsync': return <CloudCog size={iconSize} aria-label="AWS AppSync icon" />;
    case 'aws amplify': return <CloudUpload size={iconSize} aria-label="AWS Amplify icon" />;
    case 'aws lambda': return <FunctionSquare size={iconSize} aria-label="AWS Lambda icon" />;
    case 'aws s3': return <Archive size={iconSize} aria-label="AWS S3 icon" />;
    case 'aws dynamodb': return <Table size={iconSize} aria-label="AWS DynamoDB icon" />;
    case 'aws ses': return <Mail size={iconSize} aria-label="AWS SES icon" />;
    case 'mongoose': return <Database size={iconSize} aria-label="Mongoose icon" />; // Related to DB
    case 'jwt': return <KeyRound size={iconSize} aria-label="JWT icon" />;
    case 'tanstack query': return <RefreshCw size={iconSize} aria-label="TanStack Query icon" />;
    case 'material ui': return <Component size={iconSize} aria-label="Material UI icon" />;
    case 'bootstrap': return <Component size={iconSize} aria-label="Bootstrap icon" />;
    case 'ant design': return <Component size={iconSize} aria-label="Ant Design icon" />;

    // Familiar
    case 'graphql': return <Share size={iconSize} aria-label="GraphQL icon" />;
    case 'firebase': return <CloudLightning size={iconSize} aria-label="Firebase icon" />;
    case 'socket.io': return <PlugZap size={iconSize} aria-label="Socket.IO icon" />;
    case 'redux': return <Store size={iconSize} aria-label="Redux icon" />; // Same as Redux Toolkit
    case 'axios': return <Network size={iconSize} aria-label="Axios icon" />;
    case 'golang': return <FileCode size={iconSize} aria-label="Golang icon" />;
    case 'python': return <FileCode size={iconSize} aria-label="Python icon" />;
    case 'c': return <FileCode size={iconSize} aria-label="C language icon" />;
    case 'c++': return <FileCode size={iconSize} aria-label="C++ language icon" />;
    case 'php': return <FileCode size={iconSize} aria-label="PHP icon" />;
    
    // Tools
    case 'chrome devtools': return <Inspect size={iconSize} aria-label="Chrome DevTools icon" />;
    case 'postman': return <Send size={iconSize} aria-label="Postman icon" />;
    case 'vercel': return <Triangle size={iconSize} aria-label="Vercel icon" />;
    case 'netlify': return <Bolt size={iconSize} aria-label="Netlify icon" />;
    case 'figma': return <Figma size={iconSize} aria-label="Figma icon" />;
    case 'jira': return <ClipboardList size={iconSize} aria-label="Jira icon" />;
    case 'hostinger': return <Globe size={iconSize} aria-label="Hostinger icon" />;
    
    default: return <Settings2 size={iconSize} aria-label="Default setting icon" />; // Default icon
  }
};


const SkillCategory: React.FC<{ title: string; skills: string[]; icon?: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="mb-6">
    <div className="flex items-center mb-3">
      {icon && <span className="mr-2 text-primary">{icon}</span>}
      <h3 className="text-xl font-headline font-semibold text-primary">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge 
          key={index} 
          variant="secondary" 
          className="text-sm px-3 py-1.5 shadow-sm hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-200 ease-in-out cursor-default flex items-center gap-2"
          role="listitem"
          aria-label={skill}
        >
          {getSkillIcon(skill)}
          <span>{skill}</span>
        </Badge>
      ))}
    </div>
  </div>
);

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <SectionContainer title="Skills" id="skills">
      <Card className="hover:border-primary transition-colors duration-300">
        <CardContent className="pt-6">
          <SkillCategory title="Expertise" skills={skills.expertise} icon={<Cpu size={24} />} />
          <SkillCategory title="Comfortable" skills={skills.comfortable} icon={<Database size={24} />} />
          <SkillCategory title="Familiar" skills={skills.familiar} icon={<Cloud size={24} />} />
          <SkillCategory title="Tools" skills={skills.tools} icon={<Settings size={24} />} />
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
