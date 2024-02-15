import { cn } from '../../../../../tailwind';
import Icon from '../../../../../icon';
import { Button } from '../../../../../button';
import React from 'react';

function BackNav({
  onClick,
  className,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <Button
      variant="bare"
      size="bare"
      className={cn(
        'flex justify-start items-center gap-4 tablet:gap-6 pt-4 pb-6 border-[none] tablet:pb-8 border-b border-b-baseBlack/10',
        className,
      )}
      onClick={onClick}
    >
      <Icon className="h-5 tablet:h-6 rotate-90" icon="chevron" />
      <span className="py-0 font-var-all-small-caps text-desktop/subhead-m tablet:text-desktop/subhead-l">
        Back
      </span>
    </Button>
  );
}

export default BackNav;
