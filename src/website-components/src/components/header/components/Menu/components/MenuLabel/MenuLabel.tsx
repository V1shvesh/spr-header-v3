import Icon, { IconType } from '../../../../../icon';
import { cn } from '../../../../../tailwind';
import React from 'react';

type MenuLabelVariant = 'PRIMARY' | 'SECONDARY';

type Props = {
  label: string;
  variant?: MenuLabelVariant;
  icon?: IconType;
  isDropdown?: boolean;
  isActive?: boolean;
  isUnderlined?: boolean;
  onHover?: () => void;
};

const MenuLabel = ({
  label,
  variant = 'PRIMARY',
  icon,
  isActive = false,
  isDropdown = false,
  onHover,
}: Props) => {
  return (
    <div className={cn('flex items-center gap-2 w-max')} onMouseEnter={onHover}>
      {icon ? <Icon icon={icon} className="h-[14]" /> : null}
      <span
        className={cn(
          'block font-var-all-small-caps py-0',
          variant === 'SECONDARY'
            ? 'desktop-sm:text-desktop/subhead-xs desktop-lg:text-desktop/subhead-s text-cometBlack hover:text-cometBlack/80'
            : 'desktop-sm:text-desktop/subhead-xs desktop-lg:text-desktop/subhead-m hover:text-primaryOceanBlue',
          isActive ? 'text-primaryOceanBlue' : '',
        )}
        data-text={label}
      >
        {label}
      </span>
      {isDropdown ? (
        <Icon
          icon="chevron"
          className={cn(
            'h-[14px]',
            isActive ? 'rotate-180 fill-primaryOceanBlue' : '',
          )}
        />
      ) : null}
    </div>
  );
};

export default MenuLabel;
