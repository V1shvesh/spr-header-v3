export type CircleVariant = 'DEFAULT' | 'CUSTOM';

export type CircleAttributes = {
  id: string;
  cx: number;
  cy: number;
  r: string;
  fillClassname: string;
}[];

export type Props = {
  isTopCurveDisabled?: boolean;
  bgFillClassname?: string;
  isCirclesShown?: boolean;
  circlesVariant?: CircleVariant;
};
