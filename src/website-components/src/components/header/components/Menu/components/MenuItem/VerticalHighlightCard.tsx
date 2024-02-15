import React from 'react';
import { HighlightItem } from '../../../../types';
import {
  CTAComponent,
  ImageComponent,
} from '../../../../../externalComponent/ExternalComponent';
import TextLink from '../../../../../TextLink';

export const VerticalHighlightCard = ({
  highlight,
}: {
  highlight: HighlightItem;
}) => {
  return (
    <div className="w-full">
      <div className="group cursor-pointer">
        <CTAComponent {...highlight.cta}>
          <div className="relative w-[242px] h-[160px] overflow-hidden">
            <ImageComponent
              imageData={highlight.image}
              imageClassName="object-cover object-left absolute w-full h-full desktop-sm:transform desktop-sm:hover:scale-110 desktop-sm:transition-transform desktop-sm:ease-in-out desktop-sm:duration-300"
            />
          </div>
          <p className="text-tablet/heading-5 w-[90%] my-[18px] group-hover:text-primaryOceanBlue desktop-lg:text-desktop/heading-7 desktop-lg:max-w-[220px]">
            {highlight.description}
          </p>
          <TextLink
            className="group-hover:text-primaryOceanBlue group-hover:underline"
            size="sm"
            label={highlight.cta.label}
          />
        </CTAComponent>
      </div>
    </div>
  );
};
