'use client';
import React, { ReactNode } from 'react';
import { cn } from '../../tailwind';
import useIsHeaderCollapsed from './hooks/useIsHeaderCollapsed';

export const FirstRowWrapper = ({ children }: { children: ReactNode }) => {
  const isHeaderCollapsed = useIsHeaderCollapsed();
  return (
    <div
      className={cn(
        'transition-opacity duration-200',
        isHeaderCollapsed ? 'opacity-0' : 'opacity-100',
      )}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};
