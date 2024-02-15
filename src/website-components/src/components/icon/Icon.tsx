import React from 'react';
import service from './assets/service.svg';
import social from './assets/social.svg';
import insights from './assets/insights.svg';
import marketing from './assets/marketing.svg';
import arrow from './assets/arrow.svg';
import chevron from './assets/chevron.svg';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';
import linkedinV2 from './assets/linkedinV2.svg';
import youtube from './assets/youtube.svg';
import instagram from './assets/instagram.svg';
import globe from './assets/globe.svg';
import sprinklrBurst from './assets/sprinklrBurst.svg';
import hamburgerMenu from './assets/hamburgerMenu.svg';
import play from './assets/play.svg';
import sprinklrFullLogo from './assets/sprinklrFullLogo.svg';
import sprinklrFullLogoDark from './assets/sprinklrFullLogoDark.svg';
import feature from './assets/feature.svg';
import quote from './assets/quote.svg';
import profile from './assets/profile.svg';
import reviewQuote from './assets/reviewQuote.svg';
import home from './assets/home.svg';
import arrowTriangle from './assets/arrow-triangle.svg';
import search from './assets/search.svg';
import resultsNotFound from './assets/resultsNotFound.svg';
import plus from './assets/plus.svg';
import minus from './assets/minus.svg';
import industry from './assets/industry.svg';
import location from './assets/location.svg';
import companySize from './assets/companySize.svg';
import arrowDown from './assets/arrowDown.svg';
import plusRounded from './assets/plusRounded.svg';
import close from './assets/close.svg';
import videoPlayer from './assets/video-player.svg';
import sprinklrName from './assets/sprinklrName.svg';

const iconMap = {
  service,
  social,
  insights,
  marketing,
  arrow,
  chevron,
  facebook,
  twitter,
  linkedin,
  youtube,
  instagram,
  globe,
  sprinklrBurst,
  hamburgerMenu,
  play,
  sprinklrFullLogo,
  sprinklrFullLogoDark,
  feature,
  quote,
  profile,
  reviewQuote,
  home,
  arrowTriangle,
  search,
  resultsNotFound,
  plus,
  minus,
  industry,
  location,
  companySize,
  arrowDown,
  plusRounded,
  close,
  linkedinV2,
  videoPlayer,
  sprinklrName,
};

export type IconType = keyof typeof iconMap;

type Props = {
  icon: IconType;
  alt?: string;
  className?: string;
};

const Icon = ({ icon, className }: Props) => {
  const Component = iconMap[icon];
  return Component ? <Component className={className} /> : null;
};

export default Icon;
