import { CTAComponent } from '../../../../../externalComponent';
import { ReactNode } from 'react';
import { Button } from '../../../../../button';
import { Cta } from '../../../../../types';
import { MenuSlide } from '../../../MenuSlide';
import MenuLabel from '../MenuLabel';
import { cn } from '../../../../../tailwind';
import React from 'react';

function SubNavLinkItem({
  label,
  cta,
  isBottomSeparatorEnabled = true,
}: {
  label: string;
  cta: Cta;
  isBottomSeparatorEnabled?: boolean;
}): JSX.Element {
  return (
    <CTAComponent {...cta}>
      <div
        className={
          isBottomSeparatorEnabled ? 'border-b border-b-baseBlack/10' : ''
        }
      >
        <MenuLabel label={label} isArrowEnabled />
      </div>
    </CTAComponent>
  );
}

function SubNavTriggerItem({
  item,
  onClick,
  isBottomSeparatorEnabled = true,
}: {
  item: {
    label: string;
  };
  onClick: (item: any) => void;
  isBottomSeparatorEnabled?: boolean;
}): JSX.Element {
  return (
    <div
      className={
        isBottomSeparatorEnabled ? 'border-b border-b-baseBlack/10' : ''
      }
    >
      <Button
        variant="bare"
        size="bare"
        className="w-full m-0 p-0"
        onClick={() => onClick(item)}
      >
        <MenuLabel label={item.label} isArrowEnabled />
      </Button>
    </div>
  );
}

export const SubNavLinkSection = ({
  items,
  title,
  isTopSeparatorEnabled = false,
  disablePadding = false,
  className,
}: {
  items: {
    label: string;
    cta: Cta;
  }[];
  title?: string;
  isTopSeparatorEnabled?: boolean;
  disablePadding?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        disablePadding ? '' : 'pt-10 pb-2 tablet:pt-16 tablet:pb-2',
        isTopSeparatorEnabled ? 'border-t border-baseBlack/10' : '',
        className,
      )}
    >
      {title ? (
        <div className="text-desktop/subhead-m tablet:text-desktop/subhead-l text-davyGray font-var-all-small-caps mb-4 tablet:mb-8">
          {title}
        </div>
      ) : null}
      {items.map((item, index) => {
        return (
          <SubNavLinkItem
            key={item.label}
            label={item.label}
            cta={item.cta}
            isBottomSeparatorEnabled={index !== items.length - 1}
          />
        );
      })}
    </div>
  );
};

export const SubNavTriggerSection = ({
  items,
  title,
  isTopSeparatorEnabled = false,
  disablePadding = false,
  onItemClick,
  className,
}: {
  items: {
    label: string;
  }[];
  title?: string;
  onItemClick: (item: any) => void;
  isTopSeparatorEnabled?: boolean;
  disablePadding?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        disablePadding ? '' : 'pt-10 pb-4 tablet:pt-16 tablet:pb-8',
        isTopSeparatorEnabled ? 'border-t border-baseBlack/10' : '',
        className,
      )}
    >
      {title ? (
        <div className="text-desktop/subhead-m tablet:text-desktop/subhead-l text-davyGray font-var-all-small-caps mb-4 tablet:mb-6">
          {title}
        </div>
      ) : null}
      {items.map((item, index) => {
        return (
          <SubNavTriggerItem
            key={item.label}
            item={item}
            onClick={onItemClick}
            isBottomSeparatorEnabled={index !== items.length - 1}
          />
        );
      })}
    </div>
  );
};

export const SubNavOverlay = ({
  isSubNavOpen,
  children,
  className,
}: {
  isSubNavOpen: boolean;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <MenuSlide
      isVisible={isSubNavOpen}
      className={cn('flex flex-col z-10', className)}
    >
      {children}
    </MenuSlide>
  );
};
