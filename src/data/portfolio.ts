export const siteUrl = "https://showvike.vercel.app";

export const resumeUrl =
  "https://drive.google.com/file/d/1ZLyxx1_OH-F8cH-jKDE1ZEFUS6PcXd7b/view?usp=sharing";

export interface ContactInfo {
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillsData {
  expertise: string[];
  comfortable: string[];
  familiar: string[];
  tools: string[];
}

export interface ExperienceProject {
  name: string;
  description: string;
  impact?: string;
  stack: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  dates: string;
  summary: string;
  responsibilities: string[];
  keyProjects: ExperienceProject[];
}

export interface FeaturedProject {
  name: string;
  company: string;
  category: string;
  impact: string;
  description: string;
  stack: string[];
}

export interface ProblemSolvingProfile {
  name: string;
  url: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  years: string;
}

export interface AchievementsData {
  highlights: string[];
  leadership: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  headline: string;
  summary: string;
  availability: string;
  contact: ContactInfo;
  stats: Stat[];
  skills: SkillsData;
  experiences: ExperienceItem[];
  featuredProjects: FeaturedProject[];
  problemSolving: ProblemSolvingProfile[];
  education: EducationData;
  achievements: AchievementsData;
}

export const portfolioData: PortfolioData = {
  name: "Showvike Mondal Ovi",
  title: "Software Engineer",
  headline:
    "Building full-stack products, Shopify experiences, and scalable web platforms.",
  summary:
    "Full-stack software engineer with over 2 years of professional experience building scalable web platforms and Shopify products. Strong in ReactJS, NextJS, JavaScript, TypeScript, Shopify, NodeJS, and ExpressJS, with hands-on AWS experience across Cognito, AppSync, Amplify, Lambda, S3, DynamoDB, and SES. I care about clean implementation, performance, SEO, and maintainable product delivery.",
  availability:
    "I am based in Mirpur, Dhaka and open to discussing software engineering roles, product work, and Shopify-focused builds.",
  contact: {
    location: "Mirpur, Dhaka, Bangladesh",
    email: "showvike@gmail.com",
    linkedin: "https://linkedin.com/in/showvike",
    github: "https://github.com/showvike",
    resumeUrl,
  },
  stats: [
    { value: "2+ Years", label: "professional experience" },
    { value: "7M+ Users", label: "platform migration exposure" },
    { value: "5 Roles", label: "job platform access model" },
    { value: "৳4 Crore+", label: "ticket sales on coupon project" },
  ],
  skills: {
    expertise: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Redux Toolkit",
      "RTK Query",
      "REST API",
      "Git",
      "GitHub",
      "Shopify",
    ],
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
      "Ant Design",
      "Polaris",
      "Liquid",
    ],
    familiar: [
      "GraphQL",
      "Firebase",
      "Socket.IO",
      "Redux",
      "Axios",
      "Golang",
      "Python",
      "C",
      "C++",
      "PHP",
    ],
    tools: [
      "Chrome DevTools",
      "Postman",
      "Vercel",
      "Netlify",
      "Figma",
      "Jira",
      "Hostinger",
    ],
  },
  experiences: [
    {
      role: "Software Engineer",
      company: "Zecodeek IT Ltd",
      location: "Mirpur DOHS, Dhaka",
      dates: "August 2025 – Present",
      summary:
        "Working on custom Shopify storefronts and apps with a focus on reusable architecture, merchant-friendly experiences, and reliable third-party integrations.",
      responsibilities: [
        "Design, develop, and maintain custom Shopify themes and apps.",
        "Work with Liquid, JavaScript, CSS, ReactJS, and Shopify Polaris.",
        "Build scalable reusable components for storefront and admin experiences.",
        "Integrate third-party services using Shopify REST and GraphQL APIs.",
        "Translate Figma designs into responsive templates and improve performance, SEO, and usability.",
      ],
      keyProjects: [
        {
          name: "Custom Shopify Stores & Themes",
          impact: "Dynamic sections and merchant-manageable storefront layouts.",
          description:
            "Built fully customized Shopify stores and themes with flexible content sections and layouts that merchants can manage without code changes.",
          stack: [
            "Shopify Liquid",
            "JavaScript",
            "CSS",
            "ReactJS",
            "Polaris",
          ],
        },
        {
          name: "Shopify App Development",
          impact: "Admin workflows, product and order management, and third-party integrations.",
          description:
            "Built custom Shopify apps with internal dashboards, product and order management flows, and integrations with external services.",
          stack: [
            "ReactJS",
            "ExpressJS",
            "NodeJS",
            "Shopify APIs (REST & GraphQL)",
            "Polaris",
            "MongoDB",
          ],
        },
      ],
    },
    {
      role: "Jr. Software Engineer",
      company: "Doodle Inc.",
      location: "Mirpur DOHS, Dhaka",
      dates: "November 2023 – July 2025",
      summary:
        "Built and maintained production features across job, social, and event platforms using NextJS, NodeJS, and AWS-backed infrastructure.",
      responsibilities: [
        "Developed and maintained responsive user interfaces using ReactJS, NextJS, and AWS services.",
        "Built scalable server-side applications with NodeJS.",
        "Collaborated through GitHub, code reviews, and Agile workflows.",
        "Deployed and monitored applications on cloud infrastructure.",
      ],
      keyProjects: [
        {
          name: "Global Job Portal",
          impact: "Supported 5 user types with role-based workflows and admin operations.",
          description:
            "Built a global job platform with an admin panel, advanced search, candidate-agency tagging, employer invite flows, notifications, email updates, role-based access, and Amazon Payfort integration.",
          stack: [
            "NextJS",
            "ReactJS",
            "NodeJS",
            "Redux Toolkit",
            "GraphQL",
            "TypeScript",
            "Material UI",
            "TailwindCSS",
            "JavaScript",
            "AWS Cognito",
            "AWS AppSync",
            "AWS Lambda",
            "AWS SES",
            "AWS Amplify",
            "AWS S3",
            "AWS DynamoDB",
          ],
        },
        {
          name: "Social Media Platform Migration",
          impact: "Contributed to a NextJS migration for a platform serving 7M+ users.",
          description:
            "Worked on the migration from ReactJS to NextJS to improve SEO and performance, and built an investor data room to track DAU and MAU.",
          stack: [
            "ReactJS",
            "NextJS",
            "JavaScript",
            "Bootstrap",
            "TailwindCSS",
            "Material UI",
            "AWS Cognito",
            "AWS AppSync",
            "AWS Lambda",
            "AWS Amplify",
            "AWS S3",
            "AWS DynamoDB",
            "Redux",
            "GraphQL",
          ],
        },
        {
          name: "Concert Event Organizer Platform",
          impact: "Coupon workflows supported concert ticket sales above ৳4 crore.",
          description:
            "Developed coupon creation, editing, validation, and tracking across the frontend, backend, and admin panel for a large-scale ticketing platform.",
          stack: [
            "ReactJS",
            "NextJS",
            "Bootstrap",
            "Redux Toolkit",
            "NodeJS",
            "Material UI",
            "AWS Cognito",
            "AWS AppSync",
            "AWS Lambda",
            "AWS Amplify",
            "AWS S3",
            "AWS DynamoDB",
            "GraphQL",
          ],
        },
      ],
    },
    {
      role: "Intern Web Developer",
      company: "Tiggzy IT",
      location: "Kawran Bazar, Dhaka",
      dates: "July 2023 – October 2023",
      summary:
        "Contributed across frontend, backend, database modeling, and deployment work while building client and internal business applications.",
      responsibilities: [
        "Developed frontend and backend components using ReactJS, NodeJS, ExpressJS, MongoDB, and MySQL.",
        "Deployed and maintained live applications.",
        "Collaborated with Git and GitHub in a team environment.",
      ],
      keyProjects: [
        {
          name: "Company Portfolio Sites",
          description:
            "Built custom portfolio websites with dynamic admin panels so clients could manage section content without developer support.",
          stack: [
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
            "JWT",
            "TailwindCSS",
            "MySQL",
          ],
        },
        {
          name: "E-commerce Platform",
          description:
            "Developed an e-commerce application with product listings, cart flows, and order processing.",
          stack: [
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
            "TailwindCSS",
            "NextJS",
            "JWT",
            "Ant Design",
          ],
        },
        {
          name: "HRM System",
          description:
            "Designed and deployed an HRM system with relational data structures and role-based access.",
          stack: [
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "JWT",
            "Bootstrap",
            "MySQL",
          ],
        },
      ],
    },
  ],
  featuredProjects: [
    {
      name: "Custom Shopify Stores & Themes",
      company: "Zecodeek IT Ltd",
      category: "Shopify Storefronts",
      impact: "Dynamic sections and merchant-manageable layouts.",
      description:
        "Delivered custom storefronts and themes with flexible section architecture, responsive builds, and stronger performance and usability.",
      stack: [
        "Shopify Liquid",
        "JavaScript",
        "CSS",
        "ReactJS",
        "Polaris",
      ],
    },
    {
      name: "Shopify App Development",
      company: "Zecodeek IT Ltd",
      category: "Shopify Apps",
      impact: "Admin dashboards, product flows, and third-party integrations.",
      description:
        "Built custom Shopify apps for merchant operations, including internal dashboards, product and order management, and API integrations.",
      stack: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Shopify APIs (REST & GraphQL)",
        "Polaris",
        "MongoDB",
      ],
    },
    {
      name: "Global Job Portal",
      company: "Doodle Inc.",
      category: "Multi-Role Platform",
      impact: "Global job product supporting 5 user roles.",
      description:
        "Built role-based workflows, admin tooling, advanced search, notifications, email updates, and payment integration for a global hiring platform.",
      stack: [
        "NextJS",
        "ReactJS",
        "NodeJS",
        "TypeScript",
        "Redux Toolkit",
        "GraphQL",
        "AWS",
      ],
    },
    {
      name: "Social Media Platform Migration",
      company: "Doodle Inc.",
      category: "Migration & Performance",
      impact: "NextJS migration work on a platform with 7M+ users.",
      description:
        "Contributed to a ReactJS to NextJS migration focused on SEO and performance, and built investor-facing DAU and MAU reporting views.",
      stack: [
        "ReactJS",
        "NextJS",
        "JavaScript",
        "Redux",
        "GraphQL",
        "Material UI",
        "AWS",
      ],
    },
    {
      name: "Concert Event Organizer Platform",
      company: "Doodle Inc.",
      category: "Ticketing Platform",
      impact: "Coupon management used in ticket sales above ৳4 crore.",
      description:
        "Implemented coupon creation, editing, validation, and tracking across the customer flow, backend, and admin panel.",
      stack: [
        "ReactJS",
        "NextJS",
        "NodeJS",
        "Redux Toolkit",
        "GraphQL",
        "Material UI",
        "AWS",
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
    highlights: [
      "ICPC 2019 participant",
      "Participant, Dhaka City College Programming Contest 2019",
      "Finalist, Dhaka City College Programming Weekly Contest 2018",
      "Participant, Islamic University of Technology ICT Fest 2018",
    ],
    leadership: ["Organizer & Judge, DCC CSE WEEK: 2020, 2021, 2022"],
  },
};
