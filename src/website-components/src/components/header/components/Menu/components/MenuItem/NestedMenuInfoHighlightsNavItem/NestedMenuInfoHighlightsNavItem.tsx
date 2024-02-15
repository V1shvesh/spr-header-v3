import { SubNavContent } from '../../SubNavContent';
import { SubNavContentItem } from '../../SubNavContentItem';
import {
  InfoHighlightsNavItem,
  LinkColumnsSubNavItem,
  NestedMenuInfoHighlightsNavItem as NestedMenuInfoHighlightsNavItemProps,
} from '../../../../../types';
import React, { Fragment, useCallback, useState } from 'react';
import { DropdownMenuTrigger } from '../../DropdownMenuTrigger';
import MenuDropdownContainer from '../../MenuDropdownContainer';
import { SubNav, SubNavTriggerSection } from '../../SubNav';
import { MegaMenuContentDesktop } from '../../../../MegaMenuContent';
import LinkSection from '../../../../LinkSection';

type Props = NestedMenuInfoHighlightsNavItemProps & {
  isHovered: boolean;
};

const InfoHighlights = (props: InfoHighlightsNavItem) => {
  const { subNavItems } = props;
  const revisedProps = subNavItems.map(item => {
    return {
      ...item,
      cta: item.overviewCta!,
      title: item.label,
    };
  });

  return (
    <Fragment>
      <SubNavContent>
        <div className="flex flex-col overflow-auto header-scrollbar desktop-sm:ps-8 desktop-sm:pe-8 desktop-sm:py-10 desktop-lg:pe-10 desktop-lg:py-11 desktop-lg:ps-10">
          <LinkSection links={revisedProps} />
        </div>
      </SubNavContent>
    </Fragment>
  );
};

const LinkColumns = (props: LinkColumnsSubNavItem) => {
  const { columns } = props;
  const subNavItems = columns.map(column => {
    return {
      ...column,
      label: column.title,
    };
  });
  const [activeSubNavItemLabel, setActiveSubNavItemLabel] = useState(
    subNavItems[0].label,
  );
  return (
    <Fragment>
      <SubNav className="shrink-0">
        <SubNavTriggerSection
          items={subNavItems}
          activeSubNavItemLabel={activeSubNavItemLabel}
          onItemClick={setActiveSubNavItemLabel}
        />
      </SubNav>
      <SubNavContent>
        {subNavItems.map(item => {
          const isItemActive = item.label === activeSubNavItemLabel;
          return (
            <SubNavContentItem key={item.label} isItemActive={isItemActive}>
              <MegaMenuContentDesktop
                item={item}
                containerClassName="max-h-[calc(100vh_-_var(--header-height)_-_20px)]"
              />
            </SubNavContentItem>
          );
        })}
      </SubNavContent>
    </Fragment>
  );
};

export function NavBody(props: Props): React.ReactElement {
  const { isHovered, label, subMenuItems } = props;
  const [activeSubMenuItem, setActiveSubMenuItem] = useState(0);
  const isInfoHighlightsNavItemActive =
    subMenuItems[activeSubMenuItem].type === 'INFO_HIGHLIGHTS';

  const handleSubMenuItemClick = useCallback(
    (label: string) => {
      const searchIndex = subMenuItems.findIndex(
        subMenuItem => subMenuItem.label === label,
      );
      const index = Math.max(0, searchIndex);
      setActiveSubMenuItem(index);
    },
    [subMenuItems],
  );

  return (
    <MenuDropdownContainer isActive={isHovered} label={label}>
      <div className="bg-white grid auto-cols-auto grid-flow-col auto-rows-min">
        <SubNav className="shrink-0">
          <SubNavTriggerSection
            items={subMenuItems}
            activeSubNavItemLabel={subMenuItems[activeSubMenuItem].label}
            onItemClick={handleSubMenuItemClick}
          />
        </SubNav>
        {isInfoHighlightsNavItemActive ? (
          <InfoHighlights
            {...(subMenuItems[activeSubMenuItem] as InfoHighlightsNavItem)}
          />
        ) : (
          <LinkColumns
            {...(subMenuItems[activeSubMenuItem] as LinkColumnsSubNavItem)}
          />
        )}
      </div>
    </MenuDropdownContainer>
  );
}

const NestedMenuInfoHighlightsNavItem = (props: Props) => {
  const { isHovered } = props;

  return (
    <DropdownMenuTrigger label={props.label} isHovered={isHovered}>
      <NavBody {...props} />
    </DropdownMenuTrigger>
  );
};

export default NestedMenuInfoHighlightsNavItem;
