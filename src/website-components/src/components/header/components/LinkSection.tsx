import React from 'react';
import { cn } from '../../tailwind';
import { LinkItem } from '../types';
import { NavLink } from './NavLink';
import { CTAComponent } from '../../externalComponent';
import { OverviewTextLink } from '../../OverviewTextLink';
import { Cta } from '../../types';

const LinkSection = ({
  links,
  variant = 'DESKTOP',
  overviewCta,
}: {
  links: LinkItem[];
  overviewCta?: Cta;
  variant?: 'MOBILE' | 'DESKTOP';
}) => {
  return (
    <div
      className={cn(
        variant === 'MOBILE'
          ? 'grid auto-rows-max gap-x-10 tablet:gap-y-8 grid-cols-1 tablet:grid-cols-[repeat(2,_minmax(auto,_452px))]'
          : 'grid auto-rows-max gap-x-16 gap-y-4 desktop-lg:gap-y-6 grid-cols-[repeat(1,_minmax(auto,_300px))]',
      )}
    >
      {overviewCta ? (
        <CTAComponent {...overviewCta}>
          <OverviewTextLink
            label={overviewCta.label}
            className="max-tablet:pb-4 max-tablet:border-gainsboroGray max-tablet:border-b"
          />
        </CTAComponent>
      ) : null}
      {links?.map((link, index) => {
        return (
          <NavLink
            titleClassName={
              index !== links.length - 1
                ? 'w-full max-tablet:border-b max-tablet:py-4 border-gainsboroGray'
                : 'max-tablet:pt-4'
            }
            key={link.title}
            link={link}
          />
        );
      })}
    </div>
  );
};

export default LinkSection;
