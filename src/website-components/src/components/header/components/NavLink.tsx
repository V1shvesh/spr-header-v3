import React from 'react';
import { LinkItem } from '../types';
import { CTAComponent } from '../../externalComponent';
import { cn } from '../../tailwind';

export const NavLink = ({
  link,
  titleClassName,
}: {
  link: LinkItem;
  titleClassName?: string;
}) => {
  return (
    <CTAComponent {...link.cta}>
      <div className="group">
        <span
          className={cn(
            'block text-mobile/body-m tablet:text-tablet/body-l desktop-sm:text-tablet/body-m desktop-lg:text-desktop/body-m group-hover:text-primaryOceanBlue',
            titleClassName,
          )}
        >
          {link.title}
        </span>
      </div>
    </CTAComponent>
  );
};
