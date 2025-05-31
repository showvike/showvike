
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ContactInfo {
  phone: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
}

interface HeroSectionProps {
  id?: string; // For navigation
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo; // Keep for potential internal use, but display is in global header/footer
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.6, // Delay image animation slightly after text
    },
  },
};

export function HeroSection({ id, name, title, summary, contact }: HeroSectionProps) {
  return (
    <motion.section 
      id={id} 
      className="min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-12rem)] flex flex-col justify-center py-12 md:py-20"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-3">
          <motion.p 
            className="text-primary font-mono text-md md:text-lg mb-4"
            variants={itemVariants}
          >
            Hi, my name is
          </motion.p>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-foreground mb-3 leading-tight"
            variants={itemVariants}
          >
            {name}.
          </motion.h1>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-muted-foreground mb-6 leading-tight"
            variants={itemVariants}
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p 
            className="text-foreground/80 leading-relaxed mb-8 max-w-xl text-base md:text-lg"
            variants={itemVariants}
          >
            {summary}
          </motion.p>
          
          <motion.div 
            className="space-x-0 space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row items-start"
            variants={itemVariants}
          >
            <Button asChild variant="outline" size="lg" className="btn-bc-style px-8 py-6 text-base">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="md:col-span-2 flex justify-center md:justify-end order-first md:order-last"
          variants={imageVariants} // Using a separate variant for the image container
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            <div className="absolute inset-0 rounded-full bg-primary/20 transform group-hover:scale-105 transition-transform duration-300 ease-in-out"></div>
            <Image
              src="/profile-image.jpeg" 
              alt={`Photo of ${name}`}
              width={400} 
              height={400}
              className="rounded-full object-cover w-full h-full relative z-10 shadow-lg border-2 border-primary/50 group-hover:border-primary transition-colors duration-300"
              priority
              data-ai-hint="profile photo"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
