'use client';
import React, { useCallback, useState } from 'react';
import Icon from '../../icon';
import { Button } from '../../button';
import MobileMenu from '../components/MobileMenu';
import { LayoutProps } from '../types';
import { CTAComponent } from '../../externalComponent/ExternalComponent';
import useIsHeaderCollapsed from '../components/hooks/useIsHeaderCollapsed';

const Mobile = (props: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = useCallback(() => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  }, [setIsMenuOpen]);
  const isHeaderCollapsed = useIsHeaderCollapsed();
  const isSearchElShown = !!props.searchEl && isHeaderCollapsed;
  return (
    <div>
      <div
        className="relative px-5 py-[18px] bg-white flex justify-between w-full z-10"
        style={props.backgroundStyles}
      >
        <CTAComponent {...props.mainLogoCta}>
          <Icon icon="sprinklrBurst" alt="Sprinklr Logo" className="h-10" />
        </CTAComponent>
        {isSearchElShown ? props.searchEl : null}
        <div className="flex gap-8">
          {props.primaryCta && !isSearchElShown ? (
            <CTAComponent {...props.primaryCta}>
              <Button variant="primary">{props.primaryCta.label}</Button>
            </CTAComponent>
          ) : null}
          <Button
            variant="bare"
            size="bare"
            className="p-0"
            onClick={handleMenuClick}
          >
            {isMenuOpen ? (
              <Icon icon="close" alt="close" className="h-8 w-8" />
            ) : (
              <Icon icon="hamburgerMenu" alt="Menu" className="h-6" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen ? <MobileMenu {...props} /> : null}
    </div>
  );
};

export default Mobile;
