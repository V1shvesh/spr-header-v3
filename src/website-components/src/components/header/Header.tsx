import React from 'react';
import Desktop from './layouts/Desktop';
import Mobile from './layouts/Mobile';
import { Props } from './types';
import { HeightObserver } from './HeightObserver';
import { ExternalComponentContextProvider } from '../externalComponent/ExternalComponent';
import DesktopMinimal from './layouts/DesktopMinimal';
import MobileMinimal from './layouts/MobileMinimal';

const Header = (props: Props) => {
  const MobileHeaderComponent = props.isMinimalHeader ? MobileMinimal : Mobile;
  const DesktopHeaderComponent = props.isMinimalHeader
    ? DesktopMinimal
    : Desktop;
  return (
    <HeightObserver className="sticky top-0 z-30 font-sans">
      <div className="desktop-sm:hidden">
        <MobileHeaderComponent {...props} />
      </div>
      <div className="hidden desktop-sm:block">
        <DesktopHeaderComponent {...props} />
      </div>
    </HeightObserver>
  );
};

export default Header;
