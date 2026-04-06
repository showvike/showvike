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
    <section id={id} className={cn('py-10 md:py-14', className)} {...props}>
      {title && (
        <div className="mb-8 md:mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.32em] text-primary/80">
                Section
              </span>
              <span className="h-px w-16 bg-border/80" />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-foreground">
              {title}
            </h2>
          </div>
          {description ? (
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base md:text-right">
              {description}
            </p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}
