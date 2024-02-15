import React, { useContext, useEffect } from 'react';
import { useMeasure } from 'react-use';
import { cn } from '../../../../../tailwind';
import { DropdownContext } from '../../DropdownContext';

const MenuDropdownContainer = ({
  label,
  outerContainerClassname,
  isActive,
  children,
}: {
  label: string;
  outerContainerClassname?: string;
  isActive: boolean;
  children: React.ReactNode;
}): React.ReactElement => {
  const { onDropdownMeasure } = useContext(DropdownContext);

  const [dropdownRef, { height: dropdownHeight }] =
    useMeasure<HTMLDivElement>();

  useEffect(() => {
    onDropdownMeasure(label, dropdownHeight);
  }, [onDropdownMeasure, label, dropdownHeight]);

  return (
    <div
      className={cn(
        'absolute opacity-0 shadow-lg top-full -translate-x-2.5 desktop-lg:-translate-x-4 translate-y-[25px] max-h-[calc(100vh_-_var(--header-height)_-_20px)] overflow-y-hidden bg-white',
        'transition-opacity duration-200',
        isActive
          ? 'pointer-events-auto opacity-100 z-10'
          : 'pointer-events-none',
        outerContainerClassname,
      )}
    >
      <div ref={dropdownRef} className="h-full">
        {children}
      </div>
    </div>
  );
};

export default MenuDropdownContainer;
