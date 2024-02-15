'use client';
import React, { useCallback, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { NavItem } from '../../types';
import MenuDropdownWrapper from './components/MenuDropdownWrapper/MenuDropdownWrapper';
import MenuItem from './components/MenuItem';
import useIsHeaderCollapsed from '../hooks/useIsHeaderCollapsed';
import { cn } from '../../../tailwind';

export type Props = {
  items: NavItem[];
};

const Menu = ({ items }: Props) => {
  const [activeMenuItemLabel, setActiveMenuItemLabel] = useState<string | null>(
    null,
  );

  const menuRef = useRef<HTMLUListElement>(null);

  useClickAway(
    menuRef,
    () => {
      setActiveMenuItemLabel(null);
    },
    ['mouseover'],
  );

  const handleHover = useCallback(
    (label: string) => {
      setActiveMenuItemLabel(label);
    },
    [setActiveMenuItemLabel],
  );

  const isHeaderCollapsed = useIsHeaderCollapsed();

  return (
    <MenuDropdownWrapper activeMenuItemLabel={activeMenuItemLabel}>
      <ul
        className={cn(
          'relative flex h-full gap-6 desktop-lg:gap-8 transition-transform duration-400 ease-in-out',
          isHeaderCollapsed
            ? '-translate-x-[84px] desktop-lg:-translate-x-[111px] delay-100'
            : '',
        )}
        ref={menuRef}
      >
        {items.map(item => {
          const isHovered = activeMenuItemLabel === item.label;
          return (
            <MenuItem
              key={item.label}
              {...item}
              isHovered={isHovered}
              onHover={handleHover}
            />
          );
        })}
      </ul>
    </MenuDropdownWrapper>
  );
};

export default React.memo(Menu);
