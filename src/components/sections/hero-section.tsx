'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ContactInfo, Stat } from '@/data/portfolio';

interface HeroSectionProps {
  id?: string;
  name: string;
  title: string;
  headline: string;
  summary: string;
  stats: Stat[];
  contact: ContactInfo;
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.45,
    },
  },
};

export function HeroSection({
  id,
  name,
  title,
  headline,
  summary,
  stats,
  contact,
}: HeroSectionProps) {
  return (
    <motion.section
      id={id}
      className="relative flex min-h-[calc(100vh-7rem)] flex-col justify-center py-12 md:min-h-[calc(100vh-8rem)] md:py-20 lg:py-24"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <div className="max-w-3xl">
          <motion.div variants={itemVariants}>
            <p className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-primary/90 md:text-sm">
              {title}
            </p>
          </motion.div>

          <motion.h1
            className="max-w-4xl text-4xl font-headline font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            variants={itemVariants}
          >
            {name}
          </motion.h1>

          <motion.h2
            className="mt-5 max-w-3xl text-2xl font-headline font-semibold leading-[1.15] text-muted-foreground sm:text-3xl md:text-[2.5rem]"
            variants={itemVariants}
          >
            {headline}
          </motion.h2>

          <motion.p
            className="mt-7 max-w-2xl text-base leading-8 text-foreground/80 md:text-lg md:leading-8"
            variants={itemVariants}
          >
            {summary}
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center"
            variants={itemVariants}
          >
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/80 bg-card/70 px-4 py-2 shadow-[0_10px_24px_rgba(2,6,23,0.12)]">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{contact.location}</span>
            </div>
            <Link
              href={`mailto:${contact.email}`}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/80 bg-card/70 px-4 py-2 shadow-[0_10px_24px_rgba(2,6,23,0.12)] transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="min-w-0 break-all sm:break-normal">{contact.email}</span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            variants={itemVariants}
          >
            <Button asChild size="lg" className="btn-bc-style-filled h-12 w-full rounded-full px-6 sm:w-auto">
              <a
                href={contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-bc-style h-12 w-full rounded-full px-6 sm:w-auto">
              <Link href="#contact">
                Contact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 rounded-full border border-border/70 bg-card/55 px-5 sm:w-auto">
              <Link href={contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 rounded-full border border-border/70 bg-card/55 px-5 sm:w-auto">
              <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            variants={itemVariants}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[110px] flex-col justify-between rounded-[1.5rem] border border-border/80 bg-card/65 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.18)] backdrop-blur"
              >
                <p className="text-2xl font-headline font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center lg:justify-end"
          variants={imageVariants}
        >
          <div className="relative w-full max-w-[26rem]">
            <div className="absolute -inset-6 -z-10 rounded-[2.4rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.32),transparent_58%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-primary/20 bg-card/82 p-4 shadow-[0_28px_70px_rgba(2,6,23,0.42)]">
              <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
              <Image
                src="/profile-image.jpeg"
                alt={`Photo of ${name}`}
                width={400}
                height={440}
                className="aspect-[4/4.5] w-full rounded-[1.75rem] object-cover"
                priority
                data-ai-hint="profile photo"
              />
              <div className="mt-4 rounded-[1.4rem] border border-border/80 bg-background/82 px-4 py-4">
                <p className="font-headline text-lg font-semibold text-foreground">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  ReactJS, NextJS, Shopify, NodeJS, performance, SEO, and API-driven product work.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
