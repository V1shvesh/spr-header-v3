import React, { ReactNode } from 'react';
import MenuLabel from './MenuLabel';

export const DropdownMenuTrigger = ({
  label,
  isHovered,
  children,
}: {
  label: string;
  isHovered: boolean;
  children: ReactNode;
}) => {
  return (
    <div className="h-full">
      <button className="block relative h-full" aria-expanded={isHovered}>
        <MenuLabel label={label} isActive={isHovered} isDropdown isUnderlined />
        {isHovered ? (
          <div className="absolute bottom-0 w-[calc(100%_+_40px)] left-1/2 -translate-x-1/2 h-[25px] translate-y-full" />
        ) : null}
      </button>
      {children}
    </div>
  );
};
