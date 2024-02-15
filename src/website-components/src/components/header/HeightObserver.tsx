'use client';
import React, { ReactNode, useLayoutEffect, useRef } from 'react';
import { BREAKPOINTS } from '../constants';
import useIsHeaderCollapsed from './components/hooks/useIsHeaderCollapsed';
import { cn } from '../tailwind';

const FIRST_ROW_HEIGHT = 38;
const HEADER_TRANSLATE_OFFSET = `desktop-sm:-translate-y-[38px]`;

const updateHeaderHeight = (
  headerHeight: number,
  isHeaderCollapsed: boolean,
) => {
  const isMobileScreenSize = window.matchMedia(
    `not screen and (min-width: ${BREAKPOINTS['desktop-sm']})`,
  ).matches;
  document.documentElement.style.setProperty(
    '--header-height',
    `${
      headerHeight -
      (isHeaderCollapsed && !isMobileScreenSize ? FIRST_ROW_HEIGHT : 0)
    }px`,
  );
};

export const HeightObserver = ({
  className,
  children,
  isMinimalHeader,
}: {
  className?: string;
  children: ReactNode;
  isMinimalHeader?: boolean;
}) => {
  const isHeaderCollapsed = useIsHeaderCollapsed();
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        updateHeaderHeight(entry.contentRect.height, isHeaderCollapsed);
      }
    });
    observer.observe(containerRef.current!);
    return () => {
      document.documentElement.style.setProperty('--header-height', `${0}px`);
      observer.disconnect();
    };
  }, [children, isHeaderCollapsed]);
  return (
    <div
      ref={containerRef}
      className={cn(
        'transition-transform duration-200',
        !isMinimalHeader && isHeaderCollapsed ? HEADER_TRANSLATE_OFFSET : '',
        className,
      )}
    >
      {children}
    </div>
  );
};
