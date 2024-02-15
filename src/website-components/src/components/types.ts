import { IconType } from './icon';
import { LangSelectorTranslation } from './languageSelector/types';
export type Cta = {
  label: string;
  icon?: IconType;
} & {
  [key: string]: any;
};

export type LanguageSelectorProps = {
  translations: LangSelectorTranslation[];
  activeLocale: string;
};
