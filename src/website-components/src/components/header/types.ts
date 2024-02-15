import { ReactElement, ReactNode } from 'react';
import { IconType } from '../icon';
import { Cta } from '../types';
import { LangSelectorTranslation } from '../languageSelector/types';

export type HighlightItem = {
  image: any;
  title?: string;
  isUpcomingReport: boolean;
  description: string;
  cta: Cta;
};

export type LinkItem = {
  title: string;
  cta: Cta;
  description?: string;
};

type BaseNavItem = {
  label: string;
};

export type LinkNavItem = BaseNavItem & {
  type: 'LINK';
  cta: Cta;
};

export type MegaMenuSubNavLinkItem = {
  label: string;
  cta: Cta;
};

export type MegaMenuSubNavMenuItem = {
  label: string;
  titleIcon?: IconType;
  title: string;
  description: string;
  overviewCta?: Cta;
  highlight?: HighlightItem;
  links: LinkItem[];
  auxLinkGroupTitle?: string;
  auxLinkGroupLinks?: LinkItem[];
};

export type MegaMenuLinkSection = {
  type: 'LINK';
  title?: string;
  items: MegaMenuSubNavLinkItem[];
};

export type MegaMenuSubNavItemSection = {
  type: 'SUB_MENU';
  title?: string;
  items: MegaMenuSubNavMenuItem[];
};

export type MegaMenuNavItem = BaseNavItem & {
  type: 'MEGA_MENU';
  subNavCta?: Cta;
  sections: (MegaMenuSubNavItemSection | MegaMenuLinkSection)[];
};

export type InfoHighlightsSubNavItem = {
  label: string;
  title: string;
  overviewCta?: Cta;
  description: string;
  highlights?: HighlightItem[];
};

export type InfoHighlightsNavItem = BaseNavItem & {
  type: 'INFO_HIGHLIGHTS';
  subNavItems: InfoHighlightsSubNavItem[];
};

export type NestedMenuInfoHighlightsNavItem = BaseNavItem & {
  type: 'MULTI_LEVEL_INFO_HIGHLIGHTS';
  subMenuItems: (InfoHighlightsNavItem | LinkColumnsSubNavItem)[];
};

export type HighlightSection = {
  title: string;
  cards: HighlightItem[];
};

export type LinksHighlightsSubNavItem = {
  label: string;
  links: LinkItem[];
  highlights: HighlightSection[];
};

export type LinksHighlightsNavItem = BaseNavItem & {
  type: 'LINKS_HIGHLIGHTS';
  subNavItems: LinksHighlightsSubNavItem[];
};

export type NavLinkColumnSection = {
  title: string;
  description: string;
  overviewCta: Cta;
  links: LinkItem[];
};

export type LinkColumnsSubNavItem = BaseNavItem & {
  type: 'LINKS_COLUMN';
  columns: NavLinkColumnSection[];
};

export type NavItem =
  | LinkNavItem
  | MegaMenuNavItem
  | InfoHighlightsNavItem
  | LinksHighlightsNavItem
  | NestedMenuInfoHighlightsNavItem
  | LinkColumnsSubNavItem;

export type Props = {
  mainLogoCta: Cta;
  navItems: NavItem[];
  primaryCta: Cta;
  loginCta: Cta;
  supportCta: Cta;
  secondaryCta?: Cta;
  auxCta?: Cta;
  languageSelector?: {
    translations: LangSelectorTranslation[];
    activeLocale: string;
  };
  isMinimalHeader?: boolean;
  searchEl?: ReactElement;
  backgroundStyles?: {
    background?: string;
    backgroundColor?: string;
  };
};

export type LayoutProps = Omit<Props, 'CTAComponent' | 'ImageComponent'>;
