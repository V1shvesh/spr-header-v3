import React from 'react';
import { cn } from './tailwind';
import Text from './header/components/text';

export const OverviewTextLink = ({
  className,
  label,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <Text
      as="p"
      className={cn(
        'text-mobile/body-m-bold tablet:text-tablet/heading-4 desktop-sm:text-tablet/heading-5 desktop-lg:text-desktop/heading-6 hover:text-primaryOceanBlue',
        className,
      )}
    >
      {label}
    </Text>
  );
};
