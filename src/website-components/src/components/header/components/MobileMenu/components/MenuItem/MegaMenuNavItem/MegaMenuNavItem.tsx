import { MenuSlide } from '../../../../MenuSlide';
import BackNav from '../../BackNav';
import SubNav from '../../SubNav';
import React, { useCallback, useState } from 'react';
import { Button } from '../../../../../../button';
import {
  MegaMenuNavItem as MegaMenuNavItemProps,
  MegaMenuSubNavMenuItem,
} from '../../../../../types';
import MegaMenuContent from '../../../../MegaMenuContent';
import MenuLabel from '../../MenuLabel';
import {
  SubNavLinkSection,
  SubNavOverlay,
  SubNavTriggerSection,
} from '../SubNavOverlay';

type Props = MegaMenuNavItemProps & {
  onSubMenuOverlayToggled: (isSubMenuOverlayOpen: boolean) => void;
};

const MegaMenuNavItem = ({
  label,
  sections,
  onSubMenuOverlayToggled,
}: Props): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSubNavItem, setSelectedSubNavItem] =
    useState<MegaMenuSubNavMenuItem | null>(null);

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
    if (selectedSubNavItem != null) {
      return setSelectedSubNavItem(null);
    }
    updateMenuOpenState(false);
  }, [updateMenuOpenState, selectedSubNavItem]);

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
      <SubNavOverlay isSubNavOpen={isMenuOpen}>
        <BackNav
          className="pt-10 tablet:pt-12 mx-5 tablet:mx-10"
          onClick={handleBackNavClick}
        />
        <div className="flex-1 relative overflow-hidden">
          <SubNav>
            {sections.map((section, index) => {
              return section.type === 'LINK' ? (
                <SubNavLinkSection
                  items={section.items}
                  title={section.title}
                  isTopSeparatorEnabled
                  className="px-5 tablet:px-10"
                />
              ) : (
                <SubNavTriggerSection
                  items={section.items}
                  title={section.title}
                  onItemClick={setSelectedSubNavItem}
                  isTopSeparatorEnabled={index !== 0}
                  disablePadding={index == sections.length - 1}
                  className="px-5 tablet:px-10"
                />
              );
            })}
          </SubNav>
          <MenuSlide isVisible={selectedSubNavItem !== null} className="z-10">
            {selectedSubNavItem ? (
              <div className="h-full flex flex-col">
                <p className="font-var-all-small-caps text-primaryOceanBlue text-desktop/subhead-m tablet:text-desktop/subhead-xl py-8 border-b border-b-black/10 mx-5 tablet:mx-10">
                  {selectedSubNavItem.label}
                </p>
                <div className="flex-1 overflow-y-auto">
                  <MegaMenuContent variant="MOBILE" item={selectedSubNavItem} />
                </div>
              </div>
            ) : null}
          </MenuSlide>
        </div>
      </SubNavOverlay>
    </React.Fragment>
  );
};

export default MegaMenuNavItem;
