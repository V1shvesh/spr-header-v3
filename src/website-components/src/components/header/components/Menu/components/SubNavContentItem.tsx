import React from 'react';
import { cn } from '../../../../tailwind';
import { ReactNode } from 'react';

export const SubNavContentItem = (props: {
  isItemActive: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'col-start-1 col-span-1 row-start-1 row-span-1 h-full',
        'transition-opacity duration-200',
        props.isItemActive
          ? 'opacity-100 z-10'
          : 'opacity-0 pointer-events-none',
      )}
    >
      {props.children}
    </div>
  );
};
