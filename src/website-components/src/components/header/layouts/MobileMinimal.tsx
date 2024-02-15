import React from 'react';

import { CTAComponent } from '../../externalComponent/ExternalComponent';
import Icon from '../../icon';

import { HEADER_LOGO_LABEL } from '../../constants';

import { LayoutProps } from '../types';

const MobileMinimal = ({ mainLogoCta }: LayoutProps) => {
  return (
    <div className="w-full flex justify-between px-5 py-[24px] bg-white desktop-sm:px-10 ">
      <CTAComponent {...mainLogoCta}>
        <Icon
          icon="sprinklrBurst"
          alt="Sprinklr Logo"
          className="h-[34px] shrink-0"
        />
        <span className="sr-only">{HEADER_LOGO_LABEL}</span>
      </CTAComponent>
    </div>
  );
};

export default MobileMinimal;
