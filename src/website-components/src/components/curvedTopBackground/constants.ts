import { CircleAttributes, CircleVariant } from './types';

const STORIES_CIRCLES = [
  {
    id: '1',
    cx: 95,
    cy: 0,
    r: 'clamp(300px, 30vw, 500px)',
    fillClassname: 'fill-primarySunOrange/90',
  },
  {
    id: '3',
    cx: 0,
    cy: 0,
    r: 'clamp(350px, 60vw, 1200px)',
    fillClassname: 'fill-primarySkyBlue',
  },
  {
    id: '4',
    cx: 90,
    cy: 100,
    r: 'clamp(150px, 60%, 800px)',
    fillClassname: 'fill-primarySkyBlue/90',
  },
  {
    id: '5',
    cx: 50,
    cy: 100,
    r: 'clamp(200px, 30%, 600px)',
    fillClassname: 'fill-primaryEarthGreen/60',
  },
  {
    id: '6',
    cx: 10,
    cy: 100,
    r: 'clamp(200px, 50%, 800px)',
    fillClassname: 'fill-primarySunOrange/60',
  },
  {
    id: '7',
    cx: 100,
    cy: 40,
    r: 'clamp(150px, 40vw, 900px)',
    fillClassname: 'fill-primaryEarthGreen/60',
  },
  {
    id: '8',
    cx: 0,
    cy: 55,
    r: 'clamp(150px, 20vw, 400px)',
    fillClassname: 'fill-primaryEarthGreen/40',
  },
];

const DEFAULT_CIRCLES = [
  {
    id: '1',
    cx: 5,
    cy: 20,
    r: 'clamp(100px, 30vw, 300px)',
    fillClassname: 'fill-primaryEarthGreen/60',
  },
  {
    id: '2',
    cx: 105,
    cy: 60,
    r: 'clamp(200px, 40vw, 600px)',
    fillClassname: 'fill-primarySunOrange/60',
  },
  {
    id: '3',
    cx: 0,
    cy: 80,
    r: 'clamp(150px, 35vw, 400px)',
    fillClassname: 'fill-primarySkyBlue/60',
  },
];

export const CIRCLES_VARIANT_MAP: Record<CircleVariant, CircleAttributes> = {
  DEFAULT: DEFAULT_CIRCLES,
  CUSTOM: STORIES_CIRCLES,
};
