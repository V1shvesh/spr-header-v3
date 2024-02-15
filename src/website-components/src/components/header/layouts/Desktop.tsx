import React from 'react';
import LanguageSelector from '../../languageSelector';
import { Button } from '../../button';
import Menu from '../components/Menu';
import MenuLabel from '../components/Menu/components/MenuLabel';
import { LayoutProps } from '../types';
import { CTAComponent } from '../../externalComponent/ExternalComponent';
import { HeaderIconConditionalWrapper } from '../components/HeaderIconConditionalWrapper';
import { FirstRowWrapper } from '../components/FirstRowWrapper';
import { HEADER_LOGO_LABEL } from '../../constants';
import SecondRowElementsWrapper from '../components/SecondRowElementsWrapper';

const Desktop = ({
  navItems,
  mainLogoCta,
  primaryCta,
  loginCta,
  supportCta,
  secondaryCta,
  auxCta,
  languageSelector,
  searchEl,
  backgroundStyles,
}: LayoutProps) => {
  return (
    <div
      className="w-full relative px-5 py-[24px] desktop-sm:px-10 bg-white transition-[top] duration-200 border-b border-b-menuBorder"
      style={backgroundStyles}
    >
      <FirstRowWrapper>
        <div className="w-full flex justify-end items-center gap-8 desktop-lg:gap-10 pb-6">
          {loginCta ? (
            <CTAComponent {...loginCta}>
              <MenuLabel
                variant="SECONDARY"
                label={loginCta.label}
                icon={loginCta.icon}
              />
            </CTAComponent>
          ) : null}
          {supportCta ? (
            <CTAComponent {...supportCta}>
              <MenuLabel
                variant="SECONDARY"
                label={supportCta.label}
                icon={supportCta.icon}
              />
            </CTAComponent>
          ) : null}
          {languageSelector && languageSelector.translations.length > 1 ? (
            <LanguageSelector
              containerClassName="leading-none"
              variant="HEADER"
              translations={languageSelector.translations}
              activeLocale={languageSelector.activeLocale}
            />
          ) : null}
        </div>
      </FirstRowWrapper>

      <div className="w-full flex gap-6 desktop-lg:gap-10">
        <div className="self-center">
          <CTAComponent {...mainLogoCta}>
            <HeaderIconConditionalWrapper />
            <span className="sr-only">{HEADER_LOGO_LABEL}</span>
          </CTAComponent>
        </div>
        <SecondRowElementsWrapper searchEl={searchEl}>
          <div className="w-full h-full flex gap-6 desktop-lg:gap-10">
            <Menu items={navItems} />
            <div className="flex justify-end flex-1 items-center gap-6 desktop-lg:gap-10">
              {secondaryCta ? (
                <CTAComponent {...secondaryCta}>
                  <MenuLabel
                    label={secondaryCta.label}
                    icon={secondaryCta.icon}
                  />
                </CTAComponent>
              ) : null}
              {auxCta ? (
                <CTAComponent {...auxCta}>
                  <MenuLabel label={auxCta.label} icon={auxCta.icon} />
                </CTAComponent>
              ) : null}

              {primaryCta ? (
                <CTAComponent {...primaryCta}>
                  <Button variant="primary">{primaryCta.label}</Button>
                </CTAComponent>
              ) : null}
            </div>
          </div>
        </SecondRowElementsWrapper>
      </div>
    </div>
  );
};

export default Desktop;
