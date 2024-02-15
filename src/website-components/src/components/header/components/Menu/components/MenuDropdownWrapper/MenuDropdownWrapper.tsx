import React, { useCallback, useRef, useState } from 'react';
import { DropdownContext } from '../../DropdownContext';

const MenuDropdownWrapper = ({
  activeMenuItemLabel,
  children,
  containerClassName,
}: {
  activeMenuItemLabel: string | null;
  children: React.ReactNode;
  containerClassName?: string;
}) => {
  const [menuHeights, setMenuHeights] = useState<{ [key: string]: number }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const handleDropdownMeasure = useCallback(
    (label: string, height: number) => {
      setMenuHeights(prev => ({ ...prev, [label]: height }));
    },
    [setMenuHeights],
  );
  const dropdownHeight = activeMenuItemLabel
    ? menuHeights[activeMenuItemLabel] ?? 0
    : 0;

  return (
    <DropdownContext.Provider
      value={{
        onDropdownMeasure: handleDropdownMeasure,
        dropdownHeight: dropdownHeight,
      }}
    >
      <div className={containerClassName} ref={containerRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export default MenuDropdownWrapper;
