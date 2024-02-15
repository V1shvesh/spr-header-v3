import React from 'react';

import { ContactUs } from './components/ContactUs';
import SocialLinks from './components/SocialLinks';
import Sections from './components/sections/Sections';
import LinkBar from './components/LinkBar';
import { CurvedTopBackground } from '../curvedTopBackground/CurvedTopBackground';

import { Props } from './types';

const Footer = ({
  mainLogoCta,
  infoLinks,
  socialLinks,
  contactUsTitle,
  contactUsCta,
  sections,
  copyrightText,
}: Props) => {
  /**  TODO: Remove z-index and position=relative:
   * Added to fix hero section gradient overlapping on footer
   * in homepage
   */
  return (
    <footer className="text-white w-full leading-none z-10 relative font-sans">
      <div className="w-full bg-black px-5 pb-20 pt-[64px] tablet:px-10 tablet:pt-12 tablet:pb-11 desktop-sm:py-10 desktop-sm:pt-12 desktop-lg:pt-16">
        <div className="tablet:flex tablet:border-b tablet:border-cometBlack">
          <section className="tablet:pr-10 tablet:border-r tablet:border-cometBlack tablet:flex-[3] desktop-sm:flex-[2]">
            <ContactUs title={contactUsTitle} cta={contactUsCta} />
            <SocialLinks socialLinks={socialLinks} />
          </section>
          <Sections sections={sections} />
        </div>
        <LinkBar
          infoLinks={infoLinks}
          copyrightText={copyrightText}
          mainLogoCta={mainLogoCta}
        />
      </div>
    </footer>
  );
};

const CurvedFooter = (props: Props) => {
  return (
    <div className="pt-20 tablet:pt-[120px] desktop-sm:pt-40 desktop-lg:pt-[200px]">
      <div className="relative z-10 h-[1px] translate-y-[1px]">
        <CurvedTopBackground bgFillClassname={'fill-black'} />
      </div>
      <Footer {...props} />
    </div>
  );
};

export default CurvedFooter;
