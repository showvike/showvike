import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { SectionContainer } from '@/components/ui/section-container';
import type { SkillsData } from '@/data/portfolio';
import {
  Archive,
  BadgeCheck,
  BrainCircuit,
  Briefcase,
  CloudCog,
  CloudUpload,
  Component,
  Cpu,
  Database,
  Figma,
  FileCode,
  FunctionSquare,
  GitMerge,
  Github,
  Inspect,
  KeyRound,
  Layers,
  Mail,
  Network,
  Palette,
  RefreshCw,
  Route,
  Send,
  Server,
  Settings,
  Settings2,
  Share,
  ShoppingBag,
  Store,
  Table,
  Triangle,
  Type,
  Users,
  Webhook,
} from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillsData;
}

const getSkillIcon = (skillName: string): React.ReactNode => {
  const iconSize = 16;
  const lowerSkillName = skillName.toLowerCase();

  switch (lowerSkillName) {
    case 'javascript':
      return <FileCode size={iconSize} aria-label="JavaScript icon" />;
    case 'typescript':
      return <Type size={iconSize} aria-label="TypeScript icon" />;
    case 'reactjs':
      return <BrainCircuit size={iconSize} aria-label="ReactJS icon" />;
    case 'nextjs':
      return <Layers size={iconSize} aria-label="NextJS icon" />;
    case 'shopify':
      return <ShoppingBag size={iconSize} aria-label="Shopify icon" />;
    case 'nodejs':
      return <Server size={iconSize} aria-label="NodeJS icon" />;
    case 'expressjs':
      return <Route size={iconSize} aria-label="ExpressJS icon" />;
    case 'tailwindcss':
      return <Palette size={iconSize} aria-label="TailwindCSS icon" />;
    case 'rest api':
      return <Webhook size={iconSize} aria-label="REST API icon" />;
    case 'redux toolkit':
      return <Store size={iconSize} aria-label="Redux Toolkit icon" />;
    case 'rtk query':
      return <Network size={iconSize} aria-label="RTK Query icon" />;
    case 'graphql':
      return <Share size={iconSize} aria-label="GraphQL icon" />;
    case 'mongodb':
    case 'mysql':
    case 'mongoose':
      return <Database size={iconSize} aria-label="Database icon" />;
    case 'aws cognito':
      return <Users size={iconSize} aria-label="AWS Cognito icon" />;
    case 'aws appsync':
      return <CloudCog size={iconSize} aria-label="AWS AppSync icon" />;
    case 'aws amplify':
      return <CloudUpload size={iconSize} aria-label="AWS Amplify icon" />;
    case 'aws lambda':
      return <FunctionSquare size={iconSize} aria-label="AWS Lambda icon" />;
    case 'aws s3':
      return <Archive size={iconSize} aria-label="AWS S3 icon" />;
    case 'aws dynamodb':
      return <Table size={iconSize} aria-label="AWS DynamoDB icon" />;
    case 'aws ses':
      return <Mail size={iconSize} aria-label="AWS SES icon" />;
    case 'jwt':
      return <KeyRound size={iconSize} aria-label="JWT icon" />;
    case 'tanstack query':
      return <RefreshCw size={iconSize} aria-label="TanStack Query icon" />;
    case 'material ui':
    case 'polaris':
      return <Component size={iconSize} aria-label="Component library icon" />;
    case 'liquid':
      return <BadgeCheck size={iconSize} aria-label="Liquid icon" />;
    case 'git':
      return <GitMerge size={iconSize} aria-label="Git icon" />;
    case 'github':
      return <Github size={iconSize} aria-label="GitHub icon" />;
    case 'chrome devtools':
      return <Inspect size={iconSize} aria-label="Chrome DevTools icon" />;
    case 'postman':
      return <Send size={iconSize} aria-label="Postman icon" />;
    case 'vercel':
      return <Triangle size={iconSize} aria-label="Vercel icon" />;
    case 'figma':
      return <Figma size={iconSize} aria-label="Figma icon" />;
    case 'jira':
      return <Briefcase size={iconSize} aria-label="Jira icon" />;
    default:
      return <Settings2 size={iconSize} aria-label="Default skill icon" />;
  }
};

const categories = [
  {
    title: 'Core Stack',
    description: 'Primary tools I use for full-stack and Shopify product delivery.',
    skillsKey: 'core',
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: 'Platform & Commerce',
    description: 'Supporting technologies used across scalable web platforms and merchant systems.',
    skillsKey: 'platform',
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: 'Workflow Tools',
    description: 'Tools I use for debugging, collaboration, deployment, and handoff.',
    skillsKey: 'tools',
    icon: <Settings className="h-5 w-5" />,
  },
] as const;

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <SectionContainer
      title="Skills"
      id="skills"
      description="A focused stack for full-stack web products, Shopify work, and scalable platform delivery."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const items = skills[category.skillsKey];

          return (
            <Card
              key={category.title}
              className="border-border/80 bg-card/72 shadow-[0_18px_42px_rgba(2,6,23,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45"
            >
              <CardContent className="p-6 md:p-7">
                <div className="mb-6 flex items-start gap-4">
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary shadow-[0_10px_24px_rgba(45,212,191,0.12)]">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-semibold tracking-tight text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="flex min-h-10 cursor-default items-center gap-2 rounded-full border border-border/80 bg-background/82 px-3.5 py-2 text-sm text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
                    >
                      {getSkillIcon(skill)}
                      <span>{skill}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
