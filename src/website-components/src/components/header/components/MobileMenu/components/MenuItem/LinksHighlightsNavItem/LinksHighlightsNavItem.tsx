import { Button } from '../../../../../../button';
import { SubNavOverlay, SubNavTriggerSection } from '../SubNavOverlay';
import {
  LinksHighlightsNavItem as LinksHighlightsNavItemProps,
  LinksHighlightsSubNavItem,
} from '../../../../../types';
import React, { Fragment, useCallback, useState } from 'react';
import MenuLabel from '../../MenuLabel';
import BackNav from '../../BackNav';
import SubNav from '../../SubNav';
import { MenuSlide } from '../../../../MenuSlide';
import LinkSection from '../../../../LinkSection';

type Props = LinksHighlightsNavItemProps & {
  onSubMenuOverlayToggled: (isSubMenuOverlayOpen: boolean) => void;
};

const LinksHighlightsNavItem = ({
  label,
  subNavItems,
  onSubMenuOverlayToggled,
}: Props): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSingleSubNavItem = subNavItems.length === 1;
  const [selectedSubNavItem, setSelectedSubNavItem] =
    useState<LinksHighlightsSubNavItem | null>(() =>
      isSingleSubNavItem ? subNavItems[0] : null,
    );

  const updateMenuOpenState = useCallback(
    (isMenuOpen: boolean) => {
      setIsMenuOpen(isMenuOpen);
      onSubMenuOverlayToggled(isMenuOpen);
    },
    [onSubMenuOverlayToggled],
  );

  const handleMenuItemClick = useCallback(() => {
    updateMenuOpenState(true);
  }, [updateMenuOpenState]);

  const handleBackNavClick = useCallback(() => {
    if (selectedSubNavItem !== null && !isSingleSubNavItem) {
      return setSelectedSubNavItem(null);
    }
    updateMenuOpenState(false);
  }, [updateMenuOpenState, selectedSubNavItem, isSingleSubNavItem]);

  return (
    <React.Fragment>
      <Button
        onClick={handleMenuItemClick}
        variant="bare"
        size="bare"
        className="w-full"
      >
        <MenuLabel label={label} isArrowEnabled />
      </Button>
      <SubNavOverlay isSubNavOpen={isMenuOpen} className="px-5 tablet:px-10">
        <BackNav className="pt-10 tablet:pt-12" onClick={handleBackNavClick} />
        <div className="flex-1 relative overflow-hidden">
          {isSingleSubNavItem ? (
            <MenuSlide isVisible={isMenuOpen}>
              {selectedSubNavItem ? (
                <div className="h-full flex flex-col overflow-y-auto">
                  <p className="font-var-all-small-caps text-primaryOceanBlue text-desktop/subhead-m tablet:text-desktop/subhead-xl pt-10 pb-6 tablet:pt-16 tablet:pb-10 border-b border-b-black/10">
                    {selectedSubNavItem.label}
                  </p>
                  <div className="flex-1 pt-8 pb-4 tablet:py-10">
                    <LinkSection
                      variant="MOBILE"
                      links={selectedSubNavItem.links}
                    />
                  </div>
                </div>
              ) : null}
            </MenuSlide>
          ) : (
            <Fragment>
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
              <MenuSlide isVisible={selectedSubNavItem !== null}>
                {selectedSubNavItem ? (
                  <div className="h-full flex flex-col overflow-y-auto">
                    <p className="font-var-all-small-caps text-primaryOceanBlue text-desktop/subhead-m tablet:text-desktop/subhead-xl pt-10 pb-6 tablet:pt-16 tablet:pb-10 border-b border-b-black/10">
                      {selectedSubNavItem.label}
                    </p>
                    <div className="flex-1 pt-8 pb-4 tablet:py-10">
                      <LinkSection
                        variant="MOBILE"
                        links={selectedSubNavItem.links}
                      />
                    </div>
                  </div>
                ) : null}
              </MenuSlide>
            </Fragment>
          )}
        </div>
      </SubNavOverlay>
    </React.Fragment>
  );
};

export default LinksHighlightsNavItem;
