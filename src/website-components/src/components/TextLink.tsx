import React from 'react';
import Icon from './icon';
import { cn } from './tailwind';
import { Cta } from './types';
import { VariantProps, cva } from 'class-variance-authority';

const variants = cva(
  `inline-flex items-center gap-3 text-baseBlack text-center hover:text-primaryOceanBlue hover:underline`,
  {
    variants: {
      size: {
        lg: `text-desktop/subhead-m font-var-all-small-caps hover:font-bold`,
        sm: `text-desktop/subhead-s font-var-all-small-caps hover:font-bold`,
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
);

const TextLink = ({
  icon,
  label,
  size,
  className,
}: Cta & VariantProps<typeof variants> & { className?: string }) => {
  return (
    <span className={cn(variants({ size }), className)}>
      <Icon
        icon={icon ?? 'arrow'}
        className={`fill-primaryOceanBlue ${
          size === 'sm' ? 'h-[18px] w-[18px]' : 'h-6 w-6'
        }`}
      />
      <span>{label}</span>
    </span>
  );
};

export default TextLink;
