import React from 'react';
import { LinksHighlightsSubNavItem } from '../types';
import LinkSection from './LinkSection';

export const LinksHighlightsContent = ({
  item,
}: {
  item: LinksHighlightsSubNavItem;
}) => {
  return (
    <div className="w-[248px] desktop-lg:w-[324px] desktop-sm:px-6 desktop-lg:px-8 desktop-sm:py-8 desktop-lg:py-10">
      <div className="h-full py-[1px] max-h-[calc(100vh_-_var(--header-height)_-_20px)] header-scrollbar overflow-y-auto overflow-x-hidden">
        <LinkSection links={item.links} />
      </div>
    </div>
  );
};
