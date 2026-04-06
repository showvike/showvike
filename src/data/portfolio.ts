export const siteUrl = "https://showvike.vercel.app";

export const resumeUrl = "/resume.pdf";

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
  core: string[];
  platform: string[];
  tools: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  dates: string;
  scope: string;
  highlights: string[];
}

export interface ProjectProofPoint {
  label: string;
  text: string;
}

export interface FeaturedProject {
  name: string;
  company: string;
  category: string;
  impact: string;
  summary: string;
  proofPoints: ProjectProofPoint[];
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
  openToRoles: string[];
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
    "Open to Software Engineer, Full-Stack Engineer, and Shopify-focused roles where I can contribute to scalable product work and modern web delivery.",
  openToRoles: [
    "Software Engineer",
    "Full-Stack Engineer",
    "Shopify-Focused Roles",
  ],
  contact: {
    location: "Mirpur, Dhaka, Bangladesh",
    email: "showvike@gmail.com",
    linkedin: "https://linkedin.com/in/showvike",
    github: "https://github.com/showvike",
    resumeUrl,
  },
  stats: [
    { value: "2+ Years", label: "production software delivery" },
    { value: "7M+ Users", label: "platform scale handled in migration work" },
    { value: "5 Roles", label: "role-based product workflows" },
    { value: "৳4 Crore+", label: "ticket sales supported by coupon flows" },
  ],
  skills: {
    core: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "Shopify",
      "NodeJS",
      "ExpressJS",
      "TailwindCSS",
      "REST API",
    ],
    platform: [
      "Redux Toolkit",
      "RTK Query",
      "GraphQL",
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
      "Polaris",
      "Liquid",
    ],
    tools: [
      "Git",
      "GitHub",
      "Chrome DevTools",
      "Postman",
      "Vercel",
      "Figma",
      "Jira",
    ],
  },
  experiences: [
    {
      role: "Software Engineer",
      company: "Zecodeek IT Ltd",
      location: "Mirpur DOHS, Dhaka",
      dates: "August 2025 – Present",
      scope:
        "Shopify theme and app development focused on reusable storefront architecture, merchant workflows, and third-party integrations.",
      highlights: [
        "Build and maintain custom Shopify themes and apps across storefront and admin experiences.",
        "Work across Liquid, JavaScript, CSS, ReactJS, and Polaris for merchant-facing delivery.",
        "Create reusable components and connect third-party services through Shopify REST and GraphQL APIs.",
        "Turn Figma designs into responsive builds while improving performance, SEO, and usability.",
      ],
    },
    {
      role: "Jr. Software Engineer",
      company: "Doodle Inc.",
      location: "Mirpur DOHS, Dhaka",
      dates: "November 2023 – July 2025",
      scope:
        "Full-stack product work across hiring, social, and ticketing platforms built with NextJS, NodeJS, and AWS-backed services.",
      highlights: [
        "Developed responsive interfaces with ReactJS and NextJS for production web products.",
        "Built server-side features with NodeJS and supported role-based product workflows.",
        "Collaborated through GitHub, code review, and Agile delivery processes.",
        "Deployed and monitored cloud-hosted applications with a focus on stability and performance.",
      ],
    },
    {
      role: "Intern Web Developer",
      company: "Tiggzy IT",
      location: "Kawran Bazar, Dhaka",
      dates: "July 2023 – October 2023",
      scope:
        "Frontend, backend, database, and deployment work for client portfolio, e-commerce, and HRM systems.",
      highlights: [
        "Developed frontend and backend features using ReactJS, NodeJS, ExpressJS, MongoDB, and MySQL.",
        "Worked on live applications across portfolio, e-commerce, and internal business tools.",
        "Supported deployment, maintenance, and team collaboration through Git and GitHub.",
      ],
    },
  ],
  featuredProjects: [
    {
      name: "Custom Shopify Stores & Themes",
      company: "Zecodeek IT Ltd",
      category: "Shopify Storefronts",
      impact: "Merchant-manageable storefront architecture.",
      summary:
        "Custom Shopify storefronts built for flexible sections, responsive layouts, and easier merchant control.",
      proofPoints: [
        {
          label: "Challenge",
          text: "Merchants needed tailored storefront experiences without depending on developers for routine content and layout updates.",
        },
        {
          label: "Contribution",
          text: "Built custom themes and reusable dynamic sections with Shopify Liquid, JavaScript, CSS, ReactJS, and Polaris.",
        },
        {
          label: "Result",
          text: "Delivered storefronts with more manageable content workflows and stronger performance, SEO, and usability.",
        },
      ],
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
      impact: "Custom admin workflows and integrations.",
      summary:
        "Internal Shopify apps built to support merchant operations beyond the default admin experience.",
      proofPoints: [
        {
          label: "Challenge",
          text: "Merchants needed custom workflows for dashboards, product operations, order handling, and third-party integrations.",
        },
        {
          label: "Contribution",
          text: "Built app interfaces and backend flows for admin dashboards, product and order management, and REST and GraphQL API integrations.",
        },
        {
          label: "Result",
          text: "Delivered custom Shopify tooling that supported day-to-day operations in a single merchant-focused workflow.",
        },
      ],
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
      impact: "Global job product with 5 user roles.",
      summary:
        "A role-based hiring platform combining admin tooling, search, notifications, email updates, and payments.",
      proofPoints: [
        {
          label: "Challenge",
          text: "The platform had to support 5 user roles, complex access rules, admin operations, advanced search, and payment flows in one product.",
        },
        {
          label: "Contribution",
          text: "Built role-based workflows, candidate-agency tagging, employer invite flows, notifications, email updates, and Amazon Payfort integration.",
        },
        {
          label: "Result",
          text: "Shipped a production hiring platform with complex multi-role workflows and operational tooling for global use.",
        },
      ],
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
      impact: "NextJS migration work on a 7M+ user platform.",
      summary:
        "Migration work focused on improving SEO and performance for a large-scale social product.",
      proofPoints: [
        {
          label: "Challenge",
          text: "A high-traffic ReactJS application needed a move to NextJS to improve search visibility and performance at scale.",
        },
        {
          label: "Contribution",
          text: "Contributed to the ReactJS to NextJS migration and built an investor data room to track DAU and MAU.",
        },
        {
          label: "Result",
          text: "Supported migration work on a platform serving 7M+ users while adding investor-facing reporting capabilities.",
        },
      ],
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
      impact: "Coupon workflows tied to ticket sales above ৳4 crore.",
      summary:
        "Coupon management for a large-scale concert ticketing product across customer, backend, and admin flows.",
      proofPoints: [
        {
          label: "Challenge",
          text: "The ticketing platform needed reliable coupon logic across customer checkout, backend validation, and admin operations during high-volume sales.",
        },
        {
          label: "Contribution",
          text: "Built coupon create, edit, validate, and tracking functionality across the frontend, backend, and admin panel.",
        },
        {
          label: "Result",
          text: "Supported promotional workflows for concert ticket sales above ৳4 crore with clearer operational control.",
        },
      ],
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
