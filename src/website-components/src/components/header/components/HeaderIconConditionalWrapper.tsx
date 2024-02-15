'use client';
import React from 'react';
import { Fragment } from 'react';
import Icon from '../../icon';
import { cn } from '../../tailwind';
import useIsHeaderCollapsed from './hooks/useIsHeaderCollapsed';

export const HeaderIconConditionalWrapper = () => {
  const isHeaderCollapsed = useIsHeaderCollapsed();
  return (
    <div className="flex">
      <Icon
        icon="sprinklrBurst"
        alt="Sprinklr Burst Logo"
        className={cn(
          'inline pe-1.5 desktop-lg:pe-3 desktop-sm:h-6 desktop-lg:h-[40px] shrink-0 transition-transform duration-400',
          isHeaderCollapsed ? 'max-desktop-sm:scale-[1.3333]' : '',
        )}
      />
      <Icon
        icon="sprinklrName"
        alt="Sprinklr"
        className={cn(
          'inline desktop-sm:h-[23px] desktop-lg:h-[38px] shrink-0 transition-[opacity,transform] duration-400 ease-out',
          isHeaderCollapsed
            ? 'opacity-0 -translate-x-1'
            : 'opacity-100 delay-200',
        )}
      />
    </div>
  );
};
