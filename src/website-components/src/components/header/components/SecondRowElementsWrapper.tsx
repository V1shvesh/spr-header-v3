import React, { Fragment } from 'react';
import { ReactElement, ReactNode } from 'react';
import { cn } from '../../tailwind';
import useIsHeaderCollapsed from './hooks/useIsHeaderCollapsed';
import { useLastScrollToDirection } from './hooks/useLastScrolledDirection';

const SecondRowElementsWrapper = ({
  children,
  className,
  searchEl,
}: {
  children: ReactNode;
  className?: string;
  searchEl?: ReactElement;
}) => {
  const isHeaderCollapsed = useIsHeaderCollapsed();
  const lastScrollToDirection = useLastScrollToDirection();
  let secondRowEl;
  if (!isHeaderCollapsed || !searchEl) {
    secondRowEl = children;
  } else if (lastScrollToDirection === 'BOTTOM') {
    secondRowEl = searchEl;
  } else if (lastScrollToDirection === 'TOP') {
    secondRowEl = (
      <Fragment>
        <Fragment>{children}</Fragment>
        <Fragment>{searchEl}</Fragment>
      </Fragment>
    );
  }

  return (
    <div className={cn('flex flex-col w-full', className)}>{secondRowEl}</div>
  );
};

export default SecondRowElementsWrapper;
