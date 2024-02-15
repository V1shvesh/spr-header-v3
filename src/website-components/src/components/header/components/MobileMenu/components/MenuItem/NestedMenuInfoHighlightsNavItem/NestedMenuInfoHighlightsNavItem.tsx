import { Button } from '../../../../../../button';
import { cn } from '../../../../../../tailwind';
import React, { useCallback, useEffect, useState } from 'react';
import MenuLabel from '../../MenuLabel';
import BackNav from '../../BackNav';
import SubNav from '../../SubNav';
import SubNavItem from '../../SubNavItem';
import {
  InfoHighlightsNavItem,
  LinkColumnsSubNavItem,
  NavLinkColumnSection,
  NestedMenuInfoHighlightsNavItem as NestedMenuInfoHighlightsNavItemProps,
} from '../../../../../types';

import { MenuSlide } from '../../../../MenuSlide';
import { MegaMenuContentMobile } from '../../../../MegaMenuContent';
import { SubNavOverlay, SubNavTriggerSection } from '../SubNavOverlay';
import LinkSection from '../../../../LinkSection';

type Props = NestedMenuInfoHighlightsNavItemProps & {
  onSubMenuOverlayToggled: (isSubMenuOverlayOpen: boolean) => void;
};

const InfoHighlights = ({ subNavItems, label }: InfoHighlightsNavItem) => {
  const revisedProps = subNavItems.map(item => {
    return {
      ...item,
      cta: item.overviewCta!,
      title: item.label,
    };
  });

  return (
    <div className="h-full relative flex flex-col z-10">
      <p className="font-var-all-small-caps text-primaryOceanBlue text-desktop/subhead-m tablet:text-desktop/subhead-xl pt-10 pb-6 mb-8 tablet:pt-16 tablet:pb-10 tablet:mb-10 border-b border-b-black/10">
        {label}
      </p>
      <LinkSection links={revisedProps} variant="MOBILE" />
    </div>
  );
};

const LinkColumns = (
  props: LinkColumnsSubNavItem & { isMenuOpen: boolean },
) => {
  const { isMenuOpen, columns, label } = props;
  const [selectedSubNavItem, setSelectedSubNavItem] = useState<
    (NavLinkColumnSection & { label: string }) | null
  >(null);
  const subNavItems = columns.map(column => {
    return {
      ...column,
      label: column.title,
    };
  });
  return (
    <SubNavOverlay isSubNavOpen={isMenuOpen}>
      <div className="h-full relative">
        <SubNav>
          <p className="font-var-all-small-caps text-primaryOceanBlue text-desktop/subhead-m tablet:text-desktop/subhead-xl pt-10 pb-6 tablet:pt-16 tablet:pb-10 border-b border-b-black/10">
            {label}
          </p>
          <SubNavTriggerSection
            items={subNavItems}
            onItemClick={setSelectedSubNavItem}
            disablePadding
          />
        </SubNav>
        <MenuSlide isVisible={selectedSubNavItem !== null} className="z-10">
          {selectedSubNavItem ? (
            <div className="h-full flex flex-col">
              <p className="font-var-all-small-caps text-primaryOceanBlue text-desktop/subhead-m tablet:text-desktop/subhead-xl pt-10 pb-6 tablet:pt-16 tablet:pb-10 border-b border-b-black/10">
                {selectedSubNavItem.label}
              </p>
              <div className="flex-1 overflow-y-auto">
                <MegaMenuContentMobile
                  item={selectedSubNavItem}
                  containerClassName="px-0 tablet:px-0"
                />
              </div>
            </div>
          ) : null}
        </MenuSlide>
      </div>
    </SubNavOverlay>
  );
};

const NestedMenuInfoHighlightsNavItem = ({
  label,
  subMenuItems,
  onSubMenuOverlayToggled,
}: Props): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedSubMenuItemIndex, setSelectedSubMenuItemIndex] = useState<
    number | null
  >(null);
  const selectedSubMenuItem =
    selectedSubMenuItemIndex !== null
      ? subMenuItems[selectedSubMenuItemIndex]
      : null;

  useEffect(() => {
    onSubMenuOverlayToggled(isMenuOpen);
  }, [isMenuOpen, onSubMenuOverlayToggled]);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen(true);
  }, [setIsMenuOpen]);

  const handleBackNavClick = useCallback(() => {
    if (selectedSubMenuItem !== null) {
      return setSelectedSubMenuItemIndex(null);
    }
    setIsMenuOpen(false);
  }, [selectedSubMenuItem, setIsMenuOpen, setSelectedSubMenuItemIndex]);

  return (
    <React.Fragment>
      <Button
        onClick={handleMenuClick}
        variant="bare"
        size="bare"
        className="w-full"
      >
        <MenuLabel label={label} isArrowEnabled />
      </Button>
      <div
        className={cn(
          'absolute w-full h-full bg-white pointer-events-none opacity-0 translate-x-[10%] flex flex-col z-[1] left-0 top-0 px-5 tablet:px-10',
          'transition-[opacity,transform]',
          isMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : null,
        )}
      >
        <BackNav className="pt-10 tablet:pt-12" onClick={handleBackNavClick} />
        <div className="h-full relative">
          <SubNav>
            <p className="font-var-all-small-caps text-primaryOceanBlue text-desktop/subhead-m tablet:text-desktop/subhead-xl pt-10 pb-6 tablet:pt-16 tablet:pb-10 border-b border-b-black/10">
              {label}
            </p>
            {subMenuItems.map((item, index) => {
              return (
                <SubNavItem
                  key={item.label}
                  label={item.label}
                  onClick={() => setSelectedSubMenuItemIndex(index)}
                />
              );
            })}
          </SubNav>
          <MenuSlide isVisible={selectedSubMenuItem !== null}>
            {selectedSubMenuItem?.type === 'INFO_HIGHLIGHTS' ? (
              <InfoHighlights {...selectedSubMenuItem} />
            ) : selectedSubMenuItem?.type === 'LINKS_COLUMN' ? (
              <LinkColumns isMenuOpen={isMenuOpen} {...selectedSubMenuItem} />
            ) : null}
          </MenuSlide>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NestedMenuInfoHighlightsNavItem;
