import React from 'react';

import Icon from '../../icon';
import { CTAComponent } from '../../externalComponent/ExternalComponent';

import { HEADER_LOGO_LABEL } from '../../constants';
import { LayoutProps } from '../types';

const DesktopMinimal = ({ mainLogoCta }: LayoutProps) => {
  return (
    <div className="w-full flex justify-between px-5 py-[24px] bg-white desktop-sm:px-10">
      <CTAComponent {...mainLogoCta}>
        <Icon
          icon="sprinklrFullLogo"
          alt="Sprinklr Logo"
          className="h-[34px] desktop-lg:h-[52px] shrink-0"
        />
        <span className="sr-only">{HEADER_LOGO_LABEL}</span>
      </CTAComponent>
    </div>
  );
};

export default DesktopMinimal;
