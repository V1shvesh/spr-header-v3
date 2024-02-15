import React from 'react';
import Icon from '../../../../../icon';
import { cn } from '../../../../../tailwind';

type Props = {
  label: string;
  isArrowEnabled?: boolean;
  isArrowDown?: boolean;
  className?: string;
};

const MenuLabel = ({ label, className, isArrowEnabled = false }: Props) => {
  return (
    <div
      className={cn(
        'flex justify-between gap-3 items-center w-full py-6 text-black tablet:pt-10 tablet:pb-8',
        className,
      )}
    >
      <span
        className={cn(
          'text-desktop/subhead-l tablet:text-desktop/subhead-xl font-var-all-small-caps py-0',
        )}
      >
        {label}
      </span>
      {isArrowEnabled ? (
        <Icon
          className={cn(
            'h-5 transition-transform duration-200 ease-linear fill-baseBlack -rotate-90 tablet:h-6',
          )}
          icon="chevron"
        />
      ) : null}
    </div>
  );
};

export default MenuLabel;
