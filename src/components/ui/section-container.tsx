import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title?: string;
  description?: string;
  id?: string;
}

export function SectionContainer({
  children,
  title,
  description,
  id,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-14 md:scroll-mt-28 md:py-18 lg:scroll-mt-32 lg:py-20', className)}
      {...props}
    >
      {title && (
        <div className="mb-10 flex flex-col gap-5 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 h-px w-16 bg-gradient-to-r from-primary/80 to-primary/10" />
            <h2 className="text-3xl font-headline font-semibold tracking-tight text-foreground md:text-4xl">
              {title}
            </h2>
          </div>
          {description ? (
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base lg:text-right">
              {description}
            </p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}
