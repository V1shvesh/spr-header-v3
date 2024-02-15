import React, { ReactNode, useCallback } from 'react';
import { cn } from '../../../../tailwind';
import { Button } from '../../../../button';
import { Cta } from '../../../../types';
import { CTAComponent } from '../../../../externalComponent';
import Icon from '../../../../icon';

type SubNavLinkItemProps = {
  label: string;
  cta: Cta;
};

type SubNavTriggerItemProps = {
  label: string;
  isActive: boolean;
  onClick: (label: string) => void;
};

const SubNavLinkItem = ({ label, cta }: SubNavLinkItemProps) => {
  return (
    <CTAComponent {...cta}>
      <Button
        key={label}
        variant="bare"
        size="bare"
        className="flex gap-6 items-stretch justify-start"
        asChild
      >
        <span className="text-desktop/subhead-s desktop-lg:text-desktop/subhead-m font-var-all-small-caps py-1 text-black hover:text-primaryOceanBlue text-start ps-7">
          {label}
        </span>
      </Button>
    </CTAComponent>
  );
};

const SubNavTriggerItem = ({
  label,
  isActive,
  onClick,
}: SubNavTriggerItemProps) => {
  const handleClick = useCallback(() => {
    onClick?.(label);
  }, [label, onClick]);

  return (
    <Button
      key={label}
      variant="bare"
      size="bare"
      className="flex justify-between"
      onClick={handleClick}
    >
      <div className="flex gap-6 items-center h-full">
        <div
          className={cn(
            'w-1 h-6 rounded-full',
            isActive ? 'bg-primarySkyBlue' : '',
          )}
        />
        <span className="text-desktop/subhead-s desktop-lg:text-desktop/subhead-m font-var-all-small-caps py-1 text-black hover:text-primaryOceanBlue text-start">
          {label}
        </span>
      </div>
      <Icon icon="chevron" className="-rotate-90 h-3.5 shrink-0" />
    </Button>
  );
};

export const SubNavLinkSection = ({
  items,
  title,
  isTopSeparatorEnabled = false,
}: {
  items: {
    label: string;
    cta: Cta;
  }[];
  title?: string;
  isTopSeparatorEnabled?: boolean;
}) => {
  return (
    <div
      key={items[0].label}
      className={
        isTopSeparatorEnabled
          ? 'border-t border-gainsboroGray pt-8 desktop-lg:pt-10'
          : ''
      }
    >
      {title ? (
        <div className="text-desktop/subhead-s font-var-all-small-caps text-davyGray mb-6 desktop-lg:mb-8">
          {title}
        </div>
      ) : null}
      <div className="flex flex-col gap-y-6">
        {items.map(item => {
          return (
            <SubNavLinkItem
              key={item.label}
              label={item.label}
              cta={item.cta}
            />
          );
        })}
      </div>
    </div>
  );
};

export const SubNavTriggerSection = ({
  items,
  activeSubNavItemLabel,
  onItemClick,
  title,
  isTopSeparatorEnabled = false,
}: {
  items: {
    label: string;
  }[];
  activeSubNavItemLabel: string;
  onItemClick: (label: string) => void;
  title?: string;
  isTopSeparatorEnabled?: boolean;
}) => {
  return (
    <div
      key={items[0].label}
      className={
        isTopSeparatorEnabled
          ? 'border-t border-gainsboroGray pt-8 desktop-lg:pt-10'
          : ''
      }
    >
      {title ? (
        <div className="text-desktop/subhead-s font-var-all-small-caps text-davyGray mb-6 desktop-lg:mb-8">
          {title}
        </div>
      ) : null}
      <div className="flex flex-col gap-y-6">
        {items.map(item => {
          const isActive = item.label === activeSubNavItemLabel;
          return (
            <SubNavTriggerItem
              key={item.label}
              label={item.label}
              isActive={isActive}
              onClick={onItemClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export const SubNav = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'w-[290px] desktop-lg:w-[324px] border-r ps-6 desktop-lg:ps-8 pe-3 desktop-lg:pe-4 border-menuBorder',
        className,
      )}
    >
      <div className="flex flex-col gap-8 desktop-lg:gap-10 py-8 desktop-lg:py-10 pe-3 desktop-lg:pe-4 max-h-[calc(100vh_-_var(--header-height)_-_20px)] desktop-sm:overflow-auto header-scrollbar">
        {children}
      </div>
    </div>
  );
};
