import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title?: string;
  id?: string;
}

export function SectionContainer({ children, title, id, className, ...props }: SectionContainerProps) {
  return (
    <section id={id} className={cn('py-8 md:py-12', className)} {...props}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-8 md:mb-12 text-center">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
