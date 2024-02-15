import React from 'react';
import { CTAComponent, ImageComponent } from '../../externalComponent';
import { cn } from '../../tailwind';
import TextLink from '../../TextLink';
import Icon, { IconType } from '../../icon';
import Text from './text';

import { HighlightItem, MegaMenuSubNavMenuItem } from '../types';
import LinkSection from './LinkSection';

export const HorizontalHighlightBox = ({
  description,
  image,
  cta,
}: HighlightItem) => {
  return (
    <div className="flex gap-5 max-tablet:hidden">
      <div className="w-[140px] relative">
        <ImageComponent
          imageData={image}
          imageClassName="h-full object-contain w-full absolute"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 h-fit">
        <p className="text-[16px] leading-[1.1] font-semibold">{description}</p>
        <CTAComponent {...cta}>
          <TextLink label={cta.label} />
        </CTAComponent>
      </div>
    </div>
  );
};

const InfoBox = ({
  icon,
  title,
  description,
}: {
  icon?: IconType;
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <p className="flex items-center">
        {icon ? <Icon icon={icon} className="h-5 flex-none me-3" /> : null}
        <span className="inline text-desktop/heading-5">{title}</span>
      </p>
      {description ? (
        <Text
          as="p"
          className="text-tablet/heading-5 tablet:text-tablet/heading-2 desktop-sm:text-tablet/heading-4 desktop-lg:text-desktop/heading-3 mt-4 tablet:mt-6 desktop-sm:mt-4 desktop-lg:mt-6"
        >
          {description}
        </Text>
      ) : null}
      <div className="h-1.5 rounded-full bg-refreshSkylineBottom my-8 max-desktop-sm:my-10 desktop-lg:my-8"></div>
    </div>
  );
};

export const MegaMenuContentDesktop = ({
  item,
  hideSectionHeader = false,
  containerClassName = '',
}: {
  item: MegaMenuSubNavMenuItem;
  hideSectionHeader?: boolean;
  containerClassName?: string;
}) => {
  const { auxLinkGroupTitle, auxLinkGroupLinks } = item;
  const isAuxLinkGroupShown = auxLinkGroupTitle && auxLinkGroupLinks;
  return (
    <div className="relative min-w-[284px] desktop-lg:min-w-[380px] h-full">
      <div
        className={cn(
          'flex flex-col desktop-sm:px-8 desktop-lg:px-10 desktop-sm:py-8 desktop-lg:py-10',
          containerClassName,
        )}
      >
        {!hideSectionHeader ? (
          <InfoBox icon={item.titleIcon} title={item.title} />
        ) : null}
        <div className="flex flex-col py-[1px] overflow-y-auto overflow-x-hidden header-scrollbar flex-1">
          <LinkSection links={item.links} overviewCta={item.overviewCta} />
          {isAuxLinkGroupShown ? (
            <div
              className={cn(
                'h-full grid auto-rows-max gap-y-6 mt-6 pt-8 border-t border-gainsboroGray',
              )}
            >
              <p className="text-davyGray text-desktop/subhead-s font-var-all-small-caps">
                {auxLinkGroupTitle}
              </p>
              <LinkSection links={auxLinkGroupLinks} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export const MegaMenuContentMobile = ({
  item,
  hideSectionHeader = false,
  containerClassName,
}: {
  item: MegaMenuSubNavMenuItem;
  hideSectionHeader?: boolean;
  containerClassName?: string;
}) => {
  const { auxLinkGroupTitle, auxLinkGroupLinks } = item;
  const isAuxLinkGroupShown = auxLinkGroupTitle && auxLinkGroupLinks;
  return (
    <div className={cn('flex flex-col px-5 tablet:px-10', containerClassName)}>
      {!hideSectionHeader ? (
        <div className="pt-10">
          <InfoBox icon={item.titleIcon} title={item.title} />
        </div>
      ) : null}
      <div className="pb-4 tablet:pb-10">
        <LinkSection
          links={item.links}
          overviewCta={item.overviewCta}
          variant="MOBILE"
        />
      </div>
      {isAuxLinkGroupShown ? (
        <div
          className={cn(
            'grid grid-cols-1 auto-rows-max py-8 tablet:py-10 tablet:pb-20 border-t border-gainsboroGray',
          )}
        >
          <p className="text-davyGray text-desktop/subhead-s font-var-all-small-caps mb-2.5 tablet:mb-10">
            {auxLinkGroupTitle}
          </p>
          <LinkSection links={auxLinkGroupLinks} variant="MOBILE" />
        </div>
      ) : null}
    </div>
  );
};

const MegaMenuContent = ({
  item,
  variant = 'DESKTOP',
  desktopContainerClassName = '',
}: {
  item: MegaMenuSubNavMenuItem;
  variant?: 'MOBILE' | 'DESKTOP';
  desktopContainerClassName?: string;
}) => {
  return variant === 'MOBILE' ? (
    <MegaMenuContentMobile item={item} />
  ) : (
    <MegaMenuContentDesktop
      item={item}
      containerClassName={desktopContainerClassName}
    />
  );
};

export default MegaMenuContent;
